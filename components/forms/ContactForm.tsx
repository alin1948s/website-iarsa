"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";

interface ContactFormProps {
  locale: Locale;
}

export function ContactForm({ locale }: ContactFormProps) {
  const [department, setDepartment] = useState("general");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const departments = [
    {
      id: "general",
      label: locale === "ro" ? "Secretariat General & Relații Publice (iar@iar.ro)" : "General Management & Public Relations",
    },
    {
      id: "investors",
      label: locale === "ro" ? "Relații cu Acționarii & Investitori (actionari@iar.ro)" : "Shareholder Relations & Investors",
    },
    {
      id: "procurement",
      label: locale === "ro" ? "Direcția Achiziții & Licitații" : "Procurement & Tenders",
    },
    {
      id: "careers",
      label: locale === "ro" ? "Resurse Umane & Recrutare" : "Human Resources & Recruitment",
    },
    {
      id: "integrity",
      label: locale === "ro" ? "Canal de Integritate & Whistleblower" : "Integrity Channel & Whistleblower",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          department,
          fullName,
          email,
          phone,
          subject,
          message,
          locale,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFullName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "A apărut o eroare la trimiterea mesajului.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Nu s-a putut stabili conexiunea cu serverul. Vă rugăm să încercați din nou.");
    }
  };

  return (
    <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-6 sm:p-8 relative shadow-xl">
      <div className="mb-6 border-b border-slate-800/80 pb-4">
        <h3 className="text-xl font-bold text-white font-sans">
          {locale === "ro" ? "Formular Oficial de Contact" : "Official Inquiry Form"}
        </h3>
        <p className="text-xs text-slate-300 mt-1.5 font-sans leading-relaxed">
          {locale === "ro"
            ? "Mesajul dvs. va fi redirecționat automat către departamentul de resort din cadrul IAR S.A. Brașov."
            : "Your inquiry will be routed to the designated engineering or executive department."}
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 mb-6 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs font-sans flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
          <span>
            {locale === "ro"
              ? "Mesajul dumneavoastră a fost înregistrat cu succes. Departamentul IAR S.A. vă va contacta în cel mai scurt timp."
              : "Your inquiry was transmitted successfully. Our team will follow up promptly."}
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 mb-6 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs font-sans flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {/* Department Selector */}
        <div>
          <label className="block text-slate-300 font-sans uppercase tracking-wider mb-1.5 font-semibold text-[11px]">
            {locale === "ro" ? "Departament Destinatar *" : "Target Department *"}
          </label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-sky-400 transition-colors"
            required
          >
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 font-sans uppercase tracking-wider mb-1.5 font-semibold text-[11px]">
              {locale === "ro" ? "Nume și Prenume *" : "Full Name *"}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-sans uppercase tracking-wider mb-1.5 font-semibold text-[11px]">
              {locale === "ro" ? "Adresă Email *" : "Email Address *"}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>

        {/* Phone & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 font-sans uppercase tracking-wider mb-1.5 font-semibold text-[11px]">
              {locale === "ro" ? "Telefon de Contact" : "Contact Phone"}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-sans uppercase tracking-wider mb-1.5 font-semibold text-[11px]">
              {locale === "ro" ? "Subiect Solicitare *" : "Subject *"}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-slate-300 font-sans uppercase tracking-wider mb-1.5 font-semibold text-[11px]">
            {locale === "ro" ? "Conținut Mesaj *" : "Message Details *"}
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-4 text-xs font-sans text-white focus:outline-none focus:border-sky-400 resize-y transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 disabled:opacity-50 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-600/20 active:scale-[0.99] cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{locale === "ro" ? "SE TRANSMITE..." : "TRANSMITTING..."}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{locale === "ro" ? "Transmite Solicitarea" : "Submit Inquiry"}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
