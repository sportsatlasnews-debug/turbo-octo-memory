"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutMission() {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "Rreth nesh",
      title: "Misioni dhe Vizioni Ynë",
      p1: (
        <p>
          <span className="text-mikeDark font-black">Qendra M.I.K.E</span> – Mbështetje, Informacion, Kujdes, Edukim – është një organizatë jofitimprurëse e communism në vitin 2007 dhe e regjistruar në Gjykatën e Rrethit Gjyqësor Tiranë. Ajo ofron shërbime në mbështetje të fëmijëve, të rinjve, grave, të moshuarve dhe grupeve në nevojë. Misioni i saj është të kontribuojë në edukimin, mirëqenien dhe përfshirjen sociale përmes kujdesit dhe mbështetjes së vazhdueshme.
        </p>
      ),
      p2: "Qendra punon për fuqizimin personal, social dhe ekonomik të individëve dhe familjeve. Fokus i veçantë i kushtohet grupeve të margjinalizuara dhe të cenueshme në shoqëri. Aktivitetet përfshijnë shërbime ditore, edukim, informim dhe trajnime. M.I.K.E synon të krijojë mundësi të barabarta dhe të përmirësojë cilësinë e jetës në komunitet.",
      p3: "Nëpërmjet programeve të saj, ajo ndërton një mjedis gjithëpërfshirës dhe mbështetës. Qendra vepron në përputhje me legjislacionin shqiptar dhe vlerat e saj institucionale. Që prej vitit 2024, Qendrës M.I.K.E i është njohur statusi i ndërmarrjes sociale, duke forcuar më tej rolin e saj në zhvillimin dhe mbështetjen e komunitetit."
    },
    en: {
      sub: "About us",
      title: "Our Mission and Vision",
      p1: (
        <p>
          <span className="text-mikeDark font-black">M.I.K.E Center</span> – Support, Information, Care, Education – is a non-profit organization founded in 2007 and registered in the Tirana Judicial District Court. It provides services supporting children, youth, women, the elderly, and groups in need. Its mission is to contribute to education, social well-being, and inclusion through continuous care and support.
        </p>
      ),
      p2: "The center works towards the personal, social, and economic empowerment of individuals and families. Special focus is dedicated to marginalized and vulnerable groups in society. Activities include daily care services, education, advocacy, and professional training. M.I.K.E aims to create equal opportunities and improve the overall quality of life in the community.",
      p3: "Through its various programs, it builds an inclusive and supportive environment. The center operates in full compliance with Albanian legislation and its institutional core values. Since 2024, M.I.K.E Center has been officially recognized as a social enterprise, further strengthening its vital role in community development and support."
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 px-10 bg-white" id="rreth-nesh">
      <div className="max-w-12xl mx-auto">
        <div className="bg-gray-50 rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="flex flex-col gap-8">
              
              {/* Titulli dhe Badge */}
              <div>
                <p className="text-mikePurple font-black uppercase tracking-[0.2em] text-xs mb-3">
                  {t.sub}
                </p>
                <h2 className="text-4xl font-black text-mikeDark leading-tight italic uppercase">
                  {t.title}
                </h2>
                <div className="w-20 h-1.5 bg-mikePurple mt-6 rounded-full" />
              </div>

              {/* Teksti i Plote */}
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                {t.p1}
                <p>{t.p2}</p>
                <p>{t.p3}</p>
              </div>

              {/* Dekori ne fund per te mbajtur stilin e M.I.K.E */}
              <div className="flex gap-4 pt-6">
                <div className="h-2 w-2 rounded-full bg-mikePurple" />
                <div className="h-2 w-2 rounded-full bg-mikeDark" />
                <div className="h-2 w-2 rounded-full bg-mikePurple/30" />
              </div>

            </div>
          </div>

          {/* Element dekorativ ne sfond qe nuk pengon tekstin */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mikePurple/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}