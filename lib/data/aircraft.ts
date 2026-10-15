export interface AircraftProgram {
  id: string;
  slug: string;
  name: string;
  type: string;
  status: "current_support" | "historical";
  statusLabel: { ro: string; en: string };
  heroImage: string;
  summary: { ro: string; en: string };
  historicalContext: { ro: string; en: string };
  technicalScope: { ro: string[]; en: string[] };
  modernizationVariants?: { name: string; description: { ro: string; en: string } }[];
  verifiedProductionCount?: string;
  primaryOperators: { ro: string[]; en: string[] };
  specifications: { label: { ro: string; en: string }; value: string }[];
  relatedCapabilities: string[];
}

export const aircraftData: AircraftProgram[] = [
  {
    id: "aircraft-iar-330-puma",
    slug: "iar-330-puma",
    name: "IAR 330 PUMA",
    type: "Elicopter Mediu Multi-misiune / Rotary Wing",
    status: "current_support",
    statusLabel: {
      ro: "SUPORT OPERAȚIONAL ACTIV & MRO",
      en: "CURRENT OPERATIONAL SUPPORT & MRO",
    },
    heroImage: "/images/hero-puma.jpeg",
    summary: {
      ro: "IAR S.A. Brașov este singurul fabricant mondial din 1978 al versiunii militare a elicopterului Puma sub licență Aerospatiale (Airbus Helicopters). Astăzi, compania asigură mentenanța de Nivel D, reparații capitale, modernizări avansate de avionică și armament, precum și suport logistic integrat pentru întreaga flotă.",
      en: "IAR S.A. Brașov has been the sole worldwide manufacturer of the military variant of the Puma helicopter under Aerospatiale (Airbus Helicopters) license since 1978. Today, the company provides Level D major overhaul, life extension, complex avionics and weapon modernization, and full lifecycle fleet sustainment.",
    },
    historicalContext: {
      ro: "Contractul de licență a fost semnat în 1974 cu Aerospatiale (Franța). Producția la Brașov a totalizat 167 elicoptere PUMA, din care 61 au fost exportate în diverse țări partenere, plus 50 de structuri complete de elicopter exportate către constructorul licențiator. IAR a devenit centrul mondial de excelență pentru mentenanța și conversia acestei platforme robuste.",
      en: "The licensing agreement was concluded in 1974 with Aerospatiale (France). Romanian production at Brașov reached 167 PUMA helicopters, 61 of which were exported to partner defense forces, alongside 50 complete helicopter airframes exported to the OEM. IAR established itself as the premier global depot for heavy maintenance and mission conversions of this airframe.",
    },
    verifiedProductionCount: "167 elicoptere complete + 50 structuri celulă",
    technicalScope: {
      ro: [
        "Inspecții periodice și revizii generale (Nivel D și Nivel I)",
        "Reparații capitale celulă, tren de aterizare și componente dinamice",
        "Modernizare avionică și compatibilizare cu cerințele NATO",
        "Testare la sol și în zbor pe heliportul propriu",
        "Programe Follow-on-Support, piese de schimb și asistență tehnică operativă",
      ],
      en: [
        "Scheduled servicing and major depot overhaul (Level D and Level I)",
        "Complete structural, landing gear and dynamic component restoration",
        "Avionics upgrade suites and NATO interoperability retrofits",
        "Ground diagnostic runs and flight acceptance testing on dedicated heliport",
        "Follow-on-Support agreements, spare part provisioning and on-site engineering field service",
      ],
    },
    modernizationVariants: [
      {
        name: "IAR 330 SOCAT",
        description: {
          ro: "Configurație antitanc și cercetare echipată cu turelă optoelectronică zi/noapte, tun automat 20 mm, rachete antitanc ghidate și compatibilitate NVG.",
          en: "Combat anti-tank and reconnaissance variant fitted with day/night optronic turret, 20mm cannon, guided anti-tank missiles and full NVG cockpit compatibility.",
        },
      },
      {
        name: "IAR 330 NAVAL",
        description: {
          ro: "Variantă marinizată dezvoltată pentru Forțele Navale Române, integrată pe fregate, cu sistem de plutire de urgență, radar de navigație maritim și capabilități antisubmarin.",
          en: "Maritime warfare variant designed for the Romanian Naval Forces, frigate-embarked, featuring emergency flotation equipment, search radar and anti-submarine stores.",
        },
      },
      {
        name: "IAR 330 SM (Standard Modernizat)",
        description: {
          ro: "Modernizare complexă de transport trupe și evacuare medicală MEDEVAC cu avionică digitală modernă, sistem integrat de navigație și comunicații protejate.",
          en: "Tactical transport and MEDEVAC modern package featuring modern digital flight display architecture, integrated GPS/INS and secure communications.",
        },
      },
      {
        name: "IAR 330 VIP",
        description: {
          ro: "Configurație de transport oficial cu izolare fonică îmbunătățită, interior dedicat și sisteme redundante de navigație.",
          en: "Executive transport configuration with acoustic dampening, customized interior cabin layout and redundant navigation suites.",
        },
      },
    ],
    primaryOperators: {
      ro: [
        "Ministerul Apărării Naționale – Forțele Aeriene Române",
        "Ministerul Apărării Naționale – Forțele Navale Române",
        "Serviciul Român de Informații",
        "Ministerul Afacerilor Interne",
        "Operatori internaționali: E.A.U., Pakistan, Sudan, Coasta de Fildeș, Liban, Oman",
      ],
      en: [
        "Ministry of National Defence – Romanian Air Force",
        "Ministry of National Defence – Romanian Naval Forces",
        "Romanian Intelligence Service (SRI)",
        "Ministry of Internal Affairs (MAI)",
        "International operators: UAE, Pakistan, Sudan, Ivory Coast, Lebanon, Oman",
      ],
    },
    specifications: [
      { label: { ro: "Tip aeronavă", en: "Aircraft Type" }, value: "Elicopter mediu bimotor" },
      { label: { ro: "Licență inițială", en: "Original License" }, value: "Aerospatiale SA330 Puma (1974)" },
      { label: { ro: "Statut fabricație", en: "Status" }, value: "Unic fabricant versiune militară din 1978" },
      { label: { ro: "Capabilitate actuală", en: "Current Scope" }, value: "MRO Nivel D, Revizii Majore, Modernizare" },
      { label: { ro: "Standard conformitate", en: "Quality Standard" }, value: "EASA Part 145 / Part 21G / AQAP 2110" },
    ],
    relatedCapabilities: ["mentenanta-nivel-d", "hangar-revizii-generale", "programe-modernizare", "fabricatie-aeronautica"],
  },
  {
    id: "aircraft-iar-316b-alouette",
    slug: "iar-316b-alouette-iii",
    name: "IAR 316B ALOUETTE III",
    type: "Elicopter Ușor Utilitar & Școală / Rotary Wing",
    status: "current_support",
    statusLabel: {
      ro: "SUPORT OPERAȚIONAL ACTIV & MRO",
      en: "CURRENT OPERATIONAL SUPPORT & MRO",
    },
    heroImage: "/images/hero-alouette.jpeg",
    summary: {
      ro: "Fabricat sub licență Aerospatiale din anul 1971, IAR 316B este un elicopter extrem de fiabil folosit în misiuni de instruire avansată a piloților, legătură, observare și utilitate generală. IAR continuă să asigure întreținerea structurală, revizia componentelor dinamice și suportul tehnic pentru beneficiari.",
      en: "Manufactured under Aerospatiale license starting in 1971, the IAR 316B is a proven light utility helicopter operating in pilot flight training, liaison, observation and multi-role utility missions. IAR continues to provide full airframe overhaul, dynamic systems support and technician training.",
    },
    historicalContext: {
      ro: "IAR S.A. a fabricat peste 200 de elicoptere IAR 316B Alouette III sub licență Aerospatiale (Airbus Helicopters), din care 75 au fost exportate în diverse configurații și teatre de operații. Pe baza acestei platforme, IAR a dezvoltat în anii '80 și prototipul elicopterului de atac IAR 317 Airfox.",
      en: "IAR S.A. manufactured over 200 IAR 316B Alouette III helicopters under Aerospatiale (Airbus Helicopters) license, 75 of which were delivered to international armed forces. Building on this airframe, IAR also developed the experimental IAR 317 Airfox dedicated gunship prototype during the 1980s.",
    },
    verifiedProductionCount: "Peste 200 elicoptere fabricate (75 exportate)",
    technicalScope: {
      ro: [
        "Întreținere curentă și revizii capitale celulă",
        "Revizie echipamente hidraulice, comenzi de zbor și tren de aterizare",
        "Fabricație de piese de schimb și componente de structură atestate AHRO",
        "Școlarizarea piloților și a personalului tehnic aeronautic",
      ],
      en: [
        "Periodic depot inspections and complete airframe overhaul",
        "Inspection and maintenance of hydraulic circuits, flight controls and skids",
        "Manufacturing of replacement parts and structural subassemblies certified by AHRO",
        "Technical courses and operational training for pilots and maintenance crews",
      ],
    },
    primaryOperators: {
      ro: [
        "Ministerul Apărării Naționale – Forțele Aeriene Române",
        "Școala de Aplicație pentru Forțele Aeriene",
        "Operatori aerieni civili și internaționali",
      ],
      en: [
        "Ministry of National Defence – Romanian Air Force",
        "Air Force Training Academy",
        "Civil and international operators",
      ],
    },
    specifications: [
      { label: { ro: "Tip aeronavă", en: "Aircraft Type" }, value: "Elicopter ușor monoturbină" },
      { label: { ro: "Producție licență", en: "Licensed Production" }, value: "Aerospatiale SA316B Alouette III (1971)" },
      { label: { ro: "Exemplare produse", en: "Units Built" }, value: "Peste 200 unități" },
      { label: { ro: "Servicii oferite", en: "Active Services" }, value: "Mentenanță, Piese de schimb, Școlarizare" },
    ],
    relatedCapabilities: ["mentenanta-nivel-d", "fabricatie-aeronautica", "laboratoare-testare"],
  },
  {
    id: "aircraft-iar-80-81",
    slug: "iar-80-81",
    name: "IAR 80 & IAR 81",
    type: "Avion de Vânătoare Monoplan / Patrimoniu Istoric",
    status: "historical",
    statusLabel: {
      ro: "PROGRAM ISTORIC INTERBELIC",
      en: "HISTORICAL AEROSPACE PROGRAM",
    },
    heroImage: "/images/istoric-1.jpeg",
    summary: {
      ro: "Conceput și fabricat integral la uzinele IAR Brașov începând cu 1939, IAR 80 a fost unul dintre cele mai performante avioane de vânătoare monoplane de concepție proprie din Europa în prima parte a celui de-al Doilea Război Mondial.",
      en: "Designed and manufactured in-house at IAR Brașov starting in 1939, the IAR 80 was one of Europe's top-performing monoplane fighters of original indigenous design during the early World War II era.",
    },
    historicalContext: {
      ro: "Proiectat de o echipă condusă de ing. Ion Grosu, IAR 80 îmbina o structură metalică modernă cu motorul radial IAR 14K (produs tot la Brașov). Între 1927 și 1944, uzinele IAR din Brașov au produs peste 1.000 de avioane și 2.000 de motoare de aviație, atingând în anul 1942 o forță de muncă de 7.000 de angajați și o cadență industrială de 1 avion livrat pe zi.",
      en: "Engineered under the leadership of Ion Grosu, the IAR 80 married an advanced all-metal airframe with the IAR 14K radial powerplant (also built in Brașov). Between 1927 and 1944, IAR Brașov manufactured over 1,000 aircraft and 2,000 aero engines, reaching 7,000 employees and an industrial output rate of 1 aircraft per day in 1942.",
    },
    verifiedProductionCount: "Peste 400 exemplare (variante 80 / 81)",
    technicalScope: {
      ro: [
        "Structură monococă integral metalică cu aripă joasă cantilever",
        "Motorizare: IAR 14K radial, fabricat sub licență la Brașov",
        "Armament: Tunuri Ikaria / MG FF 20 mm și mitraliere grele",
        "Varianta IAR 81 echipată cu lansator de bombe pentru bombardament în picaj",
      ],
      en: [
        "All-metal stressed-skin monocoque cantilever monoplane",
        "Powerplant: IAR 14K radial engine, manufactured under license in Brașov",
        "Armament: Ikaria / MG FF 20mm cannons and heavy machine guns",
        "IAR 81 dive bomber variant with under-fuselage bomb trapeze",
      ],
    },
    primaryOperators: {
      ro: ["Aeronautica Regală Română (1940–1949)"],
      en: ["Royal Romanian Air Force (1940–1949)"],
    },
    specifications: [
      { label: { ro: "Anul primului zbor", en: "First Flight" }, value: "1939" },
      { label: { ro: "Statut", en: "Classification" }, value: "Patrimoniu Istoric Național" },
      { label: { ro: "Producător", en: "Manufacturer" }, value: "Industria Aeronautică Română (IAR Brașov)" },
    ],
    relatedCapabilities: ["reparatii-structurale"],
  },
  {
    id: "aircraft-is-gliders",
    slug: "planoare-is-silimon",
    name: "GAMA DE PLANOARE ȘI MOTOPLANOARE IS",
    type: "Planoare de Școală, Antrenament & Performanță",
    status: "historical",
    statusLabel: {
      ro: "PROGRAM ISTORIC ICA GHIMBAV",
      en: "HISTORICAL AEROSPACE PROGRAM",
    },
    heroImage: "/images/istoric-3.jpeg",
    summary: {
      ro: "Începând cu 1968, ICA Ghimbav (IAR) a proiectat și fabricat peste 820–830 de planoare și motoplanoare din familia IS (concepute de ing. Iosif Șilimon), exportate în peste 20 de țări de pe 4 continente.",
      en: "Beginning in 1968, ICA Ghimbav (IAR) engineered and built over 820–830 sailplanes and motor gliders of the IS family (designed by Iosif Șilimon), successfully exported to over 20 countries across four continents.",
    },
    historicalContext: {
      ro: "Planoarele metalice din seria IS-28 și IS-29 au consacrat uzina din Ghimbav pe piața mondială a aviației sportive. Cu caracteristici aerodinamice remarcabile și o rezistență structurală deosebită, aceste aeronave au stabilit numeroase recorduri de distanță și altitudine și au format zeci de mii de piloți.",
      en: "The all-metal IS-28 two-seater and IS-29 single-seat sailplanes positioned Ghimbav prominently in the global soaring market. Renowned for robust construction and clean aerodynamics, they set multiple altitude and distance records while training generations of aviators.",
    },
    verifiedProductionCount: "Peste 820–830 planoare și motoplanoare",
    technicalScope: {
      ro: [
        "Modele realizate: IS-28, IS-28B, IS-28B2, IS-29B, IS-29D, IS-29E, IS-30, IS-32",
        "Motoplanoare: IS-28M1, IS-28M2, IS-28M2G, IS-28M2GR",
        "Construcție integral metalică din aliaje speciale de duraluminiu",
      ],
      en: [
        "Produced types: IS-28, IS-28B, IS-28B2, IS-29B, IS-29D, IS-29E, IS-30, IS-32",
        "Powered motor gliders: IS-28M1, IS-28M2, IS-28M2G, IS-28M2GR",
        "All-metal duralumin monocoque airframe construction",
      ],
    },
    primaryOperators: {
      ro: ["Aeroclubul României", "Cluburi de zbor din SUA, Canada, Marea Britanie, Australia, Germania, Franța"],
      en: ["Romanian Airclub", "Civil soaring federations in USA, UK, Canada, Australia, Germany, France"],
    },
    specifications: [
      { label: { ro: "Proiectant principal", en: "Chief Designer" }, value: "Prof. Ing. Iosif Șilimon" },
      { label: { ro: "Perioadă producție", en: "Production Era" }, value: "1968–1990+" },
      { label: { ro: "Total unități", en: "Total Produced" }, value: "830 unități" },
    ],
    relatedCapabilities: ["fabricatie-aeronautica"],
  },
  {
    id: "aircraft-iar-823",
    slug: "iar-823-avioane-usoare",
    name: "IAR 823 & AVIOANE UȘOARE",
    type: "Avion Ușor Monomotor de Școală și Legătură",
    status: "historical",
    statusLabel: {
      ro: "PROGRAM ISTORIC ICA GHIMBAV",
      en: "HISTORICAL AEROSPACE PROGRAM",
    },
    heroImage: "/images/istoric-5.jpeg",
    summary: {
      ro: "Avion ușor cu 4 locuri proiectat și fabricat la Brașov pentru instruirea de bază a piloților militari și civili. În total, IAR a produs 136–140 de avioane ușoare în concepție proprie (gamele IAR-822, 823, 825, 827, 828, 831, 35, 46).",
      en: "Four-seat primary trainer and liaison aircraft developed at Brașov for military pilot training and utility aviation. In total, IAR built 136–140 light aircraft of original design (IAR-822, 823, 825, 827, 828, 831, 35, 46).",
    },
    historicalContext: {
      ro: "IAR 823 a echipat Forțele Aeriene Române și Aeroclubul României începând din 1974. Avionul a fost certificat atât pentru acrobație aeriană cât și pentru zbor fără vizibilitate (IFR), fiind apreciat pentru manevrabilitatea și stabilitatea sa.",
      en: "The IAR 823 entered service with the Romanian Air Force and civil aero clubs in 1974. Fully aerobatic-rated and IFR equipped, the type was widely praised for its docile flight characteristics, cross-country range and rugged landing gear.",
    },
    verifiedProductionCount: "136–140 avioane ușoare fabricate",
    technicalScope: {
      ro: [
        "Aripă joasă cantilever și tren de aterizare escamotabil",
        "Motor Lycoming IO-540 de 290 CP cu elice pas variabil",
        "Omologat pentru instrucție primară, acrobație și zbor IFR",
      ],
      en: [
        "Low-wing cantilever layout with retractable tricycle landing gear",
        "Lycoming IO-540 290 hp engine with variable pitch propeller",
        "Fully certified for primary military training, aerobatics and IFR operations",
      ],
    },
    primaryOperators: {
      ro: ["Forțele Aeriene Române", "Aeroclubul României", "Forțele Aeriene din Angola"],
      en: ["Romanian Air Force", "Romanian Airclub", "Angolan Air Force"],
    },
    specifications: [
      { label: { ro: "Primul zbor", en: "First Flight" }, value: "1973" },
      { label: { ro: "Locuri", en: "Seats" }, value: "4 (pilot + instructor + 2 pasageri)" },
      { label: { ro: "Motor", en: "Engine" }, value: "Lycoming IO-540-G1D5 (290 CP)" },
    ],
    relatedCapabilities: ["reparatii-structurale", "fabricatie-aeronautica"],
  },
];
