import { Star } from "lucide-react";
import { Testimonial } from "../testimonials";
import { Card } from "@/components/ui/card";

type TestimonialProps = {
    testimonial: Testimonial
}
export function TestimoCard ({testimonial}: TestimonialProps) {

  return (
    <Card
      key={testimonial.id}
      className="flex min-h-55 flex-col rounded-xl border border-border bg-white p-5 shadow-sm
        transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={13}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {testimonial.content}
              </p>

              {/* Client */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="
                    flex size-9 shrink-0 items-center
                    justify-center rounded-full
                    bg-emerald-100
                    text-xs font-semibold text-emerald-900
                  "
                >
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold text-onBackground">
                    {testimonial.name}
                  </h3>

                  <p className="truncate text-[10px] text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
    </Card>
  )
}