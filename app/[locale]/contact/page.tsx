import React from "react";
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  Building2,
  Shield,
  Compass,
} from "lucide-react";
import { Locale } from "@/lib/i18n/dictionaries";
import { PageHeader } from "@/components/hero/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ro";

  return (
    <div className="space-y-0">
      <PageHeader
        sectionCode="SEC-12 / CONTACT"
        badge="SEDIU CENTRAL GHIMBAV · BRAȘOV"
        title={locale === "ro" ? "Date de Contact & Audiențe" : "Official Contact & Headquarters"}
        description={
          locale === "ro"
            ? "Canalele oficiale de comunicare instituțională, comercială și cu acționarii IAR S.A. Brașov. Coordonate geografice, program de audiențe, extensii departamente și formular securizat de solicitare."
            : "Official communication channels for institutional, commercial and shareholder inquiries with IAR S.A. Brașov. Geographical coordinates, office hours, department contacts, and inquiry form."
        }
        breadcrumbs={[
          {
            label: locale === "ro" ? "Contact" : "Contact",
            href: `/${locale}/contact`,
          },
        ]}
        locale={locale}
      />

      <section className="py-20 bg-[#070e18] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Col: Corporate Details & Coordinates */}
            <div className="space-y-8">
              {/* Headquarters Details */}
              <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="border-b border-slate-800/80 pb-4">
                  <span className="text-xs font-mono text-sky-400 tracking-widest uppercase">
                    {locale === "ro" ? "SEDIU SOCIAL & FABRICĂ" : "REGISTERED OFFICE & FACTORY"}
                  </span>
                  <h2 className="text-2xl font-bold text-white font-sans mt-1">
                    IAR S.A. BRAȘOV
                  </h2>
                </div>

                <div className="space-y-4 text-xs font-sans">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Adresă Oficială:</div>
                      <div className="text-slate-300 mt-0.5 leading-relaxed">
                        Str. Hermann Oberth nr. 34, Cod Poștal 507075, Oraș Ghimbav, Județul Brașov, România
                      </div>
                      <div className="text-sky-400 font-mono text-[11px] mt-1 font-medium">
                        COORDONATE GPS: 45°41&apos;30&quot;N 25°32&apos;48&quot;E
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Centrală Telefonică:</div>
                      <div className="text-slate-300 mt-0.5">
                        <a href="tel:+40268475108" className="hover:text-white transition-colors">
                          +40 268 475 108
                        </a>{" "}
                        /{" "}
                        <a href="tel:+40268475269" className="hover:text-white transition-colors">
                          +40 268 475 269
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                      <Printer className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Fax:</div>
                      <div className="text-slate-300 mt-0.5">+40 268 475 174 / +40 268 475 027</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Email Instituțional:</div>
                      <div className="text-sky-400 mt-0.5 font-medium">
                        <a href="mailto:iar@iar.ro" className="hover:underline">
                          iar@iar.ro
                        </a>{" "}
                        /{" "}
                        <a href="mailto:office@iar.ro" className="hover:underline">
                          office@iar.ro
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Program de Lucru:</div>
                      <div className="text-slate-300 mt-0.5">
                        Luni – Vineri: 07:00 – 15:30 (Fus orar: EET / UTC+2)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Directories */}
              <div className="bg-[#0e1828] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                <h3 className="text-base font-bold text-white font-sans uppercase border-b border-slate-800/80 pb-2">
                  {locale === "ro" ? "Departamente Specializate" : "Specialized Departments"}
                </h3>

                <div className="space-y-3 text-xs font-sans divide-y divide-slate-800/60">
                  <div className="pt-2 first:pt-0">
                    <span className="text-white font-bold">Relații cu Acționarii / Investitori:</span>
                    <div className="text-slate-300 mt-0.5">
                      Email: <a href="mailto:actionari@iar.ro" className="text-sky-400 hover:underline">actionari@iar.ro</a> · Tel: +40 268 475 108 int. 1205
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-white font-bold">Resurse Umane & Recrutare:</span>
                    <div className="text-slate-300 mt-0.5">
                      Email: <a href="mailto:resurse.umane@iar.ro" className="text-sky-400 hover:underline">resurse.umane@iar.ro</a> · Tel: int. 1104 / 1105
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-white font-bold">Achiziții & Contracte:</span>
                    <div className="text-slate-300 mt-0.5">
                      Tel: +40 268 475 108 int. 1180
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-white font-bold">Canal Semnalare Avertizor de Integritate:</span>
                    <div className="text-amber-300 mt-0.5 font-mono">
                      Email: <a href="mailto:avertizor.integritate@iar.ro" className="hover:underline">avertizor.integritate@iar.ro</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed / guide */}
              <div className="border border-slate-800 bg-[#0e1828] rounded-2xl p-5 space-y-3 shadow-xl">
                <div className="text-xs font-sans text-white font-bold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>LOCALIZARE GEOGRAFICĂ & ACCES</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Situat pe drumul județean DJ 103B, în imediata vecinătate a Aeroportului Internațional Brașov-Ghimbav (GHV/LRBV), cu acces facil direct din drumul național DN1 / E68.
                </p>
                <div className="h-56 w-full rounded-xl border border-slate-800 overflow-hidden relative shadow-md">
                  <iframe
                    title="Harta IAR Brasov"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.193617300302!2d25.544498876798033!3d45.691651871078715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b54019e0750c8f%3A0x739a8c66e771c56!2sIAR%20S.A.%20Bra%C8%99ov!5e0!3m2!1sro!2sro!4v1710000000000!5m2!1sro!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Validated Inquiry Form */}
            <div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
