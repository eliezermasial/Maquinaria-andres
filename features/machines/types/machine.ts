import type { StaticImageData } from "next/image";


export type MachineEquipment = {
  label: string;
  icon: string;
};

export type Machine = {
  id: number;
  serviceId: string;
  title: string;
  slug: string;
  image: string | StaticImageData;
  category: string;
  brand: string;
  price: number;
  badge?: string;
  power?: number;
  hours?: number;
  transmission?: string;
  year?: number;
  engine?: string;
  cylinders?: number;
  fuelCapacity?: number;
  hydraulicFlow?: number;
  shippingWeight?: number;
  equipment?: MachineEquipment[];
  featured: boolean;
};