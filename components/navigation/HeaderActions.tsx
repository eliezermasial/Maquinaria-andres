import Link from "next/link";
import {Heart, ShoppingCart, User} from "lucide-react";

const links = [
  { href: "/favori", label: "favori", icon: Heart },
  { href: "/chart", label: "chart", icon: ShoppingCart },
  { href: "/login", label: "connexion", icon: User },
];

export function HeaderActions() {

  return (
    <nav
      aria-label="Actions utilisateur"
      className="flex items-center gap-3 sm:gap-5"
    >
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-label={link.label}
            className="flex items-center text-onBackground transition hover:text-foreground"
          >
            <Icon className="size-5 sm:size-6" />
          </Link>
        );
      })}
    </nav>
  );
}

