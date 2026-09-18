import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { BrochureForm } from "@/components/site/LeadForms";
import { PageHero } from "@/components/site/PageHero";
import { ProcessStep } from "@/components/site/ProcessStep";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images, processSteps } from "@/data/site";

export const Route = createFileRoute("/zo-werken-wij")({
  head: () => ({
    meta: [
      { title: "Zo werken wij — Sander & Peter" },
      {
        name: "description",
        content:
          "Een rustige vijfstappenaanpak van inspiratie en kennismaking naar plan, aankoop, ontwerp en realisatie.",
      },
      { property: "og:title", content: "Zo werken wij — Sander & Peter" },
      {
        property: "og:description",
        content:
          "Ontdek de vijf stappen waarmee Sander & Peter jouw droom in Tsjechië of Slowakije concreet maken.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ZoWerkenWijPage,
});

function ZoWerkenWijPage() {
  return (
    <main>
      <PageHero
        eyebrow="Zo werken wij"
        title="Je hoeft vandaag nog geen plan te hebben."
        text="Misschien weet je alleen dat je ooit zo’n plek wilt hebben. Dat is genoeg om te beginnen."
        image={images.tatraTrail}
        cta={{ label: "Plan een kennismaking", to: "/contact" }}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Onze aanpak" title="Van eerste gedachte naar concreet plan.">
            <p>
              We maken de route overzichtelijk zonder de droom kleiner te maken. Rustig, nuchter
              en met aandacht voor wat lokaal echt kan.
            </p>
          </SectionHeading>
          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
          <Button asChild className="mt-12" size="lg">
            <Link to="/contact">Plan een kennismaking</Link>
          </Button>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <BrochureForm />
        </div>
      </section>
    </main>
  );
}
