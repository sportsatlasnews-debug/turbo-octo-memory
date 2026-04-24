const services = [
  { 
    title: "Kopsht për Fëmijët", 
    desc: "Programe të strukturuara për fëmijë 6 muaj deri 6 vjeç.", 
    icon: "🌱", 
    link: "/sherbimet/kopshti" 
  },
  { 
    title: "Kujdestari për Moshën e Tretë", 
    desc: "Kujdes profesional dhe me zemër për të moshuarit.", 
    icon: "🤍", 
    link: "https://existing-client-site.com/elderly", // Your external redirect
    isExternal: true 
  },
  { 
    title: "Babysitter", 
    desc: "Kujdes profesional ndaj fëmijëve në shtëpinë tuaj.", 
    icon: "👶", 
    link: "/sherbimet/babysitter" 
  },
  { 
    title: "Pastrim Shtëpie", 
    desc: "Shtëpia juaj e pastër, ju të lirë për familjen.", 
    icon: "🏠", 
    link: "/sherbimet/pastrim" 
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-mikePurple font-semibold uppercase tracking-wider">Shërbimet Tona</p>
        <h2 className="text-4xl font-bold text-mikeDark mt-2">Shtrihemi në 4 shërbime</h2>
        <p className="text-gray-500 mt-4">Ofruar me eksperiencë 27-vjeçare dhe përkushtim të plotë</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <a 
            key={i} 
            href={s.link}
            target={s.isExternal ? "_blank" : "_self"}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition group border border-gray-100"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-mikeYellow/20 transition">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-mikeDark mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}