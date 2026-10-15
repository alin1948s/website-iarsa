import React from "react";
import {
  Shield,
  FileCheck,
  Download,
  AlertTriangle,
  Mail,
  Lock,
  ExternalLink,
  CheckCircle2,
  FileText,
  ArrowDownToLine,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { integrityNotice, integrityDocuments } from "@/lib/data/integritate";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function IntegrityPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-10 / INTEGRITATE"
        badge="STRATEGIA NAȚIONALĂ ANTICORUPȚIE (SNA)"
        title={locale === "ro" ? "Integritate Instituțională & Whistleblowing" : "Public Integrity & Whistleblower Channel"}
        description={
          locale === "ro"
            ? "Conformitatea cu standardele etice, transparența administrativă și mecanismul oficial de raportare internă a neregulilor conform Legii nr. 361/2022 privind protecția avertizorilor în interes public."
            : "Compliance with ethical standards, administrative transparency, and the dedicated reporting mechanism pursuant to Law no. 361/2022 on the protection of whistleblowers in the public interest."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Companie" : "Company",
            href: `/${locale}/despre-iar`,
          },
          {
            label: locale === "ro" ? "Integritate" : "Integrity",
          },
        ]}
        locale={locale}
      />

      {/* Whistleblower Channel Highlight Box */}
      <section className="py-16 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-950/20 via-[#0e1828] to-[#070e18] border border-amber-500/30 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center text-amber-400 shrink-0 font-mono text-[10px] font-bold">
                <span>L.361</span>
                <span className="text-[9px] text-amber-300">2022</span>
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  CANAL SECURIZAT · LEGEA NR. 361/2022
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-sans mt-0.5">
                  {locale === "ro"
                    ? "Canalul de Raportare Internă a Avertizorilor de Integritate"
                    : "Internal Whistleblower Reporting Channel"}
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-4xl">
              {locale === "ro"
                ? "În conformitate cu prevederile Legii nr. 361/2022, IAR S.A. Brașov pune la dispoziția angajaților, colaboratorilor și terților un canal securizat și confidențial pentru raportarea încălcărilor legii sau a conduitei etice. Identitatea raportorului beneficiază de protecție legală absolută și imunitate împotriva oricăror măsuri de retaliere."
                : "In accordance with Law no. 361/2022, IAR S.A. Brașov provides employees, suppliers, and third parties with a secure, confidential channel for reporting suspected legal breaches or ethical misconduct. Whistleblower confidentiality and full legal immunity against retaliation are legally guaranteed."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-amber-500/20 pt-6">
              <div className="flex items-center gap-2.5 text-slate-300 text-xs font-sans">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{locale === "ro" ? "Punct de contact securizat:" : "Dedicated secure contact point:"}</span>
              </div>
              <a
                href={`mailto:${integrityNotice.whistleblowerEmail}`}
                className="px-5 py-2.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 hover:text-white font-mono font-bold text-xs border border-amber-500/40 rounded-xl transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{integrityNotice.whistleblowerEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrity Documents Archive */}
      <section className="py-20 bg-[#09121f] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
              {locale === "ro" ? "DOCUMENTE & RAPOARTE OFICIALE" : "INTEGRITY DOCUMENTS & REPORTS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
              {locale === "ro" ? "Planuri de Integritate, Cod de Etică și Rapoarte" : "Integrity Plans & Annual Reviews"}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl font-sans">
              {locale === "ro"
                ? "Publicațiile obligatorii conform Strategiei Naționale Anticorupție (SNA) și rapoartele periodice de evaluare a riscurilor de etică."
                : "Mandatory regulatory filings pursuant to the National Anti-Corruption Strategy (SNA) and periodic ethics risk evaluations."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrityDocuments.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="aviation">{doc.category.toUpperCase()}</Badge>
                    <span className="text-xs font-mono text-slate-400">{doc.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-sans leading-snug group-hover:text-sky-300 transition-colors">
                    {doc.title[locale]}
                  </h3>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans text-sky-400 hover:text-sky-300 font-semibold uppercase tracking-wider"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    <span>{locale === "ro" ? `Descarcă ${doc.fileType}` : `Download ${doc.fileType}`}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
