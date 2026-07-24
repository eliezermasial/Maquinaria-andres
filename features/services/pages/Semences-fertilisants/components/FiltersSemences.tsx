"use client";

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
  <h2 className="mb-8 text-lg font-semibold">
    Filtres
  </h2>

  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

    {/* Types de culture */}
    <div className="flex-1">
      <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
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

    {/* Catégories */}
    <div className="flex-1">
      <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
        Catégories
      </h3>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-primary hover:bg-primary hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </div>

    {/* Stock */}
    <div className="w-full lg:w-auto">
      <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
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