import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/LeadForms";
import { PageHero } from "@/components/site/PageHero";
import { brand, images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vertel ons over jouw droom" },
      {
        name: "description",
        content:
          "Neem laagdrempelig contact op over een droomhuis, vakantiehuis, stuk grond, renovatie of turnkey project in Tsjechië of Slowakije.",
      },
      { property: "og:title", content: "Contact — Vertel ons over jouw droom" },
      {
        property: "og:description",
        content:
          "Heb je al een concreet huis gevonden of droom je alleen nog van een plek in de bergen? Beide zijn een prima beginpunt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Vertel ons over jouw droom."
        text="Heb je al een concreet huis gevonden? Of weet je alleen dat je ooit een plek in de bergen wilt? Beide zijn een prima beginpunt."
        image={images.dreamHero}
      />

      <section className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-earth">Kennismaken</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-foreground">
                Een eerste gesprek mag gewoon open beginnen.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Vertel wat je al weet, wat je nog niet weet en wat je hoopt te vinden. Dan denken
                we rustig met je mee.
              </p>
            </div>
            <div className="space-y-4 rounded-md border border-border bg-card p-6 shadow-soft">
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-forest" aria-hidden="true" /> {brand.email}
              </p>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-forest" aria-hidden="true" /> {brand.phone}
              </p>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-forest" aria-hidden="true" /> {brand.location}
              </p>
              <p className="pt-3 text-xs leading-6 text-muted-foreground">
                Placeholdercontactgegevens voor het prototype. Vervang deze later door echte
                gegevens.
              </p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
