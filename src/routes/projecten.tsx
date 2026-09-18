import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, projects } from "@/data/site";

export const Route = createFileRoute("/projecten")({
  head: () => ({
    meta: [
      { title: "Projecten — Sander & Peter" },
      {
        name: "description",
        content:
          "Prototypeprojecten voor woningen, renovaties en turnkey chalets in Tsjechië en Slowakije.",
      },
      { property: "og:title", content: "Projecten — Sander & Peter" },
      {
        property: "og:description",
        content:
          "Bekijk voorbeeldprojecten die laten zien hoe potentie, ontwerp en lokale realisatie samenkomen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectenPage,
});

function ProjectenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projecten"
        title="Voorbeelden die vertrouwen tastbaar maken."
        text="Deze prototypeprojecten laten zien hoe een bestaand huis, een nieuw ontwerp of een perceel kan uitgroeien tot een plek met karakter."
        image={images.landscapeVillage}
        cta={{ label: "Vertel ons over jouw project", to: "/contact" }}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-md border border-border bg-secondary p-6 text-secondary-foreground shadow-soft">
            <p className="font-semibold">Prototypeprojecten</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              De projecten op deze pagina zijn fictieve placeholders. Ze tonen de structuur voor
              echte cases, budgetten, locaties en fotografie.
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Later uitbreidbaar" title="Echte projecten kunnen hier eenvoudig landen.">
            <p>
              Per project is ruimte voor fotografie, locatie, status, budgetindicatie, proces,
              keuzes, voor- en na-beelden en het verhaal achter de plek.
            </p>
          </SectionHeading>
        </div>
      </section>

      <CTASection
        title="Heb je zelf al een huis of perceel gezien?"
        text="Stuur het door of vertel wat je hebt gevonden. We kijken graag mee naar potentie, aandachtspunten en mogelijke vervolgstappen."
        primary={{ label: "Vertel ons over jouw droom", to: "/contact" }}
        image={images.projectTurnkeyChalet}
      />
    </main>
  );
}
