import React from "react";
import Link from "next/link";
import { Calendar, FileText, Download, ChevronRight, ArrowUpRight, Newspaper } from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { pressArticles } from "@/lib/data/press";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PressPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-11 / COMUNICATE"
        badge="CENTRU MEDIA ȘI COMUNICARE PUBLICĂ"
        title={locale === "ro" ? "Comunicate de Presă & Noutăți" : "Press Releases & News"}
        description={
          locale === "ro"
            ? "Anunțuri oficiale, comunicate de presă, evenimente instituționale și informări de mediu publicate de IAR S.A. Brașov."
            : "Official statements, press releases, corporate milestones and public environmental notices released by IAR S.A. Brașov."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Comunicate" : "Press",
            href: `/${locale}/comunicate`,
          },
        ]}
        locale={locale}
      />

      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {pressArticles.map((art) => (
              <div
                key={art.id}
                className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl group"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <Badge variant="aviation">{art.categoryLabel[locale]}</Badge>
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {art.date}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
                  <Link
                    href={`/${locale}/comunicate/${art.slug}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {art.title[locale]}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {art.summary[locale]}
                </p>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <Link
                    href={`/${locale}/comunicate/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-sky-400 hover:text-sky-300 uppercase font-semibold tracking-wider transition-colors"
                  >
                    <span>{locale === "ro" ? "Citește comunicatul integral" : "Read Full Release"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  {art.documentUrl && (
                    <a
                      href={art.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white bg-[#070e18] px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-sky-400" />
                      <span>{art.documentType || "PDF"}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
