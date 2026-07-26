"use client";

import { typography } from "@/lib/theme/typography";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

const cropTypes = [
  "Céréales",
  "Oléagineux",
  "Protéagineux",
  "Fourragères",
];

const categories = [
  "Tous",
  "Semences",
  "Fertilisants",
];

export function FiltersSemences() {
  const [stockOnly, setStockOnly] = useState(false);

  return (
    <aside className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">
        Filtres
      </h2>

      <div className="space-y-2">
        <div className="flex-1">
          <h3 className={cn(typography.h3,"mb-3 text-sm text-muted-foreground")} >
            Type de culture
          </h3>
          <div className="flex flex-wrap gap-4">
            {cropTypes.map((type) => (
              <label
                key={type}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="checkbox"
                  className="size-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex-1 mt-10 mb-10">
          <h3 className={cn(typography.h3,"mb-3 text-sm text-muted-foreground")} >
            Catégories
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full border border-border px-4 py-2 text-sm transition
                hover:border-primary hover:bg-primary hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <h3 className={cn(typography.h3,"mb-4 text-sm text-muted-foreground")}>
            Disponibilité
          </h3>
          <div className="flex items-center justify-between gap-4 rounded-xl border border-border p-3 lg:min-w-[220px]">
            <span className="text-sm">
              En stock uniquement
            </span>
            <button 
              onClick={() => setStockOnly(!stockOnly)}
              className={`relative h-6 w-11 rounded-full transition ${
                stockOnly ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`absolute top-0.5 size-5 rounded-full bg-white transition-all ${
                  stockOnly ? "left-5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}