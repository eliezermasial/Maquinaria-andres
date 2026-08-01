import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Machine } from "@/features/machines/types/machine";
import Image from "next/image";
import { ShoppingCart, Eye} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";


type LocationCardProps = {
    machine: Machine;
};

export function LocationCard ({machine}: LocationCardProps) {
    return (
        <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.3 }}
>
        
        <Card className="w-full overflow-hidden rounded-2xl border border-border bg-white
            transition hover:-translate-y-1 hover:shadow-xl"
        >
            <CardHeader className="relative h-60">
                <Image
                    src={machine.image}
                    alt={machine.title}
                    fill
                    className="object-cover"
                />
                {machine.badge && (
                    <Badge className="absolute left-4 top-4 bg-primary px-3
                        py-1 text-xs font-semibold text-white"
                    >
                        {machine.badge}
                    </Badge>
                )}
            </CardHeader>
            <CardContent className="space-y-5 p-5">
                <div className="flex justify-between gap-4 items-center">
                    <span className="rounded-full bg-surface-neutral px-3 py-1 text-xs">
                        {machine.category}
                    </span>
                    <div className="flex justify-between gap-2 mb-2">
                        {machine.featured ? (
                            <span className="rounded-full bg-surface-success px-3 py-1 text-xs">
                                disponible
                            </span>
                        ): (
                            <span className="rounded-full bg-surface-danger px-3 py-1 text-xs font-bold">
                                indisponible
                            </span>
                        )}
                    </div>
                </div>
                <CardTitle className="text-xl font-bold">
                    {machine.title}
                </CardTitle>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                        <small className="text-muted-foreground font-normal">
                            À partir de
                        </small>
                        <span className="font-semibold text-primary">
                            {machine.price} FC
                        </span>
                    </div>

                    <button className="rounded-xl bg-yelloAccent px-3 py-2 font-semibold cursor-pointer
                        transition hover:bg-primary hover:text-white"
                    >
                        <ShoppingCart size={20} className="mr-2" />
                    </button>
                    
                    <Link
                        href={`/machines/${machine.slug}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100
                        text-primary transition hover:bg-primary hover:text-white"
                    >
                        <Eye size={18} />
                    </Link>
                </div>
            </CardContent>
        </Card>
        </motion.div>
    )
}