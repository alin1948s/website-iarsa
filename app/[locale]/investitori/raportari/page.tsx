import React from "react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { investorDocuments } from "@/lib/data/investor-documents";
import { DocumentArchive } from "@/components/investors/DocumentArchive";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ReportsArchivePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-07 / RAPORTĂRI"
        badge="ARHIVĂ OFICIALĂ 2011 – 2026"
        title={locale === "ro" ? "Raportări Financiare & Informări BVB" : "Financial Filings & Regulatory Disclosures"}
        description={
          locale === "ro"
            ? "Centrul complet de descărcare a rapoartelor financiare IAR S.A. Brașov: situații financiare anuale auditate (ESEF / XHTML), rapoarte semestriale și trimestriale, rezultate preliminare și proceduri de plată a dividendelor."
            : "Complete document archive for IAR S.A. Brașov financial disclosures: audited annual ESEF packages, half-yearly and quarterly financial reports, preliminary earnings releases, and dividend distribution procedures."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Investitori" : "Investors",
            href: `/${locale}/investitori`,
          },
          {
            label: locale === "ro" ? "Raportări Financiare" : "Financial Reports",
          },
        ]}
        locale={locale}
      />

      <section className="py-20 bg-[#070e18] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DocumentArchive documents={investorDocuments} locale={locale} />
        </div>
      </section>
    </div>
  );
}
