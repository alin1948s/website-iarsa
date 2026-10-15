import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, ChevronRight, ArrowUpRight, Award, Shield, CheckCircle2 } from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { aircraftData } from "@/lib/data/aircraft";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AircraftIndexPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const currentSupport = aircraftData.filter((a) => a.status === "current_support");
  const historical = aircraftData.filter((a) => a.status === "historical");

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-04 / FLOTĂ ȘI PROGRAME"
        badge="PLATFORME AEROSPATE · GHIMBAV"
        title={locale === "ro" ? "Aeronave & Programe Industriale" : "Aircraft Fleet & Programs"}
        description={
          locale === "ro"
            ? "Prezentarea platformelor aeronautice fabricate și susținute operațional de IAR S.A. Brașov. Distincție clară între flotele active aflate în suport logistic integrat și patrimoniul istoric de producție."
            : "Overview of aeronautical platforms manufactured and sustained by IAR S.A. Brașov. Clear distinction between active operational rotary-wing fleets under depot sustainment and historical aircraft production."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Aeronave" : "Aircraft",
            href: `/${locale}/aeronave`,
          },
        ]}
        locale={locale}
      />

      {/* Part 1: Current Operational Support & MRO */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-800/80 pb-4">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              {locale === "ro" ? "01 / FLOTĂ ACTIVĂ" : "01 / ACTIVE FLEET"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mt-1">
              {locale === "ro" ? "Suport Operațional Activ & Mentenanță Nivel D" : "Current Operational Support & MRO"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl font-sans">
              {locale === "ro"
                ? "Platforme aflate în serviciul forțelor armate române și internaționale, susținute prin contracte multianuale de mentenanță de depou, prelungire resursă de zbor și modernizare sisteme."
                : "Active platforms in service with Romanian and international armed forces, supported via multi-year depot maintenance, service-life extension, and avionics modernization programs."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentSupport.map((craft) => (
              <div
                key={craft.id}
                className="bg-[#0e1828] border border-slate-800 rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/60">
                    <Image
                      src={craft.heroImage}
                      alt={craft.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1828] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="aviation">
                        {craft.statusLabel[locale]}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-2xl font-bold text-white font-sans">
                        {craft.name}
                      </h3>
                      {craft.verifiedProductionCount && (
                        <span className="text-xs font-mono text-slate-400">
                          {craft.verifiedProductionCount}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-mono text-sky-400 font-medium uppercase tracking-wider">
                      {craft.type}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {craft.summary[locale]}
                    </p>

                    {/* Scope bullets */}
                    <div className="pt-2 space-y-2 border-t border-slate-800/80">
                      {craft.technicalScope[locale].slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href={`/${locale}/aeronave/${craft.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-600/20 active:scale-[0.99]"
                  >
                    <span>{locale === "ro" ? "Fișă Tehnică & Variante de Modernizare" : "View Technical Profile & Variants"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Historical Production Platforms */}
      <section className="py-20 bg-[#0b1320]/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-800/80 pb-4">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              {locale === "ro" ? "02 / PATRIMONIU ISTORIC" : "02 / HISTORICAL PRODUCTION"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mt-1">
              {locale === "ro" ? "Aeronave Fabricate în Trecut la IAR / ICA" : "Historical Aircraft Manufactured by IAR"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {historical.map((craft) => (
              <div
                key={craft.id}
                className="bg-[#0e1828] border border-slate-800 rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-slate-700 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-black/60">
                    <Image
                      src={craft.heroImage}
                      alt={craft.name}
                      fill
                      className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1828] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="steel">
                        {craft.statusLabel[locale]}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white font-sans">
                      {craft.name}
                    </h3>
                    <p className="text-xs font-mono text-sky-400">
                      {craft.type}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {craft.summary[locale]}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${locale}/aeronave/${craft.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white text-xs font-sans font-semibold tracking-wider transition-colors border border-slate-700/80"
                  >
                    <span>{locale === "ro" ? "Monografie Istorică" : "Historical Monograph"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
