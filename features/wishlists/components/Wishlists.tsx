"use client";

import { Wishlistcard } from "./WishlistCard";
import { Section } from "@/components/ui/section";
import { useFavorites } from "../hooks/useFavorites";
import { Container } from "@/components/ui/container";


export function Wishlists() {
    const {wishlists} = useFavorites();
    return(
        <>
        <Section className="py-20">
            <Container>
                <div className="grid grid-cols-1 gap-6">
                {wishlists.length > 0 ? (
                    wishlists.map((item) => (
                        <Wishlistcard key={item.id} favorite={item} />
                    ))
                ) : null}
                </div>
            </Container>
        </Section>
        </>
    )
}