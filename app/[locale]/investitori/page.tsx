import React from "react";
import Link from "next/link";
import {
  Download,
  Calendar,
  ChevronRight,
  TrendingUp,
  ExternalLink,
  Phone,
  Mail,
  ArrowDownToLine,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { investorDocuments } from "@/lib/data/investor-documents";
import { stockInformation, shareholderRelations } from "@/lib/data/governance";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function InvestorDashboardPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const latestReports = investorDocuments.slice(0, 6);

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-07 / RELAȚII INVESTITORI"
        badge="SIMBOL BVB: IARV · ISIN: ROIARVACNOR1"
        title={locale === "ro" ? "Centrul pentru Investitori & Acționari" : "Investor Relations & Capital Markets"}
        description={
          locale === "ro"
            ? "Portalul dedicat acționarilor IAR S.A. Brașov. Rapoarte financiare periodice și anuale (ESEF), adunări generale (AGA), guvernanță corporativă conform OUG 109/2011, calendar financiar și proceduri de plată dividende."
            : "Dedicated portal for IAR S.A. Brașov shareholders. Periodic and annual audited reports (ESEF), general shareholder assemblies (AGM), corporate governance (GEO 109/2011), and financial calendar."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Investitori" : "Investors",
            href: `/${locale}/investitori`,
          },
        ]}
        locale={locale}
      />

      {/* Quick Navigation Cards: 2-Click Guarantee */}
      <section className="py-16 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href={`/${locale}/investitori/raportari`}
              className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-7 hover:border-sky-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold rounded-md">
                    ESEF / IFRS
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">2011–2026</span>
                </div>
                <div className="text-xl font-bold font-sans text-white group-hover:text-sky-300 transition-colors">
                  {locale === "ro" ? "Raportări Financiare" : "Financial Filings"}
                </div>
                <div className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                  {locale === "ro" ? "Arhivă completă de rapoarte anuale auditate, semestriale și trimestriale." : "Complete archive of audited annual, half-year and quarterly filings."}
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs font-semibold text-sky-400 flex items-center justify-between font-sans">
                <span>ARHIVĂ DESCHISĂ</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href={`/${locale}/investitori/aga`}
              className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-7 hover:border-amber-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-md">
                    AGOA / AGEA
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">HOTĂRÂRI</span>
                </div>
                <div className="text-xl font-bold font-sans text-white group-hover:text-amber-300 transition-colors">
                  {locale === "ro" ? "Adunările Generale (AGA)" : "Shareholder Meetings"}
                </div>
                <div className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                  {locale === "ro" ? "Convocatoare oficiale, buletine de vot prin corespondență și hotărâri adoptate." : "Official convocations, postal ballots, special proxies, and adopted resolutions."}
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs font-semibold text-amber-400 flex items-center justify-between font-sans">
                <span>CONSULTĂ ȘEDINȚELE</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href={`/${locale}/investitori/guvernanta-corporativa`}
              className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-7 hover:border-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold rounded-md">
                    OUG 109 / BVB
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">15 SECȚIUNI</span>
                </div>
                <div className="text-xl font-bold font-sans text-white group-hover:text-emerald-300 transition-colors">
                  {locale === "ro" ? "Guvernanță Corporativă" : "Corporate Governance"}
                </div>
                <div className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                  {locale === "ro" ? "Directorat executiv, auditor independent Macaveiu Consult SRL și politici de etică." : "Executive board, independent auditor, remuneration and corporate compliance codes."}
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs font-semibold text-emerald-400 flex items-center justify-between font-sans">
                <span>CADRU DE CONDUCERE</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href={`/${locale}/investitori/calendar-financiar`}
              className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-7 hover:border-sky-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold rounded-md">
                    BVB 2026
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">ORAR RAPORTĂRI</span>
                </div>
                <div className="text-xl font-bold font-sans text-white group-hover:text-sky-300 transition-colors">
                  {locale === "ro" ? "Calendar Financiar" : "Financial Calendar"}
                </div>
                <div className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                  {locale === "ro" ? "Graficul oficial al comunicării rezultatelor financiare către piața de capital." : "Mandatory reporting timetable communicated to the stock exchange and ASF."}
                </div>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-800/80 text-xs font-semibold text-sky-400 flex items-center justify-between font-sans">
                <span>VEZI DATELE OFICIALE</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stock Information & Shareholder Structure */}
      <section className="py-20 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Stock Parameters */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
                  {locale === "ro" ? "PROFIL BURSĂ" : "STOCK METRICS"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-1">
                  {locale === "ro" ? "Informații Acțiuni IAR S.A." : "IARV Stock Profile"}
                </h2>
              </div>

              <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 divide-y divide-slate-800/80 font-mono text-xs shadow-xl">
                <div className="py-3 first:pt-0 flex items-center justify-between">
                  <span className="text-slate-400 font-sans">Simbol Tranzacționare:</span>
                  <span className="text-sky-400 font-bold text-sm">{stockInformation.symbol}</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-slate-400 font-sans">Cod ISIN:</span>
                  <span className="text-white font-bold">{stockInformation.isin}</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-slate-400 font-sans">Piața de Tranzacționare:</span>
                  <span className="text-white">{stockInformation.exchange}</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-slate-400 font-sans">Capital Social Subscris & Vărsat:</span>
                  <span className="text-white font-bold">{stockInformation.shareCapital}</span>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-slate-400 font-sans">Număr Total Acțiuni:</span>
                  <span className="text-white font-bold">{stockInformation.totalShares}</span>
                </div>
                <div className="py-3 last:pb-0 flex items-center justify-between">
                  <span className="text-slate-400 font-sans">Valoare Nominală:</span>
                  <span className="text-white">{stockInformation.nominalValue}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://bvb.ro/FinancialInstruments/Details/FinancialInstrumentsDetails.aspx?s=IARV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 rounded-xl text-xs font-sans font-semibold text-sky-300 transition-colors uppercase tracking-wider"
                >
                  <ExternalLink className="w-4 h-4 text-sky-400" />
                  <span>{locale === "ro" ? "Vezi cotația live pe BVB.ro" : "View Live BVB Quotes"}</span>
                </a>
              </div>
            </div>

            {/* Shareholder Structure & Investor Relations Contact */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
                  {locale === "ro" ? "STRUCTURĂ ACȚIONARIAT" : "SHAREHOLDER STRUCTURE"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-1">
                  {locale === "ro" ? "Distribuția Capitalului Social" : "Capital Distribution"}
                </h2>
              </div>

              <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 font-sans text-xs shadow-xl">
                <div>
                  <div className="flex justify-between mb-2.5">
                    <span className="text-white font-semibold text-sm">Statul Român prin Ministerul Economiei</span>
                    <span className="text-sky-400 font-bold font-mono text-sm">64,89%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-sky-600 to-sky-400 h-full rounded-full" style={{ width: "64.89%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2.5">
                    <span className="text-slate-300 text-sm">Alți Acționari (persoane fizice și juridice)</span>
                    <span className="text-slate-200 font-bold font-mono text-sm">35,11%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-slate-600 h-full rounded-full" style={{ width: "35.11%" }} />
                  </div>
                </div>
              </div>

              {/* Dedicated Shareholder Contact Box */}
              <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 font-sans text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="text-sm font-bold text-white uppercase font-sans">
                    {locale === "ro" ? "Serviciul Relații cu Acționarii" : "Shareholder Relations Office"}
                  </div>
                  <div className="text-slate-400 font-mono text-[11px]">
                    {shareholderRelations.hours}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {shareholderRelations.officers.map((officer, idx) => (
                    <div key={idx} className="bg-[#070e18] border border-slate-800/80 rounded-xl p-3.5 space-y-1">
                      <div className="text-white font-bold font-sans">{officer.name}</div>
                      <div className="text-slate-400 font-mono text-[11px]">{officer.phone}</div>
                      <a href={`mailto:${officer.email}`} className="text-sky-400 hover:underline block text-[11px] font-mono">
                        {officer.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Documents Preview */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
                {locale === "ro" ? "RAPORTĂRI RECENTE" : "RECENT FILINGS"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-1">
                {locale === "ro" ? "Ultimele Rapoarte Publicate" : "Latest Published Reports"}
              </h2>
            </div>
            <Link
              href={`/${locale}/investitori/raportari`}
              className="text-xs font-sans text-sky-400 hover:text-sky-300 uppercase flex items-center gap-1 font-semibold tracking-wider"
            >
              <span>{locale === "ro" ? "Accesează Arhiva Completă (2011–2026)" : "Access Full Archive"}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {latestReports.map((rep) => (
              <div
                key={rep.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 hover:border-sky-500/50 hover:shadow-lg transition-all shadow-md group"
              >
                <div className="space-y-1.5 pr-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <Badge variant="aviation">{rep.categoryLabel[locale]}</Badge>
                    <span className="text-slate-400">{rep.publicationDate}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors line-clamp-1 font-sans">
                    {rep.title}
                  </h3>
                </div>

                <a
                  href={rep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-sans font-bold uppercase flex items-center gap-1.5 flex-shrink-0 shadow-sm"
                >
                  <ArrowDownToLine className="w-3.5 h-3.5" />
                  <span>{rep.fileType}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
