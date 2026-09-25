import { createFileRoute } from "@tanstack/react-router";

import { InformationLandingPage } from "@/components/site/InformationLandingPage";
import { images } from "@/data/site";

const title = "Huis kopen in Slowakije — persoonlijke begeleiding";
const description = "Van zoekprofiel en bezichtiging tot controle en overdracht: begeleiding bij een huis kopen in Slowakije.";

export const Route = createFileRoute("/huis-kopen-in-slowakije")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HuisKopenSlowakijePage,
});

function HuisKopenSlowakijePage() {
  return <InformationLandingPage
    eyebrow="Huis kopen in Slowakije"
    title="Van eerste vondst naar een plek die echt klopt."
    intro="Een woning in Slowakije kopen vraagt om meer dan een goede advertentie. Wij helpen je locatie, staat, mogelijkheden en aankoop zorgvuldig te beoordelen."
    image={images.projectBeforeVillage}
    sectionEyebrow="De aankooproute"
    sectionTitle="Overzicht in iedere stap."
    sectionText="We beginnen met jouw wensen en maken daarna gericht keuzes. Zo ontstaat een helder traject waarin lokale kennis en onafhankelijke controles een vaste plek krijgen."
    highlights={[
      { title: "Zoeken en selecteren", text: "We scherpen regio, type woning, gebruik en budget aan en beoordelen welke objecten een bezichtiging waard zijn." },
      { title: "Onderzoeken", text: "De woning, grond, bereikbaarheid en beschikbare informatie worden bekeken voordat je een definitieve beslissing neemt." },
      { title: "Aankoop begeleiden", text: "Lokale specialisten ondersteunen bij documenten, afspraken en overdracht; wij houden het proces begrijpelijk en overzichtelijk." },
    ]}
    noteTitle="Potentie begint bij een goede basis."
    noteText="Bij oudere woningen zijn constructie, installaties, vocht, toegang en toekomstige renovatie belangrijke onderdelen van de totale afweging."
    link={{ label: "Bekijk regels en aandachtspunten", to: "/regels-en-wetgeving" }}
  />;
}