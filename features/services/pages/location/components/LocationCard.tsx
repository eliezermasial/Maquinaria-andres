import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart} from "lucide-react";
import { Machine } from "@/features/machines/types/machine";
import { Card, CardContent, CardHeader, CardParagraphy, CardTitle } from "@/components/ui/card";
import { useCart } from "@/features/Carts/hooks/useCart";


type LocationCardProps = {
    machine: Machine;
};

export function LocationCard ({machine}: LocationCardProps) {

    const {addToCart} = useCart()

    return (
        <motion.div
          layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.3 }}
        >
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
                        <Badge className="absolute left-3 top-3 bg-yelloAccent border-yelloAccent px-3 py-1
                            text-xs uppercase text-onBackground">
                            {machine.badge}
                        </Badge>
                    )}
                    <button className="absolute right-3 top-2 flex h-10 w-10 items-center
                        justify-center rounded-full hover:bg-primary
                         bg-white hover:text-white shadow transition"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            
                        }}
                    >
                        <Heart size={18} />
                    </button>
                </CardHeader>
                <CardContent className="space-y-4 p-5">
                    <div className="flex justify-between items-center">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                            {machine.category}
                        </span>
                        <button className="flex h-8 w-11 items-center justify-center rounded-full
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
                            <span className="text-sm text-muted-foreground">
                                machine.reviews
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-end mt-3 justify-between">
                        <div>
                            <span className="text-3xl font-bold text-primary">
                                {machine.price}
                            </span>
                            <span className="ml-1 text-sm text-muted-foreground">
                                5 / jours
                            </span>
                        </div>
                        <Link href={`/machines/${machine.slug}/purchase`}
                        className="flex px-2 text-md font-semibold py-1 capitalize items-center justify-center rounded-xl
                            bg-yelloAccent text-onBackground transition hover:bg-primary hover:text-white"
                        >
                            reserver
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}