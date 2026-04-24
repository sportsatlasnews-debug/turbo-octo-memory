import React from 'react';
import { Download, Palette, BookText, Brain, Calculator } from 'lucide-react';

const WorksheetDownloads = () => {
  const materials = [
    {
      title: "Zhvillim Artistik",
      description: "Fletë pune për ngjyrosje, vizatim dhe projekte kreative.",
      icon: <Palette className="text-pink-500" size={28} />,
      color: "bg-pink-50",
      link: "https://drive.google.com/drive/folders/1oPSOPucYgIpnRYfIE1vQfQ8O86h5rPJI?usp=drive_link" 
    },
    {
      title: "Zhvillim Gjuhësor",
      description: "Ushtrime për alfabetin, leximin fillestar dhe pasurimin e fjalorit.",
      icon: <BookText className="text-blue-500" size={28} />,
      color: "bg-blue-50",
      link: "https://drive.google.com/drive/folders/107nurGoyePX7ARuEuZ9V5xAFmEjORnZ8?usp=drive_link"
    },
    {
      title: "Zhvillim Intelektual",
      description: "Lojëra logjike, puzzle dhe ushtrime për vëmendjen.",
      icon: <Brain className="text-purple-500" size={28} />,
      color: "bg-purple-50",
      link: "https://drive.google.com/drive/folders/1_qjhtKNz8SRhXsVBYt72c0NeMU4hpGe_?usp=drive_link"
    },
    {
      title: "Zhvillim Matematikor",
      description: "Njohja e numrave, formave gjeometrike dhe mbledhjet e para.",
      icon: <Calculator className="text-orange-500" size={28} />,
      color: "bg-orange-50",
      link: "https://drive.google.com/drive/folders/1NjYteoIh1DfChS3YV5C9Z4ZcM86oQp_C?usp=drive_link"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">Burime Edukative</span>
            <h2 className="text-3xl md:text-4xl font-black text-mikeDark mt-2">Mësoni dhe luani në shtëpi</h2>
            <p className="text-gray-500 mt-4 font-medium">
              Shkarkoni materialet tona të përgatitura nga mësueset e Qendrës M.I.K.E për të mbështetur zhvillimin e fëmijës tuaj.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="w-24 h-24 bg-mikePurple/5 rounded-full flex items-center justify-center animate-bounce">
                <Download className="text-mikePurple" size={32} />
             </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-mikePurple/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-mikeDark mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <a 
                href={item.link}
                className="inline-flex items-center justify-between w-full p-4 bg-gray-50 text-mikeDark font-bold rounded-2xl group-hover:bg-mikePurple group-hover:text-white transition-all"
              >
                Shkarko
                <Download size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-purple-50 rounded-[2rem] border border-purple-100 flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <span className="text-mikePurple font-bold">!</span>
            </div>
            <p className="text-sm text-purple-800 font-medium">
                Materialet janë falas për të gjithë prindërit e komunitetit tonë. Printojini dhe filloni argëtimin!
            </p>
        </div>

      </div>
    </section>
  );
};

export default WorksheetDownloads;