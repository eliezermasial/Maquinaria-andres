import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";

export function useCart () {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error(
            "useCart doit être utilisé dans CartProvider"
        );
    }

    return context;
}