"use client";

import { cn } from "@/lib/utils/cn";
import { typography } from "@/lib/theme/typography";
import { ChangeEvent } from "react";


type FiltersSemencesProps = {
  filters: Record<string, string[]>;
  filterOptions: Record<string, string[]>;
  setFilter: (key: string, value: string) => void;
  mobileFiltersOpen: boolean;
  resetFilters: () => void;
  handleCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function FiltersSemences({ filters, filterOptions, mobileFiltersOpen, 
  handleCategory, setFilter, resetFilters,}: FiltersSemencesProps
)
{
  const selectedCropTypes = filters.cropType ?? [];
  const selectedCategories = filters.category ?? [];
  const stockOnly = filters.stock?.includes("true") ?? false;

  return (
    <aside
      className={
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
      <div>
        <h3 className={cn(typography.h3,"mb-3 text-sm text-muted-foreground")}>
          Type de culture
        </h3>
        <div className="flex flex-wrap gap-4">
          {filterOptions.cropType?.map((type) => {
            const checked =
              selectedCropTypes.includes(type);

            return (
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
            );
          })}
        </div>
      </div>
      <div className="mt-8 mb-8 space-y-2">
        <h3 className={cn(typography.h3,"mb-4 text-sm text-muted-foreground")}>
          Catégorie
        </h3>
        <select
          className="w-full cursor-pointer rounded-xl border border-border px-4 py-3 outline-none"
          value={selectedCategories[0] ?? ""}
          onChange={handleCategory}
        >
          <option value="">Toutes les catégories</option>
          {filterOptions.category?.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full lg:w-auto">
        <h3 className={cn(typography.h3,"mb-4 text-sm text-muted-foreground")}>
          Disponibilité
        </h3>
        <div className="flex items-center justify-between gap-4 rounded-xl
          border border-border p-3 lg:min-w-55"
        >
          <span className="text-sm">En stock uniquement</span>
          <button
            type="button"
            onClick={() =>setFilter("stock", "true")}
            className={`relative h-6 w-11 rounded-full transition ${
              stockOnly
                ? "bg-primary"
                : "bg-muted"
            }`}
          >
            <span
              className={`absolute top-0.5 size-5 rounded-full bg-white transition-all ${
                stockOnly
                  ? "left-5"
                  : "left-0.5"
              }`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
}