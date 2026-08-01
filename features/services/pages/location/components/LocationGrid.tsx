"use client";

import { Section } from "@/components/ui/section";
import { LocationCard } from "./LocationCard";
import { Container } from "@/components/ui/container";
import { FilterLocation } from "./FilterLaction";
import { Machine } from "@/features/machines/types/machine";
import { ChangeEvent, useMemo, useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import { MobileFilterButton } from "@/components/ui/MobileFilterButton";
import { AnimatePresence } from "motion/react";





const triers = [
  { name: "Prix croissant", value: "price-asc" },
  { name: "Prix décroissant", value: "price-desc" },
  { name: "Pertinence", value: "relevance" },
  { name: "Nouveautés", value: "newest" },
  { name: "disponible", value: "dispo" },
];

type LocationGridProps = {
    machines: Machine[] 
};

export function LocationGrid ({machines}: LocationGridProps) {

    const [mobileFiltersOpen, setMobileFiltersOpen]= useState<boolean>(false);

    const filterConfig = useMemo(() => 
        ({
            category: (machine: Machine)=> machine.category,
            brand: (machine: Machine)=> machine.brand
        }),[]
    );

    const {
        filters,
        filterOptions,
        filteredItems,
        setFilter,
        resetFilters
    } = useFilters(machines, filterConfig);

    const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
        resetFilters();
        const value = e.target.value
        if(value) setFilter("category", value);
    }

    const handleBrand = (e: ChangeEvent<HTMLInputElement>) => {
        resetFilters();
        const value = e.target.value;
        if(value) setFilter("brand", value);
    }

    return (
        <Section className="bg-surface py-16">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                    <MobileFilterButton
                    mobileFiltersOpen={mobileFiltersOpen}
                    setMobileFiltersOpen={setMobileFiltersOpen}
                    />
                    <FilterLocation
                        filters={filters}
                        filterOptions={filterOptions}
                        setFilter={setFilter}
                        resetFilters={resetFilters}
                        handleCategory={handleCategory}
                        handleBrand={handleBrand}
                        mobileFiltersOpen={mobileFiltersOpen}
                    />
                    <div>
                        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-2xl font-bold">
                                Machines disponibles
                                <span className="ml-2 text-muted-foreground text-base">
                                    {filteredItems.length}
                                </span>
                            </h2>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-muted-foreground">
                                    Trier par
                                </span>
                                <select className="rounded-lg border border-border cursor-pointer px-4 py-2">
                                    {triers.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
        
                        {filteredItems.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-3">
                                <AnimatePresence mode="popLayout">
                                    {filteredItems.map((machine) => (
                                        <LocationCard key={machine.id} machine={machine} />
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="flex min-h-80 items-center justify-center rounded-2xl border
                                border-dashed border-border bg-white"
                            >
                                <div className="text-center">
                                    <p className="font-semibold">Aucun résultat</p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Essayez de modifier vos filtres.
                                    </p>
                                    <button
                                        onClick={resetFilters}
                                        className="mt-4 rounded-lg bg-error px-4 py-2 text-sm text-white"
                                    >
                                        Réinitialiser les filtres
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    )
}