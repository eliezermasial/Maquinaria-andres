import {
  Activity,
  BadgeCheck,
  Gauge,
  Lightbulb,
  Radio,
  Satellite,
  Settings2,
  Snowflake,
  UserRound,
} from "lucide-react";
import type { Machine } from "@/features/machines/types/machine";
import { cn } from "@/lib/utils/cn";
import { MachineTab } from "./MachineDetail";
import { SimilarMachinesGrid } from "./SimilarMachinesGrid";
import { typography } from "@/lib/theme/typography";


type MachineSpecificationsProps = {
  machine: Machine;
  activeTab: MachineTab;
  similarMachines: Machine[];
  setActiveTab: React.Dispatch<React.SetStateAction<MachineTab>>;
};

export function MachineAttribute({ machine, similarMachines,setActiveTab, activeTab}: MachineSpecificationsProps) {

  const tabs = [
    "Caractéristiques",
    "Équipements",
    "Maintenance",
  ] as const;

  return (
    <aside className="">
        <div className="border-b border-border">
            <div className="flex gap-6 overflow-x-auto mt-10 sm:gap-8">
                {tabs.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                    "relative shrink-0 pb-3 text-xs font-medium uppercase transition",
                    activeTab === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-onBackground",
                    )}
                >
                    {tab}
                    {activeTab === tab && (
                    <span className={cn(typography.h3,"absolute bottom-0 left-0 right-0 h-0.5 bg-primary" )} />
                    )}
                </button>
                ))}
            </div>
        </div>

        {activeTab === "Caractéristiques" && (
            <div className="grid gap-8 py-7 sm:py-8 lg:grid-cols-2 lg:gap-12">
                <div>
              <h2 className="mb-4 text-xs font-medium text-muted-foreground">
                Données Techniques
              </h2>
              <div className="overflow-hidden rounded-lg border border-border">
                {[
                  {
                    label: "Moteur",
                    value:
                      machine.engine ??
                      "John Deere PowerTech™ PSS 9,0 L",
                  },
                  {
                    label: "Nombre de cylindres",
                    value: String(machine.cylinders ?? 6),
                  },
                  {
                    label: "Capacité réservoir carburant",
                    value: `${machine.fuelCapacity ?? 727} L`,
                  },
                  {
                    label: "Débit hydraulique standard",
                    value: `${machine.hydraulicFlow ?? 227} l/min`,
                  },
                  {
                    label: "Poids expédition",
                    value: `${machine.shippingWeight ?? 14000} kg`,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-1 border-b border-border px-3 py-3 last:border-b-0 sm:grid-cols-[1fr_1.2fr] sm:gap-4"
                  >
                    <span className="text-xs text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-xs font-medium text-onBackground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xs font-medium text-muted-foreground">
                Équipements Inclus
              </h2>

              <div className="grid gap-2 sm:grid-cols-2">
                {(
                  machine.equipment ?? [
                    {
                      label: "Guidage AutoTrac™",
                      icon: Satellite,
                    },
                    {
                      label: "Climatisation Auto",
                      icon: Snowflake,
                    },
                    {
                      label: "Pack éclairage LED",
                      icon: Lightbulb,
                    },
                    {
                      label: "Siège ActiveSeat™ II",
                      icon: UserRound,
                    },
                    {
                      label: "JDLink™ télématique",
                      icon: Radio,
                    },
                    {
                      label: "Radar de vitesse",
                      icon: Gauge,
                    },
                  ]
                ).map((equipment) => {
                  const Icon = equipment.icon;

                  return (
                    <div
                      key={equipment.label}
                      className="flex items-center gap-3 rounded-lg border border-border bg-white px-3 py-3"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary/40 text-primary">
                        <Icon className="size-4" />
                      </span>

                      <span className="text-xs font-medium text-onBackground">
                        {equipment.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Équipements" && (
          <div className="py-7 sm:py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(
                machine.equipment ?? [
                  {
                    label: "Guidage AutoTrac™",
                    icon: Satellite,
                  },
                  {
                    label: "Climatisation Auto",
                    icon: Snowflake,
                  },
                  {
                    label: "Pack éclairage LED",
                    icon: Lightbulb,
                  },
                  {
                    label: "Siège ActiveSeat™ II",
                    icon: UserRound,
                  },
                  {
                    label: "JDLink™ télématique",
                    icon: Radio,
                  },
                  {
                    label: "Radar de vitesse",
                    icon: Gauge,
                  },
                ]
              ).map((equipment) => {
                const Icon = equipment.icon;

                return (
                  <div
                    key={equipment.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-white p-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary/40 text-primary">
                      <Icon className="size-5" />
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-onBackground">
                        {equipment.label}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Équipement inclus avec cette machine.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "Maintenance" && (
          <div className="py-7 sm:py-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl border border-border bg-white p-5">
                <Settings2 className="size-5 text-primary" />

                <h3 className="mt-4 text-sm font-semibold">
                  Entretien
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Programme dentretien recommandé pour maintenir
                  les performances et la fiabilité de la machine.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-5">
                <Activity className="size-5 text-primary" />

                <h3 className="mt-4 text-sm font-semibold">
                  Maintenance préventive
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Contrôles réguliers et remplacement des pièces
                  selon les recommandations du constructeur.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-5">
                <BadgeCheck className="size-5 text-primary" />

                <h3 className="mt-4 text-sm font-semibold">
                  Assistance technique
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Notre équipe technique vous accompagne pour
                  lentretien et le suivi de votre machine.
                </p>
              </div>

            </div>
          </div>
        )}

        <div className="border-t border-border mt-10 py-7">
          <SimilarMachinesGrid similarMachines={similarMachines} />
        </div>
    </aside>
  );
}