import Link from "next/link";

const links = [{ href: "/customer/dashboard", label: "Mon espace" }];

export function CustomerNavigation() {
  return (
    <nav aria-label="Navigation client" className="flex items-center gap-4">
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
