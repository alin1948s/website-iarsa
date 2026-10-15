"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Globe,
  TrendingUp,
  FileText,
  Shield,
  Wrench,
  Plane,
  Building2,
  Users,
  Briefcase,
  Phone,
  Sparkles,
  Layers,
} from "lucide-react";
import { Locale, dictionaries } from "@/lib/i18n/dictionaries";
import { GlobalSearchModal } from "@/components/search/GlobalSearchModal";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dict = dictionaries[locale];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Alternate locale path
  const targetLocale: Locale = locale === "ro" ? "en" : "ro";
  const switchLocalePath = () => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${targetLocale}`;
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  };

  const navLinks = [
    {
      id: "company",
      label: dict.nav.company,
      href: `/${locale}/despre-iar`,
      children: [
        {
          label: dict.nav.about,
          href: `/${locale}/despre-iar`,
          desc: locale === "ro" ? "Identitate, misiune și beneficiari strategici" : "Identity, mission and strategic partners",
          icon: Building2,
        },
        {
          label: dict.nav.history,
          href: `/${locale}/istorie`,
          desc: locale === "ro" ? "100 de ani de excelență aeronautică (1925–2025)" : "100 years of aviation heritage (1925–2025)",
          icon: Plane,
        },
        {
          label: dict.nav.integrity,
          href: `/${locale}/integritate`,
          desc: locale === "ro" ? "Cod etic, plan de integritate și avertizor" : "Ethics code, integrity and whistleblowing",
          icon: Shield,
        },
      ],
    },
    {
      id: "capabilities",
      label: dict.nav.capabilities,
      href: `/${locale}/capabilitati`,
      children: [
        {
          label: locale === "ro" ? "Toate Capabilitățile" : "All Capabilities",
          href: `/${locale}/capabilitati`,
          desc: locale === "ro" ? "Privire de ansamblu asupra proceselor industriale" : "Overview of industrial aerospace processes",
          icon: Layers,
        },
        {
          label: locale === "ro" ? "Mentenanță Nivel D" : "Level D Maintenance",
          href: `/${locale}/capabilitati/mentenanta-nivel-d`,
          desc: locale === "ro" ? "Revizii majore celulă și echipamente dinamice" : "Major overhaul of airframe and dynamic parts",
          icon: Wrench,
        },
        {
          label: locale === "ro" ? "Modernizări & Avionică" : "Upgrades & Avionics",
          href: `/${locale}/capabilitati/programe-modernizare`,
          desc: locale === "ro" ? "Integrare echipamente NATO, SOCAT & Naval" : "NATO standard integration, SOCAT & Naval",
          icon: Plane,
        },
        {
          label: locale === "ro" ? "Fabricație & Structuri" : "Manufacturing & Structures",
          href: `/${locale}/capabilitati/fabricatie-aeronautica`,
          desc: locale === "ro" ? "Prelucrări mecanice, compozite și asamblare" : "Precision machining, composites and assembly",
          icon: Building2,
        },
      ],
    },
    {
      id: "aircraft",
      label: dict.nav.aircraft,
      href: `/${locale}/aeronave`,
      children: [
        {
          label: "IAR 330 PUMA",
          href: `/${locale}/aeronave/iar-330-puma`,
          desc: locale === "ro" ? "Suport operațional activ, MRO & modernizare" : "Active operational support, MRO & upgrade",
          icon: Plane,
        },
        {
          label: "IAR 316B ALOUETTE III",
          href: `/${locale}/aeronave/iar-316b-alouette-iii`,
          desc: locale === "ro" ? "Mentenanță de depou și suport tehnic continuu" : "Depot maintenance and continuous fleet support",
          icon: Plane,
        },
        {
          label: locale === "ro" ? "Moștenire & Istoric (IAR 80/81)" : "Aviation Legacy (IAR 80/81)",
          href: `/${locale}/aeronave/iar-80-81`,
          desc: locale === "ro" ? "Avionul legendar de vânătoare și planoare IS" : "Legendary fighter aircraft and IS gliders",
          icon: Plane,
        },
      ],
    },
    {
      id: "mro",
      label: dict.nav.mro,
      href: `/${locale}/mro`,
    },
    {
      id: "certifications",
      label: dict.nav.certifications,
      href: `/${locale}/certificari`,
    },
    {
      id: "investors",
      label: dict.nav.investors,
      href: `/${locale}/investitori`,
      children: [
        {
          label: locale === "ro" ? "Hub Investitori & Acționariat" : "Investor Overview",
          href: `/${locale}/investitori`,
          desc: locale === "ro" ? "Acțiuni IARV, capital social și dividende" : "IARV stock, capital structure and dividends",
          icon: TrendingUp,
        },
        {
          label: dict.nav.reports,
          href: `/${locale}/investitori/raportari`,
          desc: locale === "ro" ? "Rapoarte anuale, semestriale și curente 2011–2026" : "Annual, half-yearly and current reports 2011–2026",
          icon: FileText,
        },
        {
          label: dict.nav.aga,
          href: `/${locale}/investitori/aga`,
          desc: locale === "ro" ? "Convocatoare, buletine de vot și hotărâri" : "Convocations, ballots and AGM resolutions",
          icon: Users,
        },
        {
          label: dict.nav.governance,
          href: `/${locale}/investitori/guvernanta-corporativa`,
          desc: locale === "ro" ? "Consiliu de Administrație, conducere și audit" : "Board of directors, executive officers & audit",
          icon: Shield,
        },
        {
          label: dict.nav.financialCalendar,
          href: `/${locale}/investitori/calendar-financiar`,
          desc: locale === "ro" ? "Date de publicare evenimente financiare" : "Scheduled financial event dates",
          icon: FileText,
        },
      ],
    },
    {
      id: "procurement",
      label: dict.nav.procurement,
      href: `/${locale}/achizitii`,
    },
    {
      id: "careers",
      label: dict.nav.careers,
      href: `/${locale}/cariere`,
    },
    {
      id: "contact",
      label: dict.nav.contact,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[#070e18]/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/30"
            : "bg-[#070e18]/85 backdrop-blur-sm border-b border-slate-800/80"
        )}
      >
        {/* Top Technical Metadata Strip */}
        <div className="hidden lg:block border-b border-slate-800/70 bg-[#040810]/70 text-slate-400 text-[11px] font-mono tracking-wider py-1.5 px-4 sm:px-8">
          <div className="w-full max-w-[1536px] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                45°41&apos;30&quot;N 25°32&apos;48&quot;E · GHIMBAV, BRAȘOV
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-300 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-sky-400" />
                BVB: <span className="text-sky-400 font-bold">IARV</span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400">EASA PART 145 · EN 9100 · NATO AQAP 2110</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href={`/${locale}/investitori/raportari`}
                className="hover:text-white flex items-center gap-1.5 transition-colors text-slate-300 text-[11px]"
              >
                <FileText className="w-3 h-3 text-sky-400" />
                <span>{locale === "ro" ? "Raportări Financiare 2026" : "Financial Reports 2026"}</span>
              </Link>
              <span className="text-slate-700">|</span>
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded border border-slate-700/60">
                <Link
                  href={locale === "ro" ? pathname : switchLocalePath()}
                  className={cn(
                    "px-1.5 py-0.5 text-[10px] font-bold rounded transition-colors",
                    locale === "ro"
                      ? "bg-sky-600 text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  RO
                </Link>
                <Link
                  href={locale === "en" ? pathname : switchLocalePath()}
                  className={cn(
                    "px-1.5 py-0.5 text-[10px] font-bold rounded transition-colors",
                    locale === "en"
                      ? "bg-sky-600 text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0"
            >
              <div className="relative h-10 sm:h-11 w-auto flex-shrink-0 flex items-center">
                <Image
                  src="/images/iar-logo-white.png"
                  alt="IAR S.A. Brașov"
                  width={130}
                  height={44}
                  className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden xl:flex items-center justify-center flex-1 mx-2 2xl:mx-6 space-x-0.5 2xl:space-x-1">
              {navLinks
                .filter((item) => item.id !== "contact")
                .map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isActive = pathname?.startsWith(item.href);

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                          "px-2 2xl:px-3 py-2 text-xs 2xl:text-[13px] font-semibold tracking-wide transition-all rounded-md whitespace-nowrap",
                          isActive
                            ? "text-sky-400 font-bold bg-sky-500/10 border border-sky-500/20"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "px-2 2xl:px-3 py-2 text-xs 2xl:text-[13px] font-semibold tracking-wide inline-flex items-center gap-1 transition-all rounded-md whitespace-nowrap",
                          isActive || activeDropdown === item.id
                            ? "text-sky-400 font-bold bg-sky-500/10 border border-sky-500/20"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            activeDropdown === item.id && "rotate-180 text-sky-400"
                          )}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.id && (
                        <div className="absolute top-full left-0 w-84 bg-[#0a1526]/95 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-150">
                          <div className="space-y-1">
                            {item.children?.map((child, idx) => {
                              const IconComponent = child.icon || FileText;
                              return (
                                <Link
                                  key={idx}
                                  href={child.href}
                                  className="flex items-start gap-3 p-2.5 hover:bg-white/5 rounded-lg transition-colors group/child"
                                >
                                  <div className="p-2 bg-slate-800/80 border border-slate-700/60 rounded-md text-sky-400 group-hover/child:border-sky-500/50 group-hover/child:bg-sky-500/10 flex-shrink-0">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-white group-hover/child:text-sky-400 transition-colors font-sans">
                                      {child.label}
                                    </div>
                                    {child.desc && (
                                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                                        {child.desc}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-2.5 flex-shrink-0">
              {/* Search Modal Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.05] hover:bg-white/[0.1] border border-slate-700/80 rounded-lg text-slate-300 hover:text-white text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 flex-shrink-0"
                aria-label={locale === "ro" ? "Căutare în site" : "Search site"}
              >
                <Search className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline font-sans font-medium">{locale === "ro" ? "Căutare" : "Search"}</span>
              </button>

              {/* Contact Button */}
              <Link
                href={`/${locale}/contact`}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold font-sans uppercase tracking-wider rounded-lg transition-all shadow-md shadow-sky-600/20 whitespace-nowrap flex-shrink-0"
              >
                <span>CONTACT</span>
              </Link>

              {/* Mobile Language Switch */}
              <Link
                href={switchLocalePath()}
                className="xl:hidden flex items-center gap-1 px-2.5 py-2 border border-slate-700 rounded-lg text-xs font-mono text-white hover:bg-white/5"
              >
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>{locale === "ro" ? "EN" : "RO"}</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#070e18] border-b border-slate-800 max-h-[calc(100vh-5rem)] overflow-y-auto p-5 space-y-4 shadow-2xl">
            <div className="p-3 border border-slate-800 rounded-lg bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>BVB: <strong className="text-sky-400">IARV</strong></span>
              <span className="text-sky-400">GHIMBAV, RO</span>
            </div>

            <nav className="space-y-2">
              {navLinks.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <div key={item.id} className="border-b border-slate-800/60 pb-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-bold font-sans tracking-wide text-white hover:text-sky-400"
                    >
                      {item.label}
                    </Link>

                    {hasChildren && (
                      <div className="pl-3 mt-1 space-y-1.5 border-l border-slate-700/60">
                        {item.children?.map((child, idx) => (
                          <Link
                            key={idx}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-slate-300 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-sky-600 text-white text-xs font-sans uppercase tracking-wider font-bold rounded-lg"
              >
                {locale === "ro" ? "CONTACT & AUDIENȚE" : "CONTACT & INQUIRIES"}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        locale={locale}
      />
    </>
  );
}
