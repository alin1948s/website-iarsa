import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Locale } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return [{ locale: "ro" }, { locale: "en" }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (locale !== "ro" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <div className="flex min-h-screen flex-col bg-[#07131F] text-[#F5F6F4]">
      <Header locale={validLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={validLocale} />
    </div>
  );
}
