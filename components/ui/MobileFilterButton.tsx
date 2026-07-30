import { SlidersHorizontal } from "lucide-react";
import { Dispatch, SetStateAction } from "react";


type MobileFilterButtonProps = {
    mobileFiltersOpen: boolean,
    setMobileFiltersOpen: Dispatch<SetStateAction<boolean>>;
};

export function MobileFilterButton ({mobileFiltersOpen,setMobileFiltersOpen}: MobileFilterButtonProps) {
    const toggleMobileFilters  = () => {
        setMobileFiltersOpen(!mobileFiltersOpen);
    };

    return (
        <div className="flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={toggleMobileFilters}
              className="flex items-center gap-2 rounded-xl border border-border
              bg-white px-4 py-3 text-sm font-medium"
            >
              <SlidersHorizontal className="size-4" />
              Filtres
            </button>
        </div>
    )
}