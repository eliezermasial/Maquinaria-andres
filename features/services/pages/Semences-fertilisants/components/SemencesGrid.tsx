"use client";

import { SemenceCard } from "./SemenceCard";
import { FiltersSemences } from "./FiltersSemences";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import type { Product} from "@/features/services/types/service";
import { useFilters } from "@/hooks/useFilters";
import { ChangeEvent, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { MobileFilterButton } from "@/components/ui/MobileFilterButton";


const triers = [
  { name: "Prix croissant", value: "price-asc" },
  { name: "Prix décroissant", value: "price-desc" },
  { name: "Pertinence", value: "relevance" },
  { name: "Nouveautés", value: "newest" },
];

type SemenceProductProps = {
  products: Product[],
};

export function SemencesGrid({products}: SemenceProductProps) {
  const [sort, setSort] = useState("relevance");
  const [mobileFiltersOpen,setMobileFiltersOpen] = useState<boolean>(false)
  
  const filterConfig = useMemo(
    () => ({
      category: (product: Product) => product.category,
      cropType: (product: Product) => product.cropType,
      stock: (product: Product) => product.stock,
    }),[]
  );

  const { 
    filters,
    filterOptions,
    filteredItems,
    setFilter,
    resetFilters,
  } = useFilters(products, filterConfig);

  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if(!value) {
      resetFilters();
      return;
    }
    resetFilters();
    setFilter("category", value);
  };

  const sortedProducts = useMemo(() => {
    const result = [...filteredItems];

    switch (sort) {
      case "price-asc":
        return result.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );

      case "price-desc":
        return result.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );

      case "newest":
        return result;

      default:
        return result;
    }
  }, [filteredItems, sort]);
  

  return (
    <Section className="bg-surface pt-10 pb-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <MobileFilterButton
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />
          <FiltersSemences
            filters={filters}
            mobileFiltersOpen={mobileFiltersOpen}
            setFilter={setFilter}
            resetFilters={resetFilters}
            filterOptions={filterOptions}
            handleCategory={handleCategory}
          />
          <div>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">
                produits trouvés
                <span className="ml-2 text-muted-foreground text-base">
                  {filteredItems.length}
                </span>
              </h2>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs text-muted-foreground">
                  Trier par :
                </span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-lg border border-border bg-white
                    px-3 py-2 text-xs font-medium outline-none cursor-pointer"
                >
                  {triers.map((item) => (
                    <option key={item.value} value={item.value} className="py-2">
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 ">
              {sortedProducts.map((product) => (
                <SemenceCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}