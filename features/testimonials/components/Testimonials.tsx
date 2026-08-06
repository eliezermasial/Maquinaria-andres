"use client";

import { TestimoCard } from "./TestimoCard";
import { testimonials } from "../testimonials";
import { usePagination } from "@/hooks/usePagination";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight} from "lucide-react";


export function Testimonials() {
  
  const {
    currentItems,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    handleNextPage,
    handlePreviousPage,
    goToPage
  } = usePagination({items: testimonials, itemsPerPage: 3})

  return (
    <div className="">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <h2 className="text-2xl font-semibold text-onBackground sm:text-3xl">
          Ce que disent nos clients
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-secondary" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
        {currentItems.map((testimonial) => (
          <TestimoCard key={testimonial.id} testimonial={testimonial} />
        ))}

        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex px-4 justify-between">
        <div className="mt-6 flex justify-center gap-1.5">
          {Array.from({length:totalPages}).map((_, index) => (
            <button
            key={index}
            type="button"
            onClick={() => goToPage(index)}
            aria-label={`Afficher les commentaires ${index + 1}`}
            className={`
              h-1.5 rounded-full transition-all duration-300 
              ${
                  currentPage === index
                  ? "w-7 bg-yelloAccent"
                  : "w-1.5 bg-primary"
              }
            `}
          />
          ))}
        </div>
        <div className="mb-5 flex items-center justify-end gap-2">
          <button
            type="button"
            disabled={!hasPreviousPage}
            onClick={handlePreviousPage}
            aria-label="Commentaires précédents"
            className="
              flex size-10 items-center justify-center rounded-full border border-border 
              text-onBackground shadow-sm transition hover:border-primary hover:bg-primary 
              disabled:pointer-events-none disabled:opacity-30 bg-white hover:text-white
            "
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            disabled={!hasNextPage}
            onClick={handleNextPage}
            aria-label="Commentaires suivants"
            className="
              flex size-10 items-center justify-center rounded-full border border-border
              text-onBackground shadow-sm transition hover:border-primary hover:bg-primary 
              disabled:pointer-events-none disabled:opacity-30 bg-white hover:text-white
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}