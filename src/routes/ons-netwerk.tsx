import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  FileText,
  Hammer,
  Landmark,
  Paintbrush,
  Plug,
  Ruler,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/data/site";

export const Route = createFileRoute("/ons-netwerk")({
  head: () => ({
    meta: [
      { title: "Ons netwerk — Sander & Peter" },
      {
        name: "description",
        content:
          "Lokale vakmensen, kennis van regelgeving en inzicht in de markt in Tsjechië en Slowakije.",
      },
      { property: "og:title", content: "Ons netwerk — Sander & Peter" },
      {
        property: "og:description",
        content:
          "Ontdek hoe een lokaal netwerk van vakmensen, specialisten en marktkennis projecten haalbaar maakt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OnsNetwerkPage,
});

const craftPeople = [
  { label: "aannemers", icon: Building2 },
  { label: "architecten", icon: Ruler },
  { label: "timmermannen", icon: Hammer },
  { label: "elektriciens", icon: Plug },
  { label: "loodgieters", icon: Wrench },
  { label: "stukadoors", icon: Paintbrush },
  { label: "tegelzetters", icon: Landmark },
  { label: "keukenbouwers", icon: Hammer },
  { label: "interieurspecialisten", icon: Users },
];

const legalTopics = ["aankoopproces", "eigendom", "vergunningen", "bouwen", "renoveren", "lokale instanties", "contracten"];

function OnsNetwerkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ons netwerk"
        title="De juiste mensen maken het verschil."
        text="Een droomhuis bouwen begint niet met een website. Het begint met vakmensen, lokale kennis en vertrouwen ter plaatse."
        image={images.craftDetail}
        cta={{ label: "Vertel ons over jouw droom", to: "/contact" }}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Lokale vakmensen" title="Een goed project vraagt om mensen die weten wat ze doen.">
            <p>
              We werken met lokale professionals die de materialen, tradities, planning en
              praktische werkelijkheid van bouwen en renoveren in de regio kennen.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {craftPeople.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-md border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                  <Icon className="h-7 w-7 text-forest" aria-hidden="true" />
                  <h3 className="mt-8 text-lg font-semibold capitalize text-foreground">{item.label}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionHeading eyebrow="Lokale wetgeving" title="Regels, procedures en verwachtingen vragen aandacht.">
            <p>
              Een buitenlandse woning kopen of bouwen vraagt om kennis van lokale regels en
              procedures. Specifieke juridische en fiscale zaken moeten altijd door gespecialiseerde
              professionals worden gecontroleerd.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {legalTopics.map((topic) => (
              <div key={topic} className="rounded-md border border-border bg-card p-6 shadow-soft">
                <FileText className="h-6 w-6 text-earth" aria-hidden="true" />
                <p className="mt-7 font-semibold capitalize text-foreground">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="aspect-[16/11] overflow-hidden rounded-md bg-muted shadow-premium">
            <img
              src={images.landscapeVillage.src}
              alt={images.landscapeVillage.alt}
              width={images.landscapeVillage.width}
              height={images.landscapeVillage.height}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <SectionHeading eyebrow="Lokale markt" title="Niet ieder mooi huis is een goed project.">
            <p>
              Locatie, staat van het gebouw, grond, infrastructuur, bereikbaarheid en
              ontwikkelmogelijkheden bepalen samen of een droom ook een verstandig project kan
              worden.
            </p>
            <div className="mt-8 rounded-md border border-border bg-card p-6 shadow-soft">
              <ShieldCheck className="h-7 w-7 text-forest" aria-hidden="true" />
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                We kijken niet alleen naar wat mooi voelt, maar ook naar wat praktisch, technisch
                en lokaal logisch is.
              </p>
            </div>
          </SectionHeading>
        </div>
      </section>

      <CTASection
        title="Wil je weten wat lokaal mogelijk is?"
        text="Vertel waar je aan denkt. Dan kunnen we samen onderzoeken welke route logisch voelt."
        primary={{ label: "Vertel ons over jouw droom", to: "/contact" }}
        image={images.tatraTrail}
      />
    </main>
  );
}
