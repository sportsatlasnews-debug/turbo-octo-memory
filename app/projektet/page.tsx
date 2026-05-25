"use client";
import React, { useState, useEffect } from "react"; // Shtoni useEffect
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import ProjectModal from "@/components/ProjectModal";
import { Lightbulb, Layers, Star, ArrowUpRight } from "lucide-react";
import { useLanguage } from '@/context/LanguageContext';

const ProjectsPage = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]); // Ruajmë rrugët e fotove

  // Efekti për të marrë fotot automatikisht dhe për t'i bërë Preload instant
  useEffect(() => {
    fetch('/api/project-images')
      .then(res => res.json())
      .then(data => {
        if (data.images && data.images.length > 0) {
          setImageUrls(data.images);
          
          // Teknika e Preloading: I ngarkojmë fotot në sfond që kur ngarkohet faqja
          data.images.forEach((src: string) => {
            const img = new Image();
            img.src = src;
          });
        }
      })
      .catch(err => console.error("Gabim gjatë preloading të fotove:", err));
  }, []);

  const translations = {
    sq: {
      metaSub: "Transparenca & Ndikimi",
      metaTitle: "Projektet Sociale",
      metaDesc: "Projektet kryesore dhe programet institucionale të implementuara nga Qendra M.I.K.E ndër vite në mbështetje të komunitetit.",
      
      // Featured Project Card
      featuredBadge: "Projekti Kryesor",
      featuredTitle: "M.I.K.E në lagjen time",
      featuredDesc: "Ky është programi ynë më i rëndësishëm i shtrirjes në komunitet, i cili synon të sjellë shërbimet e kujdesit, edukimit dhe mbështetjes psiko-sociale direkt në lagjet tuaja. Përmes këtij projekti, Qendra M.I.K.E krijon pika të aksesueshme për familjet në nevojë, fëmijët dhe moshën e tretë, duke ofruar asistencë të personalizuar dhe duke ndërtuar rrjete të forta solidariteti lokal në çdo njësi administrative.",
      lblOrg: "Organizata",
      valOrg: "Qendra M.I.K.E (Ndërmarrje Sociale)",
      lblFocus: "Fokusi",
      valFocus: "Mbështetje Lokale & Kujdes Ditor",
      lblStatus: "Statusi",
      valStatus: "Aktualisht Aktiv",
      btnReadMore: "Lexo Më Shumë",

      // Table Context
      tableSeparator: "Historiku i Projekteve të Implementuara",
      thProject: "Projekti",
      thDonors: "Donatorët",
      thYearBudget: "Viti / Buxheti",
      thPurpose: "Qëllimi",
      footerBadge: "Së bashku ndërtojmë një mjedis gjithëpërfshirës.",

      projects: [
        { 
          id: 1, 
          emri: "Përditësimi dhe ofrimi i modulit të trajnimit për stafin e vlerësimit të aftësisë së kufizuar, mjekët e familjes, mjekët specialistë dhe administratorët socialë mbi zbatimen e reformës së vlerësimit të aftësisë së kufizuar në të gjitha njësitë administrative të Bashkisë Tiranë", 
          donatori: "🌐 Banka Botërore (SAMP)", 
          viti: "Janar 2019 / 63,000 EUR", 
          qellimi: "Trajnimi i stafit multidisiplinar për reformën e vlerësimit të aftësive të kufizuara në Tiranë" 
        },
        { 
          id: 2, 
          emri: "Trajnimi profesional (VET) në shërbimet e çerdheve dhe babysitting (kujdestari fëmijësh)", 
          donatori: "🌐 GIZ ProSEED", 
          viti: "Maj 2018 / 4,050,000 ALL", 
          qellimi: "Trajnimi i stafit të kujdesit dhe rritja e cilësisë së shërbimeve për fëmijët" 
        },
        { 
          id: 3, 
          emri: "Fuqizimi i grave të moshës së tretë përmes identifikimit të barrierave për realizimin e cilësisë së jetës", 
          donatori: "🏛 AMSHC", 
          viti: "2018 / 1,900,000 ALL", 
          qellimi: "Fuqizimi i grave të moshuara dhe identifikimi i barrierave për jetesë cilësore" 
        },
        { 
          id: 4, 
          emri: "Ngritja e kapaciteteve të grupeve multidisiplinare në zonat e tilla rurale të thella në rajonet e Tiranës dhe Durrësit për identifikimin, trajtimin dhe këshillimin e personeva me aftësi të kufizuara (përfshirë të moshuarit)", 
          donatori: "🏛 AMSHC", 
          viti: "2017 / 2,000,000 ALL", 
          qellimi: "Fuqizimi i grupeve multidisiplinare për identifikimin dhe trajtimin e personave me aftësi të kufizuara dhe të moshuarve" 
        },
        { 
          id: 5, 
          emri: "Vullnetarët në asistencë të personave me aftësi të kufizuara dhe të moshuarve", 
          donatori: "🏛 AMSHC", 
          viti: "2016 / 2,195,025 ALL", 
          qellimi: "Aktivizimi i vullnetarëve për të ndihmuar personat me aftësi të kufizuara dhe të moshuarit" 
        },
        { 
          id: 6, 
          emri: "Ngritja e kapaciteteve të kujdestarëve për t'iu përgjigjur në mënyrë efektive fëmijëve që janë viktima të dhunës në familje", 
          donatori: "🇺🇸 Ambasada e SHBA / Grantet e Vogla për Demokraci", 
          viti: "2015 / 18,730 USD", 
          qellimi: "Fuqizimi i kapaciteteve të profesionistëve për trajtimin e fëmijëve viktima të dhunës" 
        },
        { 
          id: 7, 
          emri: "Fuqizimi i kapaciteteve të pushtetit vendor dhe rritja e aksesit të komunitetit Rom", 
          donatori: "🌐 Fondacioni Soros", 
          viti: "2018", 
          qellimi: "Rritja e kapaciteteve të administratës lokale dhe aksesit të komunitetit Rom" 
        },
        { 
          id: 8, 
          emri: "Fuqizimi i grave në planifikim dhe monitorim të politikave lokale", 
          donatori: "🌐 Banka Botërore", 
          viti: "2018", 
          qellimi: "Fuqizimi i grave dhe pjesëmarrja aktive në vendimmarrjen lokale" 
        },
        { 
          id: 9, 
          emri: "Pjesëmarrja e qytetarëve në vendimmarrje", 
          donatori: "🇺🇸 Ambasada e SHBA", 
          viti: "2017", 
          qellimi: "Rritja e pjesëmarrjes qytetare dhe ndikimi në vendimet lokale të bashkisë" 
        },
        { 
          id: 10, 
          emri: "Fuqizimi i grave përmes programit NACSS", 
          donatori: "🇳🇱 Ambasada e Holandës / 🏛 NACSS", 
          viti: "2018", 
          qellimi: "Fuqizimi i grave për pjesëmarrje aktive në politika dhe monitorim programesh" 
        },
        { 
          id: 11, 
          emri: "Të rinjtë kanë të drejtë të informohen", 
          donatori: "🌐 Banka Botërore", 
          viti: "2017", 
          qellimi: "Rritja e aksesit të të rinjve në informacion dhe fuqizimi për pjesëmarrje qytetare" 
        },
        { 
          id: 12, 
          emri: "WARM – Riintegrimi i Emigrantëve, Qendra e Kujdesit Ditor për Fëmijët", 
          donatori: "❤️ Caritas Albania / 🏛 Departamenti i Politikave Ekonomike / 🏛 Bashkia Romë / 🌐 Komisioni Europian", 
          viti: "2016", 
          qellimi: "Riintegrimi social dhe edukativ i fëmijëve të familjeve kthyese dhe migrantëve" 
        },
        { 
          id: 13, 
          emri: "Fuqizimi i të rinjve përmes zhvillimit të komunitetit", 
          donatori: "🏛 NACSS / 🌐 Banka Botërore", 
          viti: "2018", 
          qellimi: "Fuqizimi i të rinjve për pjesëmarrje aktive në zhvillimin e qëndrueshëm të komunitetit" 
        }
      ]
    },
    en: {
      metaSub: "Transparency & Impact",
      metaTitle: "Social Projects",
      metaDesc: "Key projects and institutional programs implemented by M.I.K.E Center throughout the years in support of the community.",
      
      // Featured Project Card
      featuredBadge: "Featured Project",
      featuredTitle: "M.I.K.E in my neighborhood",
      featuredDesc: "This is our core community outreach program, designed to bring care, education, and psycho-social support services directly to your doorsteps. Through this initiative, M.I.K.E Center establishes highly accessible support hubs for vulnerable families, children, and the elderly, delivering personalized assistance while weaving a resilient net of local solidarity across every administrative unit.",
      lblOrg: "Organization",
      valOrg: "M.I.K.E Center (Social Enterprise)",
      lblFocus: "Focus",
      valFocus: "Local Outreach & Daycare Services",
      lblStatus: "Status",
      valStatus: "Currently Active",
      btnReadMore: "Read More",

      // Table Context
      tableSeparator: "Historical List of Implemented Projects",
      thProject: "Project Description",
      thDonors: "Donors",
      thYearBudget: "Year / Budget",
      thPurpose: "Objective",
      footerBadge: "Together we build an inclusive environment.",

      projects: [
        { 
          id: 1, 
          emri: "Updating and delivering the training module for disability assessment staff, family doctors, specialist physicians, and social administrators on implementing the disability assessment reform across all administrative units of Tirana Municipality", 
          donatori: "🌐 World Bank (SAMP)", 
          viti: "January 2019 / 63,000 EUR", 
          qellimi: "Training multidisciplinary staff for the disability assessment reform in Tirana" 
        },
        { 
          id: 2, 
          emri: "Vocational Education and Training (VET) in nursery and babysitting services", 
          donatori: "🌐 GIZ ProSEED", 
          viti: "May 2018 / 4,050,000 ALL", 
          qellimi: "Training childcare professionals and enhancing quality standards for children's services" 
        },
        { 
          id: 3, 
          emri: "Empowering elderly women by identifying structural barriers to achieving an optimal quality of life", 
          donatori: "🏛 AMSHC", 
          viti: "2018 / 1,900,000 ALL", 
          qellimi: "Empowering senior women and identifying barriers to quality living conditions" 
        },
        { 
          id: 4, 
          emri: "Capacity building for multidisciplinary groups in remote rural areas within Tirana and Durrës regions for identifying, supporting, and counseling persons with disabilities (including the elderly)", 
          donatori: "🏛 AMSHC", 
          viti: "2017 / 2,000,000 ALL", 
          qellimi: "Strengthening multidisciplinary teams to detect and care for persons with disabilities and senior citizens" 
        },
        { 
          id: 5, 
          emri: "Volunteers in assistance to persons with disabilities and the elderly", 
          donatori: "🏛 AMSHC", 
          viti: "2016 / 2,195,025 ALL", 
          qellimi: "Activating local volunteer networks to support disabled individuals and elderly community members" 
        },
        { 
          id: 6, 
          emri: "Capacity building for caregivers to respond effectively to children who are victims of domestic violence", 
          donatori: "🇺🇸 US Embassy / Democracy Small Grants Program", 
          viti: "2015 / 18,730 USD", 
          qellimi: "Empowering care professionals with specific skills to support child victims of abuse" 
        },
        { 
          id: 7, 
          emri: "Capacity building of local government and increasing integration access for the Roma community", 
          donatori: "🌐 Soros Foundation", 
          viti: "2018", 
          qellimi: "Enhancing local administrative frameworks and improving public service access for Roma citizens" 
        },
        { 
          id: 8, 
          emri: "Empowering women in the planning and monitoring of local policies", 
          donatori: "🌐 World Bank", 
          viti: "2018", 
          qellimi: "Fostering women's leadership and strategic civic participation in municipal decision-making" 
        },
        { 
          id: 9, 
          emri: "Citizen participation in local governance decision-making", 
          donatori: "🇺🇸 US Embassy", 
          viti: "2017", 
          qellimi: "Elevating grassroots public engagement and democratic influence over local municipal choices" 
        },
        { 
          id: 10, 
          emri: "Empowering women through the NACSS framework program", 
          donatori: "🇳🇱 Embassy of the Netherlands / 🏛 NACSS", 
          viti: "2018", 
          qellimi: "Empowering women to actively co-design policies and systematically evaluate social programs" 
        },
        { 
          id: 11, 
          emri: "Youth have the right to be informed", 
          donatori: "🌐 World Bank", 
          viti: "2017", 
          qellimi: "Improving access to strategic information for youth and preparing them for impactful civil service" 
        },
        { 
          id: 12, 
          emri: "WARM – Reintegration of Migrants, Day Care Center for Children", 
          donatori: "❤️ Caritas Albania / 🏛 Department of Economic Policies / 🏛 Municipality of Rome / 🌐 European Commission", 
          viti: "2016", 
          qellimi: "Facilitating structured educational and social integration for children of returning families and migrants" 
        },
        { 
          id: 13, 
          emri: "Empowering youth through strategic community development", 
          donatori: "🏛 NACSS / 🌐 World Bank", 
          viti: "2018", 
          qellimi: "Mobilizing youth groups for active, long-term stewardship in sustainable community progression" 
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex p-3 bg-purple-50 text-mikePurple rounded-full mb-3">
            <Lightbulb size={24} />
          </div>
          <span className="block text-mikePurple font-bold uppercase tracking-widest text-xs">{t.metaSub}</span>
          <h1 className="text-4xl md:text-5xl font-black text-mikeDark mt-2 italic uppercase">
            {t.metaTitle}
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            {t.metaDesc}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        
        {/* ================= PROJEKTI KRYESOR (FEATURED CARD) ================= */}
        <div className="mb-16 bg-gradient-to-br from-mikeDark to-purple-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-mikePurple/20 rounded-full blur-3xl group-hover:bg-mikePurple/30 transition-all duration-700" />
          
          <div className="relative z-10 max-w-4xl">
            {/* Badge i projektit kryesor */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-mikePurple text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 animate-pulse">
              <Star size={12} fill="white" />
              {t.featuredBadge}
            </div>

            {/* Titulli */}
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tight mb-4 text-white">
              {t.featuredTitle}
            </h2>

            {/* Përshkrimi */}
            <p className="text-purple-100/90 text-sm md:text-base leading-relaxed mb-8 text-justify">
              {t.featuredDesc}
            </p>

            {/* Info Mini-Grid me butonin e ri Read More */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-grow">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-purple-300 font-bold">{t.lblOrg}</span>
                  <span className="text-sm font-bold text-white">{t.valOrg}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-purple-300 font-bold">{t.lblFocus}</span>
                  <span className="text-sm font-bold text-white">{t.valFocus}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-purple-300 font-bold">{t.lblStatus}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    {t.valStatus}
                  </span>
                </div>
              </div>

              {/* Butoni elegant që hap modalin duke ndjekur gjuhën */}
              <div className="shrink-0 pt-2 sm:pt-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-mikePurple text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider hover:bg-white hover:text-mikeDark transition-all shadow-lg group"
                >
                  {t.btnReadMore}
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* =================================================================== */}

        {/* Separatori i Listës */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-grow" />
          <span className="px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-[0.15em] whitespace-nowrap">
            {t.tableSeparator}
          </span>
          <div className="h-px bg-gray-200 flex-grow" />
        </div>

        {/* Tabela e Projekteve */}
        <div className="overflow-x-auto rounded-[2rem] shadow-md border border-gray-100 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-mikeDark text-white">
                <th className="p-6 font-bold uppercase text-xs tracking-wider whitespace-nowrap">{t.thProject}</th>
                <th className="p-6 font-bold uppercase text-xs tracking-wider whitespace-nowrap">{t.thDonors}</th>
                <th className="p-6 font-bold uppercase text-xs tracking-wider whitespace-nowrap">{t.thYearBudget}</th>
                <th className="p-6 font-bold uppercase text-xs tracking-wider whitespace-nowrap">{t.thPurpose}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {t.projects.map((project) => (
                <tr key={project.id} className="hover:bg-purple-50/30 transition-colors">
                  <td className="p-6 text-sm font-bold text-mikeDark leading-tight max-w-sm">{project.emri}</td>
                  <td className="p-6 text-sm text-gray-600 min-w-[150px]">{project.donatori}</td>
                  <td className="p-6 text-sm font-bold text-mikePurple italic whitespace-nowrap">{project.viti}</td>
                  <td className="p-6 text-sm text-gray-500 italic leading-relaxed min-w-[200px]">{project.qellimi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
            <Layers size={14} />
            {t.footerBadge}
          </div>
        </div>
      </section>

{/* RENDERI I MODALIT TË RI */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language} 
        images={imageUrls} // Kalojmë fotot e gjetura këtu
      />

      <Footer />
    </main>
  );
};

export default ProjectsPage;