import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  FileText,
  Calendar,
  ExternalLink,
  Download,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import { Locale, dictionaries } from "@/lib/i18n/dictionaries";
import { HomeHero } from "@/components/hero/HomeHero";
import { capabilitiesData } from "@/lib/data/capabilities";
import { aircraftData } from "@/lib/data/aircraft";
import { certificationsData } from "@/lib/data/certifications";
import { investorDocuments } from "@/lib/data/investor-documents";
import { stockInformation } from "@/lib/data/governance";
import { pressArticles } from "@/lib/data/press";
import { procurementData } from "@/lib/data/procurement";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  RotorHeadSymbol,
  TurboshaftEngineSymbol,
  AvionicsHudSymbol,
  DepotHangarSymbol,
  IarHeritageSeal,
  NatoAqapSeal,
  AirframeRibSymbol,
  HoneycombCompositeSymbol,
} from "@/components/ui/AerospaceSymbols";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";
  const dict = dictionaries[locale];

  // Featured items
  const featuredCapabilities = capabilitiesData.slice(0, 4);
  const pumaAircraft = aircraftData.find((a) => a.slug === "iar-330-puma");
  const otherAircraft = aircraftData.filter((a) => a.slug !== "iar-330-puma").slice(0, 2);
  const recentReports = investorDocuments.slice(0, 4);
  const latestPress = pressArticles.slice(0, 2);
  const activeTenders = procurementData.filter((p) => p.status === "active").slice(0, 2);

  // Map capability slugs to bespoke technical symbols
  const getCapabilitySymbol = (slug: string) => {
    switch (slug) {
      case "mentenanta-nivel-d":
        return <RotorHeadSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />;
      case "hangar-revizii-generale":
        return <DepotHangarSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />;
      case "programe-modernizare":
        return <AvionicsHudSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />;
      case "fabricatie-aeronautica":
      case "prelucrari-mecanice":
      default:
        return <AirframeRibSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HomeHero locale={locale} />

      {/* 2. Stock Ticker Bar & Fast Investor Strip */}
      <div className="bg-[#050a12] border-b border-slate-800/80 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-sky-400 font-bold">
              <TrendingUp className="w-4 h-4" />
              BURSA DE VALORI BUCUREȘTI: {stockInformation.symbol}
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-300">PIAȚA REGLEMENTATĂ (REGS)</span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">ISIN: {stockInformation.isin}</span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">CAPITAL SOCIAL: {stockInformation.shareCapital}</span>
          </div>

          <div className="flex items-center gap-4 text-sky-400">
            <Link
              href={`/${locale}/investitori/raportari`}
              className="hover:text-sky-300 flex items-center gap-1 font-semibold transition-colors"
            >
              <span>{locale === "ro" ? "Rapoarte Financiare 2026/2025" : "Financial Filings 2026/2025"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Section 01: Core Capabilities with Blueprint Engineering Cards & Bespoke Vectors */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>{dict.sections.capabilitiesSubtitle}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                {dict.sections.capabilitiesTitle}
              </h2>
            </div>
            <Link
              href={`/${locale}/capabilitati`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>{dict.sections.viewAll} ({capabilitiesData.length})</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Capabilities Grid: Blueprint Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCapabilities.map((cap) => (
              <Link
                key={cap.id}
                href={`/${locale}/capabilitati/${cap.slug}`}
                className="group"
              >
                <Card
                  variant="blueprint"
                  serial={cap.code}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Bespoke Aerospace Vector Symbol instead of generic Lucide icon */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="p-3 bg-sky-500/5 rounded-xl border border-sky-500/20 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-all">
                        {getCapabilitySymbol(cap.slug)}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2.5 font-sans">
                      {cap.title[locale]}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {cap.shortDescription[locale]}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-sky-900/30">
                      {cap.keyPoints[locale].slice(0, 2).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-sans">
                          <span className="text-sky-400 font-mono mt-0.5">▸</span>
                          <span className="line-clamp-1">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-sky-900/30 text-xs font-semibold text-sky-400 flex items-center justify-between font-sans">
                    <span className="tracking-wider uppercase text-[11px]">Fișă Procedură</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section 02: Aircraft & Helicopter Fleet Showcase */}
      <section className="py-24 bg-[#050a12] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                <RotorHeadSymbol size={16} className="text-sky-400" />
                <span>{dict.sections.aircraftSubtitle}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                {dict.sections.aircraftTitle}
              </h2>
            </div>
            <Link
              href={`/${locale}/aeronave`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>{dict.sections.viewAll}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Large Card: IAR 330 Puma */}
          {pumaAircraft && (
            <div className="bg-[#0e1828] border border-slate-800/90 hover:border-sky-500/50 rounded-2xl overflow-hidden mb-8 transition-all duration-300 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Photo banner */}
                <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px] bg-black">
                  <Image
                    src={pumaAircraft.heroImage}
                    alt={pumaAircraft.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1828] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0e1828]" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-sky-600/90 text-white text-xs font-mono font-bold rounded-full backdrop-blur-md shadow-lg">
                      {pumaAircraft.statusLabel[locale]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                        {pumaAircraft.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        NATO CODE: PUMA-330
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                      {pumaAircraft.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {pumaAircraft.summary[locale]}
                    </p>

                    {/* Variants Chips */}
                    <div className="pt-2">
                      <div className="text-xs font-mono text-slate-400 uppercase mb-2">
                        Variante Specializate de Fabricație & Modernizare:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono rounded-full">
                          IAR 330 SOCAT (Atac)
                        </span>
                        <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono rounded-full">
                          IAR 330 NAVAL (Fregate)
                        </span>
                        <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono rounded-full">
                          IAR 330 SM (Modernizat)
                        </span>
                        <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono rounded-full">
                          IAR 330 VIP / MEDEVAC
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs font-mono text-slate-400">
                      Producție verificată: 167 elicoptere + 50 celule
                    </span>
                    <Link
                      href={`/${locale}/aeronave/${pumaAircraft.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-bold font-sans uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-sky-600/20"
                    >
                      <span>Fișă Tehnică Detaliată</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Aircraft Cards (Alouette III & IAR 80/81) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAircraft.map((craft) => (
              <div
                key={craft.id}
                className="bg-[#0e1828] border border-slate-800/80 hover:border-sky-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group shadow-xl"
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full bg-black overflow-hidden">
                    <Image
                      src={craft.heroImage}
                      alt={craft.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/90 text-slate-200 text-xs font-mono rounded-full backdrop-blur-md border border-slate-700">
                        {craft.statusLabel[locale]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="text-xs font-mono text-sky-400 uppercase">
                      {craft.type}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sans">
                      {craft.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {craft.summary[locale]}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href={`/${locale}/aeronave/${craft.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#070e18] hover:bg-sky-600 text-white text-xs font-bold font-sans uppercase rounded-xl border border-slate-700 hover:border-sky-600 transition-all shadow-md"
                  >
                    <span>Specificații Tehnice</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 03: Industrial MRO & 5,184 m² Hangar Feature */}
      <section id="mro-hangar" className="py-24 bg-[#070e18] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider">
                <DepotHangarSymbol size={18} className="text-sky-400" />
                <span>{dict.sections.mroSubtitle}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                {dict.sections.mroTitle}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-sans">
                {locale === "ro"
                  ? "Infrastructura industrială IAR de pe platforma Ghimbav este autorizată EASA Part 145 pentru revizii generale și reparații capitale pe platformele Puma și Alouette III. Hangarul principal de 5.184 m² oferă capacitate simultană de intervenție majoră pentru flote militare complete."
                  : "The IAR aerospace complex at Ghimbav is approved under EASA Part 145 for heavy depot maintenance and major overhauls on Puma and Alouette III platforms. The primary 5,184 m² maintenance hangar provides concurrent depot capacity for military helicopter fleets."}
              </p>

              {/* Facility 4-Stat Grid with Authentic Styling */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-5 shadow-lg">
                  <div className="text-3xl font-extrabold text-sky-400 font-sans">5.184 m²</div>
                  <div className="text-xs text-slate-300 font-sans mt-1">Suprafață Hangar Revizii</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Hală Industrială Închisă</div>
                </div>
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-5 shadow-lg">
                  <div className="text-3xl font-extrabold text-sky-400 font-sans">12 m</div>
                  <div className="text-xs text-slate-300 font-sans mt-1">Înălțime Liberă Sub Grindă</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Acces Elicoptere Grele</div>
                </div>
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-5 shadow-lg">
                  <div className="text-3xl font-extrabold text-sky-400 font-sans">3,2 t</div>
                  <div className="text-xs text-slate-300 font-sans mt-1">Capacitate Pod Rulant</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Demontare Celule / Turbomotoare</div>
                </div>
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-5 shadow-lg">
                  <div className="text-3xl font-extrabold text-sky-400 font-sans">LRGH</div>
                  <div className="text-xs text-slate-300 font-sans mt-1">Heliport Operațional Propriu</div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">Zboruri de Încercare Directe</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/${locale}/mro`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-bold font-sans uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-sky-600/20"
                >
                  <span>{locale === "ro" ? "EXPLOREAZĂ INFRASTRUCTURA MRO" : "EXPLORE MRO INFRASTRUCTURE"}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Col: Hangar Photos & Large Facilities Showcase */}
            <div className="lg:col-span-6 space-y-5">
              <div className="relative h-80 sm:h-[420px] rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-2xl group">
                <Image
                  src="/images/revizii-hangar.webp"
                  alt="Hangar Mentenanță Elicoptere IAR Brașov"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e18] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0a1526]/95 border border-slate-700/70 rounded-xl text-xs font-mono backdrop-blur-md flex items-center justify-between shadow-xl">
                  <div>
                    <div className="text-white font-bold text-sm">Complexul Industrial Ghimbav · 5.184 m²</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">Autorizat EASA Part 145 & NATO AQAP 2110 · Nivel D MRO</div>
                  </div>
                  <DepotHangarSymbol size={36} className="text-sky-400 shrink-0 ml-3" />
                </div>
              </div>

              {/* Expansive 2-Column Technical Facilities Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-56 sm:h-64 rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-xl group">
                  <Image
                    src="/images/mro-facilities.webp"
                    alt="Facilitati MRO IAR"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/90 via-[#070e18]/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0a1526]/90 border border-slate-700/60 rounded-xl backdrop-blur-sm">
                    <div className="text-white font-bold text-xs font-sans">Bancuri Verificare Dinamică</div>
                    <div className="text-slate-400 text-[10px] font-mono mt-0.5">Testare Transmisii & Capete Rotor 3.500 CP</div>
                  </div>
                </div>

                <div className="relative h-56 sm:h-64 rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-xl group">
                  <Image
                    src="/images/laboratoare-sisteme.jpg"
                    alt="Laboratoare Testare IAR"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/90 via-[#070e18]/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0a1526]/90 border border-slate-700/60 rounded-xl backdrop-blur-sm">
                    <div className="text-white font-bold text-xs font-sans">Laborator Avionică Integrată</div>
                    <div className="text-slate-400 text-[10px] font-mono mt-0.5">Calibrare Radar, IFF, ELS & Sisteme SOCAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 04: Strategic Defense Beneficiaries with Authentic Military Insignia */}
      <section id="beneficiari" className="py-20 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase font-semibold">
              {locale === "ro" ? "PARTENERI INSTITUȚIONALI & BENEFICIARI STRATEGICI" : "INSTITUTIONAL PARTNERS & STRATEGIC FLEETS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mt-2">
              {locale === "ro" ? "Flotele Elicopterelor Apărării Naționale" : "National Defense & Institutional Helicopter Fleets"}
            </h2>
            <p className="text-sm text-slate-400 font-sans mt-2">
              {locale === "ro"
                ? "IAR S.A. asigură disponibilitatea de luptă și menținerea navigabilității pentru principalele forțe armate și servicii speciale din România."
                : "IAR S.A. ensures mission readiness and continuous airworthiness for Romania's primary armed forces and special security agencies."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* 1. Forțele Aeriene Române */}
            <div className="bg-[#0a1526]/90 border border-slate-800/90 rounded-2xl p-6 text-center flex flex-col items-center justify-between space-y-4 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-24 w-24 relative flex items-center justify-center p-1 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/40 group-hover:bg-white/[0.07] transition-all">
                <Image
                  src="/images/beneficiari/roaf.png"
                  alt="Forțele Aeriene Române"
                  width={84}
                  height={84}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-sans">
                  {locale === "ro" ? "Forțele Aeriene Române" : "Romanian Air Force"}
                </div>
                <div className="text-[11px] font-mono text-sky-400 mt-1 font-medium">
                  {locale === "ro" ? "IAR 330 SOCAT & SM" : "IAR 330 SOCAT & SM Fleet"}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-sans">
                  {locale === "ro" ? "Suport de bază depot & modernizări" : "Depot-level MRO & mid-life upgrades"}
                </div>
              </div>
            </div>

            {/* 2. Forțele Navale Române */}
            <div className="bg-[#0a1526]/90 border border-slate-800/90 rounded-2xl p-6 text-center flex flex-col items-center justify-between space-y-4 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-24 w-24 relative flex items-center justify-center p-1 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/40 group-hover:bg-white/[0.07] transition-all">
                <Image
                  src="/images/beneficiari/ronavy.png"
                  alt="Forțele Navale Române"
                  width={84}
                  height={84}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-sans">
                  {locale === "ro" ? "Forțele Navale Române" : "Romanian Naval Forces"}
                </div>
                <div className="text-[11px] font-mono text-sky-400 mt-1 font-medium">
                  {locale === "ro" ? "IAR 330 NAVAL (Fregate T22)" : "IAR 330 NAVAL (T22 Frigates)"}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-sans">
                  {locale === "ro" ? "Flotilă îmbarcată luptă ASW & SAR" : "Embarqued ASW & maritime SAR"}
                </div>
              </div>
            </div>

            {/* 3. Ministerul Afacerilor Interne / IGAv */}
            <div className="bg-[#0a1526]/90 border border-slate-800/90 rounded-2xl p-6 text-center flex flex-col items-center justify-between space-y-4 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-24 w-24 relative flex items-center justify-center p-1 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/40 group-hover:bg-white/[0.07] transition-all">
                <Image
                  src="/images/beneficiari/mai.png"
                  alt="Ministerul Afacerilor Interne"
                  width={84}
                  height={84}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-sans">
                  {locale === "ro" ? "Min. Afacerilor Interne" : "Ministry of Internal Affairs"}
                </div>
                <div className="text-[11px] font-mono text-sky-400 mt-1 font-medium">
                  {locale === "ro" ? "IGAv & SMURD Misiuni SAR" : "IGAv & SMURD Aeromedical SAR"}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-sans">
                  {locale === "ro" ? "Intervenții urgență & protecție civilă" : "Emergency response & civil rescue"}
                </div>
              </div>
            </div>

            {/* 4. Serviciul Român de Informații */}
            <div className="bg-[#0a1526]/90 border border-slate-800/90 rounded-2xl p-6 text-center flex flex-col items-center justify-between space-y-4 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-24 w-24 relative flex items-center justify-center p-1 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/40 group-hover:bg-white/[0.07] transition-all">
                <Image
                  src="/images/beneficiari/sri.png"
                  alt="Serviciul Român de Informații"
                  width={84}
                  height={84}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-sans">
                  {locale === "ro" ? "Serviciul Român de Informații" : "Romanian Intelligence Service"}
                </div>
                <div className="text-[11px] font-mono text-sky-400 mt-1 font-medium">
                  {locale === "ro" ? "Misiuni Speciale Aeropurtate" : "Special Airborne Operations"}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-sans">
                  {locale === "ro" ? "Securitate strategică națională" : "National strategic defense security"}
                </div>
              </div>
            </div>

            {/* 5. Airbus Helicopters */}
            <div className="bg-[#0a1526]/90 border border-slate-800/90 rounded-2xl p-6 text-center flex flex-col items-center justify-between space-y-4 shadow-xl hover:border-sky-500/50 hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-24 w-24 relative flex items-center justify-center p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/40 group-hover:bg-white/[0.07] transition-all">
                <Image
                  src="/images/beneficiari/airbus.png"
                  alt="Airbus Helicopters"
                  width={84}
                  height={32}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-sans">
                  Airbus Helicopters
                </div>
                <div className="text-[11px] font-mono text-sky-400 mt-1 font-medium">
                  {locale === "ro" ? "Parteneriat Strategic OEM" : "Strategic OEM Partnership"}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-sans">
                  {locale === "ro" ? "Licență Alouette & Puma din 1971" : "OEM License Puma/Alouette since 1971"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section 05: Investor Relations 2-Click Fast Module */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-slate-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>{dict.sections.investorSubtitle}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                {dict.sections.investorTitle}
              </h2>
            </div>
            <Link
              href={`/${locale}/investitori`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>{locale === "ro" ? "Accesează Hub-ul Investitori" : "Investor Dashboard"}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Quick Access Investor Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link
              href={`/${locale}/investitori/raportari`}
              className="bg-[#0e1828] border border-slate-800/80 hover:border-sky-500/60 rounded-2xl p-6 hover:shadow-xl transition-all group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 font-mono font-bold text-xs">
                ESEF
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors mb-1.5 font-sans">
                {locale === "ro" ? "RAPORTĂRI FINANCIARE" : "FINANCIAL REPORTS"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {locale === "ro" ? "Rapoarte anuale ESEF, semestriale și curente 2011–2026." : "Annual, quarterly and periodic financial filings."}
              </p>
            </Link>

            <Link
              href={`/${locale}/investitori/aga`}
              className="bg-[#0e1828] border border-slate-800/80 hover:border-amber-400/60 rounded-2xl p-6 hover:shadow-xl transition-all group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 font-mono font-bold text-xs">
                AGA
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1.5 font-sans">
                {locale === "ro" ? "ADUNĂRILE GENERALE (AGA)" : "SHAREHOLDERS AGM"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {locale === "ro" ? "Convocatoare, buletine de vot, împuterniciri și decizii." : "Convocations, voting ballots, proxies and decisions."}
              </p>
            </Link>

            <Link
              href={`/${locale}/investitori/guvernanta-corporativa`}
              className="bg-[#0e1828] border border-slate-800/80 hover:border-emerald-400/60 rounded-2xl p-6 hover:shadow-xl transition-all group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold text-xs">
                OUG109
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-1.5 font-sans">
                {locale === "ro" ? "GUVERNANȚĂ CORPORATIVĂ" : "CORPORATE GOVERNANCE"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {locale === "ro" ? "Consiliu de Administrație, auditor financiar și declarații." : "Board of directors, auditor and policies."}
              </p>
            </Link>

            <Link
              href={`/${locale}/investitori/calendar-financiar`}
              className="bg-[#0e1828] border border-slate-800/80 hover:border-sky-500/60 rounded-2xl p-6 hover:shadow-xl transition-all group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 font-mono font-bold text-xs">
                2026
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors mb-1.5 font-sans">
                {locale === "ro" ? "CALENDAR FINANCIAR" : "FINANCIAL CALENDAR"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {locale === "ro" ? "Graficul oficial al comunicărilor financiare pe BVB." : "Scheduled dates for financial statements releases."}
              </p>
            </Link>
          </div>

          {/* Latest Available Reports (Direct 2-click download) */}
          <div className="bg-[#0a1526]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              {locale === "ro" ? "ULTIMELE RAPOARTE PUBLICATE PENTRU INVESTITORI:" : "LATEST PUBLISHED INVESTOR FILINGS:"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {recentReports.map((rep) => (
                <div
                  key={rep.id}
                  className="flex items-center justify-between p-4 bg-[#070e18] border border-slate-800/80 hover:border-sky-500/40 rounded-xl transition-all group"
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2 text-[10px] font-mono">
                      <span className="text-sky-400 font-bold">{rep.categoryLabel[locale]}</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-slate-400">{rep.publicationDate}</span>
                    </div>
                    <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors line-clamp-1 font-sans">
                      {rep.title}
                    </div>
                  </div>

                  <a
                    href={rep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-3.5 py-1.5 bg-sky-500/10 hover:bg-sky-600 text-sky-400 hover:text-white text-xs font-mono font-bold rounded-lg border border-sky-500/30 transition-all flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{rep.fileType}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Section 06: News & Procurement Split */}
      <section className="py-24 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Press Releases */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-xl font-bold font-sans text-white">
                  {locale === "ro" ? "Comunicate de Presă" : "Press Releases"}
                </h3>
                <Link
                  href={`/${locale}/comunicate`}
                  className="text-xs font-mono text-sky-400 hover:underline uppercase"
                >
                  {dict.sections.viewAll} →
                </Link>
              </div>

              <div className="space-y-4">
                {latestPress.map((art) => (
                  <div
                    key={art.id}
                    className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 space-y-2.5 hover:border-sky-500/40 transition-all shadow-md group"
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{art.date}</span>
                      <span>·</span>
                      <span className="text-sky-400 uppercase">{art.category}</span>
                    </div>
                    <h4 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors font-sans">
                      {art.title[locale]}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-sans">
                      {art.summary[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Procurement / Tenders */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-xl font-bold font-sans text-white">
                  {locale === "ro" ? "Achiziții & Licitații Active" : "Procurement & Tenders"}
                </h3>
                <Link
                  href={`/${locale}/achizitii`}
                  className="text-xs font-mono text-sky-400 hover:underline uppercase"
                >
                  {dict.sections.viewAll} →
                </Link>
              </div>

              <div className="space-y-4">
                {activeTenders.map((tender) => (
                  <div
                    key={tender.id}
                    className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 space-y-2.5 hover:border-amber-400/40 transition-all shadow-md group"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2.5 py-0.5 bg-amber-500/15 text-amber-300 rounded-full border border-amber-500/30 font-bold">
                        PROCEDURĂ ACTIVĂ
                      </span>
                      <span className="text-slate-400">REF: {tender.reference} · {tender.publicationDate}</span>
                    </div>
                    <h4 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors font-sans">
                      {tender.title[locale]}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-sans">
                      {tender.description[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section 07: Heritage Milestone */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-800 bg-[#0e1828] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full text-xs font-mono text-sky-400">
                <IarHeritageSeal size={18} className="text-sky-400" />
                <span>CENTENARUL AERONAUTIC AL ROMÂNIEI</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
                {locale === "ro" ? "Un Secol de Aviație Românească (1925 – 2025)" : "A Century of Romanian Aviation (1925 – 2025)"}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {locale === "ro"
                  ? "De la înființarea din 1925 sub egida concernelor aeronautice Blériot-SPAD și Lorraine-Dietrich, trecând prin producția legendarului avion de luptă IAR 80/81 și renașterea prin elicopterele IAR 330 Puma și IAR 316B Alouette III, IAR S.A. Brașov definește patrimoniul industrial aeronautic al României."
                  : "From our 1925 founding in partnership with Blériot-SPAD and Lorraine-Dietrich, through the legendary IAR 80/81 fighter aircraft of WWII, to the manufacturing and modern sustainment of the IAR 330 Puma and IAR 316B Alouette III fleets, IAR S.A. Brașov anchors Romanian aerospace excellence."}
              </p>
              <div className="pt-2">
                <Link
                  href={`/${locale}/istorie`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold font-sans uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-sky-600/20"
                >
                  <span>{locale === "ro" ? "VEZI CRONOLOGIA COMPLETĂ" : "VIEW COMPLETE TIMELINE"}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Background Historical Silhouette */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden md:block">
              <Image
                src="/images/istoric-1.jpeg"
                alt="Istoric IAR"
                fill
                className="object-cover object-center grayscale mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
