import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/dashboard", label: "Admin" },
];

export function PublicNavigation() {
  return (
    <nav aria-label="Navigation principale" className="flex items-center gap-5">
      {links.map((link) => (
        <Link
          className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
