import React from "react";
import Link from "next/link";
import {
  Download,
  Calendar,
  ExternalLink,
  ArrowDownToLine,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { certificationsData } from "@/lib/data/certifications";
import { Badge } from "@/components/ui/Badge";
import { NatoAqapSeal, IarHeritageSeal } from "@/components/ui/AerospaceSymbols";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CertificationsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-06 / CERTIFICĂRI"
        badge="SISTEME INTEGRATE DE MANAGEMENT AL CALITĂȚII"
        title={locale === "ro" ? "Certificări & Autorizări Aeronautice" : "Aerospace Approvals & Quality Certifications"}
        description={
          locale === "ro"
            ? "Conformitatea cu cele mai exigente standarde europene și euro-atlantice de calitate aeronautică civilă și militară: EASA Part 145 / Part 21G, NATO AQAP 2110, EN 9100:2018, OMAp și AACR."
            : "Strict compliance with top European and Euro-Atlantic aerospace quality standards across civil and military domains: EASA Part 145 / Part 21G, NATO AQAP 2110, EN 9100:2018, OMAp, and AACR."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Certificări" : "Certifications",
            href: `/${locale}/certificari`,
          },
        ]}
        locale={locale}
      />

      {/* Certifications Grid with Official Seal Accents */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group shadow-xl relative overflow-hidden"
              >
                {/* Faint Background Seal for Authenticity */}
                <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                  {cert.category === "military" ? (
                    <NatoAqapSeal size={130} className="text-white" />
                  ) : (
                    <IarHeritageSeal size={130} className="text-white" />
                  )}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <span className="font-mono text-base font-extrabold text-white group-hover:text-sky-300 transition-colors">
                      {cert.code}
                    </span>
                    <Badge variant={cert.category === "military" ? "amber" : "aviation"}>
                      {cert.categoryLabel[locale]}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-sky-400 mt-1 font-semibold">
                      {cert.issuingAuthority}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {cert.verifiedDescription[locale]}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-sans">Valabilitate:</span>
                      <span className="text-white font-bold">{cert.validity}</span>
                    </div>
                    {cert.reference && (
                      <div className="flex items-center justify-between">
                        <span className="font-sans">Nr. Autorizare:</span>
                        <span className="text-sky-400 truncate max-w-[200px]">{cert.reference}</span>
                      </div>
                    )}
                  </div>
                </div>

                {cert.documentUrl && (
                  <div className="pt-5 mt-5 border-t border-slate-800/80 relative z-10">
                    <a
                      href={cert.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#070e18] hover:bg-sky-600 text-xs font-sans text-sky-400 hover:text-white border border-slate-700/80 hover:border-sky-600 transition-all w-full justify-center font-semibold uppercase tracking-wider"
                    >
                      <ArrowDownToLine className="w-4 h-4" />
                      <span>{locale === "ro" ? "Descarcă Certificat PDF" : "Download Certificate PDF"}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
