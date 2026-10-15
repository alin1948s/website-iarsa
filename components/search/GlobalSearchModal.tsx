"use client";

import React, { useState, useEffect } from "react";
import { Search, X, FileText, Compass, Plane, Briefcase, Award, ArrowRight, CornerDownLeft } from "lucide-react";
import Link from "next/link";
import { capabilitiesData } from "@/lib/data/capabilities";
import { aircraftData } from "@/lib/data/aircraft";
import { investorDocuments } from "@/lib/data/investor-documents";
import { agaMeetingsData } from "@/lib/data/aga-meetings";
import { procurementData } from "@/lib/data/procurement";
import { careerPositions } from "@/lib/data/careers";
import { certificationsData } from "@/lib/data/certifications";
import { type Locale } from "@/lib/i18n/dictionaries";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export function GlobalSearchModal({ isOpen, onClose, locale }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredCapabilities = cleanQuery
    ? capabilitiesData.filter(
        (c) =>
          c.title[locale].toLowerCase().includes(cleanQuery) ||
          c.shortDescription[locale].toLowerCase().includes(cleanQuery) ||
          c.code.toLowerCase().includes(cleanQuery)
      )
    : [];

  const filteredAircraft = cleanQuery
    ? aircraftData.filter(
        (a) =>
          a.name.toLowerCase().includes(cleanQuery) ||
          a.summary[locale].toLowerCase().includes(cleanQuery) ||
          a.type.toLowerCase().includes(cleanQuery)
      )
    : [];

  const filteredInvestorDocs = cleanQuery
    ? investorDocuments
        .filter(
          (d) =>
            d.title.toLowerCase().includes(cleanQuery) ||
            d.year.toString().includes(cleanQuery) ||
            d.categoryLabel[locale].toLowerCase().includes(cleanQuery)
        )
        .slice(0, 5)
    : [];

  const filteredAga = cleanQuery
    ? agaMeetingsData.filter((m) => m.title.toLowerCase().includes(cleanQuery) || m.year.toString().includes(cleanQuery))
    : [];

  const filteredProcurement = cleanQuery
    ? procurementData.filter(
        (p) =>
          p.title[locale].toLowerCase().includes(cleanQuery) ||
          p.reference.toLowerCase().includes(cleanQuery)
      )
    : [];

  const filteredCareers = cleanQuery
    ? careerPositions.filter(
        (j) =>
          j.title[locale].toLowerCase().includes(cleanQuery) ||
          j.department[locale].toLowerCase().includes(cleanQuery)
      )
    : [];

  const filteredCertifications = cleanQuery
    ? certificationsData.filter(
        (cert) =>
          cert.title.toLowerCase().includes(cleanQuery) ||
          cert.code.toLowerCase().includes(cleanQuery) ||
          cert.reference.toLowerCase().includes(cleanQuery)
      )
    : [];

  const totalResults =
    filteredCapabilities.length +
    filteredAircraft.length +
    filteredInvestorDocs.length +
    filteredAga.length +
    filteredProcurement.length +
    filteredCareers.length +
    filteredCertifications.length;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#0e1828] border border-slate-700/70 shadow-2xl rounded-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-800 bg-[#070e18]/90">
          <Search className="w-5 h-5 text-sky-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "ro"
                ? "Caută capabilități, elicoptere, documente financiare, AGA, achiziții..."
                : "Search capabilities, aircraft, financial reports, AGM, tenders..."
            }
            className="w-full bg-transparent text-white text-base placeholder-slate-500 focus:outline-none font-sans"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-white p-1 mr-2 transition-colors rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[65vh] overflow-y-auto p-5 space-y-6">
          {!query && (
            <div className="text-center py-10 text-slate-400">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 mb-3 border border-sky-500/20">
                <Search className="w-6 h-6" />
              </div>
              <p className="font-sans text-xs tracking-wider uppercase font-semibold text-slate-300 mb-1">
                {locale === "ro" ? "Index de Căutare IAR Brașov" : "IAR Brașov Search Index"}
              </p>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                {locale === "ro"
                  ? "Tastați un termen pentru a accesa direct platformele IAR, rapoartele BVB sau procedurile de mentenanță."
                  : "Type a keyword to jump directly to aircraft platforms, BVB investor filings, or MRO capabilities."}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs">
                {["Puma", "Alouette", "Raport anual", "AGA", "EN 9100", "Achiziții", "Director General"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 bg-slate-800/80 hover:bg-sky-600 text-slate-300 hover:text-white border border-slate-700/80 rounded-full font-sans transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="text-center py-12 text-slate-400">
              <p className="text-base font-sans text-slate-300">
                {locale === "ro" ? "Nu au fost găsite rezultate pentru" : "No results found for"} &ldquo;<span className="text-white font-medium">{query}</span>&rdquo;.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {locale === "ro" ? "Verificați termenii de căutare sau navigați prin secțiunile principale." : "Please refine your search query or navigate through the main menu."}
              </p>
            </div>
          )}

          {/* Capabilities Results */}
          {filteredCapabilities.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2.5">
                <Compass className="w-3.5 h-3.5" />
                <span>{locale === "ro" ? "CAPABILITĂȚI & FABRICAȚIE" : "CAPABILITIES & PRODUCTION"} ({filteredCapabilities.length})</span>
              </div>
              <div className="space-y-2">
                {filteredCapabilities.map((cap) => (
                  <Link
                    key={cap.id}
                    href={`/${locale}/${locale === "ro" ? "capabilitati" : "capabilities"}/${cap.slug}`}
                    onClick={onClose}
                    className="block p-3 bg-[#070e18]/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white group-hover:text-sky-400">{cap.title[locale]}</span>
                      <span className="text-xs font-mono text-slate-400">{cap.code}</span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-sans">{cap.shortDescription[locale]}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Aircraft Results */}
          {filteredAircraft.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2.5">
                <Plane className="w-3.5 h-3.5" />
                <span>{locale === "ro" ? "AERONAVE & PROGRAME" : "AIRCRAFT & FLEET"} ({filteredAircraft.length})</span>
              </div>
              <div className="space-y-2">
                {filteredAircraft.map((air) => (
                  <Link
                    key={air.id}
                    href={`/${locale}/${locale === "ro" ? "aeronave" : "aircraft"}/${air.slug}`}
                    onClick={onClose}
                    className="block p-3 bg-[#070e18]/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white group-hover:text-sky-400">{air.name}</span>
                      <span className="text-[11px] font-mono text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                        {air.statusLabel[locale]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-sans">{air.summary[locale]}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Investor Document Results */}
          {filteredInvestorDocs.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2.5">
                <FileText className="w-3.5 h-3.5" />
                <span>{locale === "ro" ? "DOCUMENTE INVESTITORI & RAPOARTE" : "INVESTOR DOCUMENTS & FILINGS"} ({filteredInvestorDocs.length})</span>
              </div>
              <div className="space-y-2">
                {filteredInvestorDocs.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[#070e18]/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all group"
                  >
                    <div className="pr-4">
                      <p className="text-xs font-semibold text-white group-hover:text-sky-400 line-clamp-1 font-sans">{doc.title}</p>
                      <span className="text-[10px] font-mono text-slate-400">{doc.categoryLabel[locale]} · {doc.year} · {doc.publicationDate}</span>
                    </div>
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-md shrink-0">
                      {doc.fileType} ↓
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Results */}
          {filteredCertifications.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2.5">
                <Award className="w-3.5 h-3.5" />
                <span>{locale === "ro" ? "CERTIFICĂRI & AUTORIZĂRI" : "CERTIFICATIONS & APPROVALS"} ({filteredCertifications.length})</span>
              </div>
              <div className="space-y-2">
                {filteredCertifications.map((c) => (
                  <a
                    key={c.id}
                    href={c.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[#070e18]/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all group"
                  >
                    <div className="pr-4">
                      <p className="text-xs font-semibold text-white group-hover:text-sky-400 font-sans">{c.title}</p>
                      <span className="text-[10px] font-mono text-slate-400">{c.issuingAuthority} · {c.reference}</span>
                    </div>
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-md shrink-0">
                      PDF ↓
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Careers & Procurement */}
          {(filteredProcurement.length > 0 || filteredCareers.length > 0) && (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{locale === "ro" ? "ACHIZIȚII & CARIERE" : "PROCUREMENT & CAREERS"}</span>
              </div>
              <div className="space-y-2">
                {filteredProcurement.map((p) => (
                  <Link
                    key={p.id}
                    href={`/${locale}/${locale === "ro" ? "achizitii" : "procurement"}`}
                    onClick={onClose}
                    className="block p-3 bg-[#070e18]/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white group-hover:text-sky-400 font-sans">{p.title[locale]}</span>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">{p.statusLabel[locale]}</span>
                    </div>
                  </Link>
                ))}
                {filteredCareers.map((car) => (
                  <Link
                    key={car.id}
                    href={`/${locale}/${locale === "ro" ? "cariere" : "careers"}`}
                    onClick={onClose}
                    className="block p-3 bg-[#070e18]/80 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white group-hover:text-sky-400 font-sans">{car.title[locale]}</span>
                      <span className="text-[10px] font-mono text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">{car.department[locale]}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 bg-[#070e18] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>{locale === "ro" ? "Tastați pentru filtrare directă" : "Type to filter results"}</span>
          <div className="flex items-center gap-3">
            <span>[ESC {locale === "ro" ? "Închidere" : "Close"}]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
