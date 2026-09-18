import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { services } from "@/data/site";

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
};

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-md border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="flex items-start justify-between gap-6">
        <span className="font-display text-5xl leading-none text-earth">{service.number}</span>
        {featured ? (
          <span className="rounded-md bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
            Populair
          </span>
        ) : null}
      </div>
      <h3 className="mt-8 font-display text-4xl leading-none text-foreground">{service.title}</h3>
      <p className="mt-4 leading-7 text-muted-foreground">{service.summary}</p>
      <ul className="mt-7 space-y-3 text-sm text-foreground">
        {service.points.map((point) => (
          <li key={point} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="mt-8 self-start">
        <Link to={service.href}>
          {service.cta} <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}
