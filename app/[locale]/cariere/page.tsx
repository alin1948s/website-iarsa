import React from "react";
import {
  Briefcase,
  Users,
  Download,
  Calendar,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  FileText,
  ArrowDownToLine,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { careerPositions, hrContact } from "@/lib/data/careers";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CareersPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-09 / CARIERE"
        badge="OPORTUNITĂȚI PROFESIONALE ÎN INDUSTRIA AERONAUTICĂ"
        title={locale === "ro" ? "Cariere & Recrutare" : "Careers & Executive Recruitment"}
        description={
          locale === "ro"
            ? "Alătură-te echipei de ingineri, tehnicieni și specialiști IAR S.A. Brașov. Oportunități de dezvoltare profesională într-o industrie strategică de vârf, proceduri de selecție executivă și posturi tehnice."
            : "Join our elite aerospace engineering, technician and executive team at IAR S.A. Brașov. Career opportunities in a strategic national defense industry, executive recruitment procedures, and technical roles."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Cariere" : "Careers",
            href: `/${locale}/cariere`,
          },
        ]}
        locale={locale}
      />

      {/* Positions List */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Positions column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="border-b border-slate-800/80 pb-5">
                <span className="text-xs font-mono text-sky-400 font-semibold tracking-wider uppercase">
                  {locale === "ro" ? "POSTURI & PROCEDURI DE SELECȚIE" : "OPEN POSITIONS & SELECTION PROCEDURES"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
                  {locale === "ro" ? "Proceduri de Concurs & Oportunități" : "Open Vacancies & Competitions"}
                </h2>
                <p className="mt-2 text-sm text-slate-400 font-sans">
                  {locale === "ro"
                    ? "Posturi vacante active în cadrul facilității industriale Ghimbav-Brașov."
                    : "Active job openings and competition notices at our Ghimbav-Brașov industrial complex."}
                </p>
              </div>

              <div className="space-y-6">
                {careerPositions.map((pos) => (
                  <div
                    key={pos.id}
                    className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-3">
                        <Badge variant={pos.status === "open" ? "aviation" : "steel"}>
                          {pos.statusLabel[locale]}
                        </Badge>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {locale === "ro" ? "Publicat:" : "Published:"} {pos.publicationDate}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                        {pos.department[locale]}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white font-sans">
                        {pos.title[locale]}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mt-2 font-sans">
                        {pos.description[locale]}
                      </p>
                    </div>

                    {/* Requirements */}
                    {pos.requirements && (
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                          {locale === "ro" ? "Cerințe principale de calificare:" : "Key Qualification Requirements:"}
                        </div>
                        <div className="space-y-2">
                          {pos.requirements[locale].map((req, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                              <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Downloadable Documents */}
                    {pos.documents && pos.documents.length > 0 && (
                      <div className="pt-4 border-t border-slate-800/80">
                        <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold mb-3">
                          {locale === "ro" ? "Formulare & Documentație de Înscriere:" : "Application Forms & Guidelines:"}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {pos.documents.map((doc, idx) => (
                            <a
                              key={idx}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-[#070e18] border border-slate-800 rounded-xl text-xs font-sans hover:border-sky-500/50 hover:bg-slate-800/50 transition-all group"
                            >
                              <span className="text-slate-200 group-hover:text-white font-medium truncate pr-2">
                                {doc.title}
                              </span>
                              <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono font-bold text-[10px] rounded-md shrink-0 flex items-center gap-1">
                                <ArrowDownToLine className="w-3 h-3" />
                                {doc.fileType}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar HR Contact & Application Info */}
            <div className="space-y-6">
              <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-28">
                <div>
                  <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
                    {locale === "ro" ? "CONTACT RESURSE UMANE" : "HR DEPARTMENT"}
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans mt-2">
                    {hrContact.department}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-3 font-sans">
                    {hrContact.notice[locale]}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs font-sans">
                  {hrContact.phoneNumbers.map((ph, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-slate-300">
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="font-mono">{ph}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`mailto:${hrContact.email}`} className="text-sky-400 hover:text-sky-300 hover:underline font-mono">
                      {hrContact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Str. Aeroportului nr. 1, Ghimbav</span>
                  </div>
                </div>

                <div className="p-4 bg-[#070e18] border border-slate-800/80 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white font-sans">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>{locale === "ro" ? "Dosarul de Înscriere" : "Application Dossier"}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    {locale === "ro"
                      ? "Includeți CV model european, copii ale actelor de studii și certificărilor tehnice relevante."
                      : "Please submit European standard CV, copies of degrees, and relevant aviation technical credentials."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
