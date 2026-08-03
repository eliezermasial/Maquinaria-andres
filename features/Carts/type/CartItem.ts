import { StaticImageData } from "next/image";

export type CartItem = {
    id: number,
    title: string,
    image: string | StaticImageData,
    price: number,
    quantity: number,
    slug: string
}