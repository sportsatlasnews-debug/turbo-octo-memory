"use client";
import React from 'react';

export default function AboutMission() {
  return (
    <section className="py-20 px-10 bg-white" id="rreth-nesh">
      <div className="max-w-12xl mx-auto">
        <div className="bg-gray-50 rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="flex flex-col gap-8">
              
              {/* Titulli dhe Badge */}
              <div>
                <p className="text-mikePurple font-black uppercase tracking-[0.2em] text-xs mb-3">Rreth nesh</p>
                <h2 className="text-4xl font-black text-mikeDark leading-tight italic uppercase">
                  Misioni dhe Vizioni Ynë
                </h2>
                <div className="w-20 h-1.5 bg-mikePurple mt-6 rounded-full" />
              </div>

              {/* Teksti i Plote i Klientit */}
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="text-mikeDark font-black">Qendra M.I.K.E</span> – Mbështetje, Informacion, Kujdes, Edukim – është një organizatë jofitimprurëse e themeluar në vitin 2007 dhe e regjistruar në Gjykatën e Rrethit Gjyqësor Tiranë. Ajo ofron shërbime në mbështetje të fëmijëve, të rinjve, grave, të moshuarve dhe grupeve në nevojë. Misioni i saj është të kontribuojë në edukimin, mirëqenien dhe përfshirjen sociale përmes kujdesit dhe mbështetjes së vazhdueshme.
                </p>
                
                <p>
                  Qendra punon për fuqizimin personal, social dhe ekonomik të individëve dhe familjeve. Fokus i veçantë i kushtohet grupeve të margjinalizuara dhe të cenueshme në shoqëri. Aktivitetet përfshijnë shërbime ditore, edukim, informim dhe trajnime. M.I.K.E synon të krijojë mundësi të barabarta dhe të përmirësojë cilësinë e jetës në komunitet.
                </p>

                <p>
                  Nëpërmjet programeve të saj, ajo ndërton një mjedis gjithëpërfshirës dhe mbështetës. Qendra vepron në përputhje me legjislacionin shqiptar dhe vlerat e saj institucionale. Që prej vitit 2024, Qendrës M.I.K.E i është njohur statusi i ndërmarrjes sociale, duke forcuar më tej rolin e saj në zhvillimin dhe mbështetjen e komunitetit.
                </p>
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