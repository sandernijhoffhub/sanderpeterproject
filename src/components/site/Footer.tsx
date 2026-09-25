import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import { brand, navItems } from "@/data/site";

const informationLinks = [
  { label: "Waarom Slowakije", to: "/waarom-slowakije" },
  { label: "Waarom Tsjechië", to: "/waarom-tsjechie" },
  { label: "Huis kopen in Slowakije", to: "/huis-kopen-in-slowakije" },
  { label: "Huis kopen in Tsjechië", to: "/huis-kopen-in-tsjechie" },
  { label: "Regel en wetgeving", to: "/regels-en-wetgeving" },
  { label: "Voorbeelden huizen", to: "/voorbeelden-huizen" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-10">
        <div>
          <p className="font-display text-5xl leading-none">{brand.name}</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/78">
            Een droom mag groot zijn. Wij helpen hem concreet te maken met Nederlandse
            begeleiding en lokale kennis in Tsjechië en Slowakije.
          </p>
        </div>
        <nav className="grid gap-3" aria-label="Footer navigatie">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-primary-foreground/72 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-4 text-sm text-primary-foreground/76">
          <p className="flex items-center gap-3">
            <Mail className="h-4 w-4" aria-hidden="true" /> {brand.email}
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {brand.location}
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/16">
        <nav
          className="mx-auto grid max-w-7xl gap-x-8 gap-y-4 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-10"
          aria-label="Informatie"
        >
          {informationLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-primary-foreground/72 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
