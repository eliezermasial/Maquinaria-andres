import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export const metadata = {
  title: "Espace client",
};

export default function CustomerDashboardPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Espace client</CardTitle>
        </CardHeader>
        <CardContent>
          Les demandes de location, devis et réparations seront ajoutées ici au
          fur et à mesure des prochaines fonctionnalités.
        </CardContent>
      </Card>
    </section>
  );
}
