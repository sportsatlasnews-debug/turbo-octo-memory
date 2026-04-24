"use client";
import Image from 'next/image';
import photoData from "@/data/photos.json";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Camera, Calendar, History, Sparkles, Lightbulb } from "lucide-react";

type Category = "Gjithçka" | "Mike ndër vite" | "15 vjetori i Mike" | "Aktivitete" | "Projekte";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<Category>("Gjithçka");
    const photos = photoData;
  const categories = [
    { name: "Gjithçka", icon: <Camera size={18} /> },
    { name: "Mike ndër vite", icon: <History size={18} /> },
    { name: "15 vjetori i Mike", icon: <Sparkles size={18} /> },
    { name: "Aktivitete", icon: <Calendar size={18} /> },
    { name: "Projekte", icon: <Lightbulb size={18} /> },
  ];

  // Placeholder data - zëvendësoi me URL-të reale të fotove tuaja
//   const photos = [
//     { id: 1, category: "Mike ndër vite", url: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a", title: "Fillimet tona" },
//     { id: 2, category: "15 vjetori i Mike", url: "https://images.unsplash.com/photo-1530103862676-fa8c9134b288", title: "Festa e Jubileut" },
//     { id: 3, category: "Aktivitete", url: "https://images.unsplash.com/photo-1566908829550-e6551b00979b", title: "Lojëra në natyrë" },
//     { id: 4, category: "Projekte", url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902", title: "Projektet komunitare" },
//     { id: 5, category: "Mike ndër vite", url: "https://images.unsplash.com/photo-1540479859555-17af45c78602", title: "Arkiva 2015" },
//     { id: 6, category: "Aktivitete", url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5", title: "Art & Zanat" },
//   ];

  const filteredPhotos = activeTab === "Gjithçka" 
    ? photos 
    : photos.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Galeria */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">Kujtimet tona</span>
          <h1 className="text-4xl md:text-5xl font-black text-mikeDark mt-2">Galeria M.I.K.E</h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Kujtime të bukura të kapura në çdo aktivitet dhe projekt.
          </p>
        </div>
      </section>

      {/* Filtrat e Kategorive */}
      <section className="sticky top-[70px] z-30 bg-white/80 backdrop-blur-md py-6 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all
                  ${activeTab === cat.name 
                    ? "bg-mikePurple text-white shadow-lg shadow-purple-200" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid e Fotove */}
      <section className="py-16 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
          <div className="relative h-64 overflow-hidden rounded-[2rem]">
  <Image 
    src={photo.url} 
    alt={photo.title}
    fill // Mbush kontejnerin
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover group-hover:scale-105 transition-transform duration-700"
    placeholder="blur" // Opsionale: shton një efekt turbullire derisa të ngarkohet
    blurDataURL="data:image/png;base64,..." 
  />
</div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 italic">Nuk u gjet asnjë foto në këtë kategori.</p>
          </div>
        )}
      </section>

       <Footer />
    </main>
  );
};

export default GalleryPage;