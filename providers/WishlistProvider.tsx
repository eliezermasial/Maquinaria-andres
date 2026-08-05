"use client";

import type { Machine } from "@/features/machines/types/machine";
import type  { Wishlist } from "@/features/wishlists/type/Wishlist";
import { createContext, ReactNode, useState } from "react";


type WishlistContextType = {
    wishlists: Wishlist[],
    isFavorite: (id: number) => boolean,
    toggleFavorites: (machine: Machine) => void,
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({children}: {children: ReactNode}) {

    const [wishlists, setWishlists] = useState<Wishlist[]>([])

    const toggleFavorites = (machine: Machine) => {
        const isFavorite = wishlists.some((item) => item.id === machine.id);

        if(! isFavorite) {
            setWishlists((prev) => [...prev, {
                "id": machine.id,
                "image": machine.image,
                "title": machine.title,
                "favorite": true,
                "description": machine.description,
                "slug": machine.slug,
            }])
        } else {
            setWishlists((prev) => prev.filter((item) => item.id !== machine.id))
        }
        
        return wishlists;
    }
    
    const isFavorite = (id: number) => {
        return wishlists.some((item) => item.id === id);
    }

    return (
        <WishlistContext.Provider value={{wishlists, toggleFavorites, isFavorite}}>
            {children}
        </WishlistContext.Provider>
    )
}