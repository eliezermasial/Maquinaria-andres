import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Product } from "@/features/services/types/service";
import Image from "next/image";


type LocationCardProps = {
    product: Product,
};

export function LocationCard ({product}: LocationCardProps) {
    return (
        
        <Card className="overflow-hidden rounded-2xl border border-border bg-white
            transition hover:-translate-y-1 hover:shadow-xl"
        >
            <CardHeader className="relative h-60">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                />
                {product.badge && (
                    <Badge className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-semibold text-white">
                        {product.badge}
                    </Badge>
                )}
            </CardHeader>

            <CardContent className="space-y-5 p-5">
                <div className="flex justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold">
                            {product.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {product.description}
                        </p>
                    </div>
                    
                    <div className="text-right">
                        <span className="text-lg font-bold">
                            {product.dayPrice}
                        </span>
                        <p className="text-xs text-muted-foreground">
                            /jour
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {product.features?.map((item: string) => (
                            <span key={item} className="rounded-full bg-muted px-3 py-1 text-xs">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center mt-6 gap-2 justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total (5 jours)
                            </p>
                            <p className="text-md font-bold text-primary">
                                {product.totalPrice}
                            </p>
                        </div>
                        <button className="rounded-xl bg-secondary px-8 py-2 font-semibold transition hover:bg-primary hover:text-white">
                            Réserver
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}