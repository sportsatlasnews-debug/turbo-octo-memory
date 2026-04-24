import React from 'react';
import { Sprout, Heart, Baby, Home } from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      title: "Kopsht për Fëmijët",
      subtitle: "Programe të strukturuara për fëmijë 6 muaj deri 6 vjeç. Mjedis i sigurt, stimulues dhe i dashur.",
      icon: <Sprout className="text-green-500" size={24} />,
      image: "https://i.ibb.co/bg65SNnC/0I5A2412.jpg",
      bgColor: "bg-green-50"
    },
    {
      title: "Kujdestari për Moshën e Tretë",
      subtitle: "Kujdes profesional dhe me zemër për të moshuarit. Shoqëri, aktivitete dhe ndihmë e përditshme.",
      icon: <Heart className="text-purple-400" size={24} />,
      image: "https://images.pexels.com/photos/18509794/pexels-photo-18509794.jpeg",
      bgColor: "bg-purple-50"
    },
    {
      title: "Babysitter",
      subtitle: "Kujdes profesional ndaj fëmijëve në shtëpinë tuaj. Staf i trajnuar dhe i besueshëm.",
      icon: <Baby className="text-yellow-500" size={24} />,
      image: "https://images.pexels.com/photos/8612914/pexels-photo-8612914.jpeg",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Pastrim Shtëpie",
      subtitle: "Shërbim pastrimi profesional. Shtëpia juaj e pastër, ju të lirë për familjen.",
      icon: <Home className="text-orange-400" size={24} />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">Shërbimet Tona</span>
          <h2 className="text-3xl md:text-4xl font-black text-mikeDark mt-2 mb-4">Shtrihemi në 4 shërbime</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofruar me eksperiencë dhe përkushtim të plotë për komunitetin tonë.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="p-4">
                <div className="overflow-hidden rounded-2xl h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 pt-0">
                <div className={`w-12 h-12 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-black text-mikeDark mb-3 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;