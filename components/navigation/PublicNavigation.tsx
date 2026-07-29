"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/home", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

type PublicNavigationProps = {
  mobile?: boolean;
};

export function PublicNavigation({
  mobile = false,
}: PublicNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className={cn(
        mobile
          ? "flex flex-col gap-1"
          : "flex items-center gap-5 font-mono",
      )}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition",
              mobile
                ? "rounded-lg px-3 py-3 hover:bg-muted"
                : "hover:text-foreground",
              isActive
                ? mobile
                  ? "bg-muted text-secondary"
                  : "text-secondary underline decoration-2 underline-offset-8"
                : "text-onBackground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}