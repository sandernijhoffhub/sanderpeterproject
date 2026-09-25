import { createFileRoute } from "@tanstack/react-router";

import { InformationLandingPage } from "@/components/site/InformationLandingPage";
import { images } from "@/data/site";

const title = "Waarom Tsjechië — natuur, cultuur en bereikbaarheid";
const description = "Lees waarom Tsjechië interessant is voor een tweede huis, vrijstaande woning of bouwproject met ruimte en karakter.";

export const Route = createFileRoute("/waarom-tsjechie")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WaaromTsjechiePage,
});

function WaaromTsjechiePage() {
  return <InformationLandingPage
    eyebrow="Waarom Tsjechië"
    title="Vertrouwd dichtbij, verrassend veelzijdig."
    intro="Tsjechië brengt historische dorpen, uitgestrekte bossen en sterke regionale verschillen samen op rijafstand van Nederland."
    image={images.landscapeVillage}
    sectionEyebrow="Een plek die past"
    sectionTitle="Meer dan Praag en bekende vakantiegebieden."
    sectionText="Buiten de steden heeft iedere streek een eigen landschap, bouwstijl en ritme. Dat geeft ruimte om gericht te zoeken naar een plek voor vakanties, verhuur of langer verblijf."
    highlights={[
      { title: "Goed bereikbaar", text: "Veel regio’s zijn vanuit Nederland per auto bereikbaar, waardoor een tweede huis ook voor kortere verblijven aantrekkelijk kan zijn." },
      { title: "Afwisselende regio’s", text: "Van heuvels en meren tot berggebieden en cultuurlandschappen: de omgeving bepaalt sterk hoe een woning voelt en gebruikt kan worden." },
      { title: "Bouwen met karakter", text: "Traditionele huizen en nieuwe ontwerpen kunnen lokale uitstraling combineren met hedendaags comfort en doordachte materialen." },
    ]}
    noteTitle="Kijken met lokale én Nederlandse ogen."
    noteText="We verbinden jouw wensen aan kennis van de omgeving, technische aandachtspunten en de manier waarop aankoop en realisatie ter plaatse verlopen."
    link={{ label: "Lees over kopen in Tsjechië", to: "/huis-kopen-in-tsjechie" }}
  />;
}