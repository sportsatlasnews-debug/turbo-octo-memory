"use client";
export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/30829296/pexels-photo-30829296.jpeg')" }} // Ensure you have this image in /public
      >
        <div className="absolute inset-0 bg-white/40" /> {/* Light overlay for text readability */}
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-mikePurple font-bold tracking-widest mb-4 uppercase">Qendra M.I.K.E.</p>
        <h1 className="text-5xl md:text-6xl font-bold text-mikeDark leading-tight mb-6">
          Mirësevini në një botë <br /> 
          të ngrohtë, <span className="text-mikePurple">të sigurt</span> <br />
          dhe plot dashuri
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Eksperiencë 27-vjeçare në kujdesin dhe edukimin e fëmijëve. Mbështetje, Informacion, Kujdes, Edukim, Përkushtim.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const el = document.getElementById("programiSipasMoshes");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-mikePurple text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition"
          >
            Zbulo Programet
          </button>
          <button className="border-2 border-mikeDark text-mikeDark px-8 py-4 rounded-full font-bold text-lg hover:bg-mikeDark hover:text-white transition">
            Na Kontaktoni
          </button>
        </div>
      </div>
    </section>
  );
}