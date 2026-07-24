import Image from "next/image";
import { Card, CardContent, CardHeader, CardParagraphy, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";
import type { Prestation } from "@/features/services/types/service";

type PrestationCardProps = {
    prestation: Prestation,
    className?: string,
    heigth?: string,
}

export function PrestationCard ({prestation, className, heigth}: PrestationCardProps) {
    
    return (
        <Card className={cn("group relative overflow-hidden rounded-3xl", className)} >
            <CardHeader>
                <Image
                    src={prestation.image}
                    alt={prestation.title}
                    fill
                    className={cn("w-full object-cover transition duration-500 group-hover:scale-105", heigth)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </CardHeader>
            <CardContent className="absolute bottom-8 left-8">
                <CardTitle className="mt-2 text-3xl font-bold text-white">
                    {prestation.title}
                </CardTitle>
                <CardParagraphy className="font-semibold uppercase tracking-wider text-secondary">
                    Préparation
                </CardParagraphy>
            </CardContent>
        </Card>
    )
}