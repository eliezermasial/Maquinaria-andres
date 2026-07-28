import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import image from "@/public/ImageHero.png";
import { typography } from "@/lib/theme/typography";
import { BadgeCheck, Headphones, Award, CreditCard, Leaf,} from "lucide-react";



const advantages = [
  {
    icon: BadgeCheck,
    title: "Qualité sans compromis",
    description:
      "Nous ne sélectionnons que les machines qui répondent aux normes les plus strictes.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description:
      "Une assistance technique réactive pour minimiser vos temps d'arrêt.",
  },
  {
    icon: Award,
    title: "40 ans de savoir-faire",
    description:
      "Une expertise transmise et enrichie par les nouvelles technologies.",
  },
  {
    icon: CreditCard,
    title: "Financement flexible",
    description:
      "Des solutions de crédit et leasing adaptées à votre trésorerie.",
  },
  {
    icon: Leaf,
    title: "Engagement durable",
    description:
      "Promotion de l'agriculture de précision pour un futur plus vert.",
  },
];

export function SectionTrust() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2
          className={cn(
            typography.h1,"max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
          )}
        >
          Pourquoi nous faire confiance ?
        </h2>

        <div className="mt-8 space-y-5">
          {advantages.map((advantage) => {

          const Icon = advantage.icon;

          return (
            <div key={advantage.title} className="flex items-start gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center
                rounded-full bg-secondary text-primary"
              >
                <Icon className="size-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold sm:text-base">
                  {advantage.title}
                </h3>
                <p className="mt-1 max-w-lg text-xs leading-relaxed text-white/60 sm:text-sm">
                  {advantage.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
        <div className="relative aspect-square w-[85%] max-w-120 rounded-full border
          border-white/10 bg-emerald-950/40 p-12 sm:p-16 lg:p-20"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt="Machine agricole"
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 70vw, 400px"
            />
            <div className="absolute inset-0 bg-primary/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
                    100%
              </span>
              <span className="mt-1 text-xs text-white/70 sm:text-sm">
                    Engagement Performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}