import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { timelineEvents } from "@/lib/data/timeline";
import { HistoricalTimeline } from "@/components/timeline/HistoricalTimeline";
import { Badge } from "@/components/ui/Badge";
import { Award, Plane, ChevronRight } from "lucide-react";
import { IarHeritageSeal } from "@/components/ui/AerospaceSymbols";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HistoryPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-02 / ISTORIC"
        badge="TRADIȚIE AERONAUTICĂ 1925 – PREZENT"
        title={locale === "ro" ? "Istoria IAR S.A. Brașov" : "Aviation Pedigree & Heritage"}
        description={
          locale === "ro"
            ? "Un secol de inginerie aeronautică românească. De la pionieratul interbelic alături de Blériot-SPAD și legenda vânătorului IAR 80/81, până la producția elicopterelor moderne sub licență la Ghimbav."
            : "A century of aeronautical excellence. From interwar beginnings alongside Blériot-SPAD and the legendary IAR 80/81 fighter, to the production and depot maintenance of modern helicopters at Ghimbav."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Companie" : "Company",
            href: `/${locale}/despre-iar`,
          },
          {
            label: locale === "ro" ? "Istoric & Tradiție" : "Heritage",
          },
        ]}
        locale={locale}
      />

      {/* Heritage Stats Strip */}
      <div className="bg-[#050a12] border-b border-slate-800/80 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl flex flex-col items-center justify-between">
            <IarHeritageSeal size={40} className="text-sky-400 mb-2" />
            <div className="text-3xl font-sans font-extrabold text-sky-400">1925</div>
            <div className="text-xs font-sans text-slate-400 mt-1 uppercase">Constituirea IAR la Brașov</div>
          </div>
          <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl flex flex-col items-center justify-center">
            <div className="text-3xl font-sans font-extrabold text-white">&gt; 1.000</div>
            <div className="text-xs font-sans text-slate-400 mt-1 uppercase">Avioane Fabricate (1925–1944)</div>
          </div>
          <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl flex flex-col items-center justify-center">
            <div className="text-3xl font-sans font-extrabold text-amber-400">448</div>
            <div className="text-xs font-sans text-slate-400 mt-1 uppercase">Vânători IAR 80 / 81 Produși</div>
          </div>
          <div className="p-6 bg-[#0e1828] border border-slate-800/80 rounded-2xl shadow-xl flex flex-col items-center justify-center">
            <div className="text-3xl font-sans font-extrabold text-emerald-400">&gt; 360</div>
            <div className="text-xs font-sans text-slate-400 mt-1 uppercase">Elicoptere Fabricate la Ghimbav</div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-[#070e18] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-800/80 pb-4">
            <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
              {locale === "ro" ? "CRONOLOGIE DOCUMENTATĂ" : "DOCUMENTED CHRONOLOGY"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mt-1">
              {locale === "ro" ? "Etapele Dezvoltării Industriale" : "Industrial Milestones"}
            </h2>
          </div>

          <HistoricalTimeline events={timelineEvents} locale={locale} />
        </div>
      </section>

      {/* Monographic Focus: The IAR 80/81 Legend */}
      <section className="py-20 bg-[#0b1320]/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-800 bg-[#0e1828] rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <Badge variant="amber">SIMBOLUL AVIAȚIEI ROMÂNEȘTI</Badge>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                  IAR 80 & IAR 81 (1940 – 1944)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {locale === "ro"
                    ? "Conceput integral la Brașov de echipa condusă de ing. Ion Grosu, IAR 80 a fost unul dintre cele mai performante avioane de vânătoare monoplan cu aripă joasă din Europa la momentul apariției sale (1939). Cu o viteză maximă de 550 km/h la 4.000 m altitudine și motorul românesc IAR 14K de 1.000 CP, avionul a asigurat apărarea spațiului aerian național și a câmpurilor petrolifere de la Ploiești."
                    : "Designed entirely in Brașov by the engineering team led by Ion Grosu, the IAR 80 ranked among the most capable low-wing all-metal monoplane fighters in Europe upon its 1939 maiden flight. Powered by the Romanian-built 1,000 hp IAR 14K radial engine, reaching 550 km/h, the aircraft heroically defended national airspace and the Ploiești oil refineries."}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/${locale}/aeronave/iar-80-81`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-sans uppercase font-bold transition-all shadow-md shadow-sky-600/20 active:scale-[0.99]"
                  >
                    <span>{locale === "ro" ? "Fișa Tehnică Monografică IAR 80/81" : "IAR 80/81 Technical Monograph"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative h-72 sm:h-80 rounded-xl border border-slate-800 overflow-hidden bg-black shadow-lg">
                <Image
                  src="/images/istoric-3.jpeg"
                  alt="IAR 80 avion de vanatoare"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
