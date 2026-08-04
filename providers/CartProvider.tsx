"use client";

import { CartItem } from "@/features/Carts/type/CartItem";
import { Machine } from "@/features/machines/types/machine";
import { createContext, ReactNode, useState } from "react";

type CartContextType = {
    cartItems: CartItem[],
    addToCart: (machine: Machine) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void,
    desIncreaseQuantity: (id: number) => void,
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: ReactNode}) {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (machine: Machine) => {
        const isExisting = cartItems.some((item) => item.id === machine.id);

        if(!isExisting) {
            setCartItems((cartItems) => [...cartItems, {
                "id": machine.id,
                "image": machine.image,
                "title": machine.title,
                "price": machine.price,
                "quantity": 1,
                "slug": machine.slug
            }])
        }else {
            setCartItems((prev) => prev.map((item) => {
                if(item.id === machine.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            }))
        }
    }

    const removeFromCart = (id: number) => {
        setCartItems((cartItems) => cartItems.filter((item) => item.id !== id))
    }

    const increaseQuantity = (id: number) => {
        setCartItems((prev) => prev.map((item) => {
            if(item.id === id) {
                return {...item, quantity: Math.min(20,item.quantity + 1)}
            }
            return item;
        }))
    }

    const desIncreaseQuantity = (id: number) => {
        setCartItems((prev) => prev.map((item) => {
            if(item.id === id) {
                return {...item, quantity: Math.max(1, item.quantity - 1)}
            }
            return item;
        }))
    }

    return (
        <CartContext.Provider
            value={{cartItems, addToCart, removeFromCart, increaseQuantity, desIncreaseQuantity}}
        >
            {children}
        </CartContext.Provider>
    )
}