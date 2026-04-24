import React from "react";

const DirectorSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Imazhi i Ambientit */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&q=80&w=800" 
                alt="M.I.K.E Center Interior" 
                className="rounded-br-[100px] rounded-tl-[100px] shadow-2xl w-full h-[450px] object-cover"
              />
              {/* Dekorim i purpurt prapa imazhit */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-mikePurple/20 rounded-br-[100px] rounded-tl-[100px] -z-10" />
            </div>
          </div>

          {/* Përmbajtja Tekstuale */}
          <div className="w-full lg:w-1/2">
            <span className="text-mikePurple font-bold uppercase tracking-widest text-sm mb-4 block">
              RRETH NESH
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black text-mikeDark leading-tight mb-8">
              Të specializuar për kujdesin ndaj fëmijëve
            </h2>

            <div className="border-l-4 border-mikePurple pl-6 mb-8">
              <p className="text-lg text-gray-600 italic leading-relaxed">
                "Si nënë e dy fëmijëve unë e kuptoj rëndësinë e përzgjedhjes së një ambienti për fëmijët, 
                ambient i cili do të mbrojë dhe edukojë fëmijën tuaj."
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Unë quhem <b>Daklea Shtylla (Xinxo)</b>. Jam themeluese dhe drejtore ekzekutive e Qendrës M.I.K.E. 
                Eksperienca ime 27-vjeçare në fushën e menaxhimit të shërbimeve sociale dhe përkushtimi për t’ju 
                shërbyer me devotshmëri atyre që kanë nevojë është pashaporta ime.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-black text-mikeDark">Daklea Shtylla (Xinxo)</h4>
              <p className="text-mikePurple font-medium">Themeluese & Drejtore Ekzekutive </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DirectorSection;