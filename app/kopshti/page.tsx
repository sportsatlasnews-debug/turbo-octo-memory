"use client";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Vision from '@/components/Vision';
import ServicesShowcase from '@/components/ServicesShowcase';
import DirectorSection from '@/components/DirectorSection';
import ProgramAndEnvironment from '@/components/ProgramAndEnvironment';
import ParentFeedbacks from '@/components/ParentFeedbacks';
import Footer from '@/components/Footer';
import AboutMission from '@/components/AboutMission';
import { useLanguage } from '@/context/LanguageContext';

export default function KopshtiPage() {
  const { language } = useLanguage();

  const translations = {
    sq: {
      cards: [
        {
          title: "Siguria",
          description: "Çdo klasë dhe ambient i jashtëm është i pajisur me kamera sigurie për qetësinë tuaj.",
          bgColor: "bg-purple-50",
          textColor: "text-mikePurple"
        },
        {
          title: "Kurrikula",
          description: "Përdorim metodologjinë 'Play and Learn' dhe programin 'Save the Children'.",
          bgColor: "bg-green-50",
          textColor: "text-mikeGreen"
        },
        {
          title: "Aktivitete",
          description: "Kung-Fu dhe Anglisht të përfshira në tarifë për grupmoshat 3-6 vjeç.",
          bgColor: "bg-yellow-50",
          textColor: "text-mikeDark"
        }
      ]
    },
    en: {
      cards: [
        {
          title: "Safety & Security",
          description: "Every classroom and outdoor area is equipped with security cameras for your complete peace of mind.",
          bgColor: "bg-purple-50",
          textColor: "text-mikePurple"
        },
        {
          title: "Curriculum",
          description: "We implement the 'Play and Learn' methodology alongside the official 'Save the Children' program.",
          bgColor: "bg-green-50",
          textColor: "text-mikeGreen"
        },
        {
          title: "Activities",
          description: "Kung-Fu and English lessons are fully included in the tuition fee for ages 3-6.",
          bgColor: "bg-yellow-50",
          textColor: "text-mikeDark"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <main>
      <Navbar />
      {/* We can reuse the Hero, but customize the text specifically for the Kindergarten */}
      <Hero />
      
      {/* Detailed Info Section based on Pershkrimi documents */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => (
            <div key={index} className={`p-8 ${card.bgColor} rounded-2xl`}>
              <h3 className={`font-bold ${card.textColor} mb-2`}>
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
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