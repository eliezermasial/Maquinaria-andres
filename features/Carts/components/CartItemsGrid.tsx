import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { machines } from "@/features/machines/machines";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "../hooks/useCart";
import Link from "next/link";


export function CartItemsGrid() {

    const {addToCart} = useCart();

    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {machines.slice(0,4).map((machine) => (
                <Link  href={`/machines/${machine.slug}`} key={machine.id}>
                
                <Card
                    className="group overflow-hidden rounded-2xl border p-0 border-border
                    bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                    <CardHeader className="relative h-56 overflow-hidden">
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
                        <button className="absolute right-4 top-2 flex h-10 w-10 md:h-8 md:w-8 items-center
                            justify-center rounded-full bg-white shadow"
                        >
                            <Heart size={18} />
                        </button>
                    </CardHeader>
                
                    <CardContent className="space-y-4 p-5">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-muted-foreground">
                                {machine.category}
                            </span>
                            <CardTitle className="mt-1 text-2xl font-semibold text-onBackground">
                                {machine.title}
                            </CardTitle>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-primary">
                                {machine.price}
                            </span>
                            <button className="flex h-11 w-11 items-center justify-center rounded-full
                                bg-primary text-yelloAccent transition hover:bg-yelloAccent hover:text-primary"
                                value={machine.id}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    addToCart(machine)
                                }}
                            >
                                <ShoppingCart size={18} />
                            </button>
                        </div>
                    </CardContent>
                </Card>
                </Link>
            ))}
        </div>
    )
}