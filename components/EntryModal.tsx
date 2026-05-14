"use client";
import React from "react";
import { X, GraduationCap, Users, Search, Lightbulb, ShieldUser } from "lucide-react";

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
  if (!isOpen) return null;

  const services: { id: ServiceID; title: string; desc: string; icon: React.ReactNode; btnText: string }[] = [
    { id: "mike", title: "Kopsht / Çerdhe", desc: "Program edukativ", icon: <PandaIcon size={28} className="text-gray-600" />, btnText: "Hyr" },
    { id: "zoterinjte", title: "Shtëpia e Zotërinjve", desc: "Kujdes për moshën e tretë", icon: <ShieldUser size={28} className="text-gray-600" />, btnText: "Hyr" },
    { id: "kurset", title: "Kurset Profesionale", desc: "Trajnime Babysitter", icon: <GraduationCap size={28} className="text-gray-600" />, btnText: "Kurset" },
    { id: "ekipi", title: "Bashkohu me ne", desc: "Staf ose vullnetar", icon: <Users size={28} className="text-gray-600" />, btnText: "Apliko" },
    { id: "kerkoni", title: "Kërkoj punonjës", desc: "Publiko kërkesë", icon: <Search size={28} className="text-gray-600" />, btnText: "Më shumë" },
    { id: "projektet", title: "Projektet MIKE", desc: "Aktivitetet në komunitet", icon: <Lightbulb size={28} className="text-gray-600" />, btnText: "Projektet" }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
      {/* max-h-[95vh] dhe overflow-y-auto per mobile */}
      <div className="bg-white w-full max-w-6xl max-h-[95vh] md:max-h-none overflow-y-auto md:overflow-visible rounded-[2rem] shadow-2xl relative animate-in fade-in zoom-in duration-300">
        
        <button onClick={onClose} className="absolute top-5 right-6 p-2 hover:bg-gray-100 rounded-full transition text-gray-400 z-50 bg-white/80">
          <X size={22} />
        </button>

        <div className="p-5 md:p-10">
          {/* HEADER ME PARAGRAFIN E PLOTE */}
          <div className="mb-6 md:mb-8 border-b border-gray-100 pb-6 md:pb-8 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-black text-mikePurple mb-4 md:mb-6 text-center italic uppercase tracking-tighter">
              Mirë se erdhët në M.I.K.E
            </h2>
            
            <div className="md:columns-2 gap-10 space-y-3 md:space-y-0 text-gray-600 leading-snug text-[11px] md:text-[13px] text-justify">
              <p>
                <span className="text-mikeDark font-bold italic">Qendra M.I.K.E</span> – Mbështetje, Informacion, Kujdes, Edukim – është një organizatë jofitimprurëse e themeluar në vitin 2007. Ajo ofron shërbime në mbështetje të fëmijëve, të rinjve, grave dhe të moshuarve. Misioni i saj është të kontribuojë në edukimin dhe mirëqenien sociale përmes kujdesit të vazhdueshme.
              </p>
              <p>
                Qendra punon për fuqizimin personal dhe ekonomik të individëve, me fokus te grupet e margjinalizuara. Aktivitetet përfshijnë shërbime ditore, informim dhe trajnime. M.I.K.E synon të krijojë mundësi të barabarta dhe të përmirësojë cilësinë e jetës në komunitet.
              </p>
              <p className="bg-mikePurple/5 p-3 rounded-xl border-l-4 border-mikePurple italic">
                Që prej vitit 2024, Qendrës M.I.K.E i është njohur statusi i <span className="font-bold text-mikePurple">NDËRMARRJES SOCIALE</span>, duke forcuar rolin e saj në zhvillimin e komunitetit.
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <span className="px-4 py-1 bg-mikeDark text-white rounded-full text-[9px] font-black uppercase tracking-[0.15em]">
              Zgjidh shërbimin që kërkon
            </span>
          </div>

          {/* GRID: 1 kolone ne Mobile, 6 kolona ne Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-row lg:flex-col items-center text-left lg:text-center p-4 bg-white border border-gray-100 rounded-[1.2rem] lg:rounded-[1.8rem] hover:border-mikePurple/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Ikona ne te majte ne mobile, lart ne desktop */}
                <div className="h-10 w-10 lg:w-auto flex items-center justify-center mb-0 lg:mb-2 mr-4 lg:mr-0 transform group-hover:scale-110 transition-transform">
                  {service.icon}
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