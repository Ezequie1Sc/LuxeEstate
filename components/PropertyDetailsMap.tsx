'use client';

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/PropertyMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-slate-100 animate-pulse rounded-lg" />
});

interface PropertyDetailsMapProps {
  location: string;
}

export default function PropertyDetailsMap({ location }: PropertyDetailsMapProps) {
  return <Map location={location} />;
}
