"use client";
import React from 'react';
import { Star, Quote } from 'lucide-react';

const ParentFeedbacks = () => {
  const feedbacks = [
    {
      parent: "Anisa B.",
      role: "Prind i grupmoshës 3-6 vjeç",
      text: "Një ambient jashtëzakonisht i ngrohtë dhe i sigurt. Vajza ime vjen me dëshirë çdo ditë dhe programi me Anglisht e Kung-Fu i ka dhënë shumë vetëbesim.",
      rating: 5
    },
    {
      parent: "Erion M.",
      role: "Prind i grupmoshës 6m - 3v",
      text: "Eksperienca 27-vjeçare e drejtoreshës ndihet në çdo detaj. Si prind i ri, vlerësoj shumë raportet ditore dhe qetësinë që më jep monitorimi me kamera.",
      rating: 5
    },
    {
      parent: "Valbona K.",
      role: "Prind i Qendrës M.I.K.E",
      text: "Stafi është shumë profesional dhe i dashur. Pastërtia dhe ushqimi cilësor janë pikat që më bënë ta përzgjedh këtë qendër mbi të tjerat.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
            <Quote size={300} className="text-mikePurple" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">PËRSHTYPYET</span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2">Çfarë thonë prindërit</h2>
          <div className="h-1.5 w-24 bg-mikePurple mx-auto mt-6 rounded-full" />
        </div>

        {/* Feedbacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 md:p-10 rounded-[3rem] border border-transparent hover:border-mikePurple/20 hover:bg-white hover:shadow-2xl transition-all duration-500 group relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 bg-mikePurple/10 rounded-full flex items-center justify-center text-mikePurple font-black">
                  {item.parent.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-mikeDark">{item.parent}</h4>
                  <p className="text-xs text-mikePurple font-medium uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
              
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-8 right-8 text-mikePurple/10 group-hover:text-mikePurple/20 transition-colors" size={40} />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-mikeDark rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-mikePurple/10 translate-y-1/2 rounded-full scale-150 blur-3xl" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
                Bëhuni pjesë e komunitetit tonë sot
            </h3>
            <button
            onClick={() => {
              const el = document.getElementById("contactSection");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-mikePurple hover:bg-white hover:text-mikePurple text-white px-10 py-4 rounded-full font-black transition-all duration-300 relative z-10 shadow-xl">
                REZERVO NJË VIZITË
            </button>
        </div>
      </div>
    </section>
  );
};

export default ParentFeedbacks;