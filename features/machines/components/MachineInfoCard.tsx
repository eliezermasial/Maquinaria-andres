import { ComponentType } from "react";
import { Machine } from "../types/machine";
import { Card } from "@/components/ui/card";
import { DocumentItemProps, SpecificationProps } from "./MachineDetail";
import { CalendarDays, Download, ExternalLink, FileText, Heart, PlayCircle, Share2 } from "lucide-react";


type MachineInfoCardProps = {
    machine: Machine,
    Specification:  ComponentType<SpecificationProps>,
    DocumentItem: ComponentType<DocumentItemProps>,
};

export function MachineInfoCard ({machine, DocumentItem, Specification} : MachineInfoCardProps) {
    return (
        <Card className="h-fit rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6">
            <div className="border-b border-border pb-5">
              <div className="mb-2 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {machine.category}
                  </p>
                  <h1 className="mt-1 text-2xl font-bold leading-tight text-onBackground sm:text-3xl">
                    {machine.title}
                  </h1>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center rounded-full
                    text-muted-foreground transition hover:bg-muted hover:text-onBackground"
                    aria-label="Partager"
                    >
                    <Share2 className="size-4" />
                  </button>
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center rounded-full
                    text-muted-foreground transition hover:bg-muted hover:text-red-500"
                    aria-label="Ajouter aux favoris"
                  >
                    <Heart className="size-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-2">
                <span className="text-2xl font-bold text-onBackground sm:text-3xl">
                  {machine.price}
                </span>
                <span className="mb-1 text-xs text-muted-foreground">
                  HT
                </span>
              </div>

              <span className="mt-2 inline-flex rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase text-onBackground">
                En stock
              </span>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-secondary px-4 text-sm
                  font-semibold text-onBackground transition hover:brightness-95"
                >
                  <FileText className="size-4" />
                  Demander un devis
                </button>

                <button
                  type="button"
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4
                  text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <CalendarDays className="size-4" />
                  Réserver
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-border py-5">
              <Specification
                label="Puissance"
                value={`${"machine.power ?? 410"} CV`}
              />
              <Specification
                label="Heures"
                value={`${"machine.hours ?? 1240"} h`}
              />
              <Specification
                label="Transmission"
                value={"machine.transmission ?? e23"}
              />
              <Specification
                label="Année"
                value={String("machine.year ?? 2023")}
              />
            </div>

            <div className="pt-5">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Documents & multimédia
              </h2>
              <div className="space-y-2">
                <DocumentItem
                  icon={<FileText className="size-4 text-red-500" />}
                  title="Fiche technique complète (PDF)"
                  action={<Download className="size-4" />}
                />
                <DocumentItem
                  icon={<PlayCircle className="size-4 text-primary" />}
                  title="Vidéo de présentation (4K)"
                  action={<ExternalLink className="size-4" />}
                />
              </div>
            </div>
        </Card>
    )
}