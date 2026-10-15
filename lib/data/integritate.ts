export interface IntegrityDocument {
  id: string;
  title: { ro: string; en: string };
  category: "sna" | "ethics" | "gifts" | "risks" | "public_info";
  date: string;
  fileType: "PDF" | "ZIP";
  url: string;
}

export const integrityNotice = {
  whistleblowerEmail: "avertizor.integritate@iar.ro",
  officeEmail: "office@iar.ro",
  disclaimers: {
    ro: [
      "Societatea IAR S.A. nu a primit subvenție operațională de la bugetul de stat.",
      "Societatea IAR S.A. nu îndeplinește obligații de interes public impuse în regim reglementat.",
    ],
    en: [
      "IAR S.A. has received no operational state budget subsidies.",
      "IAR S.A. discharges no mandated public service obligations beyond standard industrial operations.",
    ],
  },
};

export const integrityDocuments: IntegrityDocument[] = [
  {
    id: "integ-plan-2026",
    title: {
      ro: "Planul de Integritate IAR S.A. 2026",
      en: "IAR S.A. Integrity Plan 2026",
    },
    category: "sna",
    date: "10.02.2026",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2026/02/Plan%20de%20integritate%20IAR%20SA%202026.pdf",
  },
  {
    id: "integ-cod-etica",
    title: {
      ro: "Codul de Etică și Conduită Profesională (cu Decizia 14CA din 23.08.2024)",
      en: "Code of Ethics and Professional Conduct (CA Decision 14/23.08.2024)",
    },
    category: "ethics",
    date: "23.08.2024",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2026/02/Codul%20de%20etica%20cu%20Decizia%2014CA%20-%2023.08.2024.pdf",
  },
  {
    id: "integ-consilier-etic",
    title: {
      ro: "Numire Consilier Etic și Comisie Analiză Cadouri (Decizia nr. 79 din 04.11.2025)",
      en: "Appointment of Ethics Advisor and Gift Analysis Committee (Decision 79/04.11.2025)",
    },
    category: "ethics",
    date: "04.11.2025",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2026/02/Decizia%2079%20-%2004.11.2025%20-%20numire%20consilier%20etic%20si%20comisie%20analiza%20cadouri.pdf",
  },
  {
    id: "integ-rap-etica-2025",
    title: {
      ro: "Raport anual privind respectarea Codului de Etică și Integritate 2025",
      en: "Annual Report on Compliance with Code of Ethics and Integrity 2025",
    },
    category: "ethics",
    date: "15.02.2026",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2026/02/Raport%20anual%20respectare%20cod%20etica%20si%20integritate_2025.pdf",
  },
  {
    id: "integ-rap-cadouri-2025",
    title: {
      ro: "Raport anual al Comisiei de Evaluare a Bunurilor Primite cu Titlu Gratuit (Cadouri) 2025",
      en: "Annual Report of the Gift Assessment Committee 2025",
    },
    category: "gifts",
    date: "15.02.2026",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2026/02/Raport%20anual%20comisie%20cadouri_2025.pdf",
  },
  {
    id: "integ-mecanism-avertizor",
    title: {
      ro: "Planul de Integritate al IAR și Mecanismul de Raportare al Avertizorului de Integritate",
      en: "Integrity Plan and Whistleblower Reporting Mechanism",
    },
    category: "sna",
    date: "13.05.2025",
    fileType: "ZIP",
    url: "https://www.iar.ro/wp-content/uploads/2025/05/Plan de integritate si mecanism raportare de catre avertizorul de integritate.zip",
  },
  {
    id: "integ-registru-riscuri-coruptie",
    title: {
      ro: "Registrul Riscurilor de Corupție – IAR S.A.",
      en: "Corruption Risk Register – IAR S.A.",
    },
    category: "risks",
    date: "28.04.2025",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2025/07/Registrul riscuri coruptie  IAR 2025-04-28_13-56-15.pdf",
  },
  {
    id: "integ-aderare-sna-2021-2025",
    title: {
      ro: "Declarație de Aderare a IAR S.A. la Strategia Națională Anticorupție (SNA) 2021–2025",
      en: "Declaration of Adherence to the National Anti-Corruption Strategy (SNA) 2021–2025",
    },
    category: "sna",
    date: "20.09.2021",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2018/09/DECLARATIE-ADERARE-IAR-LA-SNA-2021-2025.pdf",
  },
  {
    id: "integ-informatii-publice",
    title: {
      ro: "Desemnarea Responsabilului cu Difuzarea Informațiilor de Interes Public",
      en: "Appointment of Public Information Access Officer",
    },
    category: "public_info",
    date: "15.03.2021",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2021/03/RESPONSABILUL-CU-DIFUZAREA-INFORMAȚIILOR-DE-INTERES-PUBLIC.pdf",
  },
  {
    id: "integ-politica-publica",
    title: {
      ro: "Obiectivele de Politică Publică ale Societății IAR S.A.",
      en: "Public Policy Objectives of IAR S.A.",
    },
    category: "public_info",
    date: "16.05.2024",
    fileType: "PDF",
    url: "https://www.iar.ro/wp-content/uploads/2024/05/2024.05.16 - Obiectivele de politica publica.pdf",
  },
];
