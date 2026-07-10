import Link from "next/link";

const links = [{ href: "/dashboard", label: "Tableau de bord" }];

export function AdminNavigation() {
  return (
    <nav aria-label="Navigation admin" className="flex items-center gap-4">
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
