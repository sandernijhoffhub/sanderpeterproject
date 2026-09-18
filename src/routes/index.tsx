import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Hammer,
  Home,
  KeyRound,
  LandPlot,
  Mountain,
  ShieldCheck,
  Trees,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrochureForm } from "@/components/site/LeadForms";
import { ProcessStep } from "@/components/site/ProcessStep";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTASection";
import { images, processSteps, projects, services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sander & Peter — Droomhuis in Tsjechië of Slowakije" },
      {
        name: "description",
        content:
          "Een premium prototypewebsite voor Nederlandse klanten die dromen van een huis, renovatieproject of bouwproject in Tsjechië of Slowakije.",
      },
      { property: "og:title", content: "Sander & Peter — Van droom naar werkelijkheid" },
      {
        property: "og:description",
        content:
          "Ontdek hoe een vrijstaand huis, vakantiehuis of bouwproject in Tsjechië of Slowakije haalbaar en concreet kan worden.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whyCards = [
  { title: "Ruimte", text: "Meer grond, meer mogelijkheden.", icon: Trees },
  { title: "Natuur", text: "Van heuvels en bossen tot de Hoge Tatra.", icon: Mountain },
  { title: "Karakter", text: "Traditionele woningen met geschiedenis en potentie.", icon: Home },
  { title: "Mogelijkheden", text: "Van renovatieproject tot volledig nieuw droomhuis.", icon: Compass },
];

const helpIcons = [Home, LandPlot, Hammer, KeyRound];

function Index() {
  const featuredProject = projects[0];

  return (
    <main>
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-primary text-primary-foreground">
        <img
          src={images.dreamHero.src}
          alt={images.dreamHero.alt}
          width={images.dreamHero.width}
          height={images.dreamHero.height}
          className="hero-drift absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-photo-gradient" />
        <div className="absolute inset-0 -z-10 bg-primary/24" />
        <div className="mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-4xl reveal-up">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/72">
              Jouw plek. Jouw droom. Onze lokale kennis.
            </p>
            <h1 className="font-display text-6xl leading-[0.86] md:text-8xl lg:text-9xl">
              Heb jij wel eens gedroomd...
            </h1>
            <p className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-primary-foreground md:text-6xl">
              Van een vrijstaand huis met ruimte om je heen?
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/84 md:text-xl">
              Een plek midden in de natuur. Voor vakanties, familie en vrienden. Of misschien
              wel voor later.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="warm" size="xl">
                <Link to="/zo-werken-wij">
                  Ontdek wat mogelijk is <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="inverse" size="xl">
                <Link to="/contact">Vertel ons over jouw droom</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading eyebrow="De droom" title="Misschien zie je het al voor je.">
            <p>
              Een oud huis met karakter. Een grote tuin. De bergen op de achtergrond. Een
              houtkachel. Een lange tafel buiten met familie en vrienden.
            </p>
            <p className="mt-5">
              Misschien is het een vakantiehuis. Misschien een investering. Misschien de plek
              waar je later een deel van het jaar wilt wonen. Voor iedereen ziet die droom er
              anders uit.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link to="/contact">Wat is jouw droom?</Link>
            </Button>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-[0.82fr_1fr]">
            <div className="aspect-[3/4] overflow-hidden rounded-md bg-muted shadow-soft">
              <img
                src={images.outdoorTable.src}
                alt={images.outdoorTable.alt}
                width={images.outdoorTable.width}
                height={images.outdoorTable.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4 pt-10 sm:pt-20">
              <div className="rounded-md bg-secondary p-7">
                <p className="font-display text-4xl leading-none text-foreground">
                  Misschien is die droom dichterbij dan je denkt.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted shadow-soft">
                <img
                  src={images.renovatedHouse.src}
                  alt={images.renovatedHouse.alt}
                  width={images.renovatedHouse.width}
                  height={images.renovatedHouse.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
            <SectionHeading
              eyebrow="Waarom Tsjechië & Slowakije"
              title="Misschien heb je nooit serieus aan Tsjechië of Slowakije gedacht."
            >
              <p>
                In Nederland worden ruimte, natuur en vrijstaande woningen steeds moeilijker te
                combineren met een realistisch budget.
              </p>
              <p className="mt-5">
                In Tsjechië en Slowakije bestaan nog gebieden waar ruimte, natuur,
                karakteristieke woningen en mogelijkheden samenkomen. Niet zonder uitdagingen.
                Juist daarom is lokale kennis zo belangrijk.
              </p>
            </SectionHeading>
            <div className="aspect-[16/10] overflow-hidden rounded-md bg-muted shadow-premium">
              <img
                src={images.landscapeVillage.src}
                alt={images.landscapeVillage.alt}
                width={images.landscapeVillage.width}
                height={images.landscapeVillage.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-md border border-border bg-card p-6 shadow-soft">
                  <Icon className="h-7 w-7 text-forest" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-3xl leading-none text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.text}</p>
                </article>
              );
            })}
          </div>
          <Button asChild variant="outline" size="lg" className="mt-10">
            <Link to="/ons-verhaal">Ontdek waarom wij hier zijn begonnen</Link>
          </Button>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Onze diensten" title="Vier manieren waarop we kunnen helpen.">
            <p>
              Niet ieder plan begint hetzelfde. Soms zoek je een bestaand huis, soms een stuk
              grond, soms een project met potentie. We maken jouw route concreet.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = helpIcons[index] ?? Compass;
              return (
                <div key={service.number} className="relative">
                  <Icon className="absolute right-6 top-6 z-10 h-7 w-7 text-earth" aria-hidden="true" />
                  <ServiceCard service={service} featured={index === 2} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Projecten" title="Van potentie naar plek." />
            <Button asChild variant="outline" size="lg" className="self-start lg:self-end">
              <Link to="/projecten">Bekijk onze projecten</Link>
            </Button>
          </div>
          <ProjectCard project={featuredProject} />
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted shadow-premium">
            <img
              src={images.craftDetail.src}
              alt={images.craftDetail.alt}
              width={images.craftDetail.width}
              height={images.craftDetail.height}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <SectionHeading eyebrow="Ons verhaal" title="Het begon niet met een businessplan.">
            <p>
              Het begon met een huis in Hybe, Slowakije. Geen perfecte woning. Integendeel.
              Maar er was iets wat niet in de advertentie stond: potentie.
            </p>
            <p className="mt-5">
              Tijdens het proces ontdekten we hoeveel er mogelijk is wanneer je de juiste lokale
              mensen kent en tegelijkertijd begrijpt waar een Nederlandse koper behoefte aan heeft.
            </p>
            <Button asChild variant="outline" className="mt-8" size="lg">
              <Link to="/ons-verhaal">Lees ons verhaal</Link>
            </Button>
          </SectionHeading>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Ons netwerk"
            title="Een droomhuis bouw je met de juiste mensen."
            className="text-primary-foreground [&_h2]:text-primary-foreground [&_div]:text-primary-foreground/76 [&_p:first-child]:text-primary-foreground/58"
          >
            <p>
              Lokale vakmensen, kennis van regels en gevoel voor de markt maken het verschil
              tussen een mooi idee en een haalbaar project.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { title: "Lokale vakmensen", icon: Hammer, text: "Aannemers, architecten, timmermannen en specialisten." },
              { title: "Lokale wetgeving", icon: ShieldCheck, text: "Aankoop, vergunningen, bouwen, renoveren en procedures." },
              { title: "Lokale markt", icon: Users, text: "Locatie, staat, grond, infrastructuur en ontwikkelmogelijkheden." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-md border border-primary-foreground/16 bg-primary-foreground/8 p-7 backdrop-blur-md">
                  <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-4xl leading-none">{item.title}</h3>
                  <p className="mt-4 leading-7 text-primary-foreground/74">{item.text}</p>
                </article>
              );
            })}
          </div>
          <Button asChild variant="inverse" size="lg" className="mt-10">
            <Link to="/ons-netwerk">Bekijk ons netwerk</Link>
          </Button>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Zo werken wij" title="Je hoeft vandaag nog geen plan te hebben.">
            <p>Misschien weet je alleen dat je ooit zo’n plek wilt hebben. Dat is genoeg om te beginnen.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <BrochureForm />
        </div>
      </section>

      <CTASection
        title="Vertel ons over jouw droom."
        text="Heb je al een concreet huis gevonden? Of weet je alleen dat je ooit een plek in de bergen wilt? Beide zijn een prima beginpunt."
        primary={{ label: "Vertel ons over jouw droom", to: "/contact" }}
        secondary={{ label: "Plan een vrijblijvende kennismaking", to: "/contact" }}
        image={images.tatraTrail}
      />
    </main>
  );
}
