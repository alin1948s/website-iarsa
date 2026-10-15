export interface TimelineEvent {
  year: string;
  title: { ro: string; en: string };
  aircraft?: string;
  category: "founding" | "interwar" | "war" | "renaissance" | "helicopter" | "modern";
  description: { ro: string; en: string };
  metrics?: string;
  image?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1925",
    title: {
      ro: "Înființarea Industriei Aeronautice Române (IAR)",
      en: "Establishment of Industria Aeronautică Română (IAR)",
    },
    category: "founding",
    description: {
      ro: "La 6 august 1925 se constituie la Brașov prima mare fabrică românească de aeroplane, ca societate pe acțiuni cu capital mixt în cooperare cu renumitele concerne franceze Blériot-SPAD și Lorraine-Dietrich.",
      en: "On August 6, 1925, Romania's premier aircraft manufacturing enterprise was established in Brașov as a joint-stock venture alongside French aerospace pioneers Blériot-SPAD and Lorraine-Dietrich.",
    },
    metrics: "Prima fabrică națională de aeroplane",
    image: "/images/istoric-1.jpeg",
  },
  {
    year: "1927–1938",
    title: {
      ro: "Ascensiunea producției de avioane și motoare",
      en: "Rise of Indigenous Aircraft and Engine Production",
    },
    category: "interwar",
    aircraft: "IAR 11, IAR 12, IAR 14, IAR 15, IAR 27, IAR 37/38/39",
    description: {
      ro: "IAR dezvoltă primele modele de concepție originală românească și fabrică sub licență celule și motoare de aviație (Lorraine, Gnome-Rhône). Se creează o școală națională de inginerie aeronautică de elită.",
      en: "IAR developed original Romanian aircraft configurations alongside licensed manufacturing of airframes and radial powerplants (Lorraine, Gnome-Rhône), cementing a national aerospace engineering school.",
    },
    metrics: "Peste 1.000 avioane & 2.000 motoare până în 1944",
    image: "/images/istoric-2.jpeg",
  },
  {
    year: "1939",
    title: {
      ro: "Transformarea într-un concern aeronautic integrat",
      en: "Evolution into an Integrated Aerospace Concern",
    },
    category: "interwar",
    description: {
      ro: "IAR Brașov devine un concern industrial complet, capabil să fabrice pe aceeași platformă: structuri de celulă, motoare radiale de mare putere, aparate de bord și instalații de armament aeronautic.",
      en: "IAR Brașov matured into a comprehensive aerospace conglomerate producing airframe structures, high-output radial powerplants, instrumentation and armament systems within an integrated complex.",
    },
    metrics: "Autonomie tehnologică completă",
  },
  {
    year: "1940–1944",
    title: {
      ro: "Producția legendarului vânător IAR 80 și IAR 81",
      en: "Production of the Legendary IAR 80 & 81 Fighter",
    },
    category: "war",
    aircraft: "IAR 80 & IAR 81",
    description: {
      ro: "Proiectat de colectivul condus de ing. Ion Grosu, avionul de vânătoare monoplan IAR 80 atinge performanțe comparabile cu cele mai bune aparate de luptă europene ale epocii. În 1942, IAR avea 7.000 de angajați și o cadență de 1 avion pe zi.",
      en: "Engineered under Ion Grosu, the low-wing monoplane IAR 80 fighter matched Europe's premier combat aircraft. By 1942, IAR employed 7,000 specialists and reached a delivery cadence of one aircraft per day.",
    },
    metrics: "7.000 angajați · Cadență: 1 avion / zi",
    image: "/images/istoric-1.jpeg",
  },
  {
    year: "1968",
    title: {
      ro: "Renașterea tradiției aeronautice: Înființarea ICA Ghimbav",
      en: "Rebirth of Aerospace Heritage: Foundation of ICA Ghimbav",
    },
    category: "renaissance",
    description: {
      ro: "Activitatea aeronautică de la Brașov este relansată la Ghimbav prin înființarea Întreprinderii de Construcții Aeronautice (ICA), reluând cooperarea strategică cu industria aeronautică occidentală (Aerospatiale, Turbomeca, Britten-Norman).",
      en: "Aeronautical industrial activity was revived at the Ghimbav aerospace hub with the foundation of ICA Ghimbav, reigniting Western partnerships with Aerospatiale, Turbomeca and Britten-Norman.",
    },
    metrics: "Reînnoirea cooperării cu industria aerospațială franceză",
    image: "/images/istoric-4.jpeg",
  },
  {
    year: "1970–1971",
    title: {
      ro: "Unic fabricant de elicoptere din România & Licența Alouette III",
      en: "Sole Helicopter Manufacturer in Romania & Alouette III License",
    },
    category: "helicopter",
    aircraft: "IAR 316B Alouette III",
    description: {
      ro: "IAR devine unicul fabricant național de elicoptere civile și militare. În 1971 debutează fabricația sub licență Aerospatiale a elicopterului IAR 316B Alouette III, fiind produse peste 200 de exemplare (din care 75 exportate).",
      en: "IAR established itself as Romania's sole rotary-wing manufacturer. In 1971, series production of the IAR 316B Alouette III commenced under Aerospatiale license, yielding over 200 helicopters (75 exported).",
    },
    metrics: "> 200 elicoptere IAR 316B produse",
    image: "/images/hero-alouette.jpeg",
  },
  {
    year: "1974–1978",
    title: {
      ro: "Licența PUMA & Unic producător mondial al versiunii militare",
      en: "PUMA License & Sole World Manufacturer of Military Variant",
    },
    category: "helicopter",
    aircraft: "IAR 330 Puma",
    description: {
      ro: "În 1974 este semnat contractul de licență pentru elicopterul Puma. Din anul 1978, IAR rămâne unicul fabricant la nivel mondial al versiunii militare a elicopterului Puma, livrând 167 elicoptere complete și 50 structuri către parteneri internaționali.",
      en: "In 1974, the licensing contract for the Puma was signed. By 1978, IAR Brașov emerged as the sole global producer of the military Puma, manufacturing 167 complete units and 50 exported structural airframes.",
    },
    metrics: "167 elicoptere Puma + 50 structuri exportate",
    image: "/images/hero-puma.jpeg",
  },
  {
    year: "1980–1990",
    title: {
      ro: "Succesul mondial al planoarelor IS & Avioanele ușoare",
      en: "Global Success of IS Sailplanes & Light Aircraft Range",
    },
    category: "renaissance",
    aircraft: "IS-28, IS-29, IAR 823, IAR 827",
    description: {
      ro: "Proiectate de prof. ing. Iosif Șilimon, peste 820–830 de planoare și motoplanoare metalice sunt fabricate la Ghimbav și exportate în peste 20 de țări. Concomitent sunt fabricate 136 avioane ușoare de concepție proprie.",
      en: "Designed by Iosif Șilimon, over 820–830 all-metal sailplanes and motor gliders were produced and exported across 20 countries, alongside 136 light training aircraft of original design.",
    },
    metrics: "> 830 planoare & 136 avioane ușoare",
    image: "/images/istoric-3.jpeg",
  },
  {
    year: "1995–2005",
    title: {
      ro: "Programul IAR 330 SOCAT – Saltul tehnologic în luptă",
      en: "IAR 330 SOCAT Modernization – Combat Technology Leap",
    },
    category: "modern",
    aircraft: "IAR 330 SOCAT",
    description: {
      ro: "Dezvoltarea programului SOCAT transformă elicopterele Puma ale Forțelor Aeriene într-o platformă de luptă avansată zi/noapte cu sistem optoelectronic multisenzor, turelă tun 20 mm și rachete ghidate antitanc.",
      en: "The SOCAT program converted the Air Force Puma fleet into a 24/7 all-weather precision strike platform with multisensor optronics, 20mm slaved cannon and guided anti-armor missiles.",
    },
    metrics: "Platformă de luptă antitanc de generație modernă",
    image: "/images/hero-avionics.jpeg",
  },
  {
    year: "2005–2010",
    title: {
      ro: "Programul IAR 330 NAVAL pentru Fregatele Române",
      en: "IAR 330 NAVAL Integration for Maritime Operations",
    },
    category: "modern",
    aircraft: "IAR 330 NAVAL",
    description: {
      ro: "IAR modernizează și maritizează elicopterele Puma pentru operarea ambarcată pe fregatele Forțelor Navale Române: sistem de plutire, harpon de apuntare pe punte, radar maritim și echipamente antisubmarin.",
      en: "IAR adapted and marinized the Puma for shipborne flight operations on Romanian Navy frigates, integrating flotation gear, deck harpoon lock, search radar and anti-submarine capabilities.",
    },
    metrics: "Elicoptere ambarcate pentru fregatele MApN",
    image: "/images/hero-puma-2.jpeg",
  },
  {
    year: "2015",
    title: {
      ro: "Listarea la Bursa de Valori București (BVB: IARV)",
      en: "Listing on the Bucharest Stock Exchange (BVB: IARV)",
    },
    category: "modern",
    description: {
      ro: "La 14 iulie 2015 acțiunile Societății IAR S.A. sunt admise la tranzacționare pe piața reglementată a Bursei de Valori București sub simbolul IARV, deschizând o nouă etapă de transparență și guvernanță corporativă.",
      en: "On July 14, 2015, IAR S.A. shares commenced trading on the regulated market of the Bucharest Stock Exchange under the ticker IARV, ushering in heightened transparency and corporate governance.",
    },
    metrics: "BVB Symbol: IARV · ISIN: ROIARVACNOR1",
  },
  {
    year: "Prezent",
    title: {
      ro: "Centru European de Excelență MRO și Partener Strategic",
      en: "European MRO Center of Excellence & Strategic Defense Partner",
    },
    category: "modern",
    description: {
      ro: "Companie strategică a României, autorizată EASA Part 145, EASA Part 21G, AQAP 2110 NATO și RMAR 21J. Asigură mentenanța de Nivel D și Nivel I pentru flota națională de elicoptere și cooperarea industrială cu Airbus Helicopters.",
      en: "A strategic defense enterprise of national importance, certified under EASA Part 145, EASA Part 21G, NATO AQAP 2110 and RMAR 21J, driving Level D MRO sustainment and tier-1 aerospace partnerships.",
    },
    metrics: "Aeronautical Precision · Peste un secol de excelență în zbor",
    image: "/images/revizii-hangar.webp",
  },
];
