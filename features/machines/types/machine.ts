import type { StaticImageData } from "next/image";

export type Machine = {
  id: number;
  serviceId: string;
  title: string;
  slug: string;
  image: string | StaticImageData;
  category: string;
  price: string;
  badge?: string;
  featured: boolean;
};