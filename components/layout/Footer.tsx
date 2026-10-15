import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Shield,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  Plane,
} from "lucide-react";
import { Locale, dictionaries } from "@/lib/i18n/dictionaries";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = dictionaries[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070e18] text-slate-400 border-t border-slate-800/80">
      {/* Top Engineering Coordinate Strip */}
      <div className="border-b border-slate-800/60 bg-[#0b1320]/90 text-[11px] font-mono tracking-wider py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sky-400 font-bold uppercase">
              IAR S.A. BRAȘOV · PLATFORMA INDUSTRIALĂ GHIMBAV
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400">COORD: 45°41&apos;30&quot;N 25°32&apos;48&quot;E</span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400">ELEV: 540M / 1772FT</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span>
              BVB: <span className="text-sky-400 font-bold">IARV</span>
            </span>
            <span className="text-slate-700">|</span>
            <span>CIF: RO 1132930</span>
            <span className="text-slate-700">|</span>
            <span>J08/4/1991</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Identity & Legal Registration */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-auto flex items-center">
                <Image
                  src="/images/iar-logo-white.png"
                  alt="IAR S.A. Brașov"
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="border-l border-slate-800 pl-3.5">
                <span className="font-extrabold text-white text-base tracking-wide font-sans block">
                  IAR S.A. BRAȘOV
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase">
                  {locale === "ro"
                    ? "Industria Aeronautică Română · Fondat 1925"
                    : "Romanian Aeronautical Industry · Est. 1925"}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pr-6">
              {dict.footer.desc}
            </p>

            <div className="p-4 rounded-xl bg-[#0e1828] border border-slate-800/80 text-xs font-mono space-y-2 shadow-sm">
              <div className="text-white font-bold flex items-center justify-between">
                <span>SIMBOL BVB: IARV</span>
                <span className="text-sky-400 font-semibold text-[11px]">PIAȚA REGLEMENTATĂ</span>
              </div>
              <div className="text-slate-400 text-[11px]">
                ISIN: ROIARVACNOR1 · CAPITAL SOCIAL: 47.197.132,50 LEI
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#101b2b] border border-slate-700/80 text-sky-300 font-medium">
                EN 9100:2018
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#101b2b] border border-slate-700/80 text-sky-300 font-medium">
                EASA PART 145
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#101b2b] border border-slate-700/80 text-sky-300 font-medium">
                NATO AQAP 2110
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#101b2b] border border-slate-700/80 text-sky-300 font-medium">
                EASA PART 21G
              </span>
            </div>
          </div>

          {/* Column 2: Companie & Capabilități */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
              {locale === "ro" ? "COMPANIE & OPERAȚIUNI" : "COMPANY & OPERATIONS"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href={`/${locale}/despre-iar`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/istorie`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.history}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/capabilitati`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.capabilities}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/aeronave`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.aircraft}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/mro`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.mro}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/certificari`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.certifications}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Investitori & Guvernanță */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
              {locale === "ro" ? "INVESTITORI & AGA" : "INVESTOR RELATIONS"}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href={`/${locale}/investitori`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {locale === "ro" ? "Hub Investitori" : "Investor Dashboard"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/investitori/raportari`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.reports}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/investitori/aga`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.aga}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/investitori/guvernanta-corporativa`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.governance}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/investitori/calendar-financiar`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.financialCalendar}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/integritate`}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/70" />
                  {dict.nav.integrity}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Date de Contact & Sediu */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
              {locale === "ro" ? "CONTACT SEDIU CENTRAL" : "HEADQUARTERS CONTACT"}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Str. Hermann Oberth nr. 34, 507075 Ghimbav, Jud. Brașov, România
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href="tel:+40268475108"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  +40 268 475 108 / +40 268 475 269
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">+40 268 475 174</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href="mailto:iar@iar.ro"
                  className="hover:underline text-sky-400 font-medium"
                >
                  iar@iar.ro
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="block text-[11px] font-mono text-slate-400 uppercase">
                  Canal Avertizor de Integritate:
                </span>
                <a
                  href="mailto:avertizor.integritate@iar.ro"
                  className="text-xs font-mono text-amber-300 hover:underline"
                >
                  avertizor.integritate@iar.ro
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Consumer Protection and Institutional Compliance Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://anpc.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 border border-slate-800 rounded-lg px-3 py-1.5 bg-[#0e1828] hover:border-slate-700 transition-colors"
            >
              <span>ANPC</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 border border-slate-800 rounded-lg px-3 py-1.5 bg-[#0e1828] hover:border-slate-700 transition-colors"
            >
              <span>ANPC - SAL</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href="https://bvb.ro/FinancialInstruments/Details/FinancialInstrumentsDetails.aspx?s=IARV"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 border border-sky-500/30 rounded-lg px-3 py-1.5 bg-sky-500/10 text-sky-300 font-mono hover:bg-sky-500/20 transition-colors"
            >
              <span>BVB: IARV</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="font-mono text-[11px] text-slate-400">
            SISTEM DE MANAGEMENT AL CALITĂȚII CONFORM EN 9100 / ISO 9001
          </div>
        </div>

        {/* Copyright and Legal Notice */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {year} {dict.footer.rights}</p>
          <p className="text-[11px] text-center md:text-right max-w-xl text-slate-400">
            {dict.footer.legalNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
