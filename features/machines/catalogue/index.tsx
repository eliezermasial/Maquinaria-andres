"use client";

import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { machines } from "../machines";
import { FilterCatalog } from "./components/FilterCatalog";
import { CatalogGrid } from "./components/CatalogGrid";


const categories = [
    "Tracteurs",
    "Moissonneuses",
    "Semoirs",
    "Travail du sol",
];

const brands = [
    "John Deere",
    "Case IH",
    "New Holland",
];

const Triers = [
    "Pertinence",
    "Prix croissant",
    "Prix décroissant",
    "Nouveautés",
]

export function Catalogue () {

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand],
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  const filteredMachines = machines.filter((machine) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(machine.category);

    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(machine.brand);

    return categoryMatch && brandMatch;
  });

  return (
    <section className="bg-surface py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Mobile filter button */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium"
          >
            <SlidersHorizontal className="size-4" />
            Filtres
          </button>

          <span className="text-sm text-muted-foreground">
            {filteredMachines.length} résultats
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            <FilterCatalog
                mobileFiltersOpen={mobileFiltersOpen}
                resetFilters={resetFilters}
                categories={categories}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                brands={brands}
                selectedBrands={selectedBrands}
                toggleBrand={toggleBrand}
            />

          <div className="min-w-0">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-onBackground sm:text-3xl">
                  Tracteurs Agricoles
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                  Affichage de {filteredMachines.length} résultats
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-muted-foreground">
                  Trier par :
                </span>

                <select
                    className="rounded-lg border border-border bg-white px-3py-2 text-xs font-medium outline-none"
                >
                    {Triers.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
              </div>
            </div>

            <CatalogGrid
                filteredMachines={filteredMachines}
                resetFilters={resetFilters}
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}