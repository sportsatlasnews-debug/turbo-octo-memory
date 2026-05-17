"use client";
import Image from 'next/image';
import photoData from "@/data/photos.json";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Camera, Calendar, History, Sparkles } from "lucide-react";

type Category = "Gjithçka" | "Mike ndër vite" | "15 vjetori i Mike" | "Aktivitete";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<Category>("Gjithçka");
  const photos = photoData;

  const categories = [
    { name: "Gjithçka", icon: <Camera size={18} /> },
    { name: "Mike ndër vite", icon: <History size={18} /> },
    { name: "15 vjetori i Mike", icon: <Sparkles size={18} /> },
    { name: "Aktivitete", icon: <Calendar size={18} /> },
  ];

  // Filtrojmë fotot duke u siguruar që nuk shfaqim aksidentalisht kategori të fshira
  const filteredPhotos = photos.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">Kujtimet tona</span>
          <h1 className="text-4xl md:text-5xl font-black text-mikeDark mt-2 italic uppercase">
            Galeria M.I.K.E
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Kujtime të bukura të kapura në çdo aktivitet, trajnim dhe rrugëtim tonë ndër vite.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-[70px] z-30 bg-white/80 backdrop-blur-md py-6 border-b border-gray-100">
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

      {/* Photos Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {(activeTab === "Gjithçka" ? photos : filteredPhotos).map((photo, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-[2rem] group break-inside-avoid">
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
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;