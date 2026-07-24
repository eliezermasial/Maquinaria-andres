import { LucideIcon } from "lucide-react"
import { StaticImageData } from "next/image"


export type Prestation = {
    title: string,
    image: string | StaticImageData,
    description: string
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
    prestations?: Prestation[],
    items: string[],
    advantages:  string[],
}