import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { Locale, dictionaries } from "@/lib/i18n/dictionaries";
import {
  IarHeritageSeal,
  RotorHeadSymbol,
  DepotHangarSymbol,
  NatoAqapSeal,
  AvionicsHudSymbol,
} from "@/components/ui/AerospaceSymbols";

interface HomeHeroProps {
  locale: Locale;
}

export function HomeHero({ locale }: HomeHeroProps) {
  const dict = dictionaries[locale];

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 overflow-hidden bg-[#070e18] border-b border-slate-800">
      {/* Authentic Background Helicopter Photography with High-End Lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-puma.jpeg"
          alt="IAR 330 Puma Helicopter"
          fill
          priority
          className="object-cover object-right lg:object-center opacity-45 scale-100 transition-transform duration-1000 ease-out filter contrast-105"
        />
        {/* Layered Engineering Gradients for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e18] via-[#070e18]/80 to-[#070e18]/50" />
        <div className="absolute inset-0 bg-[#070e18]/65" />
        <div className="absolute inset-0 aero-grid opacity-20 pointer-events-none" />

        {/* Faint HUD Pitch Ladder Watermark */}
        <div className="absolute right-12 top-1/3 opacity-15 pointer-events-none hidden xl:block">
          <AvionicsHudSymbol size={280} className="text-sky-400" />
        </div>
      </div>

      {/* Main Content Area - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-xs font-mono font-medium backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict.hero.badge}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/60 border border-slate-700/60 rounded-full text-slate-300 text-xs font-mono backdrop-blur-md">
            <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
            <span>BURSA DE VALORI BUCUREȘTI: <strong>IARV</strong></span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/40 border border-slate-800 text-[11px] font-mono text-slate-400 rounded-full">
            <span>COORD: 45°41&apos;30&quot;N 25°32&apos;48&quot;E</span>
          </div>
        </div>

        {/* Hero Headline - Centered */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-sans">
            {locale === "ro" ? (
              <>
                Inginerie de precizie <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">
                  dedicată zborului.
                </span>
              </>
            ) : (
              <>
                Engineering built <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">
                  for military flight.
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
            {dict.hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/capabilitati`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-sm font-bold font-sans tracking-wide rounded-xl transition-all shadow-lg shadow-sky-600/30 hover:-translate-y-0.5"
            >
              <span>{dict.hero.ctaPrimary}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <Link
              href={`/${locale}/investitori/raportari`}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#0e1828]/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-sky-500/60 text-sm font-semibold font-sans rounded-xl transition-all backdrop-blur-sm shadow-md"
            >
              <span>{locale === "ro" ? "Rapoarte Financiare" : "Financial Filings"}</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" />
            </Link>

            <Link
              href={`/${locale}/despre-iar`}
              className="inline-flex items-center gap-1.5 px-4 py-3.5 text-slate-400 hover:text-white text-sm font-medium font-sans transition-colors"
            >
              <span>{dict.hero.ctaSecondary}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Verified Aeronautical Quick Metrics Ribbon with Authentic Aerospace Vectors */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Stat 1: Founded 1925 */}
          <div className="bg-[#0e1828]/90 border border-slate-800/80 hover:border-sky-500/40 rounded-2xl p-5 backdrop-blur-md transition-all shadow-lg group flex items-start justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-400 transition-colors font-sans">
                {dict.hero.quickStats.stat1.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1 font-sans">
                {dict.hero.quickStats.stat1.label}
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1 uppercase">
                Brașov, România
              </div>
            </div>
            <IarHeritageSeal size={38} className="text-sky-400/60 group-hover:text-sky-400 transition-colors shrink-0" />
          </div>

          {/* Stat 2: >360 Helicopters Produced */}
          <div className="bg-[#0e1828]/90 border border-slate-800/80 hover:border-sky-500/40 rounded-2xl p-5 backdrop-blur-md transition-all shadow-lg group flex items-start justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-400 transition-colors font-sans">
                {dict.hero.quickStats.stat2.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1 font-sans">
                {dict.hero.quickStats.stat2.label}
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1 uppercase">
                IAR 330 & 316B
              </div>
            </div>
            <RotorHeadSymbol size={38} className="text-sky-400/60 group-hover:text-sky-400 transition-colors shrink-0" />
          </div>

          {/* Stat 3: 5,184 m² Hangar */}
          <div className="bg-[#0e1828]/90 border border-slate-800/80 hover:border-sky-500/40 rounded-2xl p-5 backdrop-blur-md transition-all shadow-lg group flex items-start justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-400 transition-colors font-sans">
                {dict.hero.quickStats.stat3.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1 font-sans">
                {dict.hero.quickStats.stat3.label}
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1 uppercase">
                Depou Nivel D
              </div>
            </div>
            <DepotHangarSymbol size={38} className="text-sky-400/60 group-hover:text-sky-400 transition-colors shrink-0" />
          </div>

          {/* Stat 4: 100% NATO Interoperable */}
          <div className="bg-[#0e1828]/90 border border-slate-800/80 hover:border-sky-500/40 rounded-2xl p-5 backdrop-blur-md transition-all shadow-lg group flex items-start justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-400 transition-colors font-sans">
                {dict.hero.quickStats.stat4.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1 font-sans">
                {dict.hero.quickStats.stat4.label}
              </div>
              <div className="text-[10px] font-mono text-sky-400/80 mt-1 uppercase">
                AQAP 2110 & EASA
              </div>
            </div>
            <NatoAqapSeal size={38} className="text-sky-400/60 group-hover:text-sky-400 transition-colors shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
