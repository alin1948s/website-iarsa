import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Building2,
  Phone,
  Mail,
  FileText,
  Clock,
} from "lucide-react";
import { Locale, dictionaries } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { executiveManagement } from "@/lib/data/governance";
import { Badge } from "@/components/ui/Badge";
import {
  IarHeritageSeal,
  RotorHeadSymbol,
  AvionicsHudSymbol,
  NatoAqapSeal,
  DepotHangarSymbol,
} from "@/components/ui/AerospaceSymbols";

const beneficiaryLogos: Record<string, { src: string; alt: string }> = {
  roaf: { src: "/images/beneficiari/roaf.png", alt: "Forțele Aeriene Române" },
  ronavy: { src: "/images/beneficiari/ronavy.png", alt: "Forțele Navale Române" },
  mai: { src: "/images/beneficiari/mai.png", alt: "Ministerul Afacerilor Interne" },
  sri: { src: "/images/beneficiari/sri.png", alt: "Serviciul Român de Informații" },
  airbus: { src: "/images/beneficiari/airbus.png", alt: "Airbus Helicopters" },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";
  const dict = dictionaries[locale];

  const beneficiaries = [
    {
      name: locale === "ro" ? "Ministerul Apărării Naționale (MApN)" : "Ministry of National Defence (MoND)",
      desc: locale === "ro" ? "Forțele Aeriene Române și Forțele Navale Române — suport tehnic complet pentru flota IAR 330 Puma și IAR 316B Alouette III." : "Romanian Air Force and Naval Forces — full depot maintenance and upgrade sustainment for Puma and Alouette III fleets.",
      type: "roaf" as const,
    },
    {
      name: locale === "ro" ? "Forțele Navale Române" : "Romanian Naval Forces",
      desc: locale === "ro" ? "Elicopterele IAR 330 NAVAL ambarcate pe fregatele T22 Regele Ferdinand, Regina Maria și Mărășești (misiuni ASW, ASuW și SAR)." : "IAR 330 NAVAL helicopters embarked on T22 frigates for anti-submarine, surface surveillance and maritime SAR operations.",
      type: "ronavy" as const,
    },
    {
      name: locale === "ro" ? "Ministerul Afacerilor Interne (MAI)" : "Ministry of Internal Affairs (MIA)",
      desc: locale === "ro" ? "Inspectoratul General de Aviație (IGAv) și serviciile SMURD — intervenții aeromedicale, ordine publică și căutare-salvare." : "General Aviation Inspectorate (IGAv) and SMURD — aeromedical evacuation, public order, and disaster response.",
      type: "mai" as const,
    },
    {
      name: locale === "ro" ? "Serviciul Român de Informații (SRI)" : "Romanian Intelligence Service (SRI)",
      desc: locale === "ro" ? "Misiuni speciale de transport aerian strategic și intervenție antiteroristă." : "Special tactical transport and rapid counter-terrorism response missions.",
      type: "sri" as const,
    },
    {
      name: locale === "ro" ? "Airbus Helicopters" : "Airbus Helicopters OEM",
      desc: locale === "ro" ? "Parteneriat strategic industrial inițiat în 1971 (fostul Aérospatiale / Eurocopter) pentru producția sub licență SA 330 Puma și SA 316B Alouette III." : "Strategic industrial partnership established in 1971 for licensed manufacturing of SA 330 Puma and SA 316B Alouette III platforms.",
      type: "airbus" as const,
    },
  ];

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-01 / IDENTITATE"
        title={locale === "ro" ? "Despre IAR S.A. Brașov" : "About IAR S.A. Brașov"}
        description={
          locale === "ro"
            ? "Companie strategică a industriei naționale de apărare din România, fondată în anul 1925. Singurul producător român de elicoptere și centru de excelență aeronautică pentru mentenanță de nivel D."
            : "Strategic enterprise of the Romanian national defense industry, founded in 1925. Romania's premier helicopter manufacturer and authorized Level D depot maintenance center."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Despre IAR" : "About IAR",
          },
        ]}
        locale={locale}
      />

      {/* Profile & History intro */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <IarHeritageSeal size={32} className="text-sky-400 shrink-0" />
                <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
                  {locale === "ro" ? "PROFIL INDUSTRIAL DE APĂRARE" : "DEFENSE INDUSTRIAL PROFILE"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                {locale === "ro"
                  ? "Peste un secol de excelență aeronautică pe platforma Ghimbav"
                  : "Over a century of aerospace engineering excellence at Ghimbav"}
              </h2>

              <div className="space-y-4 text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  {locale === "ro"
                    ? "IAR S.A. Brașov este o companie strategică din portofoliul Ministerului Economiei, Antreprenoriatului și Turismului, având ca obiect principal de activitate fabricația de aeronave și nave spațiale (cod CAEN 3030), precum și reparația și întreținerea aeronavelor (cod CAEN 3316)."
                    : "IAR S.A. Brașov operates as a strategic enterprise within the defense portfolio of the Romanian Ministry of Economy, specializing in aircraft and spacecraft manufacturing (NACE 3030) alongside heavy aircraft repair and maintenance (NACE 3316)."}
                </p>
                <p>
                  {locale === "ro"
                    ? "Cu sediul la Ghimbav, în inima bazinului industrial al județului Brașov, compania deține o infrastructură completă pentru mentenanța de Nivel D, reparații capitale, modernizarea avionicii și sistemelor de armament, precum și fabricarea structurilor metalice și compozite."
                    : "Headquartered at Ghimbav, Brașov, the company operates comprehensive depot infrastructure for Level D major overhaul, life extension programs, avionics and weapons modernization, as well as metallic and composite aerospace structures fabrication."}
                </p>
              </div>

              {/* Core Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-lg">
                  <div className="font-sans text-3xl font-extrabold text-sky-400">1925</div>
                  <div className="font-sans text-xs text-slate-400 mt-1">{locale === "ro" ? "Anul Înființării" : "Founded"}</div>
                </div>
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-lg">
                  <div className="font-sans text-3xl font-extrabold text-white">&gt; 360</div>
                  <div className="font-sans text-xs text-slate-400 mt-1">{locale === "ro" ? "Elicoptere Fabricate" : "Helicopters Built"}</div>
                </div>
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-lg">
                  <div className="font-sans text-3xl font-extrabold text-white">&gt; 830</div>
                  <div className="font-sans text-xs text-slate-400 mt-1">{locale === "ro" ? "Planoare & Moto" : "Gliders Built"}</div>
                </div>
                <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-lg">
                  <div className="font-sans text-3xl font-extrabold text-emerald-400">5.184 m²</div>
                  <div className="font-sans text-xs text-slate-400 mt-1">{locale === "ro" ? "Hangar MRO Nivel D" : "MRO Hangar Area"}</div>
                </div>
              </div>
            </div>

            {/* Authentic Media */}
            <div className="lg:col-span-5 relative h-[480px] rounded-3xl border border-slate-800 bg-[#0e1828] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-puma-2.jpeg"
                alt="Elicopter IAR 330 Puma"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e18] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0b1320]/95 border border-slate-800/80 backdrop-blur-md text-xs">
                <div className="text-white font-bold font-sans">IAR 330 PUMA · PLATFORMĂ MULTI-MISIUNE</div>
                <div className="text-slate-400 text-[11px] mt-0.5 font-sans">Mentenanță Nivel D & Suport Operațional pe Ciclul de Viață</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Strategic Values with Bespoke Aerospace Vector Graphics */}
      <section className="py-24 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
              {locale === "ro" ? "VALORI & MISIUNE STRATEGICĂ" : "STRATEGIC PURPOSE"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              {locale === "ro" ? "Angajamentul nostru pentru suveranitate și calitate" : "Engineering Defense Sovereignty & Safety"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card with Puma Rotor Hub Vector */}
            <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-8 space-y-5 shadow-xl hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <RotorHeadSymbol size={52} className="text-sky-400 group-hover:text-sky-300 transition-colors" />
                <span className="text-[11px] font-mono text-slate-500">MISIUNE OPERAȚIONALĂ</span>
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                {locale === "ro" ? "Misiunea Noastră" : "Our Mission"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {locale === "ro"
                  ? "Asigurarea disponibilității operaționale complete a flotei de elicoptere a forțelor armate române și a partenerilor internaționali, prin mentenanță riguroasă de cel mai înalt nivel tehnic, modernizare continuă și conformitate strictă cu standardele EASA și NATO."
                  : "Ensuring maximum operational readiness for the helicopter fleets of the Romanian Armed Forces and allied nations through depot-level maintenance, lifecycle upgrades, and strict conformance with NATO and EASA safety standards."}
              </p>
            </div>

            {/* Vision Card with Military Avionics HUD Vector */}
            <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-8 space-y-5 shadow-xl hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <AvionicsHudSymbol size={52} className="text-sky-400 group-hover:text-sky-300 transition-colors" />
                <span className="text-[11px] font-mono text-slate-500">VIZIUNE TEHNOLOGICĂ</span>
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                {locale === "ro" ? "Viziunea Tehnologică" : "Technological Vision"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {locale === "ro"
                  ? "Consolidarea statutului de centru regional european de excelență pentru mentenanța platformelor cu aripă rotativă, extinderea capacităților de fabricație aerostructuri de precizie și integrarea de sisteme avansate de misiune."
                  : "Consolidating our standing as the European regional center of excellence for rotary-wing MRO, expanding advanced aerostructures fabrication, and delivering next-generation mission avionics integration."}
              </p>
            </div>

            {/* Safety & Rigor Card with NATO AQAP Seal */}
            <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-8 space-y-5 shadow-xl hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <NatoAqapSeal size={52} className="text-sky-400 group-hover:text-sky-300 transition-colors" />
                <span className="text-[11px] font-mono text-slate-500">STANDARDE MILITARE</span>
              </div>
              <h3 className="text-xl font-bold text-white font-sans">
                {locale === "ro" ? "Rigoare & Integritate" : "Safety & Integrity"}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {locale === "ro"
                  ? "Cultura calității aeronautice fără compromis: toleranțe micrometrice, control nedistructiv exhaustiv, certificare EN 9100 / AQAP 2110 și guvernanță corporativă transparentă pe Bursa de Valori București."
                  : "Zero-compromise aviation safety culture: micrometer tolerances, exhaustive non-destructive testing, full EN 9100 / AQAP 2110 compliance, and open public governance on the Bucharest Stock Exchange."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries & Strategic Partners with Military Insignia */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 border-b border-slate-800/80 pb-5">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
              {locale === "ro" ? "COLABORARE INSTITUȚIONALĂ" : "OPERATIONAL PARTNERS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mt-2">
              {locale === "ro" ? "Beneficiari & Clienți Strategici" : "Key Clients & Beneficiaries"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficiaries.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="h-14 w-14 relative flex items-center justify-center p-1 rounded-xl bg-white/[0.04] border border-white/10">
                    <Image
                      src={beneficiaryLogos[b.type]?.src || "/images/beneficiari/roaf.png"}
                      alt={beneficiaryLogos[b.type]?.alt || b.name}
                      width={52}
                      height={52}
                      className="max-h-full max-w-full object-contain filter drop-shadow-md"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    BENEFICIAR ACTIV
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  {b.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-5 border-b border-slate-800/80 gap-4">
            <div>
              <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
                {locale === "ro" ? "MANAGEMENT EXECUTIV" : "EXECUTIVE LEADERSHIP"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mt-2">
                {locale === "ro" ? "Conducerea Executivă IAR S.A." : "Executive Management"}
              </h2>
            </div>
            <Link
              href={`/${locale}/investitori/guvernanta-corporativa`}
              className="text-xs font-sans text-sky-400 hover:text-sky-300 uppercase flex items-center gap-1 font-semibold tracking-wider"
            >
              <span>{locale === "ro" ? "Consiliu de Administrație & Guvernanță" : "Board of Directors & Governance"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executiveManagement.map((exec, idx) => (
              <div
                key={idx}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-sky-500/40 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-sans font-bold text-xs">
                    {exec.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <Badge variant="aviation">
                    {exec.role[locale]}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white font-sans">
                  {exec.name}
                </h3>

                <div className="text-xs font-sans text-slate-300 space-y-2 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exec.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <a href={`mailto:${exec.email}`} className="text-sky-400 hover:underline">
                      {exec.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
