import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProgramAndEnvironment = () => {
  const programPoints = [
    "Programe të miratuara nga institucionet arsimore",
    "Mësuese me arsimin e lartë dhe trajnime",
    "Numër i vogël fëmijësh për klasë",
    "Gjuhë e huaj – Anglisht",
    "Kompjuter",
    "Qendra mësimi (matematikë, gjuhë, art, lexim, lojëra, shkencë)",
    "Gjimnastikë",
    "Art dhe Craft"
  ];

  const environmentPoints = [
    "Klasa plot dritë",
    "Ndërtesë larg trafikut, e monitoruar",
    "Oborr i mbrojtur me gjelbërim dhe lojëra",
    "Kamera në çdo klasë dhe oborr",
    "Ambient i pastër brenda dhe jashtë",
    "Ushqim cilësor sipas standarteve"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">
            PROGRAMI & AMBIENTI
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2 mb-4 leading-tight">
            Mjedis i sigurt dhe stimulues
          </h2>
          <p className="text-gray-500 max-w-2xl font-medium">
            Çdo detaj është menduar për mirëqenien e fëmijëve tuaj
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Programi Ynë */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-black text-mikePurple mb-8 border-b border-gray-100 pb-4">
              Programi Ynë
            </h3>
            
            <ul className="space-y-5">
              {programPoints.map((point, index) => (
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
              Ambienti
            </h3>
            
            <ul className="space-y-5">
              {environmentPoints.map((point, index) => (
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