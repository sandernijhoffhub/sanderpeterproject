import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { images, services } from "@/data/site";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Sander & Peter" },
      {
        name: "description",
        content:
          "Van aankoop van een droomhuis of grond tot renovatie en turnkey bouw in Tsjechië en Slowakije.",
      },
      { property: "og:title", content: "Diensten — Sander & Peter" },
      {
        property: "og:description",
        content:
          "Bekijk hoe Sander & Peter Nederlandse klanten begeleiden bij aankoop, renovatie, bouw en turnkey projecten.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DienstenPage,
});

function DienstenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Diensten"
        title="Niet alleen huizen. Complete routes naar jouw plek."
        text="Van een bestaand huis met karakter tot grond, renovatie of turnkey realisatie: we helpen je kiezen welke route past bij jouw droom."
        image={images.renovatedHouse}
        cta={{ label: "Bespreek jouw project", to: "/contact" }}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Wat we doen" title="Vier hoofdservices, één uitgangspunt.">
            <p>
              We beginnen niet bij stenen, maar bij jouw wens: ruimte, natuur, familie, vrijheid,
              bouwen, verbouwen of later misschien langer blijven.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.number} service={service} featured={index === 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Turnkey bouw" title="Van idee tot sleutel in je hand.">
            <p>
              Voor klanten die het hele traject uit handen willen geven, werken we met een heldere
              volgorde. Stap voor stap, met realistische keuzes en lokale uitvoering.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {["Idee", "Locatie", "Ontwerp", "Vergunningen", "Bouw", "Oplevering"].map((item, index) => (
              <div key={item} className="rounded-md border border-border bg-card p-6 shadow-soft">
                <p className="font-display text-4xl text-earth">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 font-semibold text-foreground">{item}</h3>
              </div>
            ))}
          </div>
          <Button asChild className="mt-10" size="lg">
            <Link to="/contact">
              Bespreek jouw project <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection
        title="Welke route past bij jouw droom?"
        text="Je hoeft nog niet te weten of je wilt kopen, bouwen of renoveren. Een eerste gesprek helpt om de mogelijkheden rustig te verkennen."
        primary={{ label: "Vertel ons over jouw droom", to: "/contact" }}
        secondary={{ label: "Download de brochure", to: "/zo-werken-wij" }}
        image={images.craftDetail}
      />
    </main>
  );
}
