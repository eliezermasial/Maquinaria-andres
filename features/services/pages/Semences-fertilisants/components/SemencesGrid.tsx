
import { Section } from "@/components/ui/section";
import { SemenceCard } from "./SemenceCard";
import ble from "@/public/ImageHero.png";
import { Container } from "@/components/ui/container";
import { FiltersSemences } from "./FiltersSemences";


export const products = [
  {
    id: 1,
    title: 'Blé Tendre "Prestige"',
    category: "Céréales",
    price: "42,50 €",
    unit: "/ unité",
    image: ble,
    badge: "Top vente",
    rating: 4.8,
    reviews: 48,
  },
  {
    id: 2,
    title: 'Tournesol "Solaris"',
    category: "Oléagineux",
    price: "89,00 €",
    unit: "/ unité",
    image: ble,
    badge: "Nouveau",
    rating: 5,
    reviews: 12,
  },
  {
    id: 3,
    title: "Bio-Boost Vital",
    category: "Fertilisant",
    price: "155,00 €",
    unit: "/ 20L",
    image: ble,
    badge: "",
    rating: 5,
    reviews: 8,
  },
  {
    id: 4,
    title: 'Maïs Grain "Titan"',
    category: "Céréales",
    price: "57,60 €",
    unit: "/ unité",
    image: ble,
    badge: "-20%",
    rating: 4.9,
    reviews: 30,
  },
  {
    id: 5,
    title: "Nitro Plus S+",
    category: "Fertilisant",
    price: "640,00 €",
    unit: "/ tonne",
    image: ble,
    badge: "",
    rating: 4.7,
    reviews: 15,
  },
  {
    id: 6,
    title: 'Mélange Pâture "Pro-Fit"',
    category: "Fourragères",
    price: "112,00 €",
    unit: "/ sac",
    image: ble,
    badge: "",
    rating: 4.8,
    reviews: 31,
  },
];


export function SemencesGrid() {
  
  return (
    <>
      <Section className="bg-surface pt-10 pb-10">
          <Container>
            <FiltersSemences  />
          </Container>
      </Section>

      <Section className="bg-onPrimary pt-10">
        <Container>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold">
              {products.length} produits trouvés
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                Trier par
              </span>
              <select className="rounded-lg border border-border bg-white px-4 py-2 outline-none">
                <option>Pertinence</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Nouveautés</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <SemenceCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}