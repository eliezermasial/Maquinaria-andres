import { MachineCard } from "../../components/MachineCard";
import { Machine } from "../../types/machine";


type CatalogGridProps = {
    filteredMachines: Machine[];
    resetFilters: ()=> void;
};

export function CatalogGrid ({filteredMachines,resetFilters}: CatalogGridProps) {
    return (
        <>
            {filteredMachines.length > 0 ? (
              <div className="grid justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {filteredMachines.map((machine) => (
                  <MachineCard
                    key={machine.id}
                    machine={machine}
                  />
                ))}
              </div>
            )
            : 
            (
              <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-border bg-white">
                <div className="text-center">
                  <p className="font-semibold">Aucun résultat</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Essayez de modifier vos filtres.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm text-white"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              </div>
            )}
        </>
    )
}