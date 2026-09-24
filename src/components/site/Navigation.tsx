"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
// Logo, als bestand in het project: public/brand/second-property-logo.png
const logoAsset = { url: "/brand/second-property-logo.png" };
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-navigation transition-all duration-300",
        scrolled
          ? "border-border shadow-soft"
          : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center" onClick={() => setIsOpen(false)}>
          <img
            src={logoAsset.url}
            alt="Second Property"
            className="h-[4.5rem] w-auto object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link to="/zo-werken-wij">Download brochure</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">
              Vertel je droom <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      <div
        className={cn(
          "grid border-t border-border bg-navigation transition-all duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 sm:px-8" aria-label="Mobiele navigatie">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-md px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <Button asChild variant="outline" size="lg">
                <Link to="/zo-werken-wij" onClick={() => setIsOpen(false)}>
                  Download brochure
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Vertel je droom
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
