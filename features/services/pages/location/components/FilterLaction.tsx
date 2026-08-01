import { typography } from "@/lib/theme/typography";
import { cn } from "@/lib/utils/cn";
import { ChangeEvent } from "react";

const Disponibilite = [
    {name: "toutes"},
    {name: "Disponible ce mois"},
    {name: "Disponible immédiatement"},
    {name: "Disponible cette semaine"},
];

const Typecarburant = [
    {name: "tous"},
    {name: "diesel"},
    {name: "hybride"},
    {name: "essence"},
    {name: "electrique"},
];

const Marques = [
    {name: "toyota"},
    {name: "mercedes"},
    {name: "New Holland"},
    {name: "Massey Ferguson"},
    {name: "Toutes les marques"},
];


type FilterLocation = {
    filters: Record<string, string[]>,
    filterOptions: Record<string, string[]>,
    setFilter: (key: string, value: string) => void,
    resetFilters: () => void,
    handleCategory?: (e: ChangeEvent<HTMLInputElement>) => void,
    handleBrand?: (e: ChangeEvent<HTMLInputElement>) => void,
    mobileFiltersOpen: boolean,
}

export function FilterLocation ({filterOptions,filters,setFilter,resetFilters, mobileFiltersOpen}: FilterLocation)
{
    const selectedCategory = filters.category?? [];
    const selectedBrand = filters.brand?? [];

    return (
        <aside className={
                `
                ${mobileFiltersOpen ? "block" : "hidden"}
                rounded-2xl border border-border bg-white p-5 lg:block
                `
            }
        >
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Filtres</h2>
                <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs text-muted-foreground hover:text-primary"
                >
                    Réinitialiser
                </button>
            </div>
            <div className="mt-5">
                <h3 className={cn(typography.h3,"mb-3 text-sm text-muted-foreground")}>
                    category
                </h3>
                <div className="flex flex-wrap gap-4">
                    {filterOptions.category?.map((type) => {
                        const checked = selectedCategory.includes(type)

                        return(
                        <label
                            key={type}
                            className="flex cursor-pointer items-center gap-2"
                        >
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                setFilter("category", type)
                                }
                                className="size-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                            />
                            <span className="text-sm">{type}</span>
                        </label>
                        )
                    })}
                </div>
            </div>
            <div className="mt-5">
                <h3 className={cn(typography.h3,"mb-3 text-sm text-muted-foreground")}>
                    marques
                </h3>
                <div className="flex flex-wrap gap-4">
                    {filterOptions.brand?.map((type) => {
                        const checked = selectedBrand.includes(type)

                        return(
                        <label
                            key={type}
                            className="flex cursor-pointer items-center gap-2"
                        >
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() =>
                                setFilter("cropType", type)
                                }
                                className="size-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                            />
                            <span className="text-sm">{type}</span>
                        </label>
                        )
                    })}
                </div>
            </div>
            <div className="space-y-2 mt-5">
                <label className="text-sm font-semibold">
                    Type de carburant
                </label>
                <select className="w-full rounded-xl border border-border cursor-pointer px-4 py-3 outline-none">
                    {Typecarburant.map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="space-y-2 mt-5">
                <label className="text-sm font-semibold">
                    Disponibilité
                </label>
                <select className="w-full rounded-xl border border-border cursor-pointer px-4 py-3 outline-none">
                    {Disponibilite.map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </aside>
    )
}