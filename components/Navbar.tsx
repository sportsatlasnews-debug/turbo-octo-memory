"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Sigurohu që ke instaluar lucide-react

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Linket e tua të sakta për t'i përdorur në të dyja menutë
  const links = [
    { name: "Kreu", href: "/" },
    { name: "Rreth Nesh", href: "/rreth-nesh" },
    { name: "Shërbimet", href: "/sherbimet" },
    { name: "Stafi", href: "/stafi" },
    { name: "Galeri", href: "/galeri" },
    { name: "Projektet", href: "/projektet" },
    { name: "Kontakt", href: "/kontakt" },
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

        {/* BUTONI APLIKO PËR DESKTOP */}
        <div className="hidden md:block">
          <a href="/bashkohu" className="bg-mikePurple text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition">
            Apliko 
            <span className="text-xs">▼</span>
          </a>
        </div>

        {/* BUTONI HAMBURGER PËR MOBILE */}
        <button 
          onClick={toggleSidebar}
          className="block md:hidden p-2 text-mikeDark hover:bg-gray-100 rounded-xl transition"
        >
          {isSidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* ================= SIDEBAR MENU (PËR MOBILE) ================= */}
      {/* Sfondi i errët prapa (Overlay) */}
      <div 
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Paneli Anësor rëshqitës */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[100] shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header i Sidebar-it */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <span className="font-bold text-gray-500 text-sm tracking-wider uppercase">Menuja</span>
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
              onClick={toggleSidebar} // Mbyllet kur klikon një nga faqet
              className="px-4 py-3 text-base font-semibold text-mikeDark hover:text-mikePurple hover:bg-purple-50/50 rounded-xl transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Butoni Apliko në fund të Sidebar-it */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <a 
            href="/bashkohu" 
            onClick={toggleSidebar}
            className="bg-mikePurple text-white w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition shadow-md shadow-purple-50"
          >
            Apliko 
            <span className="text-xs">▼</span>
          </a>
        </div>
      </aside>
    </>
  );
}