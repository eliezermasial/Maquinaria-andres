"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CartItemCard } from "./CartItemCard";
import { CartDrawer } from "./CartDrawer";
import { useRouter } from "next/navigation";
import { useCart } from "../hooks/useCart";
import { machine } from "os";



export function CartItems() {
    const {cartItems} = useCart()
    const router = useRouter();

    return(
        <Section className="bg-surface py-16">
            <Container>
                <div className="">
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
                        <div className="space-y-5">
                            {cartItems.length > 0 ? (
  cartItems.map((item) => (
    <CartItemCard key={item.id} machine={item} />
  ))
) : null}
                            
                            <button className="rounded-xl border px-6 py-3 hover:bg-gray-50"
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