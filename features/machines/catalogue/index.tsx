"use client";


import { cn } from "@/lib/utils/cn";
import { machines } from "../machines";
import { Machine } from "../types/machine";
import { useFilters } from "@/hooks/useFilters";
import { Section } from "@/components/ui/section";
import { usePagination } from "@/hooks/usePagination";
import { Container } from "@/components/ui/container";
import { ChangeEvent, useMemo, useState } from "react";
import { CatalogGrid } from "./components/CatalogGrid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FilterCatalog } from "./components/FilterCatalog";
import { MobileFilterButton } from "@/components/ui/MobileFilterButton";


const triers = [
  { name: "Prix croissant", value: "price-asc" },
  { name: "Prix décroissant", value: "price-desc" },
  { name: "Pertinence", value: "relevance" },
  { name: "Nouveautés", value: "newest" },
];

export function Catalogue () {

  const [sort, setSort] = useState<string>("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  const filterConfig = useMemo(
    () => ({
      category: (machine: Machine) => machine.category,
      brand: (machine: Machine) => machine.brand, 
    }),[]
  )

  const {
    filters,
    filterOptions,
    filteredItems,
    setFilter,
    resetFilters,} = 
  useFilters(machines,filterConfig);
  
  const sortFilters = useMemo(() => {
    const result = [...filteredItems];

    switch (sort) {
      case "price-asc":
        return result.sort(
          (a,b) => Number(a.price) - Number(b.price)
        );
      case "Prix décroissant":
        return result.sort(
          (b,a) => Number(b.price) - Number(a.price)
        );
      case "newest":
        return result;

      default:
        return result
    }
  },[filteredItems, sort])

  const handleTrie = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value)
  };

  const {
    currentItems,
    hasNextPage,
    hasPreviousPage,
    handleNextPage,
    handlePreviousPage,
  } = usePagination({items: sortFilters, itemsPerPage: 8})

  return (
    <Section className="bg-surface pb-20 md:pb-24">
      <Container>
        <MobileFilterButton
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <FilterCatalog
            mobileFiltersOpen={mobileFiltersOpen}
            resetFilters={resetFilters}
            filters={filters}
            filterOptions={filterOptions}
            setFilter={setFilter}
          />

          <div className="min-w-0">
            <div className="mb-7 max-md:mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className={cn("text-2xl font-bold")}>
                  Tracteurs trouvés
                  <span className="ml-5 text-muted-foreground text-base">
                    {filteredItems.length}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-muted-foreground">
                  Trier par :
                </span>
                <select
                  value={sort}
                  onChange={handleTrie}
                  className="rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium outline-none"
                >
                  {triers.map((item) => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <CatalogGrid
              filteredMachines={currentItems}
              resetFilters={resetFilters}
            />
          </div>
        </div>

        <div className="mt-15 flex items-center justify-center gap-5">
          <button
            type="button"
            disabled={!hasPreviousPage}
            onClick={handlePreviousPage}
            aria-label="Commentaires précédents"
            className="
              flex size-10 items-center justify-center rounded-full border border-border 
              text-onBackground shadow-sm transition hover:border-primary hover:bg-primary 
              disabled:pointer-events-none disabled:opacity-30 bg-white hover:text-white
            "
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            disabled={!hasNextPage}
            onClick={handleNextPage}
            aria-label="Commentaires suivants"
            className="
              flex size-10 items-center justify-center rounded-full border border-border
              text-onBackground shadow-sm transition hover:border-primary hover:bg-primary 
              disabled:pointer-events-none disabled:opacity-30 bg-white hover:text-white
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </Section>
  );
}