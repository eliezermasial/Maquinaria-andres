"use client";

import { CartItem } from "@/features/Carts/type/CartItem";
import { Machine } from "@/features/machines/types/machine";
import { createContext, ReactNode, useState } from "react";

type CartContextType = {
    cartItems: CartItem[],
    addToCart: (machine: Machine) => void;
    removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: ReactNode}) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (machine: Machine) => {
        const isExisting = cartItems.some((item) => item.id === machine.id);

        if(!isExisting) {
            setCartItems((cartItems) => [...cartItems,
                {
                    "id": machine.id,
                    "title": machine.title,
                    "image": machine.image,
                    "price": machine.price,
                    "quantity": 1,
                    "slug": machine.slug
                }
            ])
        }else {
            setCartItems((cartItems) => cartItems.map((item) => {
                if(item.id === machine.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            }))
        }

        return;
    }

    const removeFromCart = (id: number) => {
        console.log(id);
    }

    return (
        <CartContext.Provider
            value={{cartItems, addToCart, removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    )
}