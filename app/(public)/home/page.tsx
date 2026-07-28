import Link from "next/link";
import Image  from "next/image";
import { cn } from "@/lib/utils/cn";
import atelier from "@/public/ImageHero.png";
import { Section } from "@/components/ui/section";
import { typography } from "@/lib/theme/typography";
import { Container } from "@/components/ui/container";
import { SectionHero } from "./components/SectionHero";
import { ServicesGrid } from "@/features/services/components/ServicesGrid";
import { MachinesGrid } from "@/features/machines/components/MachinesGrid";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { SectionTrust } from "./components/SectionTrust";



export const metadata = {
  title: "Accueil",
};

export default async function Home() {
  return (
    <div className="font-sans">
      <SectionHero />

      <Section>
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className={cn(typography.h2, "max-w-lg text-onBackground")}>
              Lexcellence agricole
              <br />
              depuis 40 ans
            </h2>
            <p className={cn(typography.body, "mt-6 max-w-xl text-muted-foreground")}>
              Depuis 1984, Maquinaria Andrés accompagne les professionnels de la
              terre avec une rigueur industrielle et une passion pour la
              technologie. Notre mission est de fournir des solutions robustes qui
              maximisent votre productivité.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className=" border-l-4 rounded-2xl border-secondary bg-surface p-6 shadow-sm">
                <h3 className="text-6xl font-bold text-onBackground">
                  40
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Années dexpérience
                </p>
              </div>
              <div className="rounded-2xl border-l-8 border-bg-primary bg-surface p-6 shadow-sm">
                <h3 className="text-6xl font-bold text-onBackground">
                  1500+
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Clients satisfaits
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={atelier}
                alt="Technicien en maintenance"
                className="h-92.5 w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 -left-0/12 p-4 max-w-xs rounded-2xl
              bg-white/90 shadow-xlbackdrop-blur"
            >
              <span className="text-xl">⚙️</span>
              <h3 className="mt-3 text-2xl font-semibold text-onBackground">
                Qualité Certifiée
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Maintenance experte et pièces dorigine garanties.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-onBackground">
              Nos Services Experts
            </h2>
            <p className="mt-4 text-muted-foreground">
              Une gamme complète de solutions pour optimiser chaque étape de votre
              cycle agricole.
            </p>
          </div>
          <ServicesGrid />
        </Container>
      </Section>

      <Section className="bg-onPrimary pt-15">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className={cn(typography.h2, "text-onBackground")} >
                Machines Populaires
              </h2>
              <p className={cn(typography.body, "mt-3 text-muted-foreground")} >
                Les modèles les plus demandés par nos clients cette saison.
              </p>
            </div>
            <Link
              href="/machines/catalogue"
              className="rounded-xl border border-primary px-6 py-3 font-medium text-primary
              transition hover:bg-primary hover:text-white"
            >
              Tout le catalogue
            </Link>
          </div>

          <MachinesGrid />
        </Container>
      </Section>
      <Section className="overflow-hidden bg-primary text-white">
        <Container>
          <SectionTrust />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Testimonials />
        </Container>
      </Section>

      <Section className="bg-primary">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Prêt à booster votre exploitation ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Nos experts sont à votre disposition pour étudier vos besoins et
            vous proposer la solution la plus performante au meilleur prix.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-yellow-300 sm:w-auto"
            >
              Demander une étude personnalisée
            </button>

            <button
              type="button"
              className="w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90 sm:w-auto"
            >
              Contacter latelier
            </button>
          </div>
        </div>
      </Container>
    </Section>
    </div>
  );
}
