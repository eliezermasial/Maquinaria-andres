"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CartItemCard } from "./CartItemCard";
import { CartDrawer } from "./CartDrawer";
import { useRouter } from "next/navigation";
import { useCart } from "../hooks/useCart";
import { cn } from "@/lib/utils/cn";
import { typography } from "@/lib/theme/typography";



export function CartItems() {
    
    const router = useRouter();
    const {cartItems,removeFromCart,increaseQuantity,desIncreaseQuantity} = useCart()

    return(
        <Section className="bg-surface py-16">
            <Container>
                <div className="mb-10 bg-white rounded-xl flex justify-between items-center px-3 py-4">
                    <h2 className={cn(typography.h2)} >Mon panier</h2>
                    <p className={cn(typography.bodyLg)}>
                        Vous avez{" "}
                        <span className={cn(typography.h3)}>
                            {cartItems.length}
                        </span>{" "}
                        articles dans votre sélection
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
                        <div className="space-y-5">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <CartItemCard
                                        key={item.id}
                                        machine={item}
                                        removeFromCart={removeFromCart}
                                        increaseQuantity={increaseQuantity}
                                        desIncreaseQuantity={desIncreaseQuantity}
                                    />
                                ))
                            )
                            : null}
                            <button className="rounded-xl border border-primary px-6 py-3
                                bg-white hover:bg-primary hover:text-yelloAccent"
                                onClick={()=> router.back()}
                            >
                                ← Continuer les achats
                            </button>
                        </div>
                        <CartDrawer />
                    </div>
                </div>
            </Container>
        </Section>
    )
}