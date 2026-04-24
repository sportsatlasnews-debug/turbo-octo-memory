import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Rreth Nesh", href: "/rreth-nesh" },
    { name: "Galeria", href: "/galeria" },
    { name: "Programet", href: "#" },
    { name: "Shërbimet", href: "#" },
    // { name: "Fletë Pune", href: "#" }
  ];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-mikeDark">
              Qendra <span className="text-mikePurple">M.I.K.E</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Një mjedis i ngrohtë, edukues dhe i sigurt për fëmijët që nga viti 2009. Prioriteti ynë është mirëqenia dhe zhvillimi i çdo fëmije.
            </p>
           {/* Social Links */}
            <div className="flex gap-4">
            {/* Facebook */}
            <a 
                href="#" 
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-mikePurple hover:bg-mikePurple hover:text-white transition-all shadow-sm"
                aria-label="Facebook"
            >
                <svg 
                width="20" 
                height="20" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                >
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.441.117 2.841.172v3.34h-2.235c-1.233 0-1.47.584-1.47 1.47v2.576h3.714l-.503 3.667h-3.211v7.98H9.101z"/>
                </svg>
            </a>

            {/* Instagram */}
            <a 
                href="#" 
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-mikePurple hover:bg-mikePurple hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
            >
                <svg 
                width="20" 
                height="20" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-black text-mikeDark mb-6 uppercase tracking-wider text-sm">Navigimi</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-mikePurple flex items-center gap-2 group transition-colors">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-black text-mikeDark mb-6 uppercase tracking-wider text-sm">Na Kontaktoni</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-mikePurple shrink-0" size={20} />
                <span className="text-gray-500 text-sm">Rr. Gramoz Pashko, Tiranë</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-mikePurple shrink-0" size={20} />
                <div className="text-gray-500 text-sm leading-tight">
                  <p>+355 69 20 47 006</p>
                  <p>+355 69 88 62 444</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-mikePurple shrink-0" size={20} />
                <span className="text-gray-500 text-sm">info@mikecenter.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA Column */}
          <div>
            <div className="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100">
              <h4 className="text-mikePurple font-black mb-4">Vizitoni Qendrën</h4>
              <p className="text-xs text-purple-800 leading-relaxed mb-6">
                Orari: E hënë – E premte <br />
                07:30 – 17:00
              </p>
              <button className="w-full py-3 bg-mikePurple text-white rounded-2xl text-xs font-bold hover:bg-mikeDark transition-all shadow-lg shadow-purple-100">
                REZERVO TAKIM
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <p>© {currentYear} Qendra M.I.K.E. Të gjitha të drejtat të rezervuara.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-mikePurple">Politika e Privatësisë</a>
            <a href="#" className="hover:text-mikePurple">Termat e Përdorimit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;