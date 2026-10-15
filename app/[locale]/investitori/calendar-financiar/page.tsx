import React from "react";
import { Calendar, Clock, CheckCircle2, FileText, ChevronRight, AlertCircle, ArrowUpRight } from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function FinancialCalendarPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const schedule2026 = [
    {
      date: "27.02.2026",
      event:
        locale === "ro"
          ? "Transmiterea și publicarea rezultatelor financiare preliminare pentru anul 2025"
          : "Release of Preliminary Financial Results for FY 2025",
      status: "completed",
    },
    {
      date: "28.04.2026",
      event:
        locale === "ro"
          ? "Adunarea Generală Ordinară a Acționarilor de aprobare a situațiilor financiare anuale pentru 2025"
          : "Annual General Meeting of Shareholders approving FY 2025 Financials",
      status: "completed",
    },
    {
      date: "29.04.2026",
      event:
        locale === "ro"
          ? "Transmiterea și publicarea Raportului Anual 2025 (format ESEF/XHTML)"
          : "Release of the 2025 Annual Financial Report (ESEF format)",
      status: "completed",
    },
    {
      date: "15.05.2026",
      event:
        locale === "ro"
          ? "Transmiterea și publicarea Raportului aferent Trimestrului I 2026"
          : "Release of Quarterly Report Q1 2026",
      status: "completed",
    },
    {
      date: "14.08.2026",
      event:
        locale === "ro"
          ? "Transmiterea și publicarea Raportului Semestrial I 2026"
          : "Release of Half-Yearly Report H1 2026",
      status: "completed",
    },
    {
      date: "13.11.2026",
      event:
        locale === "ro"
          ? "Transmiterea și publicarea Raportului aferent Trimestrului III 2026"
          : "Release of Quarterly Report Q3 2026",
      status: "upcoming",
    },
  ];

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-07 / CALENDAR"
        badge="BVB: IARV · AN FINANCIAR 2026"
        title={locale === "ro" ? "Calendar Financiar" : "Financial Reporting Calendar"}
        description={
          locale === "ro"
            ? "Graficul oficial de comunicare financiară către Bursa de Valori București (BVB) și Autoritatea de Supraveghere Financiară (ASF) pentru exercițiul financiar în curs."
            : "Official financial communication schedule communicated to the Bucharest Stock Exchange (BVB) and Financial Supervisory Authority (ASF)."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Investitori" : "Investors",
            href: `/${locale}/investitori`,
          },
          {
            label: locale === "ro" ? "Calendar Financiar" : "Calendar",
          },
        ]}
        locale={locale}
      />

      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-white font-sans">
                  {locale === "ro" ? "Calendar Financiar 2026" : "2026 Financial Reporting Schedule"}
                </h2>
                <span className="text-xs text-slate-400 font-mono mt-1 block">
                  Simbol BVB: IARV · Raportări obligatorii conform Legii nr. 24/2017 & Regulamentului ASF nr. 5/2018
                </span>
              </div>
              <Badge variant="aviation">AN CURENT 2026</Badge>
            </div>

            <div className="space-y-3">
              {schedule2026.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    item.status === "completed"
                      ? "bg-[#070e18]/60 border-slate-800/80 hover:border-slate-700"
                      : "bg-sky-950/20 border-sky-500/30 hover:border-sky-500/50"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        item.status === "completed"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      }`}
                    >
                      {item.status === "completed" ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-sky-400">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-white font-sans">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  <div className="self-start sm:self-center shrink-0">
                    <Badge variant={item.status === "completed" ? "emerald" : "aviation"}>
                      {item.status === "completed"
                        ? locale === "ro"
                          ? "PUBLICAT"
                          : "COMPLETED"
                        : locale === "ro"
                        ? "PROGRAMAT"
                        : "UPCOMING"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
              <p>
                {locale === "ro"
                  ? "Evenimentele financiare sunt transmise simultan Bursei de Valori București și publicate în arhiva oficială de raportări."
                  : "Financial events are communicated simultaneously to the Bucharest Stock Exchange and published in the official filing archive."}
              </p>
              <Link
                href={`/${locale}/investitori/raportari`}
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold whitespace-nowrap"
              >
                <span>{locale === "ro" ? "Vezi Raportările Financiare" : "View Financial Reports"}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
