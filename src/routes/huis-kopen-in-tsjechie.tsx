import { createFileRoute } from "@tanstack/react-router";

import { InformationLandingPage } from "@/components/site/InformationLandingPage";
import { images } from "@/data/site";

const title = "Huis kopen in Tsjechië — begeleiding van begin tot eind";
const description = "Praktische en persoonlijke begeleiding bij het zoeken, beoordelen en kopen van een huis in Tsjechië.";

export const Route = createFileRoute("/huis-kopen-in-tsjechie")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HuisKopenTsjechiePage,
});

function HuisKopenTsjechiePage() {
  return <InformationLandingPage
    eyebrow="Huis kopen in Tsjechië"
    title="Gericht zoeken, zorgvuldig beslissen."
    intro="Van een dorpshuis met geschiedenis tot een moderne woning in de heuvels: wij helpen je verder kijken dan de eerste indruk."
    image={images.renovatedHouse}
    sectionEyebrow="Van wens naar sleutel"
    sectionTitle="Een aankoop met rust en overzicht."
    sectionText="De juiste woning past niet alleen bij je droombeeld, maar ook bij je praktische plannen. Daarom verbinden we selectie, lokale beoordeling en aankoopbegeleiding."
    highlights={[
      { title: "Wensen vertalen", text: "We brengen gebruik, regio, bereikbaarheid, woningtype en budget samen in een helder en realistisch zoekprofiel." },
      { title: "Object beoordelen", text: "We kijken naar de woning en de bredere context: perceel, voorzieningen, verbouwingsruimte en lokale beperkingen." },
      { title: "Zorgvuldig afronden", text: "Gespecialiseerde partijen controleren juridische en technische onderdelen, terwijl wij de stappen en communicatie bewaken." },
    ]}
    noteTitle="Een mooi huis is pas het begin."
    noteText="De omgeving, bestemming, staat van onderhoud en mogelijkheden voor renovatie bepalen samen of een woning ook op langere termijn bij je past."
    link={{ label: "Ontdek waarom Tsjechië", to: "/waarom-tsjechie" }}
  />;
}