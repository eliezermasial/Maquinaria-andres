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
        <>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className={cn(typography.body,
                        "font-medium uppercase tracking-wider text-muted-foreground")}
                    >
                        Recommandations
                    </p>

                    <h2 className={cn(typography.h2,"mt-1 text-xl sm:text-2xl")} >
                        Machines similaires
                    </h2>
                </div>
                <Link className="rounded-xl border border-primary px-6 py-3 transition hover:bg-primary
                    hover:text-white text-md font-medium text-onBackground sm:self-auto"
                    href="/machines/catalogue"
                >
                    Voir tout le catalogue →
                </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {similarMachines.map((machine) => (
                    <MachineCard key={machine.id} machine={machine} />
                ))}
            </div>
        </>
    )
}