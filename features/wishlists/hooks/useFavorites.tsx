import { useContext } from "react";
import { WishlistContext } from "@/providers/WishlistProvider";


export function useFavorites() {

    const context = useContext(WishlistContext);
    
    if(!context) {
        throw new Error(
            "useFavorites doit être utilisé dans WishlistsProvider"
        );
    }

    return context;
}