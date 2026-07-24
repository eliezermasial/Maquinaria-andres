import Link from "next/link";
import {Heart, ShoppingCart, User} from "lucide-react";

const links = [
  { href: "/favori", icon: Heart },
  { href: "/chart", icon: ShoppingCart },
  { href: "/login", icon: User },
];

export function HeaderActions() {
  return (
    <nav
      aria-label="Actions utilisateur"
      className="flex items-center gap-5"
    >
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 text-sm font-medium text-onBackground transition hover:text-foreground"
          >
            <Icon className="size-6" />
          </Link>
        );
      })}
    </nav>
  );
}

