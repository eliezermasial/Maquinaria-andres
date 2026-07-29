"use client";

import { Section } from "@/components/ui/section";
import { MachineGallery } from "./MachineGallery";
import { MachineInfoCard } from "./MachineInfoCard";
import { Container } from "@/components/ui/container";
import type { Machine } from "@/features/machines/types/machine";
import { MachineAttribute } from "./MachineAttribute";
import { getMachines } from "../services/machine.service";
import { useEffect, useState } from "react";
import { SimilarMachinesGrid } from "./SimilarMachinesGrid";



type MachineDetailProps = {
  machine: Machine;
};

export type MachineTab = "Caractéristiques" | "Équipements" | "Maintenance";

export type SpecificationProps = {
  label: string;
  value: string;
};

export type DocumentItemProps = {
  icon: React.ReactNode;
  title: string;
  action: React.ReactNode;
};


function Specification({ label, value }: SpecificationProps) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-onBackground">
        {value}
      </p>
    </div>
  );
}

function DocumentItem({ icon, title, action,}: DocumentItemProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between gap-3 rounded-lg border
      border-border bg-white px-3 py-3 text-left transition hover:bg-muted"
    >
      <span className="flex min-w-0 items-center gap-2">
        {icon}
        <span className="truncate text-xs font-medium text-onBackground">
          {title}
        </span>
      </span>
      <span className="shrink-0 text-muted-foreground">
        {action}
      </span>
    </button>
  );
}

export function MachineDetail({ machine }: MachineDetailProps) {
  const [machines, setMachines] = useState<Machine[]>([]);
    const [activeTab, setActiveTab] = useState<MachineTab>("Caractéristiques");
  
  useEffect(() => {

    async function loadingMachines() {

      const data = await getMachines();
      setMachines(data);
    }
    
    loadingMachines();
  }, []);


  return (
    <>
      <Section className="bg-surface pt-15 pb-10">
        <Container>
          <div className="mb-5 text-xs text-muted-foreground sm:mb-7">
            Accueil <span className="mx-1">›</span>
            Tracteurs <span className="mx-1">›</span>
            <span className="font-semibold text-onBackground">
              {machine.title}
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.9fr)]">
            <MachineGallery machine={machine} />
            <MachineInfoCard 
              machine={machine}
              DocumentItem={DocumentItem}
              Specification={Specification}
            />
          </div>
        </Container>
      </Section>
      
      <Section className="bg-onPrimary pb-10">
        <Container>
          <MachineAttribute
            machine={machine}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </Container>
      </Section>
      
      <Section className="bg-onPrimary pt-10">
        <Container>
          <SimilarMachinesGrid similarMachines={machines} />
        </Container>
      </Section>
    </>
  );
}
