import { cn } from "@/lib/utils/cn";
import { PrestaionGrid } from "./PrestationGrid";
import { Section } from "@/components/ui/section";
import { typography } from "@/lib/theme/typography";
import { Container } from "@/components/ui/container";


export function NosServices({service}) {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className={cn(typography.h1)}>
            Nos Services Agricoles
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-secondary" />

          <p className={cn(typography.body, "mt-6 text-muted-foreground")} >
            Une gamme complète de prestations réalisées par des conducteurs
            experts, garantissant rendement et préservation de vos sols.
          </p>
        </div>
        <PrestaionGrid service={service}/>
      </Container>
    </Section>
  );
}