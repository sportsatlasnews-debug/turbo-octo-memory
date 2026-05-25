"use client";
import React from 'react';
import { Download, Palette, BookText, Brain, Calculator } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WorksheetDownloads = () => {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "Burime Edukative",
      title: "Mësoni dhe luani në shtëpi",
      desc: "Shkarkoni materialet tona të përgatitura nga mësueset e Qendrës M.I.KE për të mbështetur zhvillimin e fëmijës tuaj.",
      btnText: "Shkarko",
      infoText: "Materialet janë falas për të gjithë prindërit e komunitetit tonë. Printojini dhe filloni argëtimin!",
      materials: [
        {
          id: "artistic",
          title: "Zhvillim Artistik",
          description: "Fletë pune për ngjyrosje, vizatim dhe projekte kreative.",
          link: "https://drive.google.com/drive/folders/1oPSOPucYgIpnRYfIE1vQfQ8O86h5rPJI?usp=drive_link" 
        },
        {
          id: "language",
          title: "Zhvillim Gjuhësor",
          description: "Ushtrime për alfabetin, leximin fillestar dhe pasurimin e fjalorit.",
          link: "https://drive.google.com/drive/folders/107nurGoyePX7ARuEuZ9V5xAFmEjORnZ8?usp=drive_link"
        },
        {
          id: "intellectual",
          title: "Zhvillim Intelektual",
          description: "Lojëra logjike, puzzle dhe ushtrime për vëmendjen.",
          link: "https://drive.google.com/drive/folders/1_qjhtKNz8SRhXsVBYt72c0NeMU4hpGe_?usp=drive_link"
        },
        {
          id: "mathematical",
          title: "Zhvillim Matematikor",
          description: "Njohja e numrave, formave gjeometrike dhe mbledhjet e para.",
          link: "https://drive.google.com/drive/folders/1NjYteoIh1DfChS3YV5C9Z4ZcM86oQp_C?usp=drive_link"
        }
      ]
    },
    en: {
      sub: "Educational Resources",
      title: "Learn and Play at Home",
      desc: "Download our worksheets carefully curated by the educators at M.I.K.E Center to support your child's ongoing development.",
      btnText: "Download",
      infoText: "These materials are free for all parents in our community. Print them out and let the fun begin!",
      materials: [
        {
          id: "artistic",
          title: "Artistic Development",
          description: "Worksheets for coloring, drawing, and engaging creative projects.",
          link: "https://drive.google.com/drive/folders/1oPSOPucYgIpnRYfIE1vQfQ8O86h5rPJI?usp=drive_link" 
        },
        {
          id: "language",
          title: "Language Development",
          description: "Exercises focused on the alphabet, early reading, and vocabulary building.",
          link: "https://drive.google.com/drive/folders/107nurGoyePX7ARuEuZ9V5xAFmEjORnZ8?usp=drive_link"
        },
        {
          id: "intellectual",
          title: "Intellectual Development",
          description: "Logic games, interactive puzzles, and specialized focus exercises.",
          link: "https://drive.google.com/drive/folders/1_qjhtKNz8SRhXsVBYt72c0NeMU4hpGe_?usp=drive_link"
        },
        {
          id: "mathematical",
          title: "Mathematical Development",
          description: "Introduction to numbers, geometric shapes, and basic early math skills.",
          link: "https://drive.google.com/drive/folders/1NjYteoIh1DfChS3YV5C9Z4ZcM86oQp_C?usp=drive_link"
        }
      ]
    }
  };

  const t = translations[language];

  // Mapimi i ikonave statike, ngjyrave dhe sfondeve bazuar në ID-në e materialit
  const stylesMap: Record<string, { icon: React.ReactNode; color: string }> = {
    artistic: {
      icon: <Palette className="text-pink-500" size={28} />,
      color: "bg-pink-50"
    },
    language: {
      icon: <BookText className="text-blue-500" size={28} />,
      color: "bg-blue-50"
    },
    intellectual: {
      icon: <Brain className="text-purple-500" size={28} />,
      color: "bg-purple-50"
    },
    mathematical: {
      icon: <Calculator className="text-orange-500" size={28} />,
      color: "bg-orange-50"
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">{t.sub}</span>
            <h2 className="text-3xl md:text-4xl font-black text-mikeDark mt-2">{t.title}</h2>
            <p className="text-gray-500 mt-4 font-medium">
              {t.desc}
            </p>
          </div>
          <div className="hidden md:block">
             <div className="w-24 h-24 bg-mikePurple/5 rounded-full flex items-center justify-center animate-bounce">
                <Download className="text-mikePurple" size={32} />
             </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.materials.map((item) => {
            const style = stylesMap[item.id];
            return (
              <div 
                key={item.id}
                className="group p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-mikePurple/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 ${style.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {style.icon}
                </div>

                <h3 className="text-xl font-black text-mikeDark mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 bg-gray-50 text-mikeDark font-bold rounded-2xl group-hover:bg-mikePurple group-hover:text-white transition-all"
                >
                  {t.btnText}
                  <Download size={18} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-purple-50 rounded-[2rem] border border-purple-100 flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <span className="text-mikePurple font-bold">!</span>
            </div>
            <p className="text-sm text-purple-800 font-medium">
                {t.infoText}
            </p>
        </div>

      </div>
    </section>
  );
};

export default WorksheetDownloads;