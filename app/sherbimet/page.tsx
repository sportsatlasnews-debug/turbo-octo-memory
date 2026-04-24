"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParentFeedbacks from "@/components/ParentFeedbacks"; // Komponenti që krijuam më parë
import { 
  Baby, 
  Utensils, 
  ShieldCheck, 
  Bus, 
  Music, 
  Languages, 
  BrainCircuit, 
  Activity 
} from "lucide-react";

export default function Sherbimet() {
  const primaryServices = [
    {
      title: "Çerdhe (6m - 3v)",
      desc: "Përkujdesje maksimale dhe stimulim i hershëm në një ambient të sigurt.",
      icon: <Baby size={32} />,
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      title: "Kopsht (3v - 6v)",
      desc: "Edukimi para-shkollor sipas standardeve më të larta të Ministrisë së Arsimit.",
      icon: <Languages size={32} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Ushqim Bio",
      desc: "Menu e balancuar dietike e përgatitur çdo ditë me produkte të freskëta.",
      icon: <Utensils size={32} />,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Siguri 24/7",
      desc: "Monitorim me 23 kamera sigurie dhe protokolle strikte hyrje-daljeje.",
      icon: <ShieldCheck size={32} />,
      color: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const extraActivities = [
    { name: "Anglisht", icon: <Languages className="w-5 h-5" /> },
    { name: "Kung-Fu", icon: <Activity className="w-5 h-5" /> },
    { name: "Robotikë & Kodim", icon: <BrainCircuit className="w-5 h-5" /> },
    { name: "Muzikë & Kërcim", icon: <Music className="w-5 h-5" /> },
    { name: "Transport", icon: <Bus className="w-5 h-5" /> }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-mikePurple font-black uppercase tracking-[0.2em] text-xs">EKSPERIENCA M.I.K.E</span>
          <h1 className="text-4xl md:text-6xl font-black text-mikeDark mt-4 mb-6">Shërbimet tona</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Nga hapat e parë deri te përgatitja për shkollë, ne ofrojmë gjithçka që fëmija juaj të rritet i lumtur dhe i shëndetshëm.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {primaryServices.map((service, index) => (
            <div key={index} className="group p-10 rounded-[3rem] border border-gray-100 hover:border-mikePurple/20 hover:shadow-2xl transition-all duration-500">
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-mikeDark mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Services Banner */}
      <section className="py-16 bg-mikeDark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-white lg:w-1/3">
              <h2 className="text-3xl font-black mb-4">Aktivitete Jashtë-kurrikulare</h2>
              <p className="text-gray-400 text-sm">Përveç programit bazë, ne zhvillojmë talente të reja në fusha të ndryshme.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:w-2/3 justify-center lg:justify-end">
              {extraActivities.map((act, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white hover:bg-mikePurple transition-colors">
                  <span className="text-mikePurple group-hover:text-white">{act.icon}</span>
                  <span className="font-bold text-sm">{act.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from CSV */}
      <ParentFeedbacks />

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center bg-white p-16 rounded-[4rem] shadow-sm border border-gray-100">
           <h2 className="text-3xl md:text-5xl font-black text-mikeDark mb-8">Gati për të nisur udhëtimin?</h2>
           <p className="text-gray-500 mb-10 max-w-xl mx-auto">Regjistrimet janë të hapura gjatë gjithë vitit, por vendet janë të limituara për të siguruar vëmendje maksimale.</p>
           <a href="/kopshti#contactSection" className="bg-mikePurple text-white px-12 py-5 rounded-full font-black hover:bg-mikeDark transition-all shadow-xl shadow-purple-100">
             REZERVO NJË KONSULTË FALAS
           </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}