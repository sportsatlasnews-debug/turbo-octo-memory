"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParentFeedbacks from "@/components/ParentFeedbacks";
import { useLanguage } from '@/context/LanguageContext';
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
  const { language } = useLanguage();

  const translations = {
    sq: {
      metaSub: "EKSPERIENCA M.I.K.E",
      metaTitle: "Shërbimet tona",
      metaDesc: "Nga hapat e parë deri te përgatitja për shkollë, ne ofrojmë gjithçka që fëmija juaj të rritet i lumtur dhe i shëndetshëm.",
      
      // Core Services titles/descriptions
      services: [
        {
          title: "Çerdhe (6m - 3v)",
          desc: "Përkujdesje maksimale dhe stimulim i hershëm në një ambient të sigurt."
        },
        {
          title: "Kopsht (3v - 6v)",
          desc: "Edukimi para-shkollor sipas standardeve më të larta të Ministrisë së Arsimit."
        },
        {
          title: "Ushqim Bio",
          desc: "Menu e balancuar dietike e përgatitur çdo ditë me produkte të freskëta."
        },
        {
          title: "Siguri 24/7",
          desc: "Monitorim me 23 kamera sigurie dhe protokolle strikte hyrje-daljeje."
        }
      ],

      // Extra Activities Section
      extraTitle: "Aktivitete Jashtë-kurrikulare",
      extraDesc: "Përveç programit bazë, ne zhvillojmë talente të reja në fusha të ndryshme.",
      activities: [
        { name: "Anglisht" },
        { name: "Kung-Fu" },
        { name: "Robotikë & Kodim" },
        { name: "Muzikë & Kërcim" },
        { name: "Transport" }
      ],

      // CTA Section
      ctaTitle: "Gati për të nisur udhëtimin?",
      ctaDesc: "Regjistrimet janë të hapura gjatë gjithë vitit, por vendet janë të limituara për të siguruar vëmendje maksimale.",
      ctaBtn: "REZERVO NJË KONSULTË FALAS"
    },
    en: {
      metaSub: "THE M.I.K.E EXPERIENCE",
      metaTitle: "Our Services",
      metaDesc: "From early steps to school readiness, we provide everything your child needs to grow healthy, safe, and happy.",
      
      // Core Services titles/descriptions
      services: [
        {
          title: "Nursery (6m - 3y)",
          desc: "Attentive personalized care and early milestone stimulation in a secure environment."
        },
        {
          title: "Kindergarten (3y - 6y)",
          desc: "Early childhood education aligned fully with national ministry standards."
        },
        {
          title: "Organic Nutrition",
          desc: "Balanced dietary menus freshly prepared daily using organic, locally sourced produce."
        },
        {
          title: "24/7 Protection",
          desc: "Strict check-in protocols backed by continuous 23 HD security camera monitoring."
        }
      ],

      // Extra Activities Section
      extraTitle: "Extracurricular Activities",
      extraDesc: "Beyond our core educational framework, we cultivate emerging talents in specialized fields.",
      activities: [
        { name: "English" },
        { name: "Kung-Fu" },
        { name: "Robotics & Coding" },
        { name: "Music & Dance" },
        { name: "Transportation" }
      ],

      // CTA Section
      ctaTitle: "Ready to start the journey?",
      ctaDesc: "Enrollments are open year-round, however slots remain limited to preserve our individualized focus ratios.",
      ctaBtn: "BOOK A FREE CONSULTATION"
    }
  };

  const t = translations[language];

  // Matrica statike e ikonave dhe stileve e koordinuar sipas indeksit të elementeve
  const serviceStyles = [
    { icon: <Baby size={32} />, color: "text-pink-500", bg: "bg-pink-50" },
    { icon: <Languages size={32} />, color: "text-blue-500", bg: "bg-blue-50" },
    { icon: <Utensils size={32} />, color: "text-orange-500", bg: "bg-orange-50" },
    { icon: <ShieldCheck size={32} />, color: "text-green-500", bg: "bg-green-50" }
  ];

  const activityIcons = [
    <Languages className="w-5 h-5" key="lang" />,
    <Activity className="w-5 h-5" key="act" />,
    <BrainCircuit className="w-5 h-5" key="brain" />,
    <Music className="w-5 h-5" key="music" />,
    <Bus className="w-5 h-5" key="bus" />
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-mikePurple font-black uppercase tracking-[0.2em] text-xs">{t.metaSub}</span>
          <h1 className="text-4xl md:text-6xl font-black text-mikeDark mt-4 mb-6">{t.metaTitle}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.metaDesc}
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => {
            const style = serviceStyles[index];
            return (
              <div key={index} className="group p-10 rounded-[3rem] border border-gray-100 hover:border-mikePurple/20 hover:shadow-2xl transition-all duration-500">
                <div className={`w-16 h-16 ${style.bg} ${style.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {style.icon}
                </div>
                <h3 className="text-xl font-black text-mikeDark mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Extra Services Banner */}
      <section className="py-16 bg-mikeDark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-white lg:w-1/3">
              <h2 className="text-3xl font-black mb-4">{t.extraTitle}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{t.extraDesc}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:w-2/3 justify-center lg:justify-end">
              {t.activities.map((act, i) => (
                <div key={i} className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white hover:bg-mikePurple transition-all duration-300">
                  <span className="text-mikePurple group-hover:text-white transition-colors">
                    {activityIcons[i]}
                  </span>
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
           <h2 className="text-3xl md:text-5xl font-black text-mikeDark mb-8">{t.ctaTitle}</h2>
           <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
             {t.ctaDesc}
           </p>
           <a href="/kontakt" className="inline-block bg-mikePurple text-white px-12 py-5 rounded-full font-black hover:bg-mikeDark transition-all shadow-xl shadow-purple-100 text-sm tracking-wide">
             {t.ctaBtn}
           </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}