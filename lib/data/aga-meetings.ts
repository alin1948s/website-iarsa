export interface AgaDocument {
  title: string;
  type: "PDF" | "ZIP";
  url: string;
}

export interface AgaMeeting {
  id: string;
  year: number;
  date: string;
  title: string;
  type: "AGOA" | "AGEA";
  convocator: AgaDocument;
  votingRights?: AgaDocument;
  ballots?: AgaDocument;
  proxies?: AgaDocument;
  draftDecisions?: AgaDocument;
  finalDecisions?: AgaDocument;
}

export const agaMeetingsData: AgaMeeting[] = [
  // 2026
  {
    id: "aga-2026-10-06",
    year: 2026,
    date: "06-07.10.2026",
    title: "AGOA din 06/07.10.2026",
    type: "AGOA",
    convocator: {
      title: "Raport curent – Convocatorul cu Ordinea de Zi",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/09/(0) Raport curent - Convocator AGOA 06-07.10.2026-semnat.pdf",
    },
    votingRights: {
      title: "Informații privind numărul de acțiuni și drepturi de vot",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/09/informatii privind nr actiuni si drepturi de vot - AGOA 06-07.10.2026.pdf",
    },
    ballots: {
      title: "Buletine de Vot prin Corespondență",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/09/06.10.2026 Buletin de vot.zip",
    },
    proxies: {
      title: "Împuterniciri Speciale AGA",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/09/06.10.2026 IMPUTERNICIRI SPECIALE AGA.zip",
    },
    draftDecisions: {
      title: "Documente și Proiecte de Hotărâri",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/09/2026.10.06 Documente AGOA RO.zip",
    },
  },
  {
    id: "aga-2026-08-11",
    year: 2026,
    date: "11-12.08.2026",
    title: "AGOA din 11/12.08.2026",
    type: "AGOA",
    convocator: {
      title: "Raport curent – Convocator cu Decizia 24CA",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/07/(0) Raport curent - Convocator AGOA 11-12.08.2026 cu Decizia 24 CA - 06.07.2026.pdf",
    },
    votingRights: {
      title: "Informații acțiuni și drepturi de vot",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/07/informatii privind nr actiuni si drepturi de vot - AGOA 11-12.08.2026.pdf",
    },
    ballots: {
      title: "Buletine de Vot",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/07/11.08.2026 Buletin de vot.zip",
    },
    proxies: {
      title: "Împuterniciri Speciale",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/07/11.08.2026 IMPUTERNICIRI SPECIALE AGA.zip",
    },
    draftDecisions: {
      title: "Documente și Proiecte de Hotărâri",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/07/2026.08.11 Documente AGOA RO.zip",
    },
    finalDecisions: {
      title: "Raport curent după AGOA cu Hotărârea nr. 06/2026",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/08/Raport curent dupa AGOA cu Hotararea 6 - 11.08.2026 semnat.pdf",
    },
  },
  {
    id: "aga-2026-06-10",
    year: 2026,
    date: "10-11.06.2026",
    title: "AGOA din 10/11.06.2026",
    type: "AGOA",
    convocator: {
      title: "Convocator AGOA cu Decizia 17CA (revizuit)",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/05/07.05.2026 Raport curent - Convocator AGOA 10-11.06.2026 - revizuire scanat.pdf",
    },
    votingRights: {
      title: "Informații drepturi de vot",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/05/informatii privind nr actiuni si drepturi de vot - AGOA 10-11.06.2026.pdf",
    },
    ballots: {
      title: "Buletine de Vot",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/05/10.06.2026 Buletin de vot.zip",
    },
    proxies: {
      title: "Împuterniciri Speciale",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/05/10.06.2026 IMPUTERNICIRI SPECIALE AGA.zip",
    },
    draftDecisions: {
      title: "Documente AGOA",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/05/2026.06.10 Documente AGOA RO.zip",
    },
    finalDecisions: {
      title: "Hotărârea AGOA nr. 05 din 11.06.2026",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/06/Raport curent  si Hotararea AGOA 05 din 11.06.2026.pdf",
    },
  },
  {
    id: "aga-2026-04-28",
    year: 2026,
    date: "28-29.04.2026",
    title: "AGOA de Bilanț din 28/29.04.2026",
    type: "AGOA",
    convocator: {
      title: "Convocator AGOA cu Decizia 11CA",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/03/Raport curent - Convocare AGOA 28.04.2026 + decizia 11CA convocare AGOA 28.04.2026.pdf",
    },
    votingRights: {
      title: "Drepturi de vot AGOA 28.04.2026",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/03/informatii privind nr actiuni si drepturi de vot - AGOA 28-29.04.2026.pdf",
    },
    ballots: {
      title: "Buletine de Vot",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/03/28.04.2026 Buletin de vot.zip",
    },
    proxies: {
      title: "Împuterniciri Speciale",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/03/28.04.2026 IMPUTERNICIRI SPECIALE AGA.zip",
    },
    draftDecisions: {
      title: "Documente și Proiecte Hotărâri",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/03/2026.04.28 Documente AGOA.zip",
    },
    finalDecisions: {
      title: "Hotărârile AGOA 02, 03 și 04 din 28.04.2026",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/04/28.04.2026 Raport Curent cu Hotarari 02+03+04 - AGOA 28-29.04.2026 ro - scanat.pdf",
    },
  },
  {
    id: "aga-2026-02-23",
    year: 2026,
    date: "23-24.02.2026",
    title: "AGOA din 23/24.02.2026",
    type: "AGOA",
    convocator: {
      title: "Convocator AGOA cu Decizia 01CA",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/01/(0) Raport curent - Convocator AGOA 23-24.02.2026 cu Decizia 01 CA - 19.01.2026 SCANAT.pdf",
    },
    ballots: {
      title: "Buletin de vot",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/01/23.02.2026 Buletin de vot - AGOA.zip",
    },
    draftDecisions: {
      title: "Documente și proiecte hotărâri",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2026/01/2026.02.23 - Documente si proiecte hotarari AGOA.zip",
    },
    finalDecisions: {
      title: "Hotărârea AGOA nr. 01/2026",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2026/02/24.02.2026 Raport Curent cu Hotararea 01 - AGOA 23-24.02.2026 - scanat.pdf",
    },
  },

  // 2025
  {
    id: "aga-2025-12-08",
    year: 2025,
    date: "08-09.12.2025",
    title: "AGOA din 08/09.12.2025",
    type: "AGOA",
    convocator: {
      title: "Convocator AGOA cu Decizia 29CA",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2025/11/(0) Raport curent - Convocator AGOA 08-09.12.2025 cu Decizia 29 CA - 03.11.2025 SCANAT.pdf",
    },
    ballots: {
      title: "Buletine de Vot",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2025/11/08.12.2025 Buletin de vot - AGOA.zip",
    },
    draftDecisions: {
      title: "Documente și Proiecte Hotărâri",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2025/11/2025.11.08 - Documente si proiecte hotarari AGOA.zip",
    },
  },
  {
    id: "aga-2025-09-01",
    year: 2025,
    date: "01-02.09.2025",
    title: "AGEA & AGOA din 01/02.09.2025",
    type: "AGEA",
    convocator: {
      title: "Convocator AGEA cu Decizia 26CA",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2025/07/(0) Raport curent - Convocator AGEA 01-02.09.2025 cu Decizia 26 CA - 28.07.2025 SCANAT.zip",
    },
    ballots: {
      title: "Buletine de vot AGEA / AGOA",
      type: "ZIP",
      url: "https://www.iar.ro/wp-content/uploads/2025/07/01.09.2025 Buletin de vot - AGEA.zip",
    },
    finalDecisions: {
      title: "Hotărârea AGEA nr. 09/2025 și Hotărârea AGOA nr. 08/2025",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2025/09/02.09.2025 Raport Curent - AGEA 01-02.09.2025 + Hotararea 09-2025 SCANAT CORECTAT.pdf",
    },
  },
  {
    id: "aga-2025-04-28",
    year: 2025,
    date: "28-29.04.2025",
    title: "AGOA de Bilanț din 28/29.04.2025",
    type: "AGOA",
    convocator: {
      title: "Convocator AGOA cu Decizia 16CA",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2025/03/(0) Raport curent - Convocator AGOA 28-29.04.2025 cu Decizia 16 CA - 20.03.2025 - scanat.pdf",
    },
    finalDecisions: {
      title: "Hotărârile AGOA nr. 03 și 04 din 28.04.2025",
      type: "PDF",
      url: "https://www.iar.ro/wp-content/uploads/2025/04/28.04.2025 Raport Curent cu Hotarari 03+04 - AGOA 28-29.04.2025 - scanat.pdf",
    },
  },
];
