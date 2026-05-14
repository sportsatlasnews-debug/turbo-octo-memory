"use client";
import Image from 'next/image';
import photoData from "@/data/photos.json";
import React, { useState, useEffect } from "react"; // Shtova useEffect
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Camera, Calendar, History, Sparkles, Lightbulb } from "lucide-react";

type Category = "Gjithçka" | "Mike ndër vite" | "15 vjetori i Mike" | "Aktivitete" | "Projekte";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<Category>("Gjithçka");
  const photos = photoData;

  // LOGJIKA E REDIRECT: Kontrollon nese URL ka #projektet
  useEffect(() => {
    if (window.location.hash === "#projektet") {
      setActiveTab("Projekte");
    }
  }, []);

  const categories = [
    { name: "Gjithçka", icon: <Camera size={18} /> },
    { name: "Mike ndër vite", icon: <History size={18} /> },
    { name: "15 vjetori i Mike", icon: <Sparkles size={18} /> },
    { name: "Aktivitete", icon: <Calendar size={18} /> },
    { name: "Projekte", icon: <Lightbulb size={18} /> },
  ];

  // Të dhënat nga dokumenti "Projektet MIKE.docx" [cite: 1, 2]
  const projectsData = [
    { id: 1, emri: "Update and delivery of training module of disability evaluation staff, family and specialist doctors and social administrators on implementation of disability evaluation reform in all administrative units of Tirana Municipality", donatori: "🌐 WB SAMP", viti: "Janar 2019 / 63,000 EUR", qellimi: "Trajnimi i stafit multidisiplinar për reformën e vlerësimit të aftësive të kufizuara në Tiranë" },
    { id: 2, emri: "VET Training in Nursery services Babysitting", donatori: "🌐 GIZ ProSEED", viti: "Maj 2018 / 4,050,000 ALL", qellimi: "Trajnimi i stafit të kujdesit për fëmijët" },
    { id: 3, emri: "Strengthening of third age women by identifying barriers to the realization of the quality of life", donatori: "🏛 AMSHC", viti: "2018 / 1,900,000 ALL", qellimi: "Fuqizimi i grave të moshuara dhe identifikimi i barrierave për cilësinë e jetës" },
    { id: 4, emri: "Capacity building of the multidisciplinary groups of remote rural areas in Tirana and Durres regions for the identification, treatment and counseling of persons with disabilities (including elderly people)", donatori: "🏛 AMSHC", viti: "2017 / 2,000,000 ALL", qellimi: "Fuqizimi i grupeve multidisiplinare për identifikim dhe trajtim të personave me aftësi të kufizuara dhe të moshuar" },
    { id: 5, emri: "Volunteers assisting people with disabilities and elderly people", donatori: "🏛 AMSHC", viti: "2016 / 2,195,025 ALL", qellimi: "Aktivizimi i vullnetarëve për të ndihmuar persona me aftësi të kufizuara dhe të moshuar" },
    { id: 6, emri: "Building care givers capacities to respond effectively to children that are victims of domestic violence", donatori: "🇺🇸 Ambasada e SHBA / Small Grants for Democracy", viti: "2015 / 18,730 USD", qellimi: "Fuqizimi i kapaciteteve të profesionistëve për trajtimin e fëmijëve viktima të dhunës" },
    { id: 7, emri: "Fuqizimi i kapaciteteve të pushtetit vendor dhe rritja e aksesit të komunitetit Rom", donatori: "🌐 Fondacioni Soros", viti: "2018", qellimi: "Rritja e kapaciteteve të administratës lokale dhe aksesit të komunitetit Rom" },
    { id: 8, emri: "Fuqizimi i grave në planifikim dhe monitorim të politikave lokale", donatori: "🌐 Banka Botërore", viti: "2018", qellimi: "Fuqizimi i grave dhe pjesëmarrja në vendimmarrje lokale" },
    { id: 9, emri: "Pjesëmarrje në vendimmarrje", donatori: "🇺🇸 Ambasada e SHBA", viti: "2017", qellimi: "Rritja e pjesëmarrjes qytetare dhe ndikimi në vendimet lokale" },
    { id: 10, emri: "Fuqizimi i grave me NACSS", donatori: "🇳🇱 Ambasada e Holandës, 🏛 NACSS", viti: "2018", qellimi: "Fuqizimi i grave për pjesëmarrje aktive në politika dhe monitorim programesh" },
    { id: 11, emri: "Të rinjtë kanë të drejtë të informohen", donatori: "🌐 Banka Botërore", viti: "2017", qellimi: "Rritja e aksesit të të rinjve në informacion dhe fuqizimi për pjesëmarrje qytetare" },
    { id: 12, emri: "WARM – Reinsertion of Migrants, Day Care Center for Children", donatori: "❤️ Caritas Albania, 🏛 Departamenti i Politikave Ekonomike, 🏛 Bashkia Romë, 🌐 Komisioni Europian", viti: "2016", qellimi: "Reintegration social dhe edukativ i fëmijëve migrantë" },
    { id: 13, emri: "Fuqizimi i të rinjve përmes zhvillimit të komunitetit", donatori: "🏛 NACSS, 🌐 Banka Botërore", viti: "2018", qellimi: "Fuqizimi i të rinjve për pjesëmarrje aktive në zhvillimin e komunitetit" },
  ];

  const filteredPhotos = photos.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">Kujtimet tona</span>
          <h1 className="text-4xl md:text-5xl font-black text-mikeDark mt-2 italic uppercase">
            {activeTab === "Projekte" ? "Projektet Sociale" : "Galeria M.I.K.E"}
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {activeTab === "Projekte" 
              ? "Projektet kryesore të implementuara nga Qendra M.I.K.E ndër vite." 
              : "Kujtime të bukura të kapura në çdo aktivitet dhe projekt."}
          </p>
        </div>
      </section>

      {/* Shtova ID ketu qe Link-u te beje scroll direkt tek butonat */}
      <section id="projektet" className="sticky top-[70px] z-30 bg-white/80 backdrop-blur-md py-6 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all
                  ${activeTab === cat.name 
                    ? "bg-mikePurple text-white shadow-lg" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        {activeTab === "Projekte" ? (
          <div className="overflow-x-auto rounded-[2rem] shadow-xl border border-gray-100 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-mikeDark text-white">
                  <th className="p-6 font-bold uppercase text-xs tracking-wider">Projekti</th>
                  <th className="p-6 font-bold uppercase text-xs tracking-wider">Donatorët</th>
                  <th className="p-6 font-bold uppercase text-xs tracking-wider">Viti / Buxheti</th>
                  <th className="p-6 font-bold uppercase text-xs tracking-wider">Qëllimi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {projectsData.map((project) => (
                  <tr key={project.id} className="hover:bg-purple-50/30 transition-colors">
                    <td className="p-6 text-sm font-bold text-mikeDark leading-tight">{project.emri}</td>
                    <td className="p-6 text-sm text-gray-600">{project.donatori}</td>
                    <td className="p-6 text-sm font-bold text-mikePurple italic">{project.viti}</td>
                    <td className="p-6 text-sm text-gray-500 italic">{project.qellimi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Pjesa e fotove mbetet njesoj... */
          <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {(activeTab === "Gjithçka" ? photos : filteredPhotos).map((photo, index) => (
                <div key={index} className="relative h-64 overflow-hidden rounded-[2rem] group">
                  <Image 
                    src={photo.url} 
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-sm">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;