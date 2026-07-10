import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants/app";

export const metadata = {
  title: "Accueil",
};

export default async function HomePage() {
  return (
    <div>
      <section className="border-b bg-muted/40">
        <div className="mx-auto grid min-h-[520px] w-full max-w-6xl content-center gap-8 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border bg-background px-3 py-1 text-sm font-medium">
              Location et maintenance de machines
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-normal md:text-6xl">
                {APP_NAME}
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Une plateforme professionnelle pour consulter le parc machines,
                gérer les locations et structurer les opérations internes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#machines">Voir les machines</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/about">Découvrir entreprise</a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <dl className="grid gap-6 sm:grid-cols-3 md:grid-cols-1">
              <div>
                <dt className="text-sm text-muted-foreground">Disponibilité</dt>
                <dd className="text-3xl font-semibold">24/7</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Gestion</dt>
                <dd className="text-3xl font-semibold">Pro</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Suivi</dt>
                <dd className="text-3xl font-semibold">Centralisé</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section id="machines" className="mx-auto w-full max-w-6xl px-6 py-14">
      </section>
    </div>
  );
}
