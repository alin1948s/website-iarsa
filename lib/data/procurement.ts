export interface ProcurementProcedure {
  id: string;
  reference: string;
  title: { ro: string; en: string };
  publicationDate: string;
  status: "active" | "archived" | "cancelled";
  statusLabel: { ro: string; en: string };
  description: { ro: string; en: string };
  documents: { title: string; fileType: "PDF" | "ZIP" | "RAR"; url: string; date?: string }[];
  clarifications?: { title: string; fileType: "PDF" | "ZIP"; url: string; date: string }[];
}

export const procurementData: ProcurementProcedure[] = [
  {
    id: "proc-2026-workstations",
    reference: "CDO-10-WS-2026",
    title: {
      ro: "Procedură Cerere de Ofertă pentru achiziția a 10 stații de lucru pentru proiectare",
      en: "Request for Quotation: Acquisition of 10 High-Performance Engineering Workstations",
    },
    publicationDate: "02.07.2026",
    status: "active",
    statusLabel: { ro: "PROCEDURĂ ACTIVĂ", en: "ACTIVE PROCEDURE" },
    description: {
      ro: "Achiziția a 10 stații de lucru profesionale configurate pentru aplicații CAD/CAM/CAE și simulări aerodinamice pentru birourile de proiectare ale IAR S.A.",
      en: "Procurement of 10 professional workstation units engineered for CAD/CAM/CAE workflows and structural modeling within the IAR S.A. design bureaus.",
    },
    documents: [
      {
        title: "Invitație de participare",
        fileType: "PDF",
        url: "https://www.iar.ro/wp-content/uploads/2026/07/ANUNT%20procedura%20.pdf",
      },
      {
        title: "Caiet de sarcini furnizare workstation",
        fileType: "PDF",
        url: "https://www.iar.ro/wp-content/uploads/2026/07/Caiet%20de%20sarcini%20furnizare%20wowrkstation.pdf",
      },
      {
        title: "Formulare de participare",
        fileType: "PDF",
        url: "https://www.iar.ro/wp-content/uploads/2026/07/Formulare.pdf",
      },
    ],
    clarifications: [
      {
        title: "Clarificări la caietul de sarcini",
        fileType: "PDF",
        date: "03.07.2026",
        url: "https://www.iar.ro/wp-content/uploads/2026/07/Clarificari.pdf",
      },
    ],
  },
  {
    id: "proc-2025-furniture",
    reference: "CDO-MOB-2025",
    title: {
      ro: "Cerere de ofertă pentru furnizare, livrare și montaj mobilier pentru birouri și laboratoare",
      en: "Tender: Supply, Delivery and Installation of Office and Laboratory Furniture",
    },
    publicationDate: "24.10.2025",
    status: "archived",
    statusLabel: { ro: "FINALIZAT / ARHIVAT", en: "COMPLETED / ARCHIVED" },
    description: {
      ro: "Dotarea spațiilor administrative și a laboratoarelor de testare cu mobilier ergonomic și suprafețe antistatice adaptate cerințelor aeronautice.",
      en: "Equipping administrative quarters and test labs with ergonomic, ESD-compliant workstations meeting aerospace facility standards.",
    },
    documents: [
      {
        title: "Pachet documentație completă cerere ofertă mobilier",
        fileType: "ZIP",
        url: "https://www.iar.ro/wp-content/uploads/2025/10/LIVRARE%20SI%20MONTAJ%20MOBILIER%20.zip",
      },
    ],
    clarifications: [
      {
        title: "Răspuns la solicitarea de clarificări procedură mobilier",
        fileType: "ZIP",
        date: "28.10.2025",
        url: "https://www.iar.ro/wp-content/uploads/2025/10/Solicitare%20clarificari.zip",
      },
    ],
  },
  {
    id: "proc-2025-lifting",
    reference: "CDO-UTIL-2025",
    title: {
      ro: "Cerere de ofertă pentru achiziția de utilaje de ridicat",
      en: "Tender: Acquisition of Heavy Lifting Machinery",
    },
    publicationDate: "29.08.2025",
    status: "archived",
    statusLabel: { ro: "FINALIZAT / ARHIVAT", en: "COMPLETED / ARCHIVED" },
    description: {
      ro: "Echipamente și instalații de ridicare pentru manipularea celulelor de elicopter și a motoarelor în secțiile de montaj și revizii.",
      en: "Heavy lifting mechanisms and hoists for handling helicopter airframes and powerplants in assembly and MRO hangar bays.",
    },
    documents: [
      {
        title: "Documentație tehnică utilaje de ridicat",
        fileType: "ZIP",
        url: "https://www.iar.ro/wp-content/uploads/2025/08/cerere%20de%20oferta%20pentru%20achizitia%20Utilaje%20de%20ridicat.zip",
      },
    ],
  },
  {
    id: "proc-2025-fea-software",
    reference: "CDO-SW-FEA-2025",
    title: {
      ro: "Achiziție Software de analiză structurală liniară și neliniară (FEA) și training",
      en: "Procurement: Finite Element Analysis (FEA) Linear and Non-Linear Software and Training",
    },
    publicationDate: "18.06.2025",
    status: "archived",
    statusLabel: { ro: "FINALIZAT / ARHIVAT", en: "COMPLETED / ARCHIVED" },
    description: {
      ro: "Pachet software avansat pentru calculul rezistenței structurale, analize de oboseală și toleranță la avarii pentru modificări de celulă aeronautică.",
      en: "Advanced software suite for structural stress calculation, fatigue analysis and damage tolerance on modified rotary-wing airframes.",
    },
    documents: [
      {
        title: "Specificații software FEA și instruire personal",
        fileType: "ZIP",
        url: "https://www.iar.ro/wp-content/uploads/2025/06/Software%20de%20analiza%20structurala.zip",
      },
    ],
  },
  {
    id: "proc-2024-modernizare-101a",
    reference: "CDO-OB101A-2024",
    title: {
      ro: "Procedură proiectare și execuție lucrări Obiectiv 101a",
      en: "Tender: Design and Execution Works for Objective 101a Building",
    },
    publicationDate: "21.11.2024",
    status: "archived",
    statusLabel: { ro: "FINALIZAT / ARHIVAT", en: "COMPLETED / ARCHIVED" },
    description: {
      ro: "Lucrări de reabilitare structurală și modernizare a infrastructurii tehnice Obiectiv 101a la platforma industrială Ghimbav.",
      en: "Structural modernization and technical facility upgrades on Objective 101a building at the Ghimbav industrial complex.",
    },
    documents: [
      {
        title: "Anunț procedură și caiet de sarcini Ob. 101a",
        fileType: "RAR",
        url: "https://www.iar.ro/wp-content/uploads/2024/11/ANUNT%20101A.rar",
      },
    ],
    clarifications: [
      {
        title: "Răspuns la solicitări de clarificări Obiectiv 101a",
        fileType: "ZIP",
        date: "28.11.2024",
        url: "https://www.iar.ro/wp-content/uploads/2024/11/Clarificari%20Ob.101.zip",
      },
    ],
  },
];
