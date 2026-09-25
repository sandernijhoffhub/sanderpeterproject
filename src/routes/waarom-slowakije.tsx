import { createFileRoute } from "@tanstack/react-router";

import { InformationLandingPage } from "@/components/site/InformationLandingPage";
import { images } from "@/data/site";

const title = "Waarom Slowakije — ruimte, natuur en karakter";
const description = "Ontdek waarom Slowakije aantrekkelijk is voor een vrijstaand huis, vakantiehuis of bouwproject in een veelzijdig berglandschap.";

export const Route = createFileRoute("/waarom-slowakije")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WaaromSlowakijePage,
});

function WaaromSlowakijePage() {
  return <InformationLandingPage
    eyebrow="Waarom Slowakije"
    title="Een land met ruimte voor een ander ritme."
    intro="Bergen, bossen, levendige dorpen en verrassend veel mogelijkheden: Slowakije nodigt uit om verder te kijken dan de bekende plekken."
    image={images.tatraTrail}
    sectionEyebrow="Leven en landschap"
    sectionTitle="Dicht bij de natuur, midden in Europa."
    sectionText="Slowakije combineert een uitgesproken landschap met dorpen en regio’s waar huizen nog karakter en ruimte hebben. Welke plek past, hangt af van jouw gebruik, bereikbaarheid en plannen."
    highlights={[
      { title: "Bergen en buitenleven", text: "Van de Hoge Tatra tot groene valleien: wandelen, skiën en buiten zijn maken vanzelf deel uit van het dagelijks leven." },
      { title: "Karaktervolle plekken", text: "Oudere dorpshuizen, vrijstaande woningen en percelen bieden uiteenlopende routes voor wie wil kopen, renoveren of bouwen." },
      { title: "Lokale verbinding", text: "Een goed netwerk en begrip van taal, gewoonten en werkwijzen helpen om plannen realistisch en zorgvuldig uit te voeren." },
    ]}
    noteTitle="De juiste regio maakt het verschil."
    noteText="Niet iedere mooie plek past bij ieder plan. We kijken ook naar bereikbaarheid, voorzieningen, terrein, seizoenen en de praktische mogelijkheden van een woning of perceel."
    link={{ label: "Bekijk huizen en projecten", to: "/voorbeelden-huizen" }}
  />;
}