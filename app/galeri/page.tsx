"use client";
import Image from 'next/image';
import photoData from "@/data/photos.json";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Camera, Calendar, History, Sparkles } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

type CategoryId = "all" | "years" | "anniversary" | "activities";

interface PhotoItem {
  url: string;
  category: string; // Vlera origjinale në JSON (p.sh. "Gjithçka", "Aktivitete", etj.)
  title: string;
  title_sq?: string;
  title_en?: string;
}

const GalleryPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const photos = photoData as PhotoItem[];

  const translations = {
    sq: {
      sub: "Kujtimet tona",
      title: "Galeria M.I.K.E",
      desc: "Kujtime të bukura të kapura në çdo aktivitet, trajnim dhe rrugëtim tonë ndër vite.",
      categories: [
        { id: "all", name: "Gjithçka", jsonCategory: "Gjithçka" },
        { id: "years", name: "Mike ndër vite", jsonCategory: "Mike ndër vite" },
        { id: "anniversary", name: "15 vjetori i Mike", jsonCategory: "15 vjetori i Mike" },
        { id: "activities", name: "Aktivitete", jsonCategory: "Aktivitete" },
      ]
    },
    en: {
      sub: "Our Memories",
      title: "M.I.K.E Gallery",
      desc: "Beautiful memories captured in every activity, training, and our journey throughout the years.",
      categories: [
        { id: "all", name: "All", jsonCategory: "Gjithçka" },
        { id: "years", name: "Mike Through Years", jsonCategory: "Mike ndër vite" },
        { id: "anniversary", name: "Mike's 15th Anniversary", jsonCategory: "15 vjetori i Mike" },
        { id: "activities", name: "Activities", jsonCategory: "Aktivitete" },
      ]
    }
  };

  const t = translations[language];

  // Mapimi i ikonave sipas ID-së statike
  const iconsMap: Record<CategoryId, React.ReactNode> = {
    all: <Camera size={18} />,
    years: <History size={18} />,
    anniversary: <Sparkles size={18} />,
    activities: <Calendar size={18} />,
  };

  // Gjejmë kategorinë korresponduese të JSON për tabin aktiv aktualisht
  const currentCategoryObj = t.categories.find(cat => cat.id === activeTab);
  
  // Filtrojmë fotot duke krahasuar fushën 'category' nga JSON me 'jsonCategory' e përzgjedhur
  const filteredPhotos = photos.filter(photo => {
    if (activeTab === "all") return true;
    return photo.category === currentCategoryObj?.jsonCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">{t.sub}</span>
          <h1 className="text-4xl md:text-5xl font-black text-mikeDark mt-2 italic uppercase">
            {t.title}
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-[70px] z-30 bg-white/80 backdrop-blur-md py-6 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as CategoryId)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all
                  ${activeTab === cat.id 
                    ? "bg-mikePurple text-white shadow-lg" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                {iconsMap[cat.id as CategoryId]}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => {
            const photoTitle = language === 'en'
              ? (photo.title_en || photo.title)
              : (photo.title_sq || photo.title);

            return (
              <div key={index} className="relative h-64 overflow-hidden rounded-[2rem] group break-inside-avoid">
                <Image 
                  src={photo.url} 
                  alt={photoTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-bold text-sm">{photoTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;