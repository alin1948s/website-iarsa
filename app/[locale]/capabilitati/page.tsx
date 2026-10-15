import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { capabilitiesData } from "@/lib/data/capabilities";
import { Badge } from "@/components/ui/Badge";
import {
  RotorHeadSymbol,
  AirframeRibSymbol,
  NdtInspectionSymbol,
  AvionicsHudSymbol,
  HoneycombCompositeSymbol,
  DepotHangarSymbol,
} from "@/components/ui/AerospaceSymbols";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function CapabilitiesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-03 / CAPABILITĂȚI"
        badge="EASA PART 145 / AQAP 2110 / EN 9100"
        title={
          locale === "ro"
            ? "Capabilități Aeronautice Industriale"
            : "Industrial Aerospace Capabilities"
        }
        description={
          locale === "ro"
            ? "Infrastructură industrială complet integrată la Ghimbav: mentenanță de nivel D (depot-level), reparații de structură, modernizări avansate de avionică și armament, fabricație piese de precizie și laboratoare NDT acreditate."
            : "Fully integrated aerospace facility at Ghimbav: Level D depot maintenance, structural overhauls, advanced mission avionics and weapon systems modernization, precision component manufacturing, and accredited NDT test laboratories."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Capabilități" : "Capabilities",
            href: `/${locale}/capabilitati`,
          },
        ]}
        locale={locale}
      />

      {/* Capabilities Overview Grid */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilitiesData.map((cap) => (
              <div
                key={cap.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl flex flex-col justify-between hover:border-sky-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden shadow-xl"
              >
                <div>
                  {/* Card Media Preview */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60">
                    <Image
                      src={cap.heroImage}
                      alt={cap.title[locale]}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1828] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-900/90 text-sky-400 border border-slate-700 backdrop-blur-md">
                        {cap.code}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors font-sans">
                      {cap.title[locale]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {cap.shortDescription[locale]}
                    </p>

                    {/* Key Technical Points preview */}
                    <div className="pt-3 space-y-2 border-t border-slate-800/80">
                      {cap.keyPoints[locale].slice(0, 3).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                          <span className="text-sky-400 font-mono mt-0.5">▸</span>
                          <span className="line-clamp-1">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href={`/${locale}/capabilitati/${cap.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-600/20 active:scale-[0.99]"
                  >
                    <span>{locale === "ro" ? "Detalii Tehnice Complete" : "View Technical Scope"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Capabilities Banner with Bespoke Aerospace Vectors */}
      <section className="py-20 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl hover:border-sky-500/40 transition-all flex flex-col items-center">
              <RotorHeadSymbol size={52} className="text-sky-400 mb-4" />
              <div className="text-base font-bold text-white font-sans uppercase">NIVEL D (DEPOT)</div>
              <div className="text-xs text-slate-400 mt-1 font-sans">Autorizare EASA Part 145</div>
            </div>

            <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl hover:border-sky-500/40 transition-all flex flex-col items-center">
              <NdtInspectionSymbol size={52} className="text-sky-400 mb-4" />
              <div className="text-base font-bold text-white font-sans uppercase">LABORATOARE NDT</div>
              <div className="text-xs text-slate-400 mt-1 font-sans">Raze X, UT, MT, PT, ET</div>
            </div>

            <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl hover:border-sky-500/40 transition-all flex flex-col items-center">
              <AvionicsHudSymbol size={52} className="text-sky-400 mb-4" />
              <div className="text-base font-bold text-white font-sans uppercase">AVIONICĂ & MIL-SPEC</div>
              <div className="text-xs text-slate-400 mt-1 font-sans">Integrare sisteme NATO</div>
            </div>

            <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl hover:border-sky-500/40 transition-all flex flex-col items-center">
              <HoneycombCompositeSymbol size={52} className="text-sky-400 mb-4" />
              <div className="text-base font-bold text-white font-sans uppercase">PIESE & COMPOZITE</div>
              <div className="text-xs text-slate-400 mt-1 font-sans">Prelucrare CNC & Autoclave</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
