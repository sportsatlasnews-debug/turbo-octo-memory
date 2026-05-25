"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Vision() {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "Vizioni Ynë",
      title: "Edukim me dashuri, kujdes me përkushtim",
      desc: "Filozofia jonë është të krijojmë një mjedis ku në fokus është fëmija i cili duhet të edukohet dhe të ketë një zhvillim intelektual, social, emocional dhe fizik.",
      badgeYears: "17+",
      badgeText: "Vite Eksperiencë",
      highlights: [
        { text: "Programe të miratuara", color: "bg-mikePurple" },
        { text: "Mësuesë me arsim të lartë", color: "bg-mikeGreen" },
        { text: "Klasa të vogla", color: "bg-mikeYellow" },
        { text: "Gjuhë e huaj (Anglisht)", color: "bg-orange-400" },
      ]
    },
    en: {
      sub: "Our Vision",
      title: "Education with love, care with dedication",
      desc: "Our philosophy is to create an environment where the child is the main focus, fostering intellectual, social, emotional, and physical development.",
      badgeYears: "17+",
      badgeText: "Years Experience",
      highlights: [
        { text: "Approved programs", color: "bg-mikePurple" },
        { text: "Highly certified teachers", color: "bg-mikeGreen" },
        { text: "Small class sizes", color: "bg-mikeYellow" },
        { text: "Foreign language (English)", color: "bg-orange-400" },
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white">
      <div>
        <p className="text-mikePurple font-bold uppercase tracking-widest mb-2">
          {t.sub}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-mikeDark mb-6 leading-tight">
          {t.title}
        </h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          {t.desc}
        </p>
        
        <ul className="space-y-4">
          {t.highlights.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 text-lg font-medium text-mikeDark">
              <span className={`w-4 h-4 rounded-full flex-shrink-0 ${item.color}`} />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <img 
          src="https://images.pexels.com/photos/3661452/pexels-photo-3661452.jpeg" 
          alt="Kids playing" 
          className="rounded-3xl shadow-xl w-full object-cover h-[400px] md:h-[500px]" 
        />
        {/* Floating badge */}
        <div className="absolute -bottom-6 -left-6 bg-mikePurple text-white p-6 md:p-8 rounded-2xl shadow-lg hidden lg:block">
          <p className="text-3xl font-bold">{t.badgeYears}</p>
          <p className="text-sm whitespace-nowrap">{t.badgeText}</p>
        </div>
      </div>
    </section>
  );
}