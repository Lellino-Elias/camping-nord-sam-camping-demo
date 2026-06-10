import type { CampsiteConfig } from "../types";

/**
 * Camping Nord Sam · Salzburg — honest, source-grounded config.
 * Inhalt zu 100 % aus raw/digest dieses Leads. Bilder ausschliesslich vom Platz selbst
 * (Salzburg-Tourismus-Stadtfotos bewusst ausgelassen). Durchgehend Du-Anrede.
 */
const IMG = "/campsites/camping-nord-sam";

const campingNordSam: CampsiteConfig = {
  name: "Camping Nord Sam",
  shortName: "Nord-Sam",
  slug: "camping-nord-sam",
  ort: "Salzburg",
  region: "Salzburg",
  brandKind: "Stadtcamping",
  regionLong: "Stadt Salzburg · Salzburger Land · Österreich",

  theme: "alpin",
  heroVariant: "center",

  claim: "Die grüne Oase der Mozartstadt",
  claimEmphasis: "grüne Oase",
  intro:
    "Schattige Stellplätze unter alten Bäumen, ein Freibad mitten am Platz und die Salzburger Altstadt in Radnähe — Camping Nord Sam ist dein grüner Rückzugsort für den Urlaub in der Mozartstadt.",

  logo: { src: `${IMG}/logo-b9eddd2e6e.png`, alt: "Camping Nord Sam — Die grüne Oase der Mozartstadt" },

  statement: {
    text: "Mitten im Grünen — und doch mit der ganzen Mozartstadt direkt vor der Tür.",
    emphasis: "vor der Tür",
  },

  pillars: [
    {
      title: "Rezeption & Shop",
      text: "Beim Check-in erwartet dich persönliche Begrüßung — und ein kleiner Campingshop mit Kühlgetränken, Grundversorgung und Infos zur Salzburg Card direkt am Platz.",
      image: { src: `${IMG}/gallery-8cb032bd6e.webp`, alt: "Rezeption und kleiner Campingshop im Camping Nord Sam" },
    },
    {
      title: "Freibad am Platz",
      text: "Das gepflegte Schwimmbad gehört zum Platz und steckt schon im Übernachtungspreis — der Sprung ins Wasser ist inklusive.",
      image: { src: `${IMG}/amenity-4d058db4d6.webp`, alt: "Freibad im Camping Nord Sam" },
    },
    {
      title: "Salzburg per Rad",
      text: "Direkt am Radweg gelegen: In wenigen Minuten rollst du entlang der Salzach in die Altstadt von Salzburg.",
      image: { src: `${IMG}/gallery-c1ef09c5c7.webp`, alt: "Radweg Richtung Salzburg beim Camping Nord Sam" },
    },
  ],

  usps: [
    "Freibad inklusive",
    "Plätze unter alten Bäumen",
    "Salzburg in Radnähe",
    "Steuern & Dusche inklusive",
    "WLAN am Platz",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Was den Nord-Sam besonders macht",
    headingEmphasis: "besonders",
    intro:
      "Seit Jahren der grüne Treffpunkt für Salzburg-Reisende: ruhige Plätze unter hohen Bäumen, ein eigenes Freibad, kurze Wege in die Mozartstadt und ein Empfang, der dich persönlich willkommen heißt.",
  },

  awards: [],

  saison: { von: "März", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/amenity-6317d997a4.webp`, alt: "Freibad mit Liegewiese im Camping Nord Sam in Salzburg" },
  },

  camping: {
    heading: "Dein Platz in der Mozartstadt",
    intro:
      "Schattige Wiesenplätze, gepflegte Sanitäranlagen und ein persönlicher Empfang — alles, was du für entspannte Tage mitten in Salzburg brauchst.",
    features: [
      {
        title: "Empfang wie zu Hause",
        text: "Manuela Lex führt den Platz persönlich — Anmeldung, Tipps für die Stadt und ein freundliches Wort gehören einfach dazu.",
        image: { src: `${IMG}/gallery-cb78ec4fca.webp`, alt: "Empfangsgebäude mit Blumengarten im Camping Nord Sam" },
      },
      {
        title: "Moderne Sanitäranlagen",
        text: "Warmwasserduschen und gepflegte Waschräume — die heißen Duschen sind im Übernachtungspreis bereits enthalten.",
        image: { src: `${IMG}/gallery-b3506cdfff.webp`, alt: "Sanitäranlagen im Camping Nord Sam" },
      },
    ],
  },

  anreise: {
    heading: "Anreise leicht gemacht",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 Westautobahn, Ausfahrt Salzburg-Nord, sind es nur wenige Minuten bis zur Samstraße — der Platz ist ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Vom Salzburger Hauptbahnhof bringt dich der O-Bus in rund einer Viertelstunde in die Nähe des Platzes.",
      },
      {
        title: "Mit dem Rad",
        text: "Direkt am Salzach-Radweg: In die Altstadt rollst du gemütlich in etwa einer Viertelstunde.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Nord-Sam",
    headingEmphasis: "Nord-Sam",
    intro:
      "Vom sonnigen Sommertag bis zur verschneiten Tanne — der Platz hat zu jeder Jahreszeit seinen eigenen Charme.",
    tag: "März bis Dezember",
    images: [
      { src: `${IMG}/kids-db3d116bca.webp`, alt: "Abenteuer-Spielplatz im Camping Nord Sam" },
      { src: `${IMG}/gallery-2f816d5320.webp`, alt: "Verschneiter Eingangsbereich des Camping Nord Sam" },
      { src: `${IMG}/gallery-3072082b22.webp`, alt: "Wintercamping unter verschneiten Tannen im Nord-Sam" },
      { src: `${IMG}/gallery-f76010e02b.webp`, alt: "Sonniger Wintertag im Camping Nord Sam" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Salzburg",
    headingEmphasis: "in Salzburg",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit. Im Juli, August und Dezember empfehlen wir eine Reservierung.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Saison 1 (Nebensaison) · 2 Erwachsene inkl. Steuern, Dusche, WLAN & Pool · zzgl. Ortstaxe € 3,55 p. P./Nacht · Strom € 6,50",
    highlight: { title: "Alles inklusive", text: "Steuern, heiße Dusche, WLAN und Pool sind im Preis schon dabei." },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil / Van", perNight: 32, perExtraGuest: 10 },
      { id: "wohnwagen", label: "Wohnwagen + Auto", perNight: 34, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.827226, lng: 13.062656 },
    tel: "+43 662 660494",
    telHref: "tel:+43662660494",
    mail: "office@camping-nord-sam.com",
    adresse: "Samstraße 22a · 5023 Salzburg · Österreich",
  },

  languages: ["DE", "EN", "FR", "IT"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Eindrücke", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingNordSam;
