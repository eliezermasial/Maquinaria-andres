"use client";

import Link from "next/link";
import Image  from "next/image";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";
import type { Machine } from "../types/machine";
import { Heart, ShoppingCart, Star} from "lucide-react";
import { useCart } from "@/features/Carts/hooks/useCart";
import { useFavorites } from "@/features/wishlists/hooks/useFavorites";
import { Card, CardHeader, CardContent, CardTitle, CardParagraphy } from "@/components/ui/card";




type MachineProps = {
    machine: Machine
};

export function MachineCard ({machine}: MachineProps) {

    const {addToCart} = useCart();
    const {toggleFavorites, isFavorite} = useFavorites();

    return (
        <Card className="group w-full overflow-hidden rounded-2xl border border-border
            bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <CardHeader className="relative h-50 overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {machine.badge && (
                    <Badge
                        className="absolute left-4 top-4 bg-yelloAccent border-yelloAccent px-3 py-1
                        text-xs uppercase text-onBackground"
                    >
                        {machine.badge}
                    </Badge>
                )}

                <button className={cn("absolute right-4 top-2 flex h-10 w-10 md:h-8 md:w-8 items-center justify-center rounded-full shadow cursor-pointer",
                    isFavorite(machine.id) ? "bg-primary transition" : "bg-white transition"
                    )}
                    onClick={() => toggleFavorites(machine)}
                >
                    <Heart
                        size={18}
                        className={cn(isFavorite(machine.id) ? "text-yelloAccent": "text-onBackground")}
                    />
                </button>
            </CardHeader>

            <CardContent className="space-y-4 p-5">
                <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {machine.category}
                    </span>
                </div>
                <Link href={`/machines/${machine.slug}`} className="mt-0">
                    <div>
                        <CardTitle className="mt-2">
                            {machine.title}
                        </CardTitle>
                        <CardParagraphy className="mb-2">
                            {machine.description}
                        </CardParagraphy>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star
                            size={14}
                            className="fill-yelloAccent text-yellow-400"
                        />
                        <span className="text-sm">4.85</span>
                    </div>
                </Link>
                <div className="flex items-end mt-3 justify-between">
                    <div>
                        <span className="text-3xl font-bold text-primary">
                            {machine.price}
                        </span>
                    </div>
                    <button 
                        className="flex bg-primary font-semibold py-1 capitalize text-md h-10 w-10 px-2
                            justify-center rounded-xl transition hover:bg-yelloAccent text-white items-center
                            hover:text-onBackground 
                        "
                        value={machine.id}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            addToCart(machine)
                        }}
                    >
                        <ShoppingCart size={20} />
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}