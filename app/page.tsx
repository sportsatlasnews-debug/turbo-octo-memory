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
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EntryModal from '@/components/EntryModal';

export default function Home() {
  // 1. Create the state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // 2. Trigger the modal to open when the user lands
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // 3. Define what happens when a user clicks a choice
const handleSelection = (choice: "mike" | "zoterinjte" | "kurset" | "ekipi" | "kerkoni" | "projektet") => {
  setIsModalOpen(false);

  if (choice === "mike"){
    router.push(`/kopshti`);
  } else if ( choice === "zoterinjte") {
    router.push(`https://shtepiaezoterinjve.com/`);
  } else if (choice === "ekipi") {
    router.push(`/bashkohu`); // Or a specific recruitment landing
  } else {
    // For the other 3 buttons that might not have pages yet
    console.log("Selected service:", choice);
    // router.push(`/${choice}`); 
  }
};

  return (
    <main>
      {/* 4. Pass the missing properties here! */}
      <EntryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSelect={handleSelection} 
      />
      
     <Navbar />
      {/* We can reuse the Hero, but customize the text specifically for the Kindergarten */}
      <Hero />
      
      {/* Detailed Info Section based on Pershkrimi documents */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-purple-50 rounded-2xl">
            <h3 className="font-bold text-mikePurple mb-2">Siguria</h3>
            <p className="text-sm text-gray-600">Çdo klasë dhe ambient i jashtëm është i pajisur me kamera sigurie për qetësinë tuaj.</p>
          </div>
          <div className="p-8 bg-green-50 rounded-2xl">
            <h3 className="font-bold text-mikeGreen mb-2">Kurrikula</h3>
            <p className="text-sm text-gray-600">Përdorim metodologjinë 'Play and Learn' dhe programin 'Save the Children'.</p>
          </div>
          <div className="p-8 bg-yellow-50 rounded-2xl">
            <h3 className="font-bold text-mikeDark mb-2">Aktivitete</h3>
            <p className="text-sm text-gray-600">Kung-Fu dhe Anglisht të përfshira në tarifë për grupmoshat 3-6 vjeç.</p>
          </div>
        </div>
      </section>

      <Vision />
      <Schedule />
      <ServicesShowcase />
      <DirectorSection />
      <ProgramAndEnvironment />
      <ParentFeedbacks />
      
      <ContactSection />
      
     <Footer />
    </main>
  );
}