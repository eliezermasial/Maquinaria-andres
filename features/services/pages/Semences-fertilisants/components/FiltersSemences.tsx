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
  "Semences agricoles",
  "Engrais NPK",
  "fertilisants organiques",
  "Nutriments adaptés à chaque culture",
  "Amendements de sol et biostimulants"
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

        <div className="space-y-2 mt-8 mb-8">
          <h3 className={cn(typography.h3,"mb-4 text-sm text-muted-foreground")}>
            Catégorie
          </h3>
          <select className="w-full rounded-xl border border-border px-4 py-3 cursor-pointer outline-none">
              {categories.map((item) => (
                <option key={item} value={item} className="text-sm">{item}</option>
              ))}
          </select>
        </div>

        <div className="w-full lg:w-auto">
          <h3 className={cn(typography.h3,"mb-4 text-sm text-muted-foreground")}>
            Disponibilité
          </h3>
          <div className="flex items-center justify-between gap-4 rounded-xl border border-border p-3 lg:min-w-55">
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