import dreamHero from "@/assets/dream-hero-countryside-house.jpg";
import outdoorTable from "@/assets/dream-outdoor-table.jpg";
import landscapeVillage from "@/assets/landscape-hills-village.jpg";
import tatraTrail from "@/assets/high-tatra-forest-trail.jpg";
import renovatedHouse from "@/assets/renovated-modern-country-house.jpg";
import craftDetail from "@/assets/craft-renovation-detail.jpg";
import projectBeforeVillage from "@/assets/project-before-village-house.jpg";
import projectAfterRetreat from "@/assets/project-after-mountain-retreat.jpg";
import projectModernHills from "@/assets/project-modern-hills-home.jpg";
import projectTurnkeyChalet from "@/assets/project-turnkey-chalet.jpg";
import peterPortrait from "@/assets/profile-peter-placeholder.jpg";
import sanderAsset from "@/assets/sander-webimage.jpg.asset.json";

export type SiteRoute =
  | "/"
  | "/diensten"
  | "/projecten"
  | "/ons-verhaal"
  | "/ons-netwerk"
  | "/zo-werken-wij"
  | "/contact";

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const brand = {
  name: "Sander & Peter",
  payoff: "Van droom naar werkelijkheid. Midden in Europa.",
  email: "info@secondproperty.nl",
  phone: "+31 6 12 34 56 78",
  location: "Nederland · Tsjechië · Slowakije",
};

export const navItems: { label: string; to: SiteRoute }[] = [
  { label: "Droom", to: "/" },
  { label: "Diensten", to: "/diensten" },
  { label: "Projecten", to: "/projecten" },
  { label: "Ons verhaal", to: "/ons-verhaal" },
  { label: "Ons netwerk", to: "/ons-netwerk" },
  { label: "Zo werken wij", to: "/zo-werken-wij" },
  { label: "Contact", to: "/contact" },
];

// Prototypefotografie: vervang deze imports later door echte foto's van locaties, projecten en team.
export const images = {
  dreamHero: {
    src: dreamHero,
    alt: "Vrijstaand huis in een berglandschap bij zonsopkomst",
    width: 1920,
    height: 1280,
  },
  outdoorTable: {
    src: outdoorTable,
    alt: "Lange houten tafel buiten bij een huis in de bergen",
    width: 1600,
    height: 1104,
  },
  landscapeVillage: {
    src: landscapeVillage,
    alt: "Heuvels, bossen en een dorp in Tsjechië of Slowakije",
    width: 1808,
    height: 1200,
  },
  tatraTrail: {
    src: tatraTrail,
    alt: "Bergpad door bossen richting de Hoge Tatra",
    width: 1600,
    height: 1200,
  },
  renovatedHouse: {
    src: renovatedHouse,
    alt: "Modern gerenoveerd landhuis met natuurlijke materialen",
    width: 1600,
    height: 1104,
  },
  craftDetail: {
    src: craftDetail,
    alt: "Vakman kiest hout en natuursteen voor een renovatie",
    width: 1408,
    height: 1008,
  },
  projectTurnkeyChalet: {
    src: projectTurnkeyChalet,
    alt: "Turnkey chalet op een ruim perceel in de bergen",
    width: 1600,
    height: 1104,
  },
  sanderPortrait: {
    src: sanderAsset.url,
    alt: "Portretfoto van Sander",
    width: 1080,
    height: 1200,
  },
  peterPortrait: {
    src: peterPortrait,
    alt: "Professionele placeholderfoto van Peter",
    width: 1008,
    height: 1200,
  },
};

export const services = [
  {
    number: "01",
    title: "Aankoop droomhuis",
    summary: "Voor wie een bestaand huis zoekt met ruimte, karakter en mogelijkheden.",
    cta: "Ik zoek een droomhuis",
    href: "/contact" as const,
    points: [
      "zoekprofiel en wensen scherpstellen",
      "selectie van passende objecten",
      "eerste beoordeling van locatie en staat",
      "lokale begeleiding en bezichtigingen",
      "ondersteuning tijdens aankoop",
      "coördinatie met lokale partijen",
    ],
  },
  {
    number: "02",
    title: "Aankoop grond",
    summary: "Voor wie liever vanaf nul begint en een plek wil vinden om te bouwen.",
    cta: "Ik wil bouwen",
    href: "/contact" as const,
    points: [
      "zoeken naar geschikte grond",
      "locatiebeoordeling en bereikbaarheid",
      "lokale mogelijkheden verkennen",
      "overleg met relevante partijen",
      "voorbereiding op ontwerp en bouw",
    ],
  },
  {
    number: "03",
    title: "Van project naar droomhuis",
    summary: "Voor huizen waarvan je voelt: hier kan iets bijzonders van worden.",
    cta: "Bekijk hoe dat werkt",
    href: "/zo-werken-wij" as const,
    points: [
      "haalbaarheid en budget",
      "ontwerp en materialisatie",
      "vakmensen en planning",
      "renovatie en installaties",
      "afwerking en inrichting",
    ],
  },
  {
    number: "04",
    title: "Turnkey bouw",
    summary: "Voor wie het hele traject zorgvuldig wil laten begeleiden.",
    cta: "Bespreek jouw project",
    href: "/contact" as const,
    points: [
      "idee en locatie",
      "ontwerp en vergunningen",
      "bouw en projectbegeleiding",
      "inrichting en oplevering",
    ],
  },
];

export const projects = [
  {
    number: "Project 01",
    title: "Van dorpshuis naar bergverblijf",
    location: "Slowakije",
    budget: "placeholder",
    status: "In ontwikkeling",
    description:
      "Een karaktervol dorpshuis met achterstallig onderhoud wordt onderzocht als warme plek voor familie, vrienden en lange weekenden in de bergen.",
    before: {
      src: projectBeforeVillage,
      alt: "Prototype before foto van een oud dorpshuis",
      width: 1408,
      height: 1008,
    },
    after: {
      src: projectAfterRetreat,
      alt: "Prototype after visual van een gerenoveerd bergverblijf",
      width: 1408,
      height: 1008,
    },
  },
  {
    number: "Project 02",
    title: "Een moderne woning tussen de heuvels",
    location: "Tsjechië",
    budget: "placeholder",
    status: "Concept",
    description:
      "Een rustige conceptstudie voor een vrijstaande woning met veel glas, natuurlijke materialen en zicht over glooiend landschap.",
    image: {
      src: projectModernHills,
      alt: "Prototype visual van een moderne woning tussen heuvels",
      width: 1600,
      height: 1104,
    },
  },
  {
    number: "Project 03",
    title: "Van perceel naar turnkey chalet",
    location: "Slowakije",
    budget: "placeholder",
    status: "Voorbeeldproject",
    description:
      "Een volledig begeleid traject van eerste locatiekeuze tot ontwerp, bouw, inrichting en oplevering van een houten chalet.",
    image: {
      src: projectTurnkeyChalet,
      alt: "Prototype visual van een turnkey chalet in de bergen",
      width: 1600,
      height: 1104,
    },
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Inspiratie",
    text: "Download onze informatiebrochure en ontdek welke routes mogelijk zijn.",
  },
  {
    number: "02",
    title: "Vrijblijvende kennismaking",
    text: "Een ontspannen gesprek over jouw wensen, ideeën en dromen.",
  },
  {
    number: "03",
    title: "Intake",
    text: "We bespreken budget, locatie, type woning, gebruik, planning en niveau van afwerking.",
  },
  {
    number: "04",
    title: "Plan",
    text: "We brengen de routes in kaart: bestaand huis, renovatie, grond met nieuwbouw of turnkey.",
  },
  {
    number: "05",
    title: "Realisatie",
    text: "Van aankoop tot ontwerp, bouw, inrichting en oplevering houden we overzicht.",
  },
];

export const team = [
  {
    name: "Sander",
    region: "Nederland",
    focus: ["Nederlandse markt", "klantbegeleiding", "marketing", "sales", "projectcommunicatie"],
    text: "Sander komt al ruim 15 jaar in Slowakije. Hij kent de lokale markt goed en heeft zelf geïnvesteerd in vastgoed en grond. Met inmiddels jarenlange ervaring wil hij zijn kennis en netwerk graag met anderen delen. Dankzij een groot netwerk van bevriende vakmensen kent hij de mogelijkheden én uitdagingen van het land goed. Van het eerste idee tot de oplevering en alles wat daarbij komt kijken: hij heeft het zelf meegemaakt.",
    image: images.sanderPortrait,
  },
  {
    name: "Peter",
    region: "Tsjechië / Slowakije",
    focus: ["lokaal netwerk", "vakmensen", "leveranciers", "bouw", "projectrealisatie"],
    text: "Peter kent de mensen en mogelijkheden ter plaatse en weet welke lokale expertise nodig is om een project daadwerkelijk te realiseren.",
    image: images.peterPortrait,
  },
];

export const brochureTopics = [
  "Wat is er mogelijk?",
  "Welke soorten projecten zijn er?",
  "Welke gebieden zijn interessant?",
  "Hoe werkt aankoop?",
  "Wat komt kijken bij renovatie?",
  "Hoe werkt turnkey?",
  "Welke budgetten zijn realistisch?",
  "Veelgestelde vragen",
];
