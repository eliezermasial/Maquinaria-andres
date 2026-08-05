"use client";

import { cn } from "@/lib/utils/cn";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/navigation";
import { CartItemCard } from "./CartItemCard";
import { CartItemsGrid } from "./CartItemsGrid";
import { Section } from "@/components/ui/section";
import { typography } from "@/lib/theme/typography";
import { Container } from "@/components/ui/container";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";



export function CartItems() {

    const router = useRouter();
    const {cartItems,removeFromCart,increaseQuantity,desIncreaseQuantity} = useCart()

    return(
        <>
            <Section className="bg-surface py-16 relative">
                <Container>
                    <div className="mb-10 rounded-xl flex justify-between bg-green-50/20 items-center px-3"
                    >
                        <h2 className={cn(typography.h2)} >Mon panier</h2>
                        <p className={cn(typography.body, "text-onBackground")}>
                            Vous avez
                            <span className={cn(typography.h3,"mx-1")}>
                                {cartItems.length}
                            </span>
                            articles
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
                                : (
                                    <p className={cn(typography.bodyLg)}>votre panier est vide</p>
                                )}
                            </div>
                            <CartDrawer cartItems={cartItems} />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-onPrimary pt-15 pb-20">
                <Container>
                    <div className="mb-15 flex gap-10 px-3 max-md:flex-col justify-between">
                        <h2 className={cn(typography.h2, "max-md:text-center text-onBackground")} >
                            Vous pourriez également aimer
                        </h2>
                        <div className="flex items-center justify-center gap-5">
                            <button
                                type="button"
                                aria-label="Commentaires précédents"
                                className="flex size-10 items-center justify-center rounded-full border border-border
                                    bg-white text-onBackground shadow-sm transition hover:border-primary
                                    hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-30
                                "
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                aria-label="Commentaires suivants"
                                className="flex size-10 items-center justify-center rounded-full border border-border
                                    bg-white text-onBackground shadow-sm transition hover:border-primary 
                                    hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-30
                                "
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    <CartItemsGrid />

                    <button className=" bottom-5 fixed right-10 flex h-11 w-11 items-center shadow shadow-white/10
                        justify-center rounded-full
                                bg-primary text-yelloAccent transition hover:bg-yelloAccent hover:text-primary
                         border border-primary"
                        onClick={()=> router.back()}
                    >
                        <ArrowLeft
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />       
                    </button>
                </Container>
            </Section>
        </>
    )
}