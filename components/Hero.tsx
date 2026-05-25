"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  // Objektet e përkthimit me gjatësi tekstesh të barabartë
  const translations = {
    sq: {
      sub: "Qendra M.I.K.E.",
      welcome: "Mirë se erdhët në",
      desc: "Eksperiencë 17-vjeçare në kujdesin dhe edukimin e fëmijëve. Mbështetje, Informacion, Kujdes, Edukim, Përkushtim.",
      btnDiscover: "Zbulo Programet",
      btnContact: "Na Kontaktoni"
    },
    en: {
      sub: "M.I.K.E. Center",
      welcome: "Welcome to",
      desc: "17 years of experience in childcare and early education. Support, Information, Care, Education, Dedication.",
      btnDiscover: "Discover Programs",
      btnContact: "Contact Us"
    }
  };

  const t = translations[language];

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/30829296/pexels-photo-30829296.jpeg')" }}
      >
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-mikePurple font-bold tracking-widest mb-4 uppercase">
          {t.sub}
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-mikeDark leading-tight mb-6">
          {t.welcome} <span className="text-mikePurple">M.I.K.E</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          {t.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const el = document.getElementById("rutinaDitore");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-mikePurple text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition"
          >
            {t.btnDiscover}
          </button>
          <a href="/kontakt" className="border-2 border-mikeDark text-mikeDark px-8 py-4 rounded-full font-bold text-lg hover:bg-mikeDark hover:text-white transition">
            {t.btnContact}
          </a>
        </div>
      </div>
    </section>
  );
}