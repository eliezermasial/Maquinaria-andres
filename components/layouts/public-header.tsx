"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { Input } from "@/components/ui/input";
import { Menu, Search, X } from "lucide-react";
import { APP_NAME } from "@/lib/constants/app";
import { HeaderActions } from "../navigation/HeaderActions";
import { PublicNavigation } from "../navigation/PublicNavigation";


export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-onPrimary text-onBackground">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center
        justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="shrink-0 text-base font-semibold sm:text-lg"
        >
          {APP_NAME}
        </Link>
        <div className="hidden lg:block">
          <PublicNavigation />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Input
              icon={Search}
              className="w-44 rounded-xl border-muted bg-onMuted placeholder:text-background lg:w-52"
              placeholder="Recherche..."
            />
          </div>
          <HeaderActions />

          {/* button mobile */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-lg border border-border
            transition hover:bg-muted lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "border-t border-border lg:hidden",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="mb-5">
            <Input
              icon={Search}
              className="w-full rounded-xl border-muted bg-onMuted"
              placeholder="Recherche..."
            />
          </div>
          <PublicNavigation mobile />
        </div>
      </div>
    </header>
  );
}