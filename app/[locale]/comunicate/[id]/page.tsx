import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, FileText, Download, ChevronLeft, ArrowLeft, ArrowDownToLine } from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { pressArticles } from "@/lib/data/press";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  const locales: Locale[] = ["ro", "en"];
  const params: { locale: string; id: string }[] = [];

  for (const locale of locales) {
    for (const art of pressArticles) {
      params.push({ locale, id: art.slug });
    }
  }

  return params;
}

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function PressDetailPage({ params }: PageProps) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  const article = pressArticles.find((a) => a.slug === id);
  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-11 / COMUNICAT"
        badge={article.categoryLabel[locale]}
        title={article.title[locale]}
        description={article.summary[locale]}
        breadcrumbs={[
          {
            label: locale === "ro" ? "Comunicate" : "Press",
            href: `/${locale}/comunicate`,
          },
          {
            label: article.title[locale],
          },
        ]}
        locale={locale}
      />

      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back link */}
          <Link
            href={`/${locale}/comunicate`}
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-slate-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>{locale === "ro" ? "Înapoi la toate comunicatele" : "Back to All Releases"}</span>
          </Link>

          {/* Article Container */}
          <div className="bg-[#0e1828] border border-slate-800/80 rounded-2xl p-6 sm:p-12 space-y-8 shadow-2xl">
            {/* Date & Metadata */}
            <div className="flex items-center gap-3 text-xs font-mono border-b border-slate-800/80 pb-4">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                {article.date}
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-sky-400 font-bold uppercase tracking-wider">IAR S.A. BRAȘOV</span>
            </div>

            {/* Article Body */}
            <div className="space-y-5 text-base text-slate-300 leading-relaxed font-sans">
              {article.body[locale].map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Document Attachment if present */}
            {article.documentUrl && (
              <div className="p-4 sm:p-5 bg-[#070e18] border border-sky-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">DOCUMENT OFICIAL ATAȘAT</div>
                    <span className="text-sm font-semibold text-white font-sans">
                      {article.title[locale]}
                    </span>
                  </div>
                </div>

                <a
                  href={article.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white text-xs font-sans uppercase font-bold rounded-xl flex items-center gap-2 shrink-0 transition-all shadow-lg shadow-sky-600/20"
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>{locale === "ro" ? "Descarcă PDF" : "Download PDF"}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
