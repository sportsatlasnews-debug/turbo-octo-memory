"use client";
import React from "react";
import { X, Download, ShieldAlert, Globe, BookOpen, CheckCircle2, FileText } from "lucide-react";

interface DhntProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: "sq" | "en";
}

const DhntProjectModal: React.FC<DhntProjectModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  const content = {
    sq: {
      badge: "Kurrikula Rajonale Krahasuese • 2026",
      title: "Dhuna ndaj grave në Ballkanin Perëndimor e ndërmjetësuar nga teknologjia",
      subtitle:
        "Programi katërditor i trajnimit online dhe rishikimi analitik-krahasues në kuadër të programit 'BE-ja për barazinë gjinore', financuar nga Bashkimi Evropian dhe zbatuar nga UN Women dhe UNDP.",
      overviewTitle: "Rreth Projektit & Kurrikulës",
      overviewText:
        "Dhuna e ndërmjetësuar nga teknologjia (DHNT) nuk është thjesht një problem teknik apo virtual, por një zgjatim digjital i pabarazisë gjinore dhe formave ekzistuese të kontrollit. Kjo kurrikulë praktike analizon kuadrin ligjor, institucional dhe të dhënat në 6 vendet e Ballkanit Perëndimor (Shqipëri, Kosovë, Serbi, Bosnjë dhe Hercegovinë, Mal i Zi dhe Maqedoni e Veriut), e harmonizuar me Konventën e Stambollit, Rekomandimin e Përgjithshëm Nr. 1 të GREVIO-s dhe Direktivën e BE-së 2024/1385.",
      statsTitle: "Të dhëna kyçe nga hulumtimi rajonal",
      stats: [
        { value: "51.0%", label: "Mesatarja e grave në rajon që kanë përjetuar të paktën një formë të DHNT-së" },
        { value: "41.1%", label: "E grave mbi 18 vjeç në Shqipëri të ekspozuara ndaj dhunës digjitale (më të rrezikuara moshat 18-24 vjeç)" },
        { value: "43.3%", label: "E grave në Kosovë dhe 58% e vajzave të reja në Maqedoninë e Veriut kanë raportuar abuzim online" },
        { value: "7.1%", label: "Përqindja e viktimave që e raportojnë rastin në polici për shkak të stigmës dhe mungesës së besimit" },
      ],
      objectivesTitle: "Çfarë ofron programi dhe kurrikula?",
      objectives: [
        "Identifikimin e formave të DHNT-së: ndarja jokonsensuale e imazheve intime (NCII), shantazhi digjital, përndjekja kibernetike, doksimi dhe përmbajtjet sintetike 'deepfake'.",
        "Vlerësimin e rrezikut të vazhdimësisë online-offline dhe hartimin e planeve individuale të sigurisë digjitale dhe fizike.",
        "Dokumentimin e sigurt të provave digjitale (pamje ekrani, URL, metadata) dhe përdorimin e mjeteve mbrojtëse si StopNCII.org.",
        "Procedura të brendshme të informuara mbi traumën për organizatat e shoqërisë civile dhe institucionet për të shmangur viktimizimin dytësor.",
      ],
      partnersLbl: "Partnerët & Botuesit:",
      partnersVal: "Medica Kosova, Fondacioni LARA, Qendra për Mbështetjen e Grave • ISBN 978-9951-9327-0-7",
      downloadBtn: "Shkarko Kurrikulën e Plotë (PDF)",
      closeBtn: "Mbyll",
    },
    en: {
      badge: "Regional Comparative Curriculum • 2026",
      title: "Technology-Facilitated Violence Against Women in the Western Balkans",
      subtitle:
        "Four-day online training program and analytical-comparative review under the 'EU for Gender Equality' program, funded by the European Union and implemented by UN Women and UNDP.",
      overviewTitle: "About the Project & Curriculum",
      overviewText:
        "Technology-facilitated violence (TFV) is not merely a technical or virtual issue, but a digital extension of structural gender inequality and offline control. This practical curriculum analyzes legal frameworks, institutional responses, and prevalence data across 6 Western Balkan countries (Albania, Kosovo, Serbia, Bosnia & Herzegovina, Montenegro, and North Macedonia), harmonized with the Istanbul Convention, GREVIO General Recommendation No. 1, and EU Directive 2024/1385.",
      statsTitle: "Key Regional Research Findings",
      stats: [
        { value: "51.0%", label: "Average rate of women in the region who experienced at least one form of TFV" },
        { value: "41.1%", label: "Of women over 18 in Albania exposed to digital violence (highest among ages 18-24)" },
        { value: "43.3%", label: "Of women in Kosovo and 58% of young women in North Macedonia reported online abuse" },
        { value: "7.1%", label: "Of survivors report incidents to the police due to stigma and institutional distrust" },
      ],
      objectivesTitle: "Key Pillars of the Curriculum",
      objectives: [
        "Identifying TFV forms: non-consensual intimate image sharing (NCII), sextortion, cyberstalking, doxxing, and AI-generated 'deepfake' abuse.",
        "Assessing the online-offline continuum of risk and drafting comprehensive digital and physical safety plans.",
        "Safe preservation of digital evidence (screenshots, URLs, metadata) and utilizing protective tools such as StopNCII.org.",
        "Trauma-informed internal procedures for CSOs and institutions to prevent secondary victimization.",
      ],
      partnersLbl: "Partners & Publishers:",
      partnersVal: "Medica Kosova, Foundation LARA, Center for Women's Support • ISBN 978-9951-9327-0-7",
      downloadBtn: "Download Full Curriculum (PDF)",
      closeBtn: "Close",
    },
  };

  const t = content[language];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header i Modalit */}
        <div className="bg-gradient-to-r from-mikeDark via-indigo-950 to-purple-950 p-6 md:p-10 text-white relative">
          <button
            onClick={onClose}
            aria-label={t.closeBtn}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-purple-500/30 border border-purple-400/30 rounded-full text-xs font-bold uppercase tracking-wider text-purple-200 mb-4">
            <ShieldAlert size={14} />
            {t.badge}
          </div>

          <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight leading-snug">
            {t.title}
          </h3>
          <p className="text-purple-200/90 text-xs md:text-sm mt-3 leading-relaxed max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        {/* Trupi i Modalit */}
        <div className="p-6 md:p-10 max-h-[65vh] overflow-y-auto space-y-8 text-gray-700">
          {/* Përshkrimi */}
          <div>
            <h4 className="flex items-center gap-2 text-base font-black uppercase tracking-wide text-mikeDark mb-3">
              <BookOpen size={18} className="text-mikePurple" />
              {t.overviewTitle}
            </h4>
            <p className="text-sm leading-relaxed text-gray-600 text-justify">
              {t.overviewText}
            </p>
          </div>

          {/* Statistikat nga PDF */}
          <div>
            <h4 className="flex items-center gap-2 text-base font-black uppercase tracking-wide text-mikeDark mb-4">
              <Globe size={18} className="text-mikePurple" />
              {t.statsTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 flex flex-col justify-between"
                >
                  <span className="text-2xl md:text-3xl font-black text-mikePurple mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-600 leading-snug font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Objektivat / Modulet */}
          <div>
            <h4 className="flex items-center gap-2 text-base font-black uppercase tracking-wide text-mikeDark mb-3">
              <FileText size={18} className="text-mikePurple" />
              {t.objectivesTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.objectives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shënim mbi botuesit */}
          <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 text-xs text-gray-500">
            <strong className="text-mikeDark">{t.partnersLbl}</strong> {t.partnersVal}
          </div>
        </div>

        {/* Footer me Butonin e Shkarkimit të PDF-së */}
        <div className="border-t border-gray-100 bg-gray-50 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-600 hover:bg-gray-200/70 transition-colors"
          >
            {t.closeBtn}
          </button>

          <a
            href="/documents/Kurikulum layout ALB-ISBN.pdf"
            download="Kurikulum layout ALB-ISBN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-mikePurple hover:bg-mikeDark text-white px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <Download size={16} />
            {t.downloadBtn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DhntProjectModal;