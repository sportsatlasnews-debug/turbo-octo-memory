"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Vision from '@/components/Vision';
import ServicesShowcase from '@/components/ServicesShowcase';
import DirectorSection from '@/components/DirectorSection';
import ProgramAndEnvironment from '@/components/ProgramAndEnvironment';
import ParentFeedbacks from '@/components/ParentFeedbacks';
import Footer from '@/components/Footer';
import EntryModal from '@/components/EntryModal';
import AboutMission from '@/components/AboutMission';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { language } = useLanguage();

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleSelection = (choice: "mike" | "zoterinjte" | "kurset" | "ekipi" | "kerkoni" | "projektet") => {
    setIsModalOpen(false);

    if (choice === "mike"){
      router.push(`/kopshti`);
    } else if ( choice === "zoterinjte") {
      router.push(`https://shtepiaezoterinjve.com/`);
    } else if (choice === "ekipi") {
      router.push(`/bashkohu`); 
    } else if (choice === "kurset") {
      router.push(`/kurset`); 
    } else if (choice === "kerkoni") {
      router.push(`/kontakt`); 
    } else if (choice === "projektet") {
      router.push(`/projektet`); 
    } else {
      console.log("Selected service:", choice);
    }
  };

  // Përkthimet për 3 kutitë informative në këtë faqe
  const translations = {
    sq: {
      safetyTitle: "Siguria",
      safetyDesc: "Çdo klasë dhe ambient i jashtëm është i pajisur me kamera sigurie për qetësinë tuaj.",
      curriculumTitle: "Kurrikula",
      curriculumDesc: "Përdorim metodologjinë 'Play and Learn' dhe programin 'Save the Children'.",
      activitiesTitle: "Aktivitete",
      activitiesDesc: "Kung-Fu dhe Anglisht të përfshira në tarifë për grupmoshat 3-6 vjeç."
    },
    en: {
      safetyTitle: "Safety",
      safetyDesc: "Every classroom and outdoor area is equipped with security cameras for your peace of mind.",
      curriculumTitle: "Curriculum",
      curriculumDesc: "We use the 'Play and Learn' methodology and the 'Save the Children' program.",
      activitiesTitle: "Activities",
      activitiesDesc: "Kung-Fu and English lessons are included in the fee for ages 3-6 years old."
    }
  };

  const t = translations[language];

  return (
    <main>
      <EntryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleSelection} 
      />
      
      <Navbar />
      <Hero />
      
      {/* Detailed Info Section */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-purple-50 rounded-2xl">
            <h3 className="font-bold text-mikePurple mb-2">{t.safetyTitle}</h3>
            <p className="text-sm text-gray-600">{t.safetyDesc}</p>
          </div>
          <div className="p-8 bg-green-50 rounded-2xl">
            <h3 className="font-bold text-mikeGreen mb-2">{t.curriculumTitle}</h3>
            <p className="text-sm text-gray-600">{t.curriculumDesc}</p>
          </div>
          <div className="p-8 bg-yellow-50 rounded-2xl">
            <h3 className="font-bold text-mikeDark mb-2">{t.activitiesTitle}</h3>
            <p className="text-sm text-gray-600">{t.activitiesDesc}</p>
          </div>
        </div>
      </section>

      {/* <AboutMission /> */}
      <Vision />
      <Schedule />
      <ServicesShowcase />
      <DirectorSection />
      <ProgramAndEnvironment />
      <ParentFeedbacks />
      <Footer />
    </main>
  );
}