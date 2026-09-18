import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TeamCard } from "@/components/site/TeamCard";
import { images, team } from "@/data/site";

export const Route = createFileRoute("/ons-verhaal")({
  head: () => ({
    meta: [
      { title: "Ons verhaal — Sander & Peter" },
      {
        name: "description",
        content:
          "Het persoonlijke verhaal achter Sander & Peter: Nederlandse droom, lokale kennis en een eerste huis in Hybe.",
      },
      { property: "og:title", content: "Ons verhaal — Sander & Peter" },
      {
        property: "og:description",
        content:
          "Lees hoe het idee ontstond om Nederlandse klanten te begeleiden bij hun huisdroom in Tsjechië en Slowakije.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OnsVerhaalPage,
});

function OnsVerhaalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ons verhaal"
        title="Twee werelden verbinden."
        text="Nederlandse dromen, lokale mensen, praktische kennis en het geduld om van potentie iets tastbaars te maken."
        image={images.outdoorTable}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading eyebrow="Hoe het begon" title="Het begon niet met een businessplan." />
          <div className="space-y-7 text-xl leading-9 text-foreground">
            <p>Het begon met een huis.</p>
            <p>
              Een huis in Hybe, Slowakije, dat al langere tijd leegstond. Geen perfecte woning.
              Integendeel. Er moest veel gebeuren.
            </p>
            <p>
              Maar er was iets wat niet in de advertentie stond: potentie. De ruimte. De omgeving.
              Het karakter. En vooral het idee van wat het zou kunnen worden.
            </p>
            <p className="text-muted-foreground">
              Tijdens het proces ontdekten we hoeveel er mogelijk is wanneer je de juiste lokale
              mensen kent en tegelijkertijd begrijpt waar een Nederlandse koper behoefte aan heeft.
              Daaruit ontstond het idee voor dit bedrijf.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted shadow-premium">
            <img
              src={images.tatraTrail.src}
              alt={images.tatraTrail.alt}
              width={images.tatraTrail.width}
              height={images.tatraTrail.height}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <SectionHeading eyebrow="Waarom hier" title="Natuur, ruimte en karakter — maar niet zonder nuance.">
            <p>
              Tsjechië en Slowakije combineren natuur, cultuur, bereikbaarheid, lokale
              bouwtradities, bestaande woningen, grond en mogelijkheden voor renovatie of nieuwbouw.
            </p>
            <p className="mt-5">
              Tegelijkertijd vraagt een woning kopen of verbouwen in een ander land om realisme:
              andere regelgeving, een andere taal, andere manieren van werken en andere
              verwachtingen.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/58">
            Niet alles is eenvoudig
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-7xl">
            Wij geloven niet in ‘even een huis kopen in het buitenland’.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-primary-foreground/76">
            Wij geloven in lokale kennis, goede mensen en begeleiding van begin tot eind. Precies
            daar zit de waarde van twee werelden verbinden.
          </p>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Ons team" title="Sander & Peter." />
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <div className="mt-10 rounded-md bg-secondary p-8 text-center shadow-soft">
            <p className="font-display text-5xl leading-none text-foreground">
              Samen verbinden we twee werelden.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Benieuwd of jouw droom past bij onze aanpak?"
        text="Een eerste gesprek mag open en oriënterend zijn. Juist als je nog niet precies weet wat je zoekt."
        primary={{ label: "Plan een vrijblijvende kennismaking", to: "/contact" }}
        image={images.renovatedHouse}
      />
    </main>
  );
}
