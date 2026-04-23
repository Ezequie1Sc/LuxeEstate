'use client';

import { useState, useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageUploadProps {
  onUploadComplete: (urls: string[]) => void;
  existingImages?: string[];
  maxFiles?: number;
}


export default function ImageUpload({ 
  onUploadComplete, 
  existingImages = [], 
  maxFiles = 10 
}: ImageUploadProps) {
  const supabase = createClient();
  const [images, setImages] = useState<string[]>(existingImages);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    
    // 1. Client-side validation (from next-best-practices)
    const validFiles = fileArray.filter(file => {
      const isImage = file.type.startsWith('image/');
      const isUnder5MB = file.size < 5 * 1024 * 1024;
      if (!isImage) alert(`${file.name} is not an image.`);
      if (!isUnder5MB) alert(`${file.name} is too large (>5MB).`);
      return isImage && isUnder5MB;
    });

    if (validFiles.length === 0) return;
    if (images.length + validFiles.length > maxFiles) {
      alert(`Max ${maxFiles} images allowed.`);
      return;
    }

    setUploading(true);
    setProgress(10);
    const newUrls: string[] = [];

    // 2. Upload Process using supabase-postgres-best-practices (owner_id logic via RLS)
    for (let i = 0; i < validFiles.length; i++) {
      const file = validFiles[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `listings/${fileName}`;

      const { data, error } = await supabase.storage
        .from('properties')
        .upload(filePath, file);

      if (error) {
        console.error('Upload error:', error.message);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('properties')
        .getPublicUrl(filePath);

      newUrls.push(publicUrl);
      setProgress(10 + ((i + 1) / validFiles.length) * 90);
    }

    const updatedImages = [...images, ...newUrls];
    setImages(updatedImages);
    onUploadComplete(updatedImages);
    setUploading(false);
    setProgress(0);
  }, [images, maxFiles, onUploadComplete, supabase]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    onUploadComplete(updated);
  };

  return (
    <div className="space-y-6 w-full">
      {/* Drag & Drop Zone - Styled with frontend-design premium patterns */}
      <div 
        className={cn(
          "relative group cursor-pointer transition-all duration-300 ease-in-out",
          "border-2 border-dashed rounded-2xl p-12 text-center",
          dragActive 
            ? "border-mosque bg-hint-green/10 scale-[1.01]" 
            : "border-gray-200 bg-gray-50/50 hover:bg-white hover:border-mosque/40",
          uploading && "opacity-50 pointer-events-none"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          type="file" 
          multiple 
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
        
        <div className="flex flex-col items-center justify-center gap-4">
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-xl transition-transform group-hover:scale-110 duration-500",
            dragActive && "animate-pulse"
          )}>
            <span className="material-icons text-mosque text-3xl">
              {uploading ? 'sync' : 'cloud_upload'}
            </span>
          </div>
          
          <div className="space-y-1">
            <p className="text-lg font-bold text-nordic tracking-tight">
              {uploading ? 'Uploading your assets...' : 'Drop your listing photos here'}
            </p>
            <p className="text-sm text-gray-500">
              PNG, JPG or WebP. Max 5MB per image.
            </p>
          </div>
          
          {!uploading && (
            <Button variant="outline" className="mt-2 border-gray-300 font-bold px-8">
              Select Files
            </Button>
          )}
        </div>

        {uploading && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            <Progress value={progress} className="h-1 bg-gray-100" />
          </div>
        )}
      </div>

      {/* Preview Grid - Minimalist composition */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((url, index) => (
            <div 
              key={url} 
              className="relative aspect-square rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Image 
                src={url} 
                alt={`Property ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay - Layered transparencies */}
              <div className="absolute inset-0 bg-nordic/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <button 
                  onClick={() => removeImage(index)}
                  className="w-10 h-10 rounded-full bg-white/90 text-red-600 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                >
                  <span className="material-icons text-xl">delete</span>
                </button>
              </div>

              {index === 0 && (
                <div className="absolute top-2 left-2 bg-mosque text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
