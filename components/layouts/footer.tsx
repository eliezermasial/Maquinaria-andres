import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";


const links = [
  {href: "/history", label: "History"},
  {href: "/blog", label: "blog"},
  {href: "/about", label: "about"},
  {href: "/faq", label: "faq"},
  {href: "/engagements", label: "Engagements"}
];

export function Footer() {
  return (
    <footer className="bg-[#1E2735] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-yelloAccent">
              Maquinaria Andrés
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-white/70">
              Votre partenaire agricole depuis 1984. Excellence, fiabilité et
              innovation au service de la terre.
            </p>
            <div className="mt-8 flex gap-3">
              <Link className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition
                hover:border-secondary hover:bg-secondary hover:text-onBackground"
                href="#">

              </Link>
              <Link className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition
                hover:border-secondary hover:bg-secondary hover:text-onBackground"
                href="#">

              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Société
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              {links.map ((link) => {
                return (
                  <Link className="text-white/70 transition hover:text-secondary"
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Support
            </h3>
            <nav className="mt-6 flex flex-col gap-4">
              {links.map ((link) => {
                return (
                  <Link className="text-white/70 transition hover:text-secondary"
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <div className="mt-6 space-y-5 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-secondary"
                />
                <span>
                  Route Industrielle 45,
                  <br />
                  FR
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-secondary"
                />
                <span>+33 (0) 4 50 20 30 40</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-secondary"
                />
                <span>contact@maquinaria-andres.fr</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2024 Maquinaria Andrés. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
