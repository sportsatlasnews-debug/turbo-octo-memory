"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceGrid() {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "Shërbimet Tona",
      title: "Shtrihemi në 4 shërbime",
      desc: "Ofruar me eksperiencë 17-vjeçare dhe përkushtim të plotë",
      services: [
        { 
          title: "Kopsht për Fëmijët", 
          desc: "Programe të strukturuara për fëmijë 6 muaj deri 6 vjeç.", 
          icon: "🌱", 
          link: "/sherbimet/kopshti" 
        },
        { 
          title: "Kujdestari për Moshën e Tretë", 
          desc: "Kujdes profesional dhe me zemër për të moshuarit.", 
          icon: "🤍", 
          link: "https://existing-client-site.com/elderly",
          isExternal: true 
        },
        { 
          title: "Babysitter", 
          desc: "Kujdes profesional ndaj fëmijëve në shtëpinë tuaj.", 
          icon: "👶", 
          link: "/sherbimet/babysitter" 
        },
        { 
          title: "Pastrim Shtëpie", 
          desc: "Shtëpia juaj e pastër, ju të lirë për familjen.", 
          icon: "🏠", 
          link: "/sherbimet/pastrim" 
        }
      ]
    },
    en: {
      sub: "Our Services",
      title: "We provide 4 core services",
      desc: "Delivered with 17 years of experience and full dedication",
      services: [
        { 
          title: "Kindergarten & Daycare", 
          desc: "Structured programs for children aged 6 months to 6 years.", 
          icon: "🌱", 
          link: "/sherbimet/kopshti" 
        },
        { 
          title: "Elderly Care Services", 
          desc: "Professional and compassionate care for senior citizens.", 
          icon: "🤍", 
          link: "https://existing-client-site.com/elderly",
          isExternal: true 
        },
        { 
          title: "Babysitter & Nanny", 
          desc: "Professional childcare services in the comfort of your home.", 
          icon: "👶", 
          link: "/sherbimet/babysitter" 
        },
        { 
          title: "Home Cleaning Services", 
          desc: "Your house perfectly clean, leaving you free for family.", 
          icon: "🏠", 
          link: "/sherbimet/pastrim" 
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-mikePurple font-semibold uppercase tracking-wider">{t.sub}</p>
        <h2 className="text-4xl font-bold text-mikeDark mt-2">{t.title}</h2>
        <p className="text-gray-500 mt-4">{t.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.services.map((s, i) => (
          <a 
            key={i} 
            href={s.link}
            target={s.isExternal ? "_blank" : "_self"}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition group border border-gray-100"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-mikeYellow/20 transition">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-mikeDark mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}