import { createFileRoute } from "@tanstack/react-router";

import { InformationLandingPage } from "@/components/site/InformationLandingPage";
import { images } from "@/data/site";

const title = "Regels en wetgeving — kopen en bouwen in het buitenland";
const description = "Belangrijke aandachtspunten rond eigendom, contracten, vergunningen en lokale procedures in Tsjechië en Slowakije.";

export const Route = createFileRoute("/regels-en-wetgeving")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: RegelsEnWetgevingPage,
});

function RegelsEnWetgevingPage() {
  return <InformationLandingPage
    eyebrow="Regels en wetgeving"
    title="Goede afspraken geven ruimte om te dromen."
    intro="Een huis kopen, renoveren of bouwen in een ander land brengt lokale regels en procedures mee. Zorgvuldigheid voorkomt verrassingen."
    image={images.craftDetail}
    sectionEyebrow="Belangrijke aandachtspunten"
    sectionTitle="Weten wat gecontroleerd moet worden."
    sectionText="Ieder object en project is anders. De exacte route hangt af van het land, de gemeente, de woning, de grond en wat je ermee wilt doen."
    highlights={[
      { title: "Eigendom en contracten", text: "Eigendomssituatie, registraties, afspraken en eventuele rechten van derden moeten vooraf helder en controleerbaar zijn." },
      { title: "Vergunningen en bestemming", text: "Verbouwen, uitbreiden, nieuw bouwen of anders gebruiken kan toestemming vragen van lokale instanties." },
      { title: "Specialistische controle", text: "Juridische, fiscale en technische onderwerpen laten we waar nodig beoordelen door bevoegde lokale professionals." },
    ]}
    noteTitle="Begeleiding is geen juridisch advies."
    noteText="Wij helpen het proces organiseren en zorgen dat de juiste vragen bij de juiste mensen terechtkomen. Definitieve juridische en fiscale beslissingen worden altijd gecontroleerd door gespecialiseerde professionals."
    link={{ label: "Lees over ons lokale netwerk", to: "/ons-netwerk" }}
  />;
}