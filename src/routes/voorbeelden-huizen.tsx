import { createFileRoute } from "@tanstack/react-router";

import { InformationLandingPage } from "@/components/site/InformationLandingPage";
import { images } from "@/data/site";

const title = "Voorbeelden van huizen in Tsjechië en Slowakije";
const description = "Inspiratie voor dorpshuizen, vrijstaande woningen en nieuwbouwprojecten in Tsjechië en Slowakije.";

export const Route = createFileRoute("/voorbeelden-huizen")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: VoorbeeldenHuizenPage,
});

function VoorbeeldenHuizenPage() {
  return <InformationLandingPage
    eyebrow="Voorbeelden huizen"
    title="Van dorpshuis tot chalet in de bergen."
    intro="De ene droom begint bij een bestaand huis met karakter, de andere bij een leeg perceel. Deze woningtypen laten zien welke richtingen mogelijk zijn."
    image={images.projectTurnkeyChalet}
    sectionEyebrow="Drie mogelijke routes"
    sectionTitle="Welke plek zie jij voor je?"
    sectionText="Een woningtype bepaalt veel: het aankoopproces, de benodigde werkzaamheden, de planning en de manier waarop je de plek straks kunt gebruiken."
    highlights={[
      { title: "Dorpshuis met karakter", text: "Een bestaande woning met geschiedenis, vaak met ruimte voor renovatie, verduurzaming en een nieuwe indeling." },
      { title: "Vrijstaand buitenhuis", text: "Een plek met rust en grond eromheen, geschikt als vakantiehuis of voor langere verblijven in ieder seizoen." },
      { title: "Nieuwbouw of chalet", text: "Een traject vanaf grond en ontwerp, met aandacht voor ligging, vergunningen, materialen en lokale uitvoering." },
    ]}
    noteTitle="Ieder huis vertelt een ander verhaal."
    noteText="De voorbeelden geven richting, maar de beste route begint bij jouw wensen. Gebruik, onderhoud, omgeving en budget bepalen samen wat werkelijk passend is."
    link={{ label: "Bekijk onze projecten", to: "/projecten" }}
  />;
}