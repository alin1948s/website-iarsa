import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Plane,
  Shield,
  Award,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Layers,
  Users,
  Wrench,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { aircraftData } from "@/lib/data/aircraft";
import { Badge } from "@/components/ui/Badge";
import { DepotHangarSymbol } from "@/components/ui/AerospaceSymbols";

export function generateStaticParams() {
  const locales: Locale[] = ["ro", "en"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const craft of aircraftData) {
      params.push({ locale, slug: craft.slug });
    }
  }

  return params;
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function AircraftDetailPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const aircraft = aircraftData.find((a) => a.slug === slug);
  if (!aircraft) {
    notFound();
  }

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode={`AERO / ${aircraft.slug.toUpperCase()}`}
        badge={aircraft.statusLabel[locale]}
        title={aircraft.name}
        description={aircraft.summary[locale]}
        breadcrumbs={[
          {
            label: locale === "ro" ? "Aeronave" : "Aircraft",
            href: `/${locale}/aeronave`,
          },
          {
            label: aircraft.name,
          },
        ]}
        locale={locale}
      />

      {/* Main Content */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left 2 Cols: Aircraft Presentation, Variants & Historical Background */}
            <div className="lg:col-span-2 space-y-10">
              {/* Aircraft Hero Image */}
              <div className="relative h-80 sm:h-[460px] w-full rounded-2xl border border-slate-800 overflow-hidden bg-black/60 shadow-2xl">
                <Image
                  src={aircraft.heroImage}
                  alt={aircraft.name}
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Historical Context & Industrial Role */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  {locale === "ro" ? "Context Istoric & Rol Industrial" : "Historical Context & Industrial Role"}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {aircraft.historicalContext[locale]}
                </p>
              </div>

              {/* Modernization Variants (if applicable, e.g. SOCAT, Naval, SM) */}
              {aircraft.modernizationVariants && aircraft.modernizationVariants.length > 0 && (
                <div className="space-y-5 pt-6 border-t border-slate-800/80">
                  <h3 className="text-lg font-bold text-white font-sans">
                    {locale === "ro" ? "Variante de Fabricație & Programe de Modernizare" : "Variants & Modernization Configurations"}
                  </h3>

                  <div className="space-y-3">
                    {aircraft.modernizationVariants.map((v, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0e1828] border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-2 shadow-md hover:border-sky-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Badge variant="aviation">{v.name}</Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mt-1">
                          {v.description[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Scope of Sustainment */}
              <div className="space-y-5 pt-6 border-t border-slate-800/80">
                <h3 className="text-lg font-bold text-white font-sans">
                  {locale === "ro" ? "Pachet Tehnic de Mentenanță & Suport Operațional" : "Technical Scope of Support"}
                </h3>

                <div className="space-y-3">
                  {aircraft.technicalScope[locale].map((scopeItem, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#0e1828] border border-slate-800 rounded-xl flex items-start gap-3.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 font-sans">
                        {scopeItem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Operators */}
              <div className="space-y-5 pt-6 border-t border-slate-800/80">
                <h3 className="text-lg font-bold text-white font-sans">
                  {locale === "ro" ? "Operatori Principali & Utilizatori" : "Primary Operators"}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {aircraft.primaryOperators[locale].map((op, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-1.5 bg-[#0e1828] border border-slate-800 rounded-lg text-xs font-mono text-slate-200 shadow-sm"
                    >
                      {op}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Full Technical Specifications */}
            <div className="space-y-6">
              {/* Technical Specs Box */}
              <div className="bg-gradient-to-b from-[#0e1828] to-[#070e18] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
                <div className="border-b border-slate-800/80 pb-3">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">
                    PARAMETRI CONSTRUCTIVI
                  </span>
                  <h3 className="text-base font-bold text-white font-sans">
                    {locale === "ro" ? "Specificații Tehnice Oficiale" : "Technical Specifications"}
                  </h3>
                </div>

                <dl className="space-y-3 text-xs font-mono divide-y divide-slate-800/60">
                  {aircraft.specifications.map((spec, idx) => (
                    <div key={idx} className="pt-2.5 first:pt-0">
                      <dt className="text-slate-400">{spec.label[locale]}</dt>
                      <dd className="text-white font-semibold mt-0.5 text-xs">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* MRO Infrastructure Link */}
              <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 shadow-lg hover:border-sky-500/40 transition-colors">
                <DepotHangarSymbol size={38} className="text-sky-400" />
                <h4 className="text-base font-bold text-white font-sans">
                  {locale === "ro" ? "Mentenanță Nivel D la Ghimbav" : "Depot Level D Overhaul"}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {locale === "ro"
                    ? "Pentru această platformă, IAR S.A. asigură ciclul complet de mentenanță depot în hangarul de 5.184 m² cu zboruri de acceptanță pe heliportul propriu."
                    : "For this platform, IAR S.A. conducts the complete depot overhaul cycle in our 5,184 m² hangar, followed by flight acceptance tests on our licensed heliport."}
                </p>
                <Link
                  href={`/${locale}/mro`}
                  className="inline-flex items-center gap-2 text-xs font-sans text-sky-400 hover:text-sky-300 uppercase font-semibold"
                >
                  <span>{locale === "ro" ? "Vezi Facilitățile MRO" : "View MRO Facilities"}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
