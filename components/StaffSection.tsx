import React from 'react';

const StaffSection = () => {
  const staff = [
    {
      name: "Blerta Caka",
      position: "Edukatore",
      image: "/images/staff/Blerta Caka.jpg" // Zëvendëso me path-in real
    },
    {
      name: "Enkelejda Shehaj",
      position: "Edukatore",
      image: "/images/staff/Enkelejda Shehaj.jpg"
    },
    {
      name: "Ervehe Musabelliu",
      position: "Edukatore",
      image: "/images/staff/Ervehe Musabelliu.jpg"
    },
    {
      name: "Etleva Myrteza",
      position: "Edukatore",
      image: "/images/staff/Etleva Myrteza.jpg"
    },
    {
      name: "Migena Haznedari",
      position: "Edukatore",
      image: "/images/staff/Migena Haznedari.jpg"
    },
    {
      name: "Rudina Lala",
      position: "Edukatore",
      image: "/images/staff/Rudina Lala.jpg"
    },
    {
      name: "Shqiponja Braka",
      position: "Edukatore",
      image: "/images/staff/Shqiponja Braka.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">EKIPTI YNË</span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2">Mësueset tona të përkushtuara</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Një grup profesional mësuesish dhe edukatorësh që punojnë me dashuri për rritjen dhe edukimin e fëmijës tuaj.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <div 
              key={index} 
              className={`group relative `} // Centron mësuesen e fundit në desktop
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-[4/5] shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* Image Placeholder */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-mikeDark/90 via-mikeDark/40 to-transparent pt-20">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-mikePurple font-medium text-sm uppercase tracking-wider">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professionalism Badge */}
        <div className="mt-20 flex justify-center">
            <div className="bg-purple-50 px-8 py-4 rounded-full border border-purple-100 flex items-center gap-3">
                <div className="w-2 h-2 bg-mikePurple rounded-full animate-ping" />
                <p className="text-mikePurple font-bold text-sm">Të gjitha mësueset tona janë të certifikuara dhe me arsim të lartë.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default StaffSection;