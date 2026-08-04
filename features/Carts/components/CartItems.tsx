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

    if(cartItems.length === 0) return router.back();

    return(
        <>
            <Section className="bg-surface py-16">
                <Container>
                    <div className="mb-10 rounded-xl flex max-md:flex-col max-md:gap-3
                        justify-between items-center px-3 py-4"
                    >
                        <h2 className={cn(typography.h2)} >Mon panier</h2>
                        <p className={cn(typography.bodyLg, "text-onBackground")}>
                            Vous avez
                            <span className={cn(typography.h3,"mx-3")}>
                                {cartItems.length}
                            </span>
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
                                <button className="inline-flex items-center gap-2 rounded-xl border px-6 py-3
                                    border-primary bg-white hover:bg-primary hover:text-yelloAccent"
                                    onClick={()=> router.back()}
                                >
                                    <ArrowLeft
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                    Continuer les achats
                                </button>
                            </div>
                            <CartDrawer cartItems={cartItems} />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-onPrimary pt-15">
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
                </Container>
            </Section>
        </>
    )
}