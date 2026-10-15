import React from "react";
import {
  Shield,
  Award,
  Users,
  FileText,
  Download,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  Building2,
  Clock,
  UserCheck,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import {
  executiveManagement,
  independentAuditor,
  governanceSections,
  shareholderRelations,
} from "@/lib/data/governance";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GovernancePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-07 / GUVERNANȚĂ"
        badge="CONFORMITATE OUG 109/2011 & COD BVB"
        title={locale === "ro" ? "Guvernanță Corporativă" : "Corporate Governance"}
        description={
          locale === "ro"
            ? "Cadrul de administrare, etică și control intern al IAR S.A. Brașov. Componența conducerii executive, auditorul financiar independent, relația cu investitorii, politica de remunerare și declarațiile de conformitate."
            : "Corporate administration, ethics, and internal control framework of IAR S.A. Brașov. Composition of executive leadership, independent financial auditor, investor relations, remuneration policy, and regulatory compliance."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Investitori" : "Investors",
            href: `/${locale}/investitori`,
          },
          {
            label: locale === "ro" ? "Guvernanță Corporativă" : "Governance",
          },
        ]}
        locale={locale}
      />

      {/* Part 1: Executive Management */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
              {locale === "ro" ? "01 / CONDUCERE EXECUTIVĂ" : "01 / EXECUTIVE DIRECTORS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
              {locale === "ro" ? "Directoratul IAR S.A. Brașov" : "Executive Management Directorate"}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl font-sans">
              {locale === "ro"
                ? "Conducerea executivă responsabilă de administrarea operațională și conformitatea cu planul de administrare aprobat."
                : "Executive leadership responsible for day-to-day operations and execution of the approved corporate management plan."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executiveManagement.map((dir, idx) => (
              <div
                key={idx}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-sans font-bold text-sm">
                      {dir.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <Badge variant="aviation">{dir.role[locale]}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {dir.name}
                    </h3>
                    <p className="text-xs text-sky-400 font-sans mt-1">
                      {dir.role[locale]}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2 text-xs font-sans">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{dir.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`mailto:${dir.email}`} className="text-sky-400 hover:text-sky-300 hover:underline">
                      {dir.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Independent Financial Auditor & Shareholder Office */}
      <section className="py-20 bg-[#09121f] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Auditor Card */}
            <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
                    {locale === "ro" ? "AUDIT FINANCIAR INDEPENDENT" : "INDEPENDENT FINANCIAL AUDITOR"}
                  </span>
                  <Badge variant="emerald">MANDAT ACTIV AGA</Badge>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center justify-center text-emerald-400 shrink-0 font-mono text-[10px] font-bold">
                    <span>CAFR</span>
                    <span className="text-[9px] text-emerald-500">276</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {independentAuditor.company}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {independentAuditor.address} · Reg. Com: {independentAuditor.registryNumber}
                    </p>
                  </div>
                </div>

                <div className="bg-[#070e18] border border-slate-800/80 rounded-xl p-4 text-xs font-sans text-slate-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{locale === "ro" ? "Reprezentant legal:" : "Legal representative:"}</span>
                    <span className="font-semibold text-white">{independentAuditor.representative}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{locale === "ro" ? "Calificare & Acreditare:" : "Accreditation:"}</span>
                    <span className="text-slate-300">{independentAuditor.qualifications}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cod Unic de Înregistrare (CUI):</span>
                    <span className="font-mono text-sky-400">{independentAuditor.cui}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Auditor numit prin Hotărârea AGOA</span>
                <span className="text-emerald-400 font-bold">CONFORM LEGEA 162/2017</span>
              </div>
            </div>

            {/* Shareholder Relations Office */}
            <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
                    {locale === "ro" ? "BIROUL RELAȚII CU ACȚIONARII" : "INVESTOR RELATIONS OFFICE"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>{shareholderRelations.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex flex-col items-center justify-center text-sky-400 shrink-0 font-mono text-[10px] font-bold">
                    <span>BVB</span>
                    <span className="text-[9px] text-sky-300">IARV</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {locale === "ro" ? "Asistență Acționari & Investitori" : "Shareholder Assistance & Liaison"}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      IAR S.A. Brașov · Str. Aeroportului nr. 1, Ghimbav, jud. Brașov
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {shareholderRelations.officers.map((off, idx) => (
                    <div
                      key={idx}
                      className="bg-[#070e18] border border-slate-800/80 rounded-xl p-3.5 space-y-1 text-xs font-sans"
                    >
                      <div className="font-semibold text-white">{off.name}</div>
                      <div className="text-slate-400 font-mono text-[11px]">{off.phone}</div>
                      <a href={`mailto:${off.email}`} className="text-sky-400 hover:underline block text-[11px]">
                        {off.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-sans">
                <span className="text-slate-400">Email central:</span>
                <a href={`mailto:${shareholderRelations.generalEmail}`} className="text-sky-400 font-mono hover:underline">
                  {shareholderRelations.generalEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Regulatory Governance Sections */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
              {locale === "ro" ? "02 / CATEGORII DE GUVERNANȚĂ REGLEMENTARĂ" : "02 / REGULATORY GOVERNANCE ARCHIVE"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
              {locale === "ro" ? "Documente, Politici și Raportări Obligatorii" : "Mandatory Policies & Regulatory Disclosures"}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl font-sans">
              {locale === "ro"
                ? "Secțiunile oficiale de transparență reglementate prin Legea nr. 24/2017, OUG nr. 109/2011 și Codul de Guvernanță Corporativă al BVB."
                : "Official transparency disclosures compliant with Law no. 24/2017, GEO no. 109/2011, and the Bucharest Stock Exchange Corporate Governance Code."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governanceSections.map((sec) => (
              <div
                key={sec.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-400 font-bold bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-full">
                      SEC-{sec.id.toString().padStart(2, "0")}
                    </span>
                    <FileText className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-white font-sans leading-snug group-hover:text-sky-300 transition-colors">
                    {sec.title[locale]}
                  </h3>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Conformitate OUG 109
                  </span>
                  <a
                    href="https://www.iar.ro/guvernanta-corporativa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-sans text-sky-400 hover:text-sky-300 font-semibold uppercase tracking-wider"
                  >
                    <span>{locale === "ro" ? "Arhivă" : "Archive"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
