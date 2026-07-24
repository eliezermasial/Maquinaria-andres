import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CalendarClock, ClipboardCheck,} from "lucide-react";


export function RequestEstimate() {
  return (
    <Section className="bg-surface pt-0">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
      
        <div>
          <h2 className="max-w-md text-4xl font-bold leading-tight text-onBackground">
            Prêt pour votre prochaine campagne ?
          </h2>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Remplissez ce formulaire pour obtenir une estimation personnalisée
            de vos travaux agricoles. Nos techniciens vous répondront sous 24h.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <ClipboardCheck size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-onBackground">
                  Analyse Technique
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Étude de votre type de sol pour choisir l outil idéal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <CalendarClock size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-onBackground">
                  Planification Réactive
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Intervention selon vos fenêtres météo optimales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-4 border-secondary bg-white p-8 shadow-xl">
          <form className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Service souhaité
                </label>
                <select className="h-12 w-full rounded-lg border border-border bg-surface px-4 outline-none focus:border-primary">
                  <option>Labour profond</option>
                  <option>Défrichage</option>
                  <option>Semis</option>
                  <option>Fertilisation</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Superficie (hectares)
                </label>
                <input
                  placeholder="ex: 45"
                  className="h-12 w-full rounded-lg border border-border bg-surface px-4 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Date d intervention
                </label>
                <input
                  type="date"
                  className="h-12 w-full rounded-lg border border-border bg-surface px-4 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Type de sol
                </label>
                <select className="h-12 w-full rounded-lg border border-border bg-surface px-4 outline-none focus:border-primary">
                  <option>Argileux (Lourd)</option>
                  <option>Sableux</option>
                  <option>Limoneux</option>
                  <option>Humifère</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Localisation
              </label>
              <input
                placeholder="Code postal ou Commune"
                className="h-12 w-full rounded-lg border border-border bg-surface px-4 outline-none focus:border-primary"
              />
            </div>
            <button
              className="flex h-14 w-full items-center justify-center rounded-lg bg-primary font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
        </Container>
    </Section>
  );
}