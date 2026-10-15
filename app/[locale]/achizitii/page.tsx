import React from "react";
import {
  FileText,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Briefcase,
  Layers,
  ArrowDownToLine,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { procurementData } from "@/lib/data/procurement";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProcurementPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const activeTenders = procurementData.filter((p) => p.status === "active");
  const archivedTenders = procurementData.filter((p) => p.status === "archived");

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-08 / ACHIZIȚII"
        badge="LICITAȚII ȘI CERERI DE OFERTĂ"
        title={locale === "ro" ? "Achiziții Publice & Licitații" : "Procurement & Commercial Tenders"}
        description={
          locale === "ro"
            ? "Proceduri de achiziție bunuri, servicii și lucrări derulate de IAR S.A. Brașov. Documentații de atribuire, caiete de sarcini, clarificări tehnice și formulare oficiale de participare."
            : "Procurement procedures for goods, engineering services, and capital investments conducted by IAR S.A. Brașov. Terms of reference, technical specifications, and official bidding packages."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Achiziții" : "Procurement",
            href: `/${locale}/achizitii`,
          },
        ]}
        locale={locale}
      />

      {/* Active Tenders */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
              {locale === "ro" ? "01 / PROCEDURI ACTIVE" : "01 / OPEN TENDERS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
              {locale === "ro" ? "Cereri de Ofertă în Curs de Derulare" : "Active Bidding Procedures"}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl font-sans">
              {locale === "ro"
                ? "Documentațiile de atribuire complete și clarificările oficiale pentru procedurile curente."
                : "Complete bidding packages, terms of reference, and official clarification notices for active procedures."}
            </p>
          </div>

          {activeTenders.length === 0 ? (
            <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-12 text-center text-slate-400 font-sans text-sm">
              {locale === "ro"
                ? "Nu există proceduri de achiziție active în acest moment."
                : "No open procurement procedures at this time."}
            </div>
          ) : (
            <div className="space-y-8">
              {activeTenders.map((tender) => (
                <div
                  key={tender.id}
                  className="bg-[#0e1828] border-2 border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="amber">PROCEDURĂ ÎN CURS</Badge>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {locale === "ro" ? "Publicat:" : "Published:"} {tender.publicationDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      <span className="font-bold">REF: {tender.reference}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {tender.title[locale]}
                    </h3>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed font-sans">
                      {tender.description[locale]}
                    </p>
                  </div>

                  {/* Documents to Download */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{locale === "ro" ? "Documentație de Atribuire & Caiet de Sarcini:" : "Tender Documentation Package:"}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {tender.documents.map((doc, idx) => (
                        <a
                          key={idx}
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 bg-[#070e18] border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/50 rounded-xl transition-all text-xs font-sans group"
                        >
                          <div className="truncate pr-3">
                            <span className="text-slate-200 group-hover:text-white font-medium block truncate">
                              {doc.title}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono font-bold text-[10px] rounded-md shrink-0 flex items-center gap-1">
                            <ArrowDownToLine className="w-3 h-3" />
                            {doc.fileType}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Clarifications if any */}
                  {tender.clarifications && tender.clarifications.length > 0 && (
                    <div className="pt-2">
                      <div className="text-xs font-mono text-amber-300 uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{locale === "ro" ? "Clarificări la Caietul de Sarcini:" : "Clarification Notices:"}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tender.clarifications.map((cl, idx) => (
                          <a
                            key={idx}
                            href={cl.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3.5 bg-amber-950/20 border border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-950/40 rounded-xl text-xs font-sans text-white transition-all group"
                          >
                            <span className="truncate pr-3 text-amber-200 group-hover:text-white font-medium">
                              {cl.title}
                            </span>
                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold rounded-md shrink-0 flex items-center gap-1">
                              <ArrowDownToLine className="w-3 h-3" />
                              {cl.fileType}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Archived Procedures */}
      <section className="py-20 bg-[#09121f] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
              {locale === "ro" ? "02 / ARHIVĂ ACHIZIȚII" : "02 / TENDER ARCHIVE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
              {locale === "ro" ? "Proceduri Finalizate / Atribuite" : "Archived & Awarded Tenders"}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl font-sans">
              {locale === "ro"
                ? "Istoricul procedurilor de achiziție încheiate conform prevederilor legale de transparență."
                : "Historical archive of completed and awarded procurement procedures."}
            </p>
          </div>

          <div className="space-y-3">
            {archivedTenders.map((tender) => (
              <div
                key={tender.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-all shadow-md"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <Badge variant="steel">FINALIZATĂ</Badge>
                    <span className="text-slate-400">Data: {tender.publicationDate}</span>
                    <span className="text-slate-500">· Ref: {tender.reference}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white font-sans">
                    {tender.title[locale]}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {tender.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#070e18] hover:bg-slate-800 border border-slate-700/80 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-sky-400" />
                      <span>{doc.fileType}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
