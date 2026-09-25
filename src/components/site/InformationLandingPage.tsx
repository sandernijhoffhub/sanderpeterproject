import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { ImageAsset, SiteRoute } from "@/data/site";

type ContentBlock = {
  title: string;
  text: string;
};

type InformationLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: ImageAsset;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionText: string;
  highlights: ContentBlock[];
  noteTitle: string;
  noteText: string;
  link?: { label: string; to: SiteRoute };
};

export function InformationLandingPage({
  eyebrow,
  title,
  intro,
  image,
  sectionEyebrow,
  sectionTitle,
  sectionText,
  highlights,
  noteTitle,
  noteText,
  link,
}: InformationLandingPageProps) {
  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        text={intro}
        image={image}
        cta={{ label: "Vertel ons over jouw droom", to: "/contact" }}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow={sectionEyebrow} title={sectionTitle}>
            <p>{sectionText}</p>
          </SectionHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="rounded-md border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <p className="font-display text-4xl text-earth">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-8 text-xl font-semibold text-foreground">{highlight.title}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Check className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-display text-5xl leading-none text-foreground md:text-6xl">{noteTitle}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{noteText}</p>
            {link ? (
              <Button asChild variant="outline" size="lg" className="mt-8">
                <Link to={link.to}>
                  {link.label} <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <CTASection
        title="Zullen we jouw mogelijkheden verkennen?"
        text="Een eerste gesprek begint bij jouw wensen. We helpen je om ideeën, locaties en vervolgstappen rustig op een rij te zetten."
        primary={{ label: "Vertel ons over jouw droom", to: "/contact" }}
        secondary={{ label: "Plan een vrijblijvende kennismaking", to: "/contact" }}
        image={image}
      />
    </main>
  );
}