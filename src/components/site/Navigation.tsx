"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { brand, navItems } from "@/data/site";
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
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/88 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-background/72 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary font-display text-2xl text-primary-foreground shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5">
            S&P
          </span>
          <span className="leading-tight">
            <span className="block font-display text-2xl leading-none text-foreground">{brand.name}</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Midden in Europa
            </span>
          </span>
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
          "grid border-t border-border bg-background/96 backdrop-blur-xl transition-all duration-300 lg:hidden",
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
