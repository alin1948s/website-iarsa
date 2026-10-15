export interface CareerPosition {
  id: string;
  slug: string;
  title: { ro: string; en: string };
  department: { ro: string; en: string };
  location: string;
  publicationDate: string;
  status: "open" | "closed";
  statusLabel: { ro: string; en: string };
  summary: { ro: string; en: string };
  description: { ro: string; en: string };
  requirements: { ro: string[]; en: string[] };
  documents: { title: string; fileType: "DOCX" | "PDF"; url: string }[];
}

export const hrContact = {
  address: "Strada Hermann Oberth, nr. 34, Ghimbav, jud. Brașov, 507075",
  department: "Serviciul Resurse Umane",
  phoneNumbers: ["0268/707868 int. 1104", "0268/707868 int. 1102", "0268/707868 int. 1106"],
  email: "office@iar.ro",
  notice: {
    ro: "Societatea va contacta candidații al căror profil corespunde cerințelor prezentate în descrierea postului, în vederea continuării procedurii de selecție.",
    en: "The company will contact candidates whose professional profile matches the published prerequisites to proceed with formal selection stages.",
  },
};

export const careerPositions: CareerPosition[] = [
  {
    id: "job-director-general",
    slug: "concurs-director-general",
    title: {
      ro: "Concurs pentru postul de Director General",
      en: "Executive Selection: General Manager / Chief Executive Officer",
    },
    department: {
      ro: "Conducerea Executivă",
      en: "Executive Board",
    },
    location: "Ghimbav, Brașov",
    publicationDate: "15.05.2026",
    status: "open",
    statusLabel: { ro: "PROCEDURĂ DE RECRUTARE ACTIVĂ", en: "ACTIVE RECRUITMENT PROCEDURE" },
    summary: {
      ro: "Selecția directorului general în conformitate cu OUG 109/2011 privind guvernanța corporativă a întreprinderilor publice.",
      en: "Executive selection of General Manager under Government Emergency Ordinance 109/2011 on corporate governance of public enterprises.",
    },
    description: {
      ro: "Societatea IAR S.A. organizează procedura de recrutare și selecție pentru ocuparea postului de Director General. Candidatul selectat va conduce activitatea operațională și strategică a companiei, reprezentând IAR în relația cu autoritățile de apărare națională, partenerii industriali internaționali și acționarii de pe piața de capital.",
      en: "IAR S.A. conducts formal recruitment for the position of General Manager. The selected executive will steer company operations, defense commitments, industrial OEM partnerships and capital market performance.",
    },
    requirements: {
      ro: [
        "Studii superioare de lungă durată absolvite cu diplomă de licență (tehnic / economic)",
        "Experiență relevantă de conducere în industria aeronautică, de apărare sau inginerie de precizie",
        "Cunoașterea aprofundată a legislației aplicabile companiilor de stat listate la bursă",
        "Abilități dovedite de negociere în contracte industriale internaționale",
      ],
      en: [
        "Master's / Bachelor's university degree in technical aerospace engineering or economics",
        "Significant executive leadership track record in aerospace, defense or advanced manufacturing",
        "Demonstrated understanding of defense procurement and capital market regulatory environments",
        "Proven expertise in leading multinational aerospace partnerships",
      ],
    },
    documents: [
      {
        title: "Anunț Recrutare Director General",
        fileType: "DOCX",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20General/ANUNT%20RECRUTARE%20v1%20DIRECTOR%20GENERAL.docx",
      },
      {
        title: "Formulare Înscriere Director General",
        fileType: "DOCX",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20General/FORMULARE%20DIRECTOR%20GENERAL.docx",
      },
      {
        title: "Plan Selecție Componentă Integrală",
        fileType: "PDF",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20General/PLAN%20SELECTIE%20COMPONENTA%20INTEGRALA%20DIR%20GEN%20SI%20DIR%20FIN%20ECONOMIC.pdf",
      },
      {
        title: "Scrisoare de Așteptări MEAT",
        fileType: "PDF",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20General/2024.02.14%20-%20SCRISOARE%20DE%20ASTEPTARI%20PRIN%20CARE%20SUNT%20STABILITE%20DEZIDERATELE%20MEAT.pdf",
      },
    ],
  },
  {
    id: "job-director-economic",
    slug: "concurs-director-financiar-economic",
    title: {
      ro: "Concurs pentru postul de Director Financiar Economic",
      en: "Executive Selection: Chief Financial Officer (CFO)",
    },
    department: {
      ro: "Direcția Comercială și Economică",
      en: "Commercial & Financial Directorate",
    },
    location: "Ghimbav, Brașov",
    publicationDate: "15.05.2026",
    status: "open",
    statusLabel: { ro: "PROCEDURĂ DE RECRUTARE ACTIVĂ", en: "ACTIVE RECRUITMENT PROCEDURE" },
    summary: {
      ro: "Selecția directorului financiar economic în conformitate cu OUG 109/2011 și legislația pieței de capital.",
      en: "Executive selection of Chief Financial Officer in accordance with GEO 109/2011 and BVB capital market standards.",
    },
    description: {
      ro: "IAR S.A. recrutează Director Financiar Economic responsabil de managementul financiar, raportările conform standardelor IFRS, relația cu ASF și BVB, elaborarea bugetelor de venituri și cheltuieli și supervizarea contractelor comerciale majore.",
      en: "IAR S.A. is recruiting a Chief Financial Officer to oversee corporate finance, IFRS financial reporting, regulatory compliance with ASF/BVB, operational budgeting and major contract cost governance.",
    },
    requirements: {
      ro: [
        "Studii superioare economice absolvite cu diplomă de licență",
        "Experiență de minim 5 ani în funcții de conducere financiar-contabilă",
        "Expertiză în raportare financiară pentru societăți listate pe piața de capital",
        "Certificare profesională (CECCAR / CAFR constituie avantaj)",
      ],
      en: [
        "University degree in economics, finance or accounting",
        "Minimum 5 years of senior financial leadership experience",
        "In-depth expertise in financial reporting for publicly traded entities",
        "Professional certification (CPA / CAFR equivalent preferred)",
      ],
    },
    documents: [
      {
        title: "Anunț Recrutare Director Financiar Economic",
        fileType: "DOCX",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20Economic/ANUNT%20RECRUTARE%20v1%20DIRECTOR%20FINANCIAR%20ECONOMIC.docx",
      },
      {
        title: "Formulare Înscriere Director Economic",
        fileType: "DOCX",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20Economic/FORMULARE%20DIRECTOR%20FINANCIAR%20ECONOMIC.docx",
      },
      {
        title: "Plan Selecție Director Financiar Economic",
        fileType: "PDF",
        url: "https://www.iar.ro/wp-content/uploads/2026/05/Concurs%20Director%20Economic/PLAN%20SELECTIE%20COMPONENTA%20INTEGRALA%20DIR%20GEN%20SI%20DIR%20FIN%20ECONOMIC.pdf",
      },
    ],
  },
];
