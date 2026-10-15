import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { Card } from "@/components/ui/Card";
import {
  DepotHangarSymbol,
  RotorHeadSymbol,
  TurboshaftEngineSymbol,
  AvionicsHudSymbol,
  AirframeRibSymbol,
  NdtInspectionSymbol,
  HoneycombCompositeSymbol,
  NatoAqapSeal,
} from "@/components/ui/AerospaceSymbols";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MroPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const hangarSpecs = [
    { label: locale === "ro" ? "Suprafață Hangar Închis" : "Enclosed Hangar Surface", value: "5.184 m²" },
    { label: locale === "ro" ? "Înălțime Liberă Sub Grindă" : "Clear Hook Height Under Crane", value: "12,0 m" },
    { label: locale === "ro" ? "Capacitate Pod Rulant" : "Overhead Gantry Crane Rating", value: "3,2 tone" },
    { label: locale === "ro" ? "Dimensiuni Porți Acces" : "Main Access Door Clear Width", value: "36 m x 9 m" },
    { label: locale === "ro" ? "Heliport Propriu Autorizat" : "Proprietary Licensed Heliport", value: "Indicativ ICAO: LRGH" },
    { label: locale === "ro" ? "Alimentare Electrică Hangar" : "Ground Power Units Available", value: "28V DC / 115V 400Hz AC" },
    { label: locale === "ro" ? "Microclimat & Mediu Controlat" : "Environmental Climate Control", value: "Temp. 18-24°C / Umiditate Monitorizată" },
    { label: locale === "ro" ? "Certificare EASA Part 145" : "EASA Part 145 Approval", value: "Certificat nr. RO.145.0009" },
  ];

  const workshops = [
    {
      symbol: <NdtInspectionSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />,
      code: "SHOP-01 / NDT",
      title: locale === "ro" ? "Laborator Control Nedistructiv (NDT)" : "Non-Destructive Testing (NDT) Lab",
      desc: locale === "ro" ? "Examinări cu ultrasunete, particule magnetice, lichide penetrante, curenți turbionari și radiografie industrială cu raze X." : "Ultrasonic, magnetic particle, liquid penetrant, eddy current, and industrial X-ray radiographic inspection.",
    },
    {
      symbol: <RotorHeadSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />,
      code: "SHOP-02 / DINAMIC",
      title: locale === "ro" ? "Atelier Ansambluri Mecanice & Reductoare" : "Mechanical Assemblies & Dynamic Components",
      desc: locale === "ro" ? "Revizia completă a cutiilor de transmisie principale (MGB), reductoarelor intermediare/spate și a capetelor de rotor." : "Full overhaul of main gearboxes (MGB), intermediate/tail gearboxes, and main rotor head dynamic assemblies.",
    },
    {
      symbol: <AvionicsHudSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />,
      code: "SHOP-03 / AVIONICĂ",
      title: locale === "ro" ? "Laborator Electronică, Avionică & Radar" : "Avionics, Radar & Electrical Shop",
      desc: locale === "ro" ? "Bancuri de testare pentru girostabilizatoare, computere de bord, sisteme de navigație TACAN/VOR/ILS și radare meteo/maritime." : "Automated test benches for gyrostabilizers, mission computers, TACAN/VOR/ILS navigation, and maritime search radars.",
    },
    {
      symbol: <HoneycombCompositeSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />,
      code: "SHOP-04 / STRUCTURI",
      title: locale === "ro" ? "Secție Fabricație & Reparații Compozite" : "Composite & Sheet Metal Fabrication",
      desc: locale === "ro" ? "Camere curate cu temperatură controlată, autoclave și bancuri de reparație pentru pale de rotor și structuri fagure tip sandwich." : "Cleanrooms, autoclaves, and specialized bonding jigs for rotor blades and Nomex honeycomb composite structures.",
    },
    {
      symbol: <TurboshaftEngineSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />,
      code: "SHOP-05 / TURBO",
      title: locale === "ro" ? "Mentenanță Turbomotoare & Instalație Combustibil" : "Turboshaft Maintenance & Fuel Systems",
      desc: locale === "ro" ? "Inspecții boroscopice, revizii pompe de injecție combustibil, regulatoare hidromecanice și probe pe banc de motoare Turbomeca." : "Borescope audits, fuel metering unit recalibration, hydromechanical regulators, and Turbomeca engine test runs.",
    },
    {
      symbol: <DepotHangarSymbol size={44} className="text-sky-400 group-hover:text-sky-300 transition-colors" />,
      code: "SHOP-06 / TRATAMENTE",
      title: locale === "ro" ? "Atelier Tratamente de Suprafață & Vopsitorie" : "Surface Treatment & Aerospace Paint Facility",
      desc: locale === "ro" ? "Băi de eloxare cromică, pasivare, decapare chimică și cabină industrială de vopsire în câmp electrostatic la standarde militare." : "Chromic anodizing, chemical conversion coatings, and military-grade electrostatic spray painting booths.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      code: "MRO-PHASE-01",
      title: locale === "ro" ? "Recepție Tehnică & Audit Documentar" : "Induction, Documentation & Logbook Audit",
      desc: locale === "ro" ? "Verificarea resurselor de viață rămase, istoricului de mentenanță și inspectarea vizuală preliminară a aeronavei intrate în depou." : "Auditing total flight hours, remaining lifecycles, service bulletins, and baseline structural inspection.",
    },
    {
      step: "02",
      code: "MRO-PHASE-02",
      title: locale === "ro" ? "Demontare Celulă & Curățare Chimică" : "Airframe Disassembly & Strip Cleaning",
      desc: locale === "ro" ? "Demontarea motoarelor, transmisiei, palelor și sistemelor de bord. Îndepărtarea vopselei vechi prin metode neabrazive certificate." : "Complete teardown of engines, gearboxes, rotor blades and avionics. Non-destructive paint stripping.",
    },
    {
      step: "03",
      code: "MRO-PHASE-03",
      title: locale === "ro" ? "Inspecție NDT Exhaustivă" : "Exhaustive NDT Structural Audit",
      desc: locale === "ro" ? "Radiografiere cadre de forță, căutare microfisuri prin curenți turbionari și evaluare coroziune pe structura primară." : "Radiographic survey of major bulkheads, eddy current crack detection and corrosion mapping.",
    },
    {
      step: "04",
      code: "MRO-PHASE-04",
      title: locale === "ro" ? "Revizie Componente & Modernizare" : "Subsystem Overhaul & Upgrade",
      desc: locale === "ro" ? "Reparația capitală a ansamblurilor mecanice, recablare conform MIL-W-22759 și integrarea noilor echipamente de avionică." : "Depot overhaul of dynamic assemblies, full MIL-spec rewiring and integration of modern mission avionics.",
    },
    {
      step: "05",
      code: "MRO-PHASE-05",
      title: locale === "ro" ? "Asamblare pe Gabarit & Reglaje" : "Precision Jig Reassembly & Rigging",
      desc: locale === "ro" ? "Remontarea pe gabaritul original de fabricație, calibrarea comenzilor de zbor și presurizare hidraulică la 175 bar." : "Rebuilding on master production jigs, flight control rigging and 175-bar hydraulic pressure integrity checks.",
    },
    {
      step: "06",
      code: "MRO-PHASE-06",
      title: locale === "ro" ? "Probe Sol & Zboruri Recepție" : "Ground Runs & Flight Acceptance",
      desc: locale === "ro" ? "Rulaj la punct fix pe heliportul propriu LRGH, probe de vibrații rotor și zboruri oficiale de acceptanță cu pilot recepționer militar." : "Static engine ground runs on LRGH heliport, rotor dynamic balancing and military customer flight acceptance tests.",
    },
  ];

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-05 / MRO INDUSTRIAL"
        badge="EASA PART 145 / RO.145.0009"
        title={locale === "ro" ? "Infrastructură MRO & Mentenanță Nivel D" : "MRO Infrastructure & Heavy Depot Overhaul"}
        description={
          locale === "ro"
            ? "Centru european autorizat pentru revizii capitale, extindere de resursă și modernizări pe flote de elicoptere. Hangar industrial de 5.184 m², laboratoare NDT acreditate și heliport propriu autorizat la Ghimbav."
            : "European approved depot center for major overhauls, structural life extension, and modernization on rotary-wing fleets. 5,184 m² heavy maintenance hangar, accredited NDT laboratories, and proprietary licensed heliport at Ghimbav."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "MRO Industrial" : "Industrial MRO",
            href: `/${locale}/mro`,
          },
        ]}
        locale={locale}
      />

      {/* Hangar Specifications Showcase */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hangar Photos & Tag */}
            <div className="space-y-4">
              <div className="relative h-80 sm:h-[420px] rounded-3xl border border-slate-800 overflow-hidden bg-black shadow-2xl">
                <Image
                  src="/images/revizii-hangar.webp"
                  alt="Hangar Mentenanta IAR Brasov"
                  fill
                  priority
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0b1320]/95 border border-slate-800/80 backdrop-blur-md flex items-center justify-between text-xs font-sans">
                  <div>
                    <span className="text-white font-bold block text-sm">Hangar Central MRO · Ghimbav-Brașov</span>
                    <span className="text-slate-400 text-[11px] mt-0.5 block">5.184 m² suprafață utilă autorizată EASA Part 145</span>
                  </div>
                  <DepotHangarSymbol size={36} className="text-sky-400 shrink-0 ml-3" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-60 sm:h-64 rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-xl group">
                  <Image
                    src="/images/mro-facilities.webp"
                    alt="Facilitati MRO IAR"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1828] via-[#0e1828]/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-[#0a1526]/90 border border-slate-700/60 rounded-xl backdrop-blur-sm">
                    <div className="text-white font-bold text-xs font-sans">
                      {locale === "ro" ? "Bancuri Verificare Dinamică" : "Dynamic Test Rigs"}
                    </div>
                    <div className="text-slate-400 text-[10px] font-mono mt-0.5">
                      {locale === "ro" ? "Probe Sarcină Reductoare & Arbori 3.500 CP" : "Main Gearbox & Shaft Load Testing 3,500 HP"}
                    </div>
                  </div>
                </div>

                <div className="relative h-60 sm:h-64 rounded-2xl border border-slate-800 overflow-hidden bg-black shadow-xl group">
                  <Image
                    src="/images/laboratoare-sisteme.jpg"
                    alt="Laboratoare Testare IAR"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1828] via-[#0e1828]/40 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-[#0a1526]/90 border border-slate-700/60 rounded-xl backdrop-blur-sm">
                    <div className="text-white font-bold text-xs font-sans">
                      {locale === "ro" ? "Laborator Avionică & Radar" : "Avionics & Radar Laboratory"}
                    </div>
                    <div className="text-slate-400 text-[10px] font-mono mt-0.5">
                      {locale === "ro" ? "Diagnostic Bus 1553, FLIR & ELS SOCAT" : "MIL-STD-1553 Bus, FLIR & ELS Diagnostics"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specs List */}
            <div className="space-y-6">
              <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
                {locale === "ro" ? "FIȘĂ TEHNICĂ HANGAR" : "HANGAR SPECIFICATIONS"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                {locale === "ro" ? "Capacitate Industrială Majoră la Ghimbav" : "Depot-Level Industrial Capacity"}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {locale === "ro"
                  ? "Hangarul industrial principal al IAR S.A. Brașov este special proiectat și utilat pentru executarea simultană a reviziilor de Nivel D pe mai multe elicoptere medii și ușoare (Puma și Alouette), în condiții de microclimat controlat și securitate strictă."
                  : "The primary industrial hangar of IAR S.A. Brașov is custom-engineered for concurrent Level D depot overhauls across multiple medium and light rotary platforms (Puma and Alouette) under controlled microclimate and strict security standards."}
              </p>

              <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-7 divide-y divide-slate-800/80 font-mono text-xs shadow-xl">
                {hangarSpecs.map((spec, idx) => (
                  <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between">
                    <span className="text-slate-400 font-sans">{spec.label}</span>
                    <span className="text-sky-400 font-bold font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Laboratories & Workshops with Custom Aerospace Vectors */}
      <section className="py-24 bg-[#050a12] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 border-b border-slate-800/80 pb-5">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
              {locale === "ro" ? "ATELIERE & LABORATOARE" : "TEST LABORATORIES & WORKSHOPS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mt-2">
              {locale === "ro" ? "Infrastructura de Testare și Calibrare" : "Testing, Calibration & Specialized Shops"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w, idx) => (
              <div
                key={idx}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-sky-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-sky-500/5 rounded-xl border border-sky-500/20 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-all">
                    {w.symbol}
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    {w.code}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors font-sans">
                  {w.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process: Authentic Depot Work Order Cards */}
      <section className="py-24 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 border-b border-slate-800/80 pb-5">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase font-semibold">
              {locale === "ro" ? "PROCES TEHNOLOGIC NIVEL D" : "LEVEL D DEPOT WORKFLOW"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans mt-2">
              {locale === "ro" ? "Fazele unei Revizii Majore de Elicopter" : "Lifecycle Overhaul Workflow"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((wf, idx) => (
              <Card
                key={idx}
                variant="workorder"
                serial={wf.code}
                className="space-y-4 pt-12 relative group hover:border-sky-500/50 transition-all shadow-xl"
              >
                <div className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">
                  {wf.step}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-sans">
                  {wf.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {wf.desc}
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>CONFORM EASA PART 145</span>
                  <span className="text-emerald-400">✓ APROBAT DEPOT</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
