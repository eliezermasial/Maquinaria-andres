"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "./testimonials";



const ITEMS_PER_PAGE = 3;


export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    testimonials.length / ITEMS_PER_PAGE
  );

  const startIndex = currentPage * ITEMS_PER_PAGE;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrevious = () => {
    setCurrentPage((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentPage((current) =>
      Math.min(totalPages - 1, current + 1)
    );
  };

  return (
    
      <div className="">

        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <h2 className="text-2xl font-semibold text-onBackground sm:text-3xl">
            Ce que disent nos clients
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-secondary" />
        </div>

        {/* Navigation */}
        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            aria-label="Commentaires précédents"
            className="
              flex size-10 items-center justify-center
              rounded-full border border-border bg-white
              text-onBackground shadow-sm
              transition
              hover:border-primary hover:bg-primary hover:text-white
              disabled:pointer-events-none disabled:opacity-30
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            aria-label="Commentaires suivants"
            className="
              flex size-10 items-center justify-center
              rounded-full border border-border bg-white
              text-onBackground shadow-sm
              transition
              hover:border-primary hover:bg-primary hover:text-white
              disabled:pointer-events-none disabled:opacity-30
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                flex min-h-55 flex-col
                rounded-xl border border-border
                bg-white p-5 shadow-sm
                transition duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* Stars */}
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
            </article>
          ))}
        </div>

        {/* Indicateur de page */}
        <div className="mt-6 flex justify-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              aria-label={`Afficher les commentaires ${index + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  currentPage === index
                    ? "w-7 bg-primary"
                    : "w-1.5 bg-border"
                }
              `}
            />
          ))}
        </div>
      </div>
  );
}