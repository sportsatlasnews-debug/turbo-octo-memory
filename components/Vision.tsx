export default function Vision() {
  const highlights = [
    { text: "Programe të miratuara", color: "bg-mikePurple" },
    { text: "Mësuesë me arsim të lartë", color: "bg-mikeGreen" },
    { text: "Klasa të vogla", color: "bg-mikeYellow" },
    { text: "Gjuhë e huaj (Anglisht)", color: "bg-orange-400" },
  ];

  return (
    <section className="py-20 px-10 grid md:grid-cols-2 gap-12 items-center bg-white">
      <div>
        <p className="text-mikePurple font-bold uppercase tracking-widest mb-2">Vizioni Ynë</p>
        <h2 className="text-4xl font-bold text-mikeDark mb-6 leading-tight">
          Edukim me dashuri, kujdes me përkushtim
        </h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Filozofia jonë është të krijojmë një mjedis ku në fokus është fëmija i cili duhet të 
          edukohet dhe të ketë një zhvillim intelektual, social, emocional dhe fizik.
        </p>
        
        <ul className="space-y-4">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 text-lg font-medium text-mikeDark">
              <span className={`w-4 h-4 rounded-full ${item.color}`} />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <img 
          src="https://images.pexels.com/photos/3661452/pexels-photo-3661452.jpeg" 
          alt="Kids playing" 
          className="rounded-3xl shadow-xl w-full object-cover h-[500px]" 
        />
        {/* Floating badge to match Image_05152b */}
        <div className="absolute -bottom-6 -left-6 bg-mikePurple text-white p-8 rounded-2xl shadow-lg hidden lg:block">
          <p className="text-3xl font-bold">27+</p>
          <p className="text-sm">Vite Eksperiencë</p>
        </div>
      </div>
    </section>
  );
}