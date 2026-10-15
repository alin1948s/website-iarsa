import React from "react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { agaMeetingsData } from "@/lib/data/aga-meetings";
import { AgaMeetingGroup } from "@/components/investors/AgaMeetingGroup";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AgaPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-07 / AGA"
        badge="ADUNĂRILE GENERALE ALE ACȚIONARILOR"
        title={locale === "ro" ? "Adunările Generale ale Acționarilor (AGA)" : "General Shareholders Meetings (AGM)"}
        description={
          locale === "ro"
            ? "Arhiva completă a Adunărilor Generale Ordinare (AGOA) și Extraordinare (AGEA). Convocatoare, buletine de vot prin corespondență, procuri speciale, materiale supuse aprobării și hotărârile adoptate."
            : "Official archive of Ordinary (AGOA) and Extraordinary (AGEA) General Meetings. Convocations, postal voting ballots, special proxy forms, session briefing materials, and adopted shareholder resolutions."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Investitori" : "Investors",
            href: `/${locale}/investitori`,
          },
          {
            label: locale === "ro" ? "Adunările Generale (AGA)" : "General Meetings",
          },
        ]}
        locale={locale}
      />

      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AgaMeetingGroup meetings={agaMeetingsData} locale={locale} />
        </div>
      </section>
    </div>
  );
}
