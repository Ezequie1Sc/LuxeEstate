export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  images: string[];
  tag?: string;
  type?: string;
  period?: string;
  is_featured: boolean;
  created_at: string;
}
