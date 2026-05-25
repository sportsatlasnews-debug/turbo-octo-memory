"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProgramAndEnvironment = () => {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "PROGRAMI & AMBIENTI",
      title: "Mjedis i sigurt dhe stimulues",
      desc: "Çdo detaj është menduar për mirëqenien e fëmijëve tuaj",
      card1Title: "Programi Ynë",
      card2Title: "Ambienti",
      programPoints: [
        "Programe të miratuara nga institucionet arsimore",
        "Mësuese me arsimin e lartë dhe trajnime",
        "Numër i vogël fëmijësh për klasë",
        "Gjuhë e huaj – Anglisht",
        "Kompjuter",
        "Qendra mësimi (matematikë, gjuhë, art, lexim, shkencë)",
        "Gjimnastikë",
        "Art dhe Craft"
      ],
      environmentPoints: [
        "Klasa plot dritë",
        "Ndërtesë larg trafikut, e monitoruar",
        "Oborr i mbrojtur me gjelbërim dhe lojëra",
        "Kamera në çdo klasë dhe oborr",
        "Ambient i pastër brenda dhe jashtë",
        "Ushqim cilësor sipas standarteve"
      ]
    },
    en: {
      sub: "PROGRAM & ENVIRONMENT",
      title: "Safe and stimulating environment",
      desc: "Every single detail is designed for your children's well-being",
      card1Title: "Our Program",
      card2Title: "Environment",
      programPoints: [
        "Programs approved by educational institutions",
        "Highly educated teachers with ongoing training",
        "Small number of children per classroom",
        "Foreign language – English",
        "Computer literacy",
        "Learning centers (math, language, art, reading, science)",
        "Gymnastics & physical activity",
        "Arts and Crafts"
      ],
      environmentPoints: [
        "Bright classrooms full of natural light",
        "Monitored building located away from traffic",
        "Secure outdoor yard with greenery and playground",
        "Security cameras in every classroom and yard",
        "Clean and hygienic indoor and outdoor spaces",
        "High-quality nutritional food standard"
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-sm">
            {t.sub}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2 mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-500 max-w-2xl font-medium">
            {t.desc}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Programi Ynë */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-black text-mikePurple mb-8 border-b border-gray-100 pb-4">
              {t.card1Title}
            </h3>
            
            <ul className="space-y-5">
              {t.programPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-700">
                  <CheckCircle2 className="text-mikePurple shrink-0" size={20} />
                  <span className="text-sm md:text-base font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Ambienti */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-black text-mikePurple mb-8 border-b border-gray-100 pb-4">
              {t.card2Title}
            </h3>
            
            <ul className="space-y-5">
              {t.environmentPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-700">
                  <CheckCircle2 className="text-mikePurple shrink-0" size={20} />
                  <span className="text-sm md:text-base font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramAndEnvironment;