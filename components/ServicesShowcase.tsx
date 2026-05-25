"use client";
import React from 'react';
import { Sprout, Heart, Baby, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ServicesShowcase = () => {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "Shërbimet Tona",
      title: "Shtrihemi në 4 shërbime",
      desc: "Ofruar me eksperiencë dhe përkushtim të plotë për komunitetin tonë.",
      kopshti: {
        title: "Kopsht për Fëmijët",
        subtitle: "Programe të strukturuara për fëmijë 6 muaj deri 6 vjeç. Mjedis i sigurt, stimulues dhe i dashur."
      },
      moshaterte: {
        title: "Kujdestari për Moshën e Tretë",
        subtitle: "Kujdes profesional dhe me zemër për të moshuarit. Shoqëri, aktivitete dhe ndihmë e përditshme."
      },
      babysitter: {
        title: "Babysitter",
        subtitle: "Kujdes profesional ndaj fëmijëve në shtëpinë tuaj. Staf i trajnuar dhe i besueshëm."
      },
      pastrim: {
        title: "Pastrim Shtëpie",
        subtitle: "Shërbim pastrimi profesional. Shtëpia juaj e pastër, ju të lirë për familjen."
      }
    },
    en: {
      sub: "Our Services",
      title: "We provide 4 core services",
      desc: "Delivered with experience and full dedication to our community.",
      kopshti: {
        title: "Kindergarten & Daycare",
        subtitle: "Structured programs for children from 6 months to 6 years old. Safe, stimulating and loving environment."
      },
      moshaterte: {
        title: "Elderly Care Services",
        subtitle: "Professional and compassionate care for the elderly. Companionship, activities and daily support."
      },
      babysitter: {
        title: "Babysitter & Nanny",
        subtitle: "Professional childcare services in the comfort of your home. Trained and highly reliable staff."
      },
      pastrim: {
        title: "Home Cleaning Services",
        subtitle: "Professional home cleaning services. Your house perfectly clean, leaving you free for your family."
      }
    }
  };

  const t = translations[language];

  // Struktura e pandryshueshme e aseteve (Ikonat dhe Imazhet)
  const servicesData = [
    {
      title: t.kopshti.title,
      subtitle: t.kopshti.subtitle,
      icon: <Sprout className="text-green-500" size={24} />,
      image: "https://i.ibb.co/bg65SNnC/0I5A2412.jpg",
      bgColor: "bg-green-50"
    },
    {
      title: t.moshaterte.title,
      subtitle: t.moshaterte.subtitle,
      icon: <Heart className="text-purple-400" size={24} />,
      image: "https://images.pexels.com/photos/18509794/pexels-photo-18509794.jpeg",
      bgColor: "bg-purple-50"
    },
    {
      title: t.babysitter.title,
      subtitle: t.babysitter.subtitle,
      icon: <Baby className="text-yellow-500" size={24} />,
      image: "https://images.pexels.com/photos/8612914/pexels-photo-8612914.jpeg",
      bgColor: "bg-yellow-50"
    },
    {
      title: t.pastrim.title,
      subtitle: t.pastrim.subtitle,
      icon: <Home className="text-orange-400" size={24} />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">{t.sub}</span>
          <h2 className="text-3xl md:text-4xl font-black text-mikeDark mt-2 mb-4">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="p-4">
                <div className="overflow-hidden rounded-2xl h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 pt-0">
                <div className={`w-12 h-12 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-black text-mikeDark mb-3 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;