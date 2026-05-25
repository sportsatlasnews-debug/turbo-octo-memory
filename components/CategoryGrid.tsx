"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CategoryGrid() {
  const { language } = useLanguage();

  const translations = {
    sq: {
      moreText: "Zbulo më shumë",
      categories: [
        { 
          title: "Qendra M.I.K.E – Kopsht / Çerdhe", 
          desc: "Programi edukativ, grupmoshat dhe aktivitetet tona.", 
          icon: "🏫", 
          link: "/kopshti" 
        },
        { 
          title: "Shtëpia e Zotërinjve", 
          desc: "Kujdesi profesional dhe me zemër për të moshuarit.", 
          icon: "🏡", 
          link: "https://existing-client-site.com/elderly",
          isExternal: true 
        },
        { 
          title: "Kurset Profesionale", 
          desc: "Trajnime dhe materiale për zhvillim profesional.", 
          icon: "📚", 
          link: "/kurset" 
        },
        { 
          title: "Projektet e zhvilluara", 
          desc: "Historia dhe ndikimi i projekteve të M.I.K.E.", 
          icon: "📊", 
          link: "/projektet" 
        },
        { 
          title: "Bashkohu me ekipin tonë", 
          desc: "Apliko si babysitter, kujdestar ose vullnetar.", 
          icon: "🤝", 
          link: "/bashkohu" 
        },
        { 
          title: "Kërkoj punonjës", 
          desc: "Gjeni stafin e duhur (infermier, logoped, etj.) për familjen tuaj.", 
          icon: "🔍", 
          link: "/kerko-staf" 
        }
      ]
    },
    en: {
      moreText: "Discover more",
      categories: [
        { 
          title: "M.I.K.E Center – Kindergarten / Daycare", 
          desc: "Our educational program, age groups, and daily activities.", 
          icon: "🏫", 
          link: "/kopshti" 
        },
        { 
          title: "Shtëpia e Zotërinjve", 
          desc: "Professional and heartfelt care dedicated to the elderly.", 
          icon: "🏡", 
          link: "https://existing-client-site.com/elderly",
          isExternal: true 
        },
        { 
          title: "Professional Courses", 
          desc: "Training and essential resources for professional development.", 
          icon: "📚", 
          link: "/kurset" 
        },
        { 
          title: "Developed Projects", 
          desc: "The history, journey, and community impact of M.I.K.E projects.", 
          icon: "📊", 
          link: "/projektet" 
        },
        { 
          title: "Join Our Team", 
          desc: "Apply to become a babysitter, caregiver, or volunteer.", 
          icon: "🤝", 
          link: "/bashkohu" 
        },
        { 
          title: "Looking for Staff", 
          desc: "Find the right professional (nurse, speech therapist, etc.) for your family.", 
          icon: "🔍", 
          link: "/kerko-staf" 
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.categories.map((item, idx) => (
            <a 
              key={idx}
              href={item.link}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="flex flex-col p-8 rounded-3xl border-2 border-gray-50 hover:border-mikePurple/20 hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-mikePurple/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-mikeDark mb-3 group-hover:text-mikePurple transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-6 flex items-center text-mikePurple font-bold text-sm">
                {t.moreText}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}