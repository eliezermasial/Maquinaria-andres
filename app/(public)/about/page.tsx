import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

export const metadata = {
  title: "À propos",
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <Card>
        <CardHeader>
          <CardTitle>À propos de Maquinaria Andres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 leading-7 text-muted-foreground">
          <p>
            Cette application est structurée pour accompagner une activité de
            location, suivi et maintenance de machines avec une architecture
            maintenable par équipe.
          </p>
          <p>
            Les modules métier seront ajoutés progressivement dans leurs
            propres features afin de conserver une séparation claire des
            responsabilités.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
