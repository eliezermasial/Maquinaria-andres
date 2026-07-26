import { LocationCard } from "./LocationCard";
import type { Product } from "@/features/services/types/service";


const Triers = [
    {name: "Prix croissant"},
    {name: "Prix décroissant"},
    {name: "Popularité"},
    {name: "Disponibilité"},
    {name: "Nouveautés"},
];

type LocationGridProps = {
    products: Product[];
};

export function LocationGrid ({products}: LocationGridProps) {
    
    return (
        <div>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold">
                    Machines disponibles
                    <span className="ml-2 text-muted-foreground text-base">
                        {products.length}
                    </span>
                </h2>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                        Trier par
                    </span>
                    <select className="rounded-lg border border-border cursor-pointer px-4 py-2">
                        {Triers.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {products.map((product) => (
                    <LocationCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}