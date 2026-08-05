"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { testimonials } from "../testimonials";
import { TestimoCard } from "./TestimoCard";
import { AnimatePresence, motion } from "motion/react";



const ITEMS_PER_PAGE = 3;

export function Testimonials() {
  
  const [currentPage, setCurrentPage] = useState<number>(0);

  const totalPages = Math.ceil(
    testimonials.length / ITEMS_PER_PAGE
  );

  const startItems = currentPage * ITEMS_PER_PAGE;
  const VisiblesItemsPerPages = testimonials.slice(
    startItems, startItems + ITEMS_PER_PAGE
  );

  const handleNext = () => {
    setCurrentPage(
      (currentPage) => Math.min(totalPages - 1, currentPage + 1)
    )
  };
  const handlePrevious = () => {
    setCurrentPage(
      (currentPage) => Math.max(0, currentPage -1)
    );
  };

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
        {VisiblesItemsPerPages.map((testimonial) => (
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
            onClick={() => setCurrentPage(index)}
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
            aria-label="Commentaires précédents"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="
              flex size-10 items-center justify-center rounded-full border border-border bg-white
              text-onBackground shadow-sm transition hover:border-primary hover:bg-primary hover:text-white
              disabled:pointer-events-none disabled:opacity-30
            "
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Commentaires suivants"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="
              flex size-10 items-center justify-center rounded-full border border-border bg-white
              text-onBackground shadow-sm transition hover:border-primary hover:bg-primary hover:text-white
              disabled:pointer-events-none disabled:opacity-30
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}