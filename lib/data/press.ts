export interface PressArticle {
  id: string;
  slug: string;
  title: { ro: string; en: string };
  date: string;
  category: "corporate" | "institutional" | "environmental";
  categoryLabel: { ro: string; en: string };
  summary: { ro: string; en: string };
  body: { ro: string[]; en: string[] };
  documentUrl?: string;
  documentType?: "PDF";
}

export const pressArticles: PressArticle[] = [
  {
    id: "press-2023-12-14",
    slug: "comunicat-finalizare-proiect-regiunea-centru",
    title: {
      ro: "Comunicat de presă: Finalizarea proiectului de sprijin la nivelul Regiunii Centru pentru pregătirea de proiecte finanțate din perioada 2021–2027",
      en: "Press Release: Completion of Central Region Smart Specialization Project (2021–2027 Programming Framework)",
    },
    date: "14.12.2023",
    category: "institutional",
    categoryLabel: { ro: "PROIECTE EUROPENE", en: "EUROPEAN PROJECTS" },
    summary: {
      ro: "IAR S.A. anunță finalizarea cu succes a proiectului de pregătire tehnologică pe domeniul specializare inteligentă, consolidând capabilitățile de inovare aeronautică.",
      en: "IAR S.A. announces the successful closing of the smart specialization technical readiness program, reinforcing aerospace engineering and innovation.",
    },
    body: {
      ro: [
        "Societatea IAR S.A. Brașov anunță finalizarea activităților aferente proiectului de sprijin la nivelul Regiunii Centru pentru pregătirea de proiecte finanțate din perioada de programare 2021–2027 pe domeniul specializare inteligentă.",
        "Proiectul a vizat creșterea capacității tehnologice, modernizarea infrastructurii de proiectare digitală și pregătirea viitoarelor linii de fabricație și mentenanță pentru echipamente aerospațiale de înaltă precizie.",
      ],
      en: [
        "IAR S.A. Brașov announces the successful completion of activities within the regional technical assistance project for the 2021–2027 smart specialization framework.",
        "The project targeted advanced digital engineering capability, design lab modernization and technical readiness for high-precision aerospace maintenance lines.",
      ],
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/2023/12/ANUNT%20IAR%20BRASOV%20finalizare%20proiect.pdf",
    documentType: "PDF",
  },
  {
    id: "press-2019-05-20",
    slug: "vizita-delegatie-guvernamentala-iar",
    title: {
      ro: "Vizită a delegației guvernamentale și a conducerii MApN la facilitățile IAR S.A. Brașov",
      en: "Official High-Level Government and Defense Delegation Visits IAR S.A. Facilities",
    },
    date: "20.05.2019",
    category: "corporate",
    categoryLabel: { ro: "EVENIMENTE CORPORATIVE", en: "CORPORATE EVENTS" },
    summary: {
      ro: "Prezentarea situației economico-financiare, a planului de producție și a programelor de modernizare a elicopterelor pentru Forțele Armate Române.",
      en: "Review of industrial financial performance, production output and ongoing helicopter fleet modernization programs for the Romanian Armed Forces.",
    },
    body: {
      ro: [
        "În data de 20 mai 2019, conducerea executivă a IAR S.A. a primit vizita unei delegații guvernamentale formate din reprezentanți ai Ministerului Economiei, Ministerului Apărării Naționale și Ministerului Finanțelor Publice.",
        "A fost prezentat stadiul derulării programelor de revizii capitale și modernizare pentru elicopterele Puma și Alouette III ale MApN, precum și perspectivele de implicare a societății în viitoarele achiziții majore de tehnică aeronautică.",
        "Discuțiile au inclus alocarea din profitul net a sumei de 15 milioane lei dedicată exclusiv finanțării programului de investiții în utilaje și facilități industriale.",
      ],
      en: [
        "On May 20, 2019, IAR S.A. executive leadership hosted an official ministerial delegation encompassing senior defense, economy and public finance leaders.",
        "Discussions covered ongoing depot-level overhaul and mission modernization schedules for Romanian Armed Forces helicopters, alongside IAR strategic participation in prospective aerospace procurements.",
        "Agreement was reached regarding the dedicated allocation of 15 million RON from company earnings directly into capital investments for advanced hangar tooling and aerospace machinery.",
      ],
    },
  },
  {
    id: "press-2019-08-28",
    slug: "anunt-mediu-modernizare-constructii",
    title: {
      ro: "Anunț public: Solicitare aviz de mediu pentru lucrări de modernizare platformă industrială",
      en: "Public Notice: Environmental Regulatory Filing for Industrial Complex Modernization",
    },
    date: "28.08.2019",
    category: "environmental",
    categoryLabel: { ro: "MEDIU & INFRASTRUCTURĂ", en: "ENVIRONMENT & INFRASTRUCTURE" },
    summary: {
      ro: "Proceduri de avizare tehnică și de mediu pentru optimizarea facilităților operaționale din cadrul complexului aeronautic Ghimbav.",
      en: "Environmental permitting procedures for technical restructuring and optimization of operational bays at the Ghimbav aerospace facility.",
    },
    body: {
      ro: [
        "Societatea IAR S.A. aduce la cunoștința publicului depunerea solicitării de emitere a avizului de mediu pentru lucrări de demolare și reconfigurare a construcțiilor industriale în vederea extinderii capacității de producție.",
      ],
      en: [
        "IAR S.A. announces the submission of technical environmental permitting files for the reconfiguration and modernization of industrial premises supporting expanded aeronautical capacity.",
      ],
    },
    documentUrl: "https://www.iar.ro/wp-content/uploads/2018/09/ANUNT-PUBLIC-solicitare-aviz-de-mediu-lucrari-de-demolare-constructii.pdf",
    documentType: "PDF",
  },
];
