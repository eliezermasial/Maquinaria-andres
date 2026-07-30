import { typography } from "@/lib/theme/typography";
import { cn } from "@/lib/utils/cn";


type FilterCatalogProps = {
  mobileFiltersOpen: boolean;
  resetFilters: () => void;
  filters: Record<string, string[]>,
  filterOptions: Record<string, string[]>
  setFilter: (key: string, value: string) => void;
};

export function FilterCatalog ({filters,mobileFiltersOpen,filterOptions,setFilter,resetFilters}: FilterCatalogProps)
{
  const selectedCategory = filters.cattegory?? [];
  const selectedBrand = filters.brand?? [];

  return (
    <aside
      className={`
        ${mobileFiltersOpen ? "block" : "hidden"}
        rounded-2xl border border-border bg-white p-5 lg:block
      `}
    >
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-onBackground">
          Filtres
        </h2>
        <button
          type="button"
          onClick={resetFilters}
          className="text-xs text-muted-foreground hover:text-primary"
        >
          Réinitialiser
        </button>
      </div>
      <div className="border-b border-border pb-6">
        <h3 className={cn(typography.h3,"mb-4 text-[11px] text-muted-foreground")}>
          Catégories
        </h3>
        <div className="space-y-3">
          {filterOptions.category?.map((category) => {
            const checked = selectedCategory.includes(category)
            return (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={()=> setFilter("category", category)}
                  className="size-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>{category}</span>
              </label>
          )})}
        </div>
      </div>
      <div className="border-b border-border py-6">
        <h3 className={cn(typography.h3,"mb-4 text-[11px] text-muted-foreground")}>
          Marques
        </h3>
        <div className="space-y-3">
          {filterOptions.brand.map((brand) => {
            const checked = selectedBrand.includes(brand)
            return (
              <label
                key={brand}
                className="flex cursor-pointer items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={()=> setFilter("brand", brand)}
                  className="size-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>{brand}</span>
              </label>
          )})}
        </div>
      </div>
      <div className="border-b border-border py-6">
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Puissance (CV)
        </h3>
        <input
          type="range"
          min="50"
          max="600"
          defaultValue="600"
          className="w-full accent-primary"
        />
        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
          <span>50 CV</span>
          <span>600+ CV</span>
        </div>
      </div>
      <div className="border-b border-border py-6">
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Budget
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Min"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2
            text-sm outline-none focus:border-primary"
          />
          <input
            type="text"
            placeholder="Max"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2
            text-sm outline-none focus:border-primary"
          />
        </div>
      </div>
      <div className="pt-6">
        <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Disponibilité
        </h3>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full border border-border px-3 py-1.5 text-xs transition
            hover:border-primary hover:bg-primary hover:text-white"
          >
            En stock
          </button>
          <button className="rounded-full border border-border px-3 py-1.5 text-xs transition
            hover:border-primary hover:bg-primary hover:text-white"
          >
            Sur commande
          </button>
        </div>
      </div>
    </aside>
  )
}