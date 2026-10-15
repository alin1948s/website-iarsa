export interface Capability {
  id: string;
  slug: string;
  code: string;
  title: { ro: string; en: string };
  shortDescription: { ro: string; en: string };
  description: { ro: string; en: string };
  category: "mro" | "production" | "engineering" | "testing";
  heroImage: string;
  keyPoints: { ro: string[]; en: string[] };
  specifications?: { label: { ro: string; en: string }; value: string }[];
  relatedAircraft: string[];
  relatedCertifications: string[];
  featured: boolean;
}

export const capabilitiesData: Capability[] = [
  {
    id: "cap-mro-level-d",
    slug: "mentenanta-nivel-d",
    code: "MRO-LVL-D",
    title: {
      ro: "Mentenanță Nivel D & Reparații Capitale",
      en: "Level D Maintenance & Major Overhaul",
    },
    shortDescription: {
      ro: "Centru autorizat pentru inspecții majore, demontare completă, reparații de structură și revizii generale pentru elicopterele Puma și Alouette III.",
      en: "Authorized center for major inspections, complete teardown, structural repair and general overhaul for Puma and Alouette III helicopters.",
    },
    description: {
      ro: "IAR S.A. Brașov este unitatea industrială de referință din Europa Centrală și de Est pentru întreținerea de nivel D a elicopterelor din familia Puma și Alouette III. Procesul tehnologic cuprinde demontarea completă, decaparea și tratarea anticorozivă, controlul nedistructiv (NDT), revizia capitală a echipamentelor hidraulice, electrice și de avionică, urmate de asamblare pe gabarite de precizie și testări complete la sol și în zbor.",
      en: "IAR S.A. Brașov is the benchmark aerospace facility in Central and Eastern Europe for Level D maintenance of Puma and Alouette III helicopter fleets. The technological workflow includes complete disassembly, stripping and anti-corrosion treatments, non-destructive testing (NDT), overhaul of hydraulic, electrical and avionics equipment, followed by precision jig reassembly and full ground and flight acceptance testing.",
    },
    category: "mro",
    heroImage: "/images/hero-maintenance.jpeg",
    keyPoints: {
      ro: [
        "Demontare și evaluare structurală completă a celulei",
        "Control nedistructiv: Raze X, ultrasunete, particule magnetice, lichide penetrante, curenți turbionari",
        "Reparații capitale sisteme hidraulice, combustibil și transmisie mecanică",
        "Calibrare instrumente de bord și bancuri de testare dedicate",
        "Programe integrate Follow-on-Support pe toată durata ciclului de viață",
      ],
      en: [
        "Complete airframe teardown and structural integrity evaluation",
        "Non-destructive inspection: X-ray, ultrasonic, magnetic particle, dye penetrant, eddy current",
        "Overhaul of hydraulic, fuel and mechanical transmission subsystems",
        "Avionics calibration and dedicated test bench validation",
        "Integrated Follow-on-Support programs across full operating lifecycle",
      ],
    },
    specifications: [
      { label: { ro: "Platforme principale", en: "Primary Platforms" }, value: "IAR 330 Puma / IAR 316B Alouette III" },
      { label: { ro: "Autorizare întreținere", en: "Maintenance Approval" }, value: "EASA Part 145 (RO.145.0009)" },
      { label: { ro: "Standard calitate", en: "Quality Standard" }, value: "EN 9100 / ISO 9001 / AQAP 2110" },
    ],
    relatedAircraft: ["iar-330-puma", "iar-316b-alouette-iii"],
    relatedCertifications: ["part-145", "en-9100", "aqap-2110"],
    featured: true,
  },
  {
    id: "cap-hangar-revizii",
    slug: "hangar-revizii-generale",
    code: "FAC-HNR-01",
    title: {
      ro: "Hangar Revizii Generale Elicoptere",
      en: "Helicopter Major Overhaul Hangar",
    },
    shortDescription: {
      ro: "Facilitate industrială de 5.184 m² dedicată întreținerii grele, cu înălțime de 12 m și pod rulant de 3,2 tone.",
      en: "5,184 m² heavy maintenance industrial facility featuring 12m vertical clearance and 3.2t overhead crane.",
    },
    description: {
      ro: "Complexul de hangare IAR este proiectat special pentru deservirea concomitentă a mai multor aeronave cu aripă rotativă. Hangarul principal oferă o suprafață utilă de peste 5.000 m², acces prin porți industriale de 22 x 10 m, climatizare controlată, pod rulant de 3,2 tone pe întreaga lungime și acces direct la heliportul autorizat AACR al companiei.",
      en: "The IAR hangar complex is purpose-engineered for simultaneous heavy servicing of multiple rotary-wing aircraft. The primary hangar provides an operational footprint exceeding 5,000 m², 22 x 10 m industrial access doors, climate control, a 3.2-ton bridge crane spanning the full bay, and direct apron taxi access to the certified AACR heliport.",
    },
    category: "mro",
    heroImage: "/images/revizii-hangar.webp",
    keyPoints: {
      ro: [
        "Suprafață operațională continuă: 5.184 m²",
        "Înălțime liberă interioară: 12 m",
        "Porți acces aeronave: 22 x 10 m",
        "Capacitate ridicare pod rulant: 3,2 tone",
        "Conexiune directă la Heliportul IAR Brașov",
      ],
      en: [
        "Continuous operational surface: 5,184 m²",
        "Interior clear height: 12 m",
        "Aircraft gate dimensions: 22 x 10 m",
        "Overhead crane capacity: 3.2 metric tons",
        "Direct connection to certified IAR Brașov Heliport",
      ],
    },
    specifications: [
      { label: { ro: "Suprafață", en: "Footprint" }, value: "5.184 m²" },
      { label: { ro: "Înălțime utilă", en: "Clear Height" }, value: "12 m" },
      { label: { ro: "Dimensiuni porți", en: "Door Clearance" }, value: "22 m × 10 m" },
      { label: { ro: "Capacitate macara", en: "Crane Payload" }, value: "3.200 kg" },
    ],
    relatedAircraft: ["iar-330-puma", "iar-316b-alouette-iii"],
    relatedCertifications: ["certificare-heliport", "part-145"],
    featured: true,
  },
  {
    id: "cap-upgrade-programs",
    slug: "programe-modernizare",
    code: "DEV-UPG-02",
    title: {
      ro: "Programe de Modernizare & Integrare Avionică",
      en: "Modernization Programs & Avionics Integration",
    },
    shortDescription: {
      ro: "Proiectare și integrare de sisteme optoelectronice, navigație, comunicații protejate și armament pe platforme cu aripă rotativă.",
      en: "Design and integration of optronic sights, navigation suites, secure communications and weapon systems on rotary-wing platforms.",
    },
    description: {
      ro: "IAR S.A. a dezvoltat și integrat unele dintre cele mai complexe programe de modernizare aeronautică din România, printre care IAR 330 SOCAT (sistem optoelectronic și armament antitanc), IAR 330 NAVAL (echipat cu plutitori de urgență, radar maritim și armament antisubmarin pentru fregatele Forțelor Navale) și standardele SM/NATO pentru interoperabilitate în teatrele internaționale de operații.",
      en: "IAR S.A. has engineered and delivered some of the most intricate aerospace modernization programs in the region, notably the IAR 330 SOCAT (optronic combat suite and anti-tank capability), IAR 330 NAVAL (equipped with emergency flotation, maritime search radar and anti-submarine stores for Navy frigates), and NATO/SM standard upgrades enabling full multinational interoperability.",
    },
    category: "engineering",
    heroImage: "/images/hero-avionics.jpeg",
    keyPoints: {
      ro: [
        "Integrare echipamente avionică modernă: Glass Cockpit, GPS/INS, V/UHF securizat",
        "Programe majore realizate: SOCAT, NAVAL, SM, NATO, VIP",
        "Sisteme optronice de cercetare și țintire zi/noapte",
        "Compatibilitate NVG (Night Vision Goggles) pentru cabina de pilotaj",
        "Teste la sol și campanii de trageri și validare în zbor",
      ],
      en: [
        "Modern avionics suite integration: Glass Cockpit, GPS/INS, secure V/UHF",
        "Flagship programs executed: SOCAT, NAVAL, SM, NATO, VIP",
        "Day/night optronic observation and weapon targeting payloads",
        "NVG (Night Vision Goggles) cockpit compatibility modifications",
        "Ground integration, telemetry validation and live weapon flight trials",
      ],
    },
    specifications: [
      { label: { ro: "Autorizare proiectare", en: "Design Approval" }, value: "RMAR 21J (RO.AAMN.21J.00003)" },
      { label: { ro: "Conformitate militară", en: "Military Compliance" }, value: "AQAP 2110 NATO (OMCAS)" },
    ],
    relatedAircraft: ["iar-330-puma"],
    relatedCertifications: ["rmar-21j", "aqap-2110"],
    featured: true,
  },
  {
    id: "cap-manufacturing",
    slug: "fabricatie-aeronautica",
    code: "MFG-AERO-03",
    title: {
      ro: "Fabricație Structuri & Cablaje Aeronautice",
      en: "Aeronautical Structures & Harness Manufacturing",
    },
    shortDescription: {
      ro: "Producție autorizată EASA Part 21G de subansamble de structură metalică, compozite, cablaje electrice și cutii de distribuție.",
      en: "EASA Part 21G authorized manufacturing of metallic structural assemblies, composites, wiring harnesses and distribution boxes.",
    },
    description: {
      ro: "Capabilitățile de fabricație ale IAR S.A. deservesc atât programele interne de MRO și modernizare, cât și producția ca subcontractant autorizat pentru parteneri aeronautici internaționali (Airbus Helicopters). Facilitățile cuprind prelucrări mecanice de precizie, debitare CNC, sudură specială certificată, asamblare de structuri celulă, confecționare cablaje electrice de înaltă densitate și cutii de comandă.",
      en: "IAR S.A. manufacturing operations support both internal MRO / modernization programs and build-to-print subcontracts for premier aerospace OEMs (including Airbus Helicopters). Facilities feature precision machining, CNC routing, certified aerospace welding, structural airframe subassembly, high-density electrical harness looms and relay distribution panels.",
    },
    category: "production",
    heroImage: "/images/hero-puma-2.jpeg",
    keyPoints: {
      ro: [
        "Certificare EASA Part 21G (RO.21G.0006) și furnizor atestat AHRO",
        "Ansamble structurale metalice și materiale compozite",
        "Cablaje electrice complexe, unități de distribuție și cutii de comandă",
        "Prelucrări mecanice de precizie și tratamente termice anticorozive",
        "Proiectare și execuție gabarite de montaj și scule speciale",
      ],
      en: [
        "EASA Part 21G certification (RO.21G.0006) and authorized AHRO supplier status",
        "Metallic and composite structural subassemblies",
        "Complex electrical wire harnesses, power distribution and relay units",
        "Precision machining and certified chemical surface/heat treatments",
        "In-house engineering of assembly jigs and specialized aerospace tooling",
      ],
    },
    specifications: [
      { label: { ro: "Autorizare producție", en: "Production Approval" }, value: "EASA Part 21G (RO.21G.0006)" },
      { label: { ro: "Atestare furnizor", en: "OEM Supplier Status" }, value: "Airbus Helicopters Romania (AHRO)" },
    ],
    relatedAircraft: ["iar-330-puma", "iar-316b-alouette-iii"],
    relatedCertifications: ["part-21g", "ahro", "en-9100"],
    featured: true,
  },
  {
    id: "cap-laboratories",
    slug: "laboratoare-testare",
    code: "LAB-TST-04",
    title: {
      ro: "Laboratoare de Sisteme & Metrologie",
      en: "Systems Testing & Metrology Laboratories",
    },
    shortDescription: {
      ro: "Laboratoare specializate pentru sisteme hidraulice, combustibil, NAV/COMM, instrumente de bord și verificări metrologice.",
      en: "Specialized laboratories for hydraulic units, fuel circuits, NAV/COMM suites, gyro instruments and metrology verification.",
    },
    description: {
      ro: "Societatea deține o rețea de laboratoare specializate pentru verificarea, calibrarea și testarea echipamentelor de bord. Laboratoarele acoperă circuitele hidraulice de înaltă presiune, pompele și dozatoarele de carburant, stațiile de radiocomunicații și navigație, sistemele giroscopice și analizele de laborator fizico-chimice pe combustibili, lubrifianți și materiale metalice.",
      en: "The company maintains a network of dedicated test facilities for verifying, calibrating and validating on-board aircraft systems. Laboratories cover high-pressure hydraulic loops, fuel metering and pump units, radio/nav transceivers, gyroscopic instruments, and non-destructive physico-chemical testing of technical fluids and metallurgy.",
    },
    category: "testing",
    heroImage: "/images/laboratoare-sisteme.jpg",
    keyPoints: {
      ro: [
        "Laborator sisteme hidraulice și servomecanisme",
        "Laborator sisteme carburant și pompe de injecție",
        "Laborator avionică, NAV/COMM și echipamente radar",
        "Laborator instrumente de bord și sisteme giroscopice",
        "Laborator încercări mecanice, metalografie și analize fizico-chimice",
        "Laborator metrologie pentru verificări EMM",
      ],
      en: [
        "Hydraulic test bench and servo-actuator laboratory",
        "Fuel systems and injection metering laboratory",
        "Avionics, NAV/COMM and radar equipment test benches",
        "Flight instruments and gyroscopic system calibration",
        "Mechanical testing, metallography and physico-chemical testing",
        "Metrology facility for precision EMM verification",
      ],
    },
    specifications: [
      { label: { ro: "Laborator CND", en: "NDT Laboratory" }, value: "Autorizat CNCAN RX (CI RP1041)" },
      { label: { ro: "Atestare servicii", en: "Service Approval" }, value: "Airbus Helicopters Romania" },
    ],
    relatedAircraft: ["iar-330-puma", "iar-316b-alouette-iii"],
    relatedCertifications: ["cncan", "part-145", "en-9100"],
    featured: false,
  },
  {
    id: "cap-reparatii-structurale",
    slug: "reparatii-structurale",
    code: "STR-REP-05",
    title: {
      ro: "Reparații Structurale & Aliniere Celulă",
      en: "Structural Repair & Airframe Alignment",
    },
    shortDescription: {
      ro: "Restaurare integritate structurală, remediere deformări, înlocuire panouri celulă și verificări de geometrie.",
      en: "Structural integrity restoration, deformation repair, skin panel replacement and jig alignment verification.",
    },
    description: {
      ro: "Capacitatea de intervenție structurală a IAR include reparații majore la fuzelaj, grinzi de forță, grinzi de coadă și fitinguri de prindere a trenului și trenului de aterizare. Toate intervențiile se realizează pe gabarite originale de montaj, garantând păstrarea toleranțelor aerodinamice și structurale specificate de proiectantul aeronavei.",
      en: "IAR structural capabilities encompass major structural rectifications on fuselage bulkheads, tail booms, dynamic component frames and landing gear mount fittings. All interventions utilize original assembly jigs, ensuring full retention of aerodynamic geometry and load-bearing margins defined by OEM type designs.",
    },
    category: "mro",
    heroImage: "/images/hero-cockpit.jpeg",
    keyPoints: {
      ro: [
        "Aliniere pe gabarite originale de fabricație",
        "Înlocuire elemente de rezistență și panotaj din duraluminiu și titan",
        "Remedierea coroziunii și protecție de suprafață multistrat",
        "Reparații structuri compozite (fibră de sticlă / carbon)",
      ],
      en: [
        "Airframe realignment on original factory master jigs",
        "Replacement of primary duralumin and titanium structural members",
        "Corrosion remediation and multi-stage aerospace surface coating",
        "Composite laminate (fiberglass / carbon) patch and core repair",
      ],
    },
    specifications: [
      { label: { ro: "Nivel intervenție", en: "Intervention Level" }, value: "Nivel D / Heavy Structural" },
      { label: { ro: "Gabarite utilizate", en: "Tooling" }, value: "Master Jigs originale IAR / Aerospatiale" },
    ],
    relatedAircraft: ["iar-330-puma", "iar-316b-alouette-iii"],
    relatedCertifications: ["part-145", "en-9100"],
    featured: false,
  },
];
