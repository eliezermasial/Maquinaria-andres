import { LucideIcon } from "lucide-react"
import { StaticImageData } from "next/image"


export type Prestation = {
    title: string,
    image: string | StaticImageData,
    description: string
};

export type Product = {
    id: number,
    title: string,
    slug: string,
    badge?: string,
    image: string | StaticImageData,
    description: string,
    dayPrice?: string,
    totalPrice?: string,
    features?: string[],
    category?: string;
    cropType?: string;
    price?: number;
    unit?: string;
    rating?: number;
    reviews?: number;
    stock?: boolean;
};

export type Service = {
    id: number,
    slug: string,
    title: string,
    description: string,
    action?: string,
    icon: LucideIcon,
    image?: string | StaticImageData,
    shortDescription: string,
    featured?: boolean,
    products?: Product[],
    prestations?: Prestation[],
    items: string[],
    advantages:  string[],
}