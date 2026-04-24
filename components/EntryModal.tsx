"use client";
import React from "react";
import { X, GraduationCap, Users, Search, Lightbulb, Panda, ShieldUser  } from "lucide-react";

// 1. Define the specific allowed IDs
type ServiceID = "mike" | "zoterinjte" | "kurset" | "ekipi" | "kerkoni" | "projektet";

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (choice: ServiceID) => void;
}

export default function EntryModal({ isOpen, onClose, onSelect }: EntryModalProps) {
  if (!isOpen) return null;

  // 2. Explicitly type the array so TypeScript knows these IDs match ServiceID
  const services: { id: ServiceID; title: string; desc: string; icon: React.ReactNode; btnText: string }[] = [
    {
      id: "mike",
      title: "Qendra M.I.K.E Kopsht / Çerdhe",
      desc: "Program edukativ dhe kujdes ditor",
      icon: <Panda size={40} className="text-gray-600" />,
      btnText: "Hyr"
    },
    {
      id: "zoterinjte",
      title: "Shtëpia e Zotërinjve",
      desc: "Shërbime kujdesi për të moshuarit.",
      icon: <ShieldUser  size={40} className="text-gray-600" />,
      btnText: "Hyr"
    },
    {
      id: "kurset",
      title: "Kurset Profesionale",
      desc: "Trajnime për babysitter dhe kujdestarë për të moshuar",
      icon: <GraduationCap size={40} className="text-gray-600" />,
      btnText: "Shiko kurset"
    },
    {
      id: "ekipi",
      title: "Bashkohu me ekipin tonë",
      desc: "Apliko për t'u bërë pjesë e stafit ose si vullnetar.",
      icon: <Users size={40} className="text-gray-600" />,
      btnText: "Apliko tani"
    },
    {
      id: "kerkoni",
      title: "Kërkoj punonjës",
      desc: "Publiko kërkesën për staf sipas nevojës.",
      icon: <Search size={40} className="text-gray-600" />,
      btnText: "Shiko më shumë"
    },
    {
      id: "projektet",
      title: "Projektet e zhvilluara nga M.I.K.E",
      desc: "Zbulo projektet dhe aktivitetet tona në komunitet.",
      icon: <Lightbulb size={40} className="text-gray-600" />,
      btnText: "Shiko projektet"
    }
  ];

return (
  <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm overflow-y-auto">
    {/* This wrapper ensures centering while allowing the height to expand */}
    <div className="min-h-full flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl overflow-hidden relative my-8 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition text-gray-400 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-medium text-center text-gray-800 mb-8">Zgjidh shërbimin që kërkon</h2>

          {/* Grid: 1 column on mobile, 2 on tablets, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                       {services.map((service) => (

              <div

                key={service.id}

                className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"

              >

                {/* Icon Container */}

                <div className="h-16 flex items-center justify-center mb-4">

                  {typeof service.icon === "string" ? (

                    <span className="text-4xl">{service.icon}</span>

                  ) : (

                    service.icon

                  )}

                </div>



                {/* Content */}

                <h3 className="text-base font-bold text-gray-800 mb-2 min-h-[3rem] flex items-center justify-center">

                  {service.title}

                </h3>

               

                <div className="w-12 h-[1px] bg-gray-200 mb-3" />

               

                <p className="text-xs text-gray-500 mb-6 leading-relaxed flex-grow">

                  {service.desc}

                </p>



                {/* Button */}

                <button

                  onClick={() => onSelect(service.id)}

                  className="w-full py-2 px-4 bg-mikePurple text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors"

                >

                  {service.btnText}

                </button>

              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}