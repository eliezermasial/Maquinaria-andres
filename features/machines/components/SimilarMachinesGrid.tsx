import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { MachineCard } from "./MachineCard";
import type { Machine } from "../types/machine";
import { typography } from "@/lib/theme/typography";


type SimilarMachineProps = {
    similarMachines: Machine[];
}

export function SimilarMachinesGrid({similarMachines}: SimilarMachineProps) {
    return (
        <div className="border-t border-border mt-10 py-7">
            <div className="mb-10 flex flex-col gap-3 max-md:gap-10">
                <p className={cn(typography.body,
                    "font-medium uppercase tracking-wider text-muted-foreground")}
                >
                    Recommandations
                </p>

                <div className="flex justify-between gap-5">
                    <h2 className={cn(typography.h2,"text-xl sm:text-2xl")} >
                        Machines similaires
                    </h2>
                    <Link className="rounded-xl border border-primary px-3 py-1 md:px-6 md:py-3 transition hover:bg-primary
                    hover:text-white text-md font-medium text-onBackground sm:self-auto"
                        href={`/machines/catalogue`}
                    >
                        Voir plus →
                    </Link>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {similarMachines.map((machine) => (
                    <MachineCard key={machine.id} machine={machine} />
                ))}
            </div>
        </div>
    )
}