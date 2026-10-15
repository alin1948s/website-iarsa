export interface Certification {
  id: string;
  slug: string;
  code: string;
  title: string;
  issuingAuthority: string;
  reference: string;
  category: "quality" | "civil_aviation" | "military" | "specialized";
  categoryLabel: { ro: string; en: string };
  verifiedDescription: { ro: string; en: string };
  documentUrl: string;
  validity: string;
}

export const certificationsData: Certification[] = [
  {
    id: "cert-en-9100",
    slug: "en-9100",
    code: "EN 9100:2018",
    title: "SR EN 9100 / AS9100 Aerospace Standard",
    issuingAuthority: "RINA SIMTEX Organismul de Certificare",
    reference: "Certificat EN 9100 - RINA",
    category: "quality",
    categoryLabel: { ro: "MANAGEMENTUL CALITĂȚII", en: "QUALITY MANAGEMENT" },
    verifiedDescription: {
      ro: "Sistem de Management al Calității în domeniul aeronautic și de apărare pentru proiectare, fabricație, asamblare, întreținere și reparații produse aeronautice.",
      en: "Aerospace Quality Management System certification for design, manufacturing, assembly, maintenance and overhaul of aeronautical products.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20EN%209100%20-%20RINA%20.pdf",
    validity: "Valabil / Reînnoit periodic",
  },
  {
    id: "cert-iso-9001",
    slug: "iso-9001",
    code: "SR EN ISO 9001:2015",
    title: "Sistemul de Management al Calității ISO 9001",
    issuingAuthority: "AEROQ București",
    reference: "Certificat ISO 9001 - AEROQ (Certificat nr. 007)",
    category: "quality",
    categoryLabel: { ro: "MANAGEMENTUL CALITĂȚII", en: "QUALITY MANAGEMENT" },
    verifiedDescription: {
      ro: "Certificarea sistemului integrat de management al calității implementat din faza de dezvoltare și fabricație până la service și suport post-vânzare.",
      en: "Certification of the integrated quality management system implemented from development and manufacturing through field service and customer support.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20ISO%209001%20-%20AEROQ.pdf",
    validity: "Valabil / Reînnoit anual",
  },
  {
    id: "cert-part-21g",
    slug: "part-21g",
    code: "EASA PART 21G",
    title: "Autorizarea Organizației de Producție Aeronautică (POA)",
    issuingAuthority: "Autoritatea Aeronautică Civilă Română (AACR) conform Regulamentului UE 748/2012",
    reference: "Certificat RO.21G.0006 - rev.6_25.02.2026",
    category: "civil_aviation",
    categoryLabel: { ro: "AVIAȚIE CIVILĂ", en: "CIVIL AVIATION" },
    verifiedDescription: {
      ro: "Aprobare pentru fabricația de structuri, ansamble, subansamble mecanice și compozite, cablaje electrice și cutii de comandă aeronautice.",
      en: "Production Organization Approval for aircraft structures, mechanical/composite assemblies, electrical wire harnesses and aerospace control boxes.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20de%20autorizare%20a%20organizatiei%20de%20productie%20RO.21G.0006%20-rev.6_25.02.2026.pdf",
    validity: "Valabil conform rev. 6 din 25.02.2026",
  },
  {
    id: "cert-part-145",
    slug: "part-145",
    code: "EASA PART 145",
    title: "Autorizarea Organizației de Întreținere Aeronautică (MOA)",
    issuingAuthority: "Autoritatea Aeronautică Civilă Română (AACR) conform Regulamentului UE 1321/2014",
    reference: "Certificat RO.145.0009 - rev.12_24.12.2025",
    category: "civil_aviation",
    categoryLabel: { ro: "AVIAȚIE CIVILĂ", en: "CIVIL AVIATION" },
    verifiedDescription: {
      ro: "Autorizare completă pentru lucrări de mentenanță Nivel D și Nivel I, reparații capitale, modificări de celulă și verificări de sisteme pe elicoptere.",
      en: "Maintenance Organization Approval for Level D depot overhaul, Level I line maintenance, airframe structural alterations and system checks on rotary-wing platforms.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20de%20autorizare%20a%20organizatiei%20de%20intretinere%20RO.145.0009%20-rev.12_24.12.2025.pdf",
    validity: "Valabil conform rev. 12 din 24.12.2025",
  },
  {
    id: "cert-ahro",
    slug: "ahro-supplier",
    code: "AHRO ED. 16",
    title: "Atestare Furnizor Autorizat Airbus Helicopters Romania",
    issuingAuthority: "Airbus Helicopters Romania S.A.",
    reference: "Certificat de atestare AHRO ed. 16 - 2026",
    category: "specialized",
    categoryLabel: { ro: "PARTENERIATE INDUSTRIALE", en: "INDUSTRIAL PARTNERSHIPS" },
    verifiedDescription: {
      ro: "Atestare oficială a calității serviciilor prestate de IAR ca furnizor pentru întreținerea structurilor Puma și Alouette III, fabricație de piese de schimb și încercări de laborator.",
      en: "Official accreditation of IAR capabilities as approved supplier for Puma and Alouette III airframe maintenance, spare parts manufacturing and specialized laboratory services.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20de%20atestare%20AHRO%20ed%2016%20-%202026.pdf",
    validity: "Ediția 16 - 2026",
  },
  {
    id: "cert-aqap-2110",
    slug: "aqap-2110",
    code: "NATO AQAP 2110",
    title: "Cerințe NATO pentru Asigurarea Calității în Proiectare și Producție",
    issuingAuthority: "Departamentul pentru Armamente – OMCAS (Ministerul Apărării Naționale)",
    reference: "Certificat nr. 11/2025 OMCAS",
    category: "military",
    categoryLabel: { ro: "MILITAR & NATO", en: "MILITARY & NATO" },
    verifiedDescription: {
      ro: "Certificare conform standardelor militare NATO pentru proiectarea și producția de aeronave, sisteme și echipamente de aviație, modernizare, verificări, testări și reparații.",
      en: "Certification under NATO military quality standards for the design and manufacture of aircraft, aviation systems, mission retrofits, testing and depot-level overhaul.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20nr%2011%20din%202025%20OMCAS.pdf",
    validity: "Certificat 11/2025",
  },
  {
    id: "cert-rmar-21j",
    slug: "rmar-21j",
    code: "RMAR 21J",
    title: "Aprobarea Militară a Organizației de Proiectare Aeronautică",
    issuingAuthority: "Autoritatea Aeronautică Militară Națională (AAMN)",
    reference: "Certificat RO.AAMN.21J.00003",
    category: "military",
    categoryLabel: { ro: "MILITAR & NATO", en: "MILITARY & NATO" },
    verifiedDescription: {
      ro: "Aprobare națională pentru proiectarea și modificarea aeronavelor militare, integrarea de echipamente și calificare de sisteme de misiune.",
      en: "Design Organization Approval for military aircraft structures, equipment integration and avionics mission qualification.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20de%20aprobare%20militara%20a%20organizatiei%20de%20proiectare%20RO.AAMN.21J.00003.pdf",
    validity: "Valabil",
  },
  {
    id: "cert-heliport",
    slug: "certificare-heliport",
    code: "AACR HELIPORT",
    title: "Certificare Heliport IAR Brașov",
    issuingAuthority: "Autoritatea Aeronautică Civilă Română (AACR)",
    reference: "Certificat Anexa Raport H 11 IAR Brașov / AIP România",
    category: "specialized",
    categoryLabel: { ro: "FACILITĂȚI OPERAȚIONALE", en: "OPERATIONAL FACILITIES" },
    verifiedDescription: {
      ro: "Certificarea tehnică a heliportului terestru IAR Brașov pentru operarea elicopterelor, zboruri de încercare, recepție și transfer tehnic.",
      en: "Technical aerodrome certification for the IAR Brașov surface heliport supporting helicopter flight testing, customer acceptance and flight transfers.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Certificat%20Anexa%20Raport%20H%2011%20IAR%20Brasov.pdf",
    validity: "Publicat în AIP România",
  },
  {
    id: "cert-cncan",
    slug: "cncan-rx",
    code: "CNCAN RX",
    title: "Autorizație Laborator Control Nedistructiv (CND)",
    issuingAuthority: "Comisia Națională pentru Controlul Activităților Nucleare (CNCAN)",
    reference: "Autorizație CNCAN RX nr. CI RP1041 - 2021",
    category: "specialized",
    categoryLabel: { ro: "LABORATOARE & METROLOGIE", en: "LABORATORIES & METROLOGY" },
    verifiedDescription: {
      ro: "Autorizare pentru utilizarea surselor de radiații ionizante (raze X) în cadrul controlului nedistructiv radioscopic al pieselor și structurilor aeronautice.",
      en: "Regulatory authorization for industrial ionizing radiation (X-ray radiography) utilized in non-destructive structural inspection of aviation parts.",
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/certificari/Autorizatie%20CNCAN%20RX%20nr.%20CI%20RP1041%20-%202021.pdf",
    validity: "Autorizație CI RP1041",
  },
];
