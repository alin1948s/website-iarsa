export type Locale = "ro" | "en";

export interface Dictionary {
  nav: {
    company: string;
    about: string;
    history: string;
    management: string;
    beneficiaries: string;
    capabilities: string;
    aircraft: string;
    mro: string;
    certifications: string;
    investors: string;
    reports: string;
    aga: string;
    governance: string;
    financialCalendar: string;
    procurement: string;
    careers: string;
    integrity: string;
    press: string;
    contact: string;
    search: string;
  };
  hero: {
    badge: string;
    est: string;
    location: string;
    bvb: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quickStats: {
      stat1: { value: string; label: string };
      stat2: { value: string; label: string };
      stat3: { value: string; label: string };
      stat4: { value: string; label: string };
    };
  };
  sections: {
    capabilitiesTitle: string;
    capabilitiesSubtitle: string;
    aircraftTitle: string;
    aircraftSubtitle: string;
    mroTitle: string;
    mroSubtitle: string;
    certificationsTitle: string;
    certificationsSubtitle: string;
    heritageTitle: string;
    heritageSubtitle: string;
    investorTitle: string;
    investorSubtitle: string;
    newsTitle: string;
    newsSubtitle: string;
    contactTitle: string;
    contactSubtitle: string;
    viewAll: string;
    readMore: string;
    downloadPdf: string;
    downloadZip: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    capabilities: string;
    investors: string;
    contactInfo: string;
    legalNotice: string;
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  ro: {
    nav: {
      company: "COMPANIE",
      about: "Despre IAR",
      history: "Istorie & Tradiție",
      management: "Conducerea Executivă",
      beneficiaries: "Beneficiari & Clienți",
      capabilities: "CAPABILITĂȚI",
      aircraft: "AERONAVE",
      mro: "MRO INDUSTRIAL",
      certifications: "CERTIFICĂRI",
      investors: "INVESTITORI",
      reports: "Raportări Financiare",
      aga: "Adunările Generale (AGA)",
      governance: "Guvernanță Corporativă",
      financialCalendar: "Calendar Financiar",
      procurement: "ACHIZIȚII",
      careers: "CARIERE",
      integrity: "INTEGRITATE",
      press: "COMUNICATE",
      contact: "CONTACT",
      search: "Caută în site...",
    },
    hero: {
      badge: "IAR S.A. BRAȘOV · AEROSPACE ENGINEERING · ROMÂNIA",
      est: "FONDAT 1925",
      location: "GHIMBAV · BRAȘOV",
      bvb: "BVB: IARV",
      headline: "Inginerie de precizie dedicată zborului.",
      subheadline: "Unicul fabricant de elicoptere din România cu un secol de tradiție aeronautică. Centru european autorizat pentru mentenanță de Nivel D, modernizare și integrare de sisteme pe platformele Puma și Alouette III.",
      ctaPrimary: "DESCOPERĂ CAPABILITĂȚILE",
      ctaSecondary: "DESPRE IAR S.A.",
      quickStats: {
        stat1: { value: "1925", label: "Anul înființării la Brașov" },
        stat2: { value: "> 360", label: "Elicoptere fabricate sub licență" },
        stat3: { value: "5.184 m²", label: "Hangar revizii majore elicoptere" },
        stat4: { value: "PART 145", label: "Aprobare întreținere EASA" },
      },
    },
    sections: {
      capabilitiesTitle: "Capabilități Aeronautice & Producție",
      capabilitiesSubtitle: "01 / CAPABILITĂȚI INDUSTRIALE INTEGRATE",
      aircraftTitle: "Flotă & Programe Aeronautice",
      aircraftSubtitle: "02 / PLATFORME CU ARIPĂ ROTATIVĂ ȘI AVIOANE",
      mroTitle: "Facilități MRO & Mentenanță Nivel D",
      mroSubtitle: "03 / INFRASTRUCTURĂ INDUSTRIALĂ GHIMBAV",
      certificationsTitle: "Certificări & Standarde Militare / Civile",
      certificationsSubtitle: "04 / SISTEME DE CALITATE ȘI AUTORIZĂRI",
      heritageTitle: "Un Secol de Istorie în Aviație",
      heritageSubtitle: "05 / TRADIȚIE INDUSTRIALĂ 1925 – PREZENT",
      investorTitle: "Relații cu Investitorii (BVB: IARV)",
      investorSubtitle: "06 / RAPORTĂRI, AGA ȘI GUVERNANȚĂ CORPORATIVĂ",
      newsTitle: "Comunicate & Evenimente",
      newsSubtitle: "07 / NOUTĂȚI ȘI CENTRU MEDIA",
      contactTitle: "Date de Contact & Sediu",
      contactSubtitle: "08 / DIALOG INSTITUȚIONAL ȘI COMERCIAL",
      viewAll: "Vezi toate",
      readMore: "Citește mai mult",
      downloadPdf: "Descarcă PDF",
      downloadZip: "Descarcă Pachet ZIP",
    },
    footer: {
      desc: "IAR S.A. Brașov este compania strategică a industriei naționale de apărare din România, specializată în producția, modernizarea și mentenanța de nivel industrial a elicopterelor.",
      quickLinks: "COMPANIE",
      capabilities: "CAPABILITĂȚI",
      investors: "INVESTITORI",
      contactInfo: "CONTACT OFICIAL",
      legalNotice: "Societate pe acțiuni listată pe Bursa de Valori București (simbol: IARV, ISIN: ROIARVACNOR1). Toate datele publicate sunt verificate conform raportărilor oficiale.",
      rights: "Toate drepturile rezervate. IAR S.A. Brașov.",
    },
  },
  en: {
    nav: {
      company: "COMPANY",
      about: "About IAR",
      history: "Aviation Heritage",
      management: "Executive Leadership",
      beneficiaries: "Clients & Operators",
      capabilities: "CAPABILITIES",
      aircraft: "AIRCRAFT",
      mro: "INDUSTRIAL MRO",
      certifications: "CERTIFICATIONS",
      investors: "INVESTORS",
      reports: "Financial Reports",
      aga: "Shareholder Meetings (AGM)",
      governance: "Corporate Governance",
      financialCalendar: "Financial Calendar",
      procurement: "PROCUREMENT",
      careers: "CAREERS",
      integrity: "INTEGRITY",
      press: "PRESS RELEASES",
      contact: "CONTACT",
      search: "Search site...",
    },
    hero: {
      badge: "IAR S.A. BRAȘOV · AEROSPACE ENGINEERING · ROMANIA",
      est: "EST. 1925",
      location: "GHIMBAV · BRAȘOV",
      bvb: "BVB: IARV",
      headline: "Engineering built for flight.",
      subheadline: "Romania's premier helicopter manufacturer with a century of aeronautical pedigree. European authorized center for Level D maintenance, mission modernization and systems integration on Puma and Alouette III platforms.",
      ctaPrimary: "EXPLORE CAPABILITIES",
      ctaSecondary: "ABOUT IAR S.A.",
      quickStats: {
        stat1: { value: "1925", label: "Established in Brașov" },
        stat2: { value: "> 360", label: "Helicopters built under license" },
        stat3: { value: "5,184 m²", label: "Helicopter major overhaul hangar" },
        stat4: { value: "PART 145", label: "EASA Maintenance Approval" },
      },
    },
    sections: {
      capabilitiesTitle: "Aerospace Capabilities & Manufacturing",
      capabilitiesSubtitle: "01 / INTEGRATED INDUSTRIAL CAPABILITIES",
      aircraftTitle: "Aircraft Fleet & Programs",
      aircraftSubtitle: "02 / ROTARY WING PLATFORMS & AIRCRAFT",
      mroTitle: "MRO Facilities & Heavy Maintenance",
      mroSubtitle: "03 / GHIMBAV INDUSTRIAL INFRASTRUCTURE",
      certificationsTitle: "Certifications & NATO / Civil Approvals",
      certificationsSubtitle: "04 / QUALITY SYSTEMS & REGULATORY AUDITS",
      heritageTitle: "A Century of Aviation Heritage",
      heritageSubtitle: "05 / INDUSTRIAL PEDIGREE 1925 – PRESENT",
      investorTitle: "Investor Relations (BVB: IARV)",
      investorSubtitle: "06 / FINANCIAL FILINGS, AGM & GOVERNANCE",
      newsTitle: "Press Releases & Communications",
      newsSubtitle: "07 / MEDIA CENTER & PUBLIC ANNOUNCEMENTS",
      contactTitle: "Official Contact & Headquarters",
      contactSubtitle: "08 / INSTITUTIONAL & COMMERCIAL CHANNELS",
      viewAll: "View all",
      readMore: "Read more",
      downloadPdf: "Download PDF",
      downloadZip: "Download ZIP Archive",
    },
    footer: {
      desc: "IAR S.A. Brașov is the strategic aerospace anchor of the Romanian defense and aerospace industry, specialized in helicopter manufacturing, upgrade programs and depot-level sustainment.",
      quickLinks: "COMPANY",
      capabilities: "CAPABILITIES",
      investors: "INVESTORS",
      contactInfo: "OFFICIAL CONTACT",
      legalNotice: "Joint-stock company traded on the Bucharest Stock Exchange (symbol: IARV, ISIN: ROIARVACNOR1). All published data is strictly verified from regulatory filings.",
      rights: "All rights reserved. IAR S.A. Brașov.",
    },
  },
};
