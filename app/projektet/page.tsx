"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Lightbulb, Layers, Star, ArrowRight } from "lucide-react";

const ProjectsPage = () => {
  // Të dhënat zyrtare nga dokumenti i Qendrës M.I.K.E
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

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex p-3 bg-purple-50 text-mikePurple rounded-full mb-3">
            <Lightbulb size={24} />
          </div>
          <span className="block text-mikePurple font-bold uppercase tracking-widest text-xs">Transparenca & Ndikimi</span>
          <h1 className="text-4xl md:text-5xl font-black text-mikeDark mt-2 italic uppercase">
            Projektet Sociale
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Projektet kryesore dhe programet institucionale të implementuara nga Qendra M.I.K.E ndër vite në mbështetje të komunitetit.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        
        {/* ================= PROJEKTI KRYESOR (FEATURED CARD) ================= */}
        <div className="mb-16 bg-gradient-to-br from-mikeDark to-purple-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden group">
          {/* Efekt dekorativ në background */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-mikePurple/20 rounded-full blur-3xl group-hover:bg-mikePurple/30 transition-all duration-700" />
          
          <div className="relative z-10 max-w-4xl">
            {/* Badge i projektit kryesor */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-mikePurple text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
              <Star size={12} fill="white" />
              Projekti Kryesor
            </div>

            {/* Titulli i Madh */}
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight mb-4 text-white">
              M.I.K.E në lagjen time
            </h2>

            {/* Përshkrimi i Detajuar */}
            <p className="text-purple-100/90 text-sm md:text-base leading-relaxed mb-8 text-justify">
              Ky është programi ynë më i rëndësishëm i shtrirjes në komunitet, i cili synon të sjellë shërbimet e kujdesit, edukimit dhe mbështetjes psiko-sociale direkt në lagjet tuaja. Përmes këtij projekti, Qendra M.I.K.E krijon pika të aksesueshme për familjet në nevojë, fëmijët dhe moshën e tretë, duke ofruar asistencë të personalizuar dhe duke ndërtuar rrjete të forta solidariteti lokal në çdo njësi administrative.
            </p>

            {/* Info Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-6 text-left">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-purple-300 font-bold">Organizata</span>
                <span className="text-sm font-bold text-white">Qendra M.I.K.E (Ndërmarrje Sociale)</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-purple-300 font-bold">Fokusimi</span>
                <span className="text-sm font-bold text-white">Mbështetje Lokale & Kujdes Ditor</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-purple-300 font-bold">Statusi</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Aktualisht Aktiv
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* =================================================================== */}


        {/* Titulli për listën e projekteve të tjera */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-grow" />
          <span className="px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-[0.15em] whitespace-nowrap">
            Historiku i Projekteve të Implementuara
          </span>
          <div className="h-px bg-gray-200 flex-grow" />
        </div>

        {/* Tabela e Projekteve ekzistuese */}
        <div className="overflow-x-auto rounded-[2rem] shadow-md border border-gray-100 bg-white">
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
                  <td className="p-6 text-sm font-bold text-mikeDark leading-tight max-w-sm">{project.emri}</td>
                  <td className="p-6 text-sm text-gray-600">{project.donatori}</td>
                  <td className="p-6 text-sm font-bold text-mikePurple italic whitespace-nowrap">{project.viti}</td>
                  <td className="p-6 text-sm text-gray-500 italic leading-relaxed">{project.qellimi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Badge përmbyllës dekorativ */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
            <Layers size={14} />
            Së bashku ndërtojmë një mjedis gjithëpërfshirës.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectsPage;