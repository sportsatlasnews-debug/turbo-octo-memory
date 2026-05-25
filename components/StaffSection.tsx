"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const StaffSection = () => {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "EKIPI YNË",
      title: "Mësueset tona të përkushtuara",
      desc: "Një grup profesional mësuesish dhe edukatorësh që punojnë medashuri për rritjen dhe edukimin e fëmijës tuaj.",
      badge: "Të gjitha mësueset tona janë të certifikuara dhe me arsim të lartë.",
      position: "Edukatore",
      staffNames: [
        "Blerta Caka",
        "Enkelejda Shehaj",
        "Ervehe Musabelliu",
        "Etleva Myrteza",
        "Migena Haznedari",
        "Rudina Lala",
        "Shqiponja Braka"
      ]
    },
    en: {
      sub: "OUR TEAM",
      title: "Our Dedicated Teachers",
      desc: "A professional group of educators and teachers who work with love and care for the growth and education of your child.",
      badge: "All of our teachers are fully certified and hold higher education degrees.",
      position: "Teacher",
      staffNames: [
        "Blerta Caka",
        "Enkelejda Shehaj",
        "Ervehe Musabelliu",
        "Etleva Myrteza",
        "Migena Haznedari",
        "Rudina Lala",
        "Shqiponja Braka"
      ]
    }
  };

  const t = translations[language];

  // Gjenerimi i strukturës së stafit me path-et përkatëse të imazheve
  const staff = t.staffNames.map((name) => {
    // Heqim hapësirat për të përputhur saktë emrat e skedarëve JPG
    const imageName = name.replace(/\s+/g, '');
    return {
      name,
      position: t.position,
      image: `/images/staff/${imageName}.JPG`
    };
  });

  return (
    <section className="py-24 bg-white" id='staff'>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">{t.sub}</span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2">{t.title}</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[4/5] shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-mikeDark/90 via-mikeDark/40 to-transparent pt-20">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-mikePurple font-medium text-sm uppercase tracking-wider">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professionalism Badge */}
        <div className="mt-20 flex justify-center">
          <div className="bg-purple-50 px-8 py-4 rounded-full border border-purple-100 flex items-center gap-3">
            <div className="w-2 h-2 bg-mikePurple rounded-full animate-ping" />
            <p className="text-mikePurple font-bold text-sm">{t.badge}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StaffSection;