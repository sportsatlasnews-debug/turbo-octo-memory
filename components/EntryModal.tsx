"use client";
import React from "react";
import { X, GraduationCap, Users, Search, Lightbulb, ShieldUser } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type ServiceID = "mike" | "zoterinjte" | "kurset" | "ekipi" | "kerkoni" | "projektet";

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (choice: ServiceID) => void;
}

const PandaIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    <path d="M19 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    <path d="M12 10c-4.4 0-8 3.6-8 8v2h16v-2c0-4.4-3.6-8-8-8z" />
    <circle cx="9" cy="15" r="1" />
    <circle cx="15" cy="15" r="1" />
    <path d="M12 17v1" />
  </svg>
);

export default function EntryModal({ isOpen, onClose, onSelect }: EntryModalProps) {
  const { language, setLanguage } = useLanguage();

  if (!isOpen) return null;

  const translations = {
    sq: {
      welcome: "Mirë se erdhët në M.I.K.E",
      p1: "Qendra M.I.K.E – Mbështetje, Informacion, Kujdes, Edukim – është një organizatë jofitimprurëse e themeluar në vitin 2007. Ajo ofron shërbime në mbështetje të fëmijëve, të rinjve, grave dhe të moshuarve. Misioni i saj është të kontribuojë në edukimin dhe mirëqenien sociale përmes kujdesit të vazhdueshme.",
      p2: "Qendra punon për fuqizimin personal dhe ekonomik të individëve, me fokus te grupet e margjinalizuara. Aktivitetet përfshijnë shërbime ditore, informim dhe trajnime. M.I.K.E synon të krijojë mundësi të barabarta dhe të përmirësojë cilësinë e jetës në komunitet.",
      badgeSocial: "NDËRMARRJES SOCIALE",
      badgeStatus: "Që prej vitit 2024, Qendrës M.I.K.E i është njohur statusi i ",
      badgeEnd: ", duke forcuar rolin e saj në zhvillimin e komunitetit.",
      ctaSelection: "Zgjidh shërbimin që kërkon",
      services: [
        { id: "mike" as ServiceID, title: "Kopsht / Çerdhe", desc: "Program edukativ", btnText: "Hyr" },
        { id: "zoterinjte" as ServiceID, title: "Shtëpia e Zotërinjve", desc: "Kujdes për moshën e tretë", btnText: "Hyr" },
        { id: "kurset" as ServiceID, title: "Kurset Profesionale", desc: "Trajnime Babysitter", btnText: "Kurset" },
        { id: "ekipi" as ServiceID, title: "Bashkohu me ne", desc: "Staf ose vullnetar", btnText: "Apliko" },
        { id: "kerkoni" as ServiceID, title: "Kërkoj punonjës", desc: "Publiko kërkesë", btnText: "Më shumë" },
        { id: "projektet" as ServiceID, title: "Projektet MIKE", desc: "Aktivitetet në komunitet", btnText: "Projektet" }
      ]
    },
    en: {
      welcome: "Welcome to M.I.K.E",
      p1: "M.I.K.E Center – Support, Information, Care, Education – is a non-profit organization founded in 2007. It provides essential services supporting children, youth, women, and the elderly. Its core mission is to contribute to education and social well-being through continuous dedicated care.",
      p2: "The center works towards the personal and economic empowerment of individuals, focusing heavily on marginalized groups. Activities include daily daycare services, advocacy, and training. M.I.K.E aims to create equal opportunities and improve the community's quality of life.",
      badgeSocial: "SOCIAL ENTERPRISE",
      badgeStatus: "Since 2024, M.I.K.E Center has been officially granted the status of a ",
      badgeEnd: ", strengthening its pivotal role in community development.",
      ctaSelection: "Choose the service you require",
      services: [
        { id: "mike" as ServiceID, title: "Kindergarten / Daycare", desc: "Educational program", btnText: "Enter" },
        { id: "zoterinjte" as ServiceID, title: "Shtëpia e Zotërinjve", desc: "Elderly care services", btnText: "Enter" },
        { id: "kurset" as ServiceID, title: "Professional Courses", desc: "Babysitter training", btnText: "Courses" },
        { id: "ekipi" as ServiceID, title: "Join Our Team", desc: "Staff or volunteer", btnText: "Apply" },
        { id: "kerkoni" as ServiceID, title: "Looking for Staff", desc: "Post a job request", btnText: "More" },
        { id: "projektet" as ServiceID, title: "MIKE Projects", desc: "Community activities", btnText: "Projects" }
      ]
    }
  };

  const t = translations[language];

  // Mapimi i ikonave statike bazuar në ID për të shmangur problemet e renderimit
  const iconsMap: Record<ServiceID, React.ReactNode> = {
    mike: <PandaIcon size={28} className="text-gray-600" />,
    zoterinjte: <ShieldUser size={28} className="text-gray-600" />,
    kurset: <GraduationCap size={28} className="text-gray-600" />,
    ekipi: <Users size={28} className="text-gray-600" />,
    kerkoni: <Search size={28} className="text-gray-600" />,
    projektet: <Lightbulb size={28} className="text-gray-600" />
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] md:max-h-none overflow-y-auto md:overflow-visible rounded-[2rem] shadow-2xl relative animate-in fade-in zoom-in duration-300">
        
        {/* LANGUAGE SWITCHER (TOP LEFT) */}
        <div className="absolute top-5 left-6 z-50 flex gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-sm">
          <button
            onClick={() => setLanguage("sq")}
            className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${
              language === "sq" 
                ? "bg-mikePurple text-white shadow-sm" 
                : "text-gray-400 hover:text-mikeDark"
            }`}
          >
            AL
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${
              language === "en" 
                ? "bg-mikePurple text-white shadow-sm" 
                : "text-gray-400 hover:text-mikeDark"
            }`}
          >
            EN
          </button>
        </div>

        {/* CLOSE BUTTON (TOP RIGHT) */}
        <button onClick={onClose} className="absolute top-5 right-6 p-2 hover:bg-gray-100 rounded-full transition text-gray-400 z-50 bg-white/80">
          <X size={22} />
        </button>

        <div className="p-5 md:p-10 pt-16 md:pt-12">
          {/* HEADER SECTION */}
          <div className="mb-2 md:mb-2 border-b border-gray-100 pb-2 md:pb-2 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-black text-mikePurple mb-4 md:mb-6 text-center italic uppercase tracking-tighter">
              {t.welcome}
            </h2>
            
            <div className="md:columns-1 gap-10 space-y-3 md:space-y-0 text-gray-600 leading-snug text-[11px] md:text-[13px] text-justify">
              <p>
                <span className="text-mikeDark font-bold italic">Qendra M.I.K.E</span> – {t.p1}
              </p>
              <p>
                {t.p2}
              </p>
              <p className="bg-mikePurple/5 p-3 rounded-xl border-l-4 border-mikePurple italic">
                {t.badgeStatus}<span className="font-bold text-mikePurple">{t.badgeSocial}</span>{t.badgeEnd}
              </p>
            </div>
          </div>

          <div className="text-center mb-2 mt-4">
            <span className="px-4 py-1 bg-mikeDark text-white rounded-full text-[9px] font-black uppercase tracking-[0.15em]">
              {t.ctaSelection}
            </span>
          </div>

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-1">
            {t.services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-row lg:flex-col items-center text-left lg:text-center p-4 bg-white border border-gray-100 rounded-[1.2rem] lg:rounded-[1.8rem] hover:border-mikePurple/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon mapping */}
                <div className="h-10 w-10 lg:w-auto flex items-center justify-center mb-0 lg:mb-2 mr-4 lg:mr-0 transform group-hover:scale-110 transition-transform">
                  {iconsMap[service.id]}
                </div>

                <div className="flex-grow">
                  <h3 className="text-[11px] font-black text-mikeDark mb-1 lg:h-8 flex items-center lg:justify-center leading-none uppercase italic">
                    {service.title}
                  </h3>
                  
                  <p className="text-[9px] text-gray-400 mb-0 lg:mb-4 leading-tight lg:min-h-[24px] font-medium hidden md:block">
                    {service.desc}
                  </p>
                </div>

                <button
                  onClick={() => onSelect(service.id)}
                  className="ml-auto lg:ml-0 w-24 lg:w-full py-2 lg:py-2.5 bg-mikePurple text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-mikeDark transition-all active:scale-95 shadow-md shadow-purple-50"
                >
                  {service.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}