import Image, { StaticImageData } from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardParagraphy, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";



type ProductCardProps = {
  title: string;
  category: string;
  price: string;
  unit: string;
  image: StaticImageData;
  badge?: string;
  rating: number;
  reviews: number;
};

export function SemenceCard({
  title,
  category,
  price,
  unit,
  image,
  badge,
  rating,
  reviews,
}: ProductCardProps) {
  return (
    <Card className="group w-full max-w-[289px] overflow-hidden rounded-2xl border border-border
     bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <CardHeader className="relative h-50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {badge && (
          <Badge className="absolute left-3 top-3 bg-yelloAccent border-yelloAccent px-3 py-1
            text-xs uppercase text-onBackground">
            {badge}
          </Badge>
        )}
        <button className="absolute right-3 top-3 flex h-10 w-10 items-center
          justify-center rounded-full bg-white shadow transition hover:text-primary"
        >
          <Heart size={18} />
        </button>
      </CardHeader>
      
      <CardContent className="space-y-4 p-5">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {category}
          </span>

          <CardTitle className="mt-2">
            {title}
          </CardTitle>

          <CardParagraphy className="mb-2">
            Sac de 25kg. Haute résistance aux
            maladies et rendement exceptionnel
            en sols limoneux.
          </CardParagraphy>
        </div>

        <div className="flex items-center gap-1">
          <Star
            size={14}
            className="fill-yelloAccent text-yellow-400"
          />
          <span className="text-sm">
            {rating}
          </span>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-3xl font-bold text-primary">
              {price}
            </span>
            <span className="ml-1 text-sm text-muted-foreground">
              {unit}
            </span>
          </div>
          <button className="flex h-11 w-11 items-center justify-center rounded-xl
            bg-yelloAccent text-onBackground transition hover:bg-primary hover:text-white"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}