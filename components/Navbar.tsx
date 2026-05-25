"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react'; 
import { useLanguage } from '@/context/LanguageContext';
import { navTranslations } from '@/constants/translations';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Funksion i thjeshtë për të marrë përkthimin direkt në Navbar
  const text = (key: keyof typeof navTranslations.sq) => {
    return navTranslations[language][key];
  };

  const links = [
    { name: text("home"), href: "/" },
    { name: text("about"), href: "/rreth-nesh" },
    { name: text("services"), href: "/sherbimet" },
    { name: text("stafi"), href: "/stafi" },
    { name: text("galeri"), href: "/galeri" },
    { name: text("projects"), href: "/projektet" },
    { name: text("contact"), href: "/kontakt" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-8">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-12">
              <Image 
                src="/assets/logo.png" 
                alt="Qendra MIKE Logo"
                fill
                className="object-contain"
                priority 
              />
            </div>
          </Link>
          
          {/* MENUJA PËR DESKTOP */}
          <div className="hidden md:flex space-x-6 text-mikeDark font-medium">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-mikePurple transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* NDËRRUESI I GJUHËS PËR DESKTOP */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 p-1.5 rounded-full border border-gray-100">
            <button 
              onClick={() => setLanguage("sq")} 
              className={`px-2.5 py-1 rounded-full transition-all ${language === 'sq' ? 'bg-mikePurple text-white shadow-sm' : 'hover:text-mikePurple'}`}
            >
              AL
            </button>
            <button 
              onClick={() => setLanguage("en")} 
              className={`px-2.5 py-1 rounded-full transition-all ${language === 'en' ? 'bg-mikePurple text-white shadow-sm' : 'hover:text-mikePurple'}`}
            >
              EN
            </button>
          </div>

          {/* BUTONI APLIKO PËR DESKTOP */}
          <a href="/bashkohu" className="bg-mikePurple text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition text-sm">
            {text("apply")} 
            <span className="text-xs">▼</span>
          </a>
        </div>

        {/* BUTONI HAMBURGER PËR MOBILE */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleSidebar}
            className="p-2 text-mikeDark hover:bg-gray-100 rounded-xl transition"
          >
            {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ================= SIDEBAR MENU (PËR MOBILE) ================= */}
      <div 
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <aside 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[100] shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <span className="font-bold text-gray-500 text-sm tracking-wider uppercase">{text("menu")}</span>
          <button 
            onClick={toggleSidebar}
            className="p-2 text-gray-400 hover:text-mikeDark rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Linket e Navigimit në Mobile */}
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={toggleSidebar}
              className="px-4 py-3 text-base font-semibold text-mikeDark hover:text-mikePurple hover:bg-purple-50/50 rounded-xl transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* NDËRRUESI I GJUHËS NË FUND TË SIDEBAR-IT */}
        <div className="mt-auto pt-4 border-t border-gray-100 space-y-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl">
            <span className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
              <Globe size={14} /> Gjuha / Language
            </span>
            <div className="flex gap-1 text-xs font-bold bg-white p-1 rounded-lg border">
              <button 
                onClick={() => setLanguage("sq")} 
                className={`px-2 py-1 rounded-md ${language === 'sq' ? 'bg-mikePurple text-white' : 'text-gray-500'}`}
              >
                AL
              </button>
              <button 
                onClick={() => setLanguage("en")} 
                className={`px-2 py-1 rounded-md ${language === 'en' ? 'bg-mikePurple text-white' : 'text-gray-500'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Butoni Apliko */}
          <a 
            href="/bashkohu" 
            onClick={toggleSidebar}
            className="bg-mikePurple text-white w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition shadow-md shadow-purple-50"
          >
            {text("apply")} 
            <span className="text-xs">▼</span>
          </a>
        </div>
      </aside>
    </>
  );
}