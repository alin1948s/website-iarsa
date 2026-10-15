export interface ExecutiveMember {
  name: string;
  role: { ro: string; en: string };
  phone: string;
  email: string;
}

export interface GovernanceDocument {
  id: string;
  title: { ro: string; en: string };
  section: number;
  sectionTitle: { ro: string; en: string };
  date: string;
  year: number;
  fileType: "PDF" | "ZIP" | "DOCX";
  url: string;
}

export const executiveManagement: ExecutiveMember[] = [
  {
    name: "Marian-Iulian RASALIU",
    role: { ro: "Director General", en: "General Manager / CEO" },
    phone: "0268/475269",
    email: "office@iar.ro",
  },
  {
    name: "Ion DUMITRESCU",
    role: { ro: "Director Executiv Comercial și Economic", en: "Executive Commercial & Economic Director / CFO" },
    phone: "0268/475269",
    email: "office@iar.ro",
  },
  {
    name: "Ioan Alexandru CHIRIȚĂ",
    role: { ro: "Director Executiv Dezvoltare Producție", en: "Executive Production & Development Director / COO" },
    phone: "0268/475269",
    email: "office@iar.ro",
  },
];

export const independentAuditor = {
  company: "MACAVEIU CONSULT SRL",
  address: "Brașov, B-dul Griviței nr. 68, ap. 6",
  registryNumber: "J08/4/1991",
  cui: "10958796",
  representative: "Ioan MACAVEIU",
  qualifications: "Expert contabil, autorizație CAFR nr. 276",
};

export const shareholderRelations = {
  hours: "07:15 – 15:15",
  officers: [
    {
      name: "ec. Camelia CEAPRAZARU",
      phone: "+40 268.707.868 int. 1102",
      email: "camelia.ceaprazaru@iar.ro",
    },
    {
      name: "ec. Mihaela Ligia APAN",
      phone: "+40 268.707.868 int. 1115",
      email: "mihaela.ionas@iar.ro",
    },
  ],
  generalEmail: "office@iar.ro",
};

export const stockInformation = {
  exchange: "Bursa de Valori București (BVB)",
  symbol: "IARV",
  isin: "ROIARVACNOR1",
  listingDate: "14.07.2015",
  shareCapital: "47.197.132,50 lei",
  totalShares: "18.878.853",
  nominalValue: "2,50 lei",
  registry: "Depozitarul Central S.A.",
  payingAgent: "Banca Comercială Română (BCR)",
  caen: "3316 – Repararea și întreținerea aeronavelor și navelor spațiale",
};

export const governanceSections = [
  { id: 1, title: { ro: "Conducerea Administrativă și Executivă (CV-uri, Declarații de Avere și Interese)", en: "Administrative & Executive Leadership (CVs, Declarations)" } },
  { id: 2, title: { ro: "Auditorul Financiar Independent", en: "Independent Financial Auditor" } },
  { id: 3, title: { ro: "Lista Persoanelor cu Acces la Informații Privilegiate", en: "Persons with Access to Inside Information" } },
  { id: 4, title: { ro: "Declarația de Conformitate „Aplici sau Explici”", en: "Corporate Governance Statement 'Comply or Explain'" } },
  { id: 5, title: { ro: "Politica de Remunerare & Rapoartele Comitetului", en: "Remuneration Policy & Committee Reports" } },
  { id: 6, title: { ro: "Politica de Dividend a IAR S.A.", en: "Dividend Policy" } },
  { id: 7, title: { ro: "Aplicarea OUG 109/2011 & Scrisori de Așteptări MEAT", en: "Application of GEO 109/2011 & Letters of Expectations" } },
  { id: 8, title: { ro: "Contracte de Mandat", en: "Mandate Contracts" } },
  { id: 9, title: { ro: "Bugete Anuale de Investiții", en: "Annual Investment Budgets" } },
  { id: 10, title: { ro: "Rapoartele Auditorilor Financiari Independenți", en: "Independent Auditors' Reports" } },
  { id: 11, title: { ro: "Principalele Produse Realizate și Servicii Prestate", en: "Main Products Manufactured and Services Rendered" } },
  { id: 12, title: { ro: "Situația Datoriilor Societății", en: "Company Liabilities & Debts" } },
  { id: 13, title: { ro: "Cheltuieli cu Personalul", en: "Personnel Expenditures" } },
  { id: 14, title: { ro: "Obiectivul de Politică Publică al Societății IAR S.A.", en: "Public Policy Objective of IAR S.A." } },
  { id: 15, title: { ro: "Politicile Corporative ale Societății IAR S.A.", en: "Corporate Policies and Codes" } },
];
