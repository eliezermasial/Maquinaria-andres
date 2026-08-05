import { StaticImageData } from "next/image"


export type Wishlist = {
    id: number,
    slug: string,
    title: string,
    description: string,
    favorite: boolean,
    image: string | StaticImageData,
}