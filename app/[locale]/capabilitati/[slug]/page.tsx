import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Wrench,
  Shield,
  Award,
  ChevronRight,
  Plane,
  CheckCircle2,
  FileCheck,
  Mail,
  Building2,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { capabilitiesData } from "@/lib/data/capabilities";
import { aircraftData } from "@/lib/data/aircraft";
import { certificationsData } from "@/lib/data/certifications";
import { Badge } from "@/components/ui/Badge";

const slugAliasMap: Record<string, string> = {
  "modernizari-sisteme": "programe-modernizare",
};

export function generateStaticParams() {
  const locales: Locale[] = ["ro", "en"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const cap of capabilitiesData) {
      params.push({ locale, slug: cap.slug });
    }
    for (const alias of Object.keys(slugAliasMap)) {
      params.push({ locale, slug: alias });
    }
  }

  return params;
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CapabilityDetailPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const resolvedSlug = slugAliasMap[slug] || slug;
  const capability = capabilitiesData.find((c) => c.slug === resolvedSlug);
  if (!capability) {
    notFound();
  }

  // Related aircraft
  const relatedAircraft = aircraftData.filter((a) =>
    capability.relatedAircraft.includes(a.slug)
  );

  // Related certifications
  const relatedCertifications = certificationsData.filter((cert) =>
    capability.relatedCertifications.includes(cert.id)
  );

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode={`CAP / ${capability.code}`}
        badge={capability.category.toUpperCase()}
        title={capability.title[locale]}
        description={capability.shortDescription[locale]}
        breadcrumbs={[
          {
            label: locale === "ro" ? "Capabilități" : "Capabilities",
            href: `/${locale}/capabilitati`,
          },
          {
            label: capability.title[locale],
          },
        ]}
        locale={locale}
      />

      {/* Main Content */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Detailed Scope & Technical Points */}
            <div className="lg:col-span-2 space-y-10">
              {/* Hero Image */}
              <div className="relative h-72 sm:h-[420px] w-full rounded-2xl border border-slate-800 overflow-hidden bg-black/60 shadow-2xl">
                <Image
                  src={capability.heroImage}
                  alt={capability.title[locale]}
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Technical Description */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  {locale === "ro" ? "Descriere Tehnică & Proces Tehnologic" : "Technical Scope & Workflow"}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {capability.description[locale]}
                </p>
              </div>

              {/* Key Technical Activities */}
              <div className="space-y-5 pt-6 border-t border-slate-800/80">
                <h3 className="text-lg font-bold text-white font-sans">
                  {locale === "ro" ? "Operațiuni Tehnice & Standarde de Execuție" : "Key Technical Procedures"}
                </h3>
                <div className="space-y-3">
                  {capability.keyPoints[locale].map((point, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#0e1828] border border-slate-800 rounded-xl flex items-start gap-3.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 font-sans">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Aircraft Platforms */}
              {relatedAircraft.length > 0 && (
                <div className="space-y-5 pt-6 border-t border-slate-800/80">
                  <h3 className="text-lg font-bold text-white font-sans">
                    {locale === "ro" ? "Platforme Aeriene Deservite" : "Supported Aircraft Platforms"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedAircraft.map((craft) => (
                      <Link
                        key={craft.id}
                        href={`/${locale}/aeronave/${craft.slug}`}
                        className="bg-[#0e1828] border border-slate-800 rounded-xl p-4 flex items-center justify-between hover:border-sky-500/50 hover:-translate-y-0.5 transition-all shadow-sm group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                            <Plane className="w-4 h-4 text-sky-400" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors font-sans">
                              {craft.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              {craft.type}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Specifications & Regulatory Approvals */}
            <div className="space-y-6">
              {/* Specifications Box */}
              {capability.specifications && (
                <div className="bg-gradient-to-b from-[#0e1828] to-[#070e18] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
                  <div className="border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">
                      PARAMETRI CHEIE
                    </span>
                    <h3 className="text-base font-bold text-white font-sans">
                      {locale === "ro" ? "Parametri Tehnici" : "Key Specifications"}
                    </h3>
                  </div>
                  <dl className="space-y-3 text-xs font-mono">
                    {capability.specifications.map((spec, idx) => (
                      <div key={idx} className="border-b border-slate-800/60 pb-2.5 last:border-0 last:pb-0">
                        <dt className="text-slate-400">{spec.label[locale]}</dt>
                        <dd className="text-white font-semibold mt-0.5">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Related Certifications */}
              {relatedCertifications.length > 0 && (
                <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-lg">
                  <div className="border-b border-slate-800/80 pb-3">
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">
                      CONFORMITATE
                    </span>
                    <h3 className="text-base font-bold text-white font-sans">
                      {locale === "ro" ? "Standarde & Aprobări" : "Approvals & Standards"}
                    </h3>
                  </div>
                  <div className="space-y-2.5">
                    {relatedCertifications.map((cert) => (
                      <div key={cert.id} className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl">
                        <div className="text-xs font-bold font-mono text-white">
                          {cert.code}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 font-sans">
                          {cert.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inquiry Action Box */}
              <div className="bg-gradient-to-b from-sky-950/40 to-[#0e1828] border border-sky-500/30 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <h4 className="text-base font-bold text-white font-sans">
                  {locale === "ro" ? "Direcția Tehnică & Operațiuni" : "Technical Operations Contact"}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {locale === "ro"
                    ? "Pentru solicitări tehnice sau audituri de conformitate privind această capabilitate, contactați echipa de inginerie IAR."
                    : "For technical inquiries or compliance audits regarding this capability, contact the IAR engineering team."}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 w-full justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-sans text-xs uppercase font-bold transition-all shadow-md shadow-sky-600/20 active:scale-[0.99]"
                >
                  <Mail className="w-4 h-4" />
                  <span>{locale === "ro" ? "Solicită Contact Tehnic" : "Contact Engineering"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
