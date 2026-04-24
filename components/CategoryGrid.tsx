// components/CategoryGrid.tsx
const categories = [
  { 
    title: "Qendra M.I.K.E – Kopsht / Çerdhe", 
    desc: "Programi edukativ, grupmoshat dhe aktivitetet tona.", 
    icon: "🏫", 
    link: "/kopshti" 
  },
  { 
    title: "Shtëpia e Zotërinjve", 
    desc: "Kujdesi profesional dhe me zemër për të moshuarit.", 
    icon: "🏡", 
    link: "https://existing-client-site.com/elderly", // External redirect as requested
    isExternal: true 
  },
  { 
    title: "Kurset Profesionale", 
    desc: "Trajnime dhe materiale për zhvillim profesional.", 
    icon: "📚", 
    link: "/kurset" 
  },
  { 
    title: "Projektet e zhvilluara", 
    desc: "Historia dhe ndikimi i projekteve të M.I.K.E.", 
    icon: "📊", 
    link: "/projektet" 
  },
  { 
    title: "Bashkohu me ekipin tonë", 
    desc: "Apliko si babysitter, kujdestar ose vullnetar.", 
    icon: "🤝", 
    link: "/bashkohu" 
  },
  { 
    title: "Kërkoj punonjës", 
    desc: "Gjeni stafin e duhur (infermier, logoped, etj.) për familjen tuaj.", 
    icon: "🔍", 
    link: "/kerko-staf" 
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, idx) => (
            <a 
              key={idx}
              href={item.link}
              target={item.isExternal ? "_blank" : "_self"}
              className="flex flex-col p-8 rounded-3xl border-2 border-gray-50 hover:border-mikePurple/20 hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-mikePurple/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-mikeDark mb-3 group-hover:text-mikePurple transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-6 flex items-center text-mikePurple font-bold text-sm">
                Zbulo më shumë 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}