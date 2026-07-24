"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/home", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/Blog", label: "Blog" },
];

export function PublicNavigation() {
  const pathname = usePathname()

  return (
    <nav aria-label="Navigation principale" className="flex items-center font-mono gap-5">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
          className={cn("text-sm font-medium transition hover:text-foreground",
            isActive?  "text-secondary underline underline-offset-8 decoration-2 decoration-secondary" : "text-onBackground"
          )}
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
        )
      })}
    </nav>
  );
}
