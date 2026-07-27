import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Machine } from "../types/machine";
import { ExternalLink, PlayCircle } from "lucide-react";


type MachineGalleryProps = {
    machine: Machine,
};

export function MachineGallery ({machine}: MachineGalleryProps) {
    const images = [
        machine.image,
        machine.image,
        machine.image,
        machine.image,
    ];

    return (
        <div className="min-w-0">
            <div className="relative aspect-[3] overflow-hidden rounded-xl border border-border
             bg-white sm:aspect-[1.35/1]"
            >
              <Image
                src={machine.image}
                alt={machine.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute right-3 top-3 flex flex-col gap-2">
                <button
                  type="button"
                  className="flex size-9 items-center justify-center rounded-full 
                  bg-white/95 shadow-sm transition hover:bg-white"
                  aria-label="Voir l'image"
                >
                  <ExternalLink className="size-4" />
                </button>
                <button
                  type="button"
                  className="flex size-9 items-center justify-center rounded-full
                  bg-white/95 shadow-sm transition hover:bg-white"
                  aria-label="Voir la vidéo"
                >
                  <PlayCircle className="size-4" />
                </button>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3 sm:max-w-md">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-lg border-2 bg-white",
                    index === 0
                      ? "border-primary"
                      : "border-transparent hover:border-primary/50",
                  )}
                >
                  <Image
                    src={image}
                    alt={`${machine.title} - image ${index + 1}`}
                    fill
                    className="object-cover"
                  />

                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <PlayCircle className="size-7 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
        </div>
    )
}