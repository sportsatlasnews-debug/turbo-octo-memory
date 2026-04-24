import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50" id='contactSection'>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">NA KONTAKTONI</span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2">Jemi këtu për ju</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Na shkruani për çdo pyetje rreth regjistrimeve ose shërbimeve tona.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Informacioni i Kontaktit (E majta) */}
            <div className="lg:w-1/3 bg-mikePurple p-10 md:p-16 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Informacioni</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 uppercase font-bold tracking-wider">Adresa</p>
                      <p className="font-medium">Rr. Gramoz Pashko, Tiranë</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 uppercase font-bold tracking-wider">Telefon</p>
                      <p className="font-medium">+355 69 20 47 006</p>
                      <p className="font-medium">+355 69 88 62 444</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 uppercase font-bold tracking-wider">Email</p>
                      <p className="font-medium">info@mikecenter.org</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Element Dekorativ */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Formulari dhe Harta (E djathta) */}
            <div className="lg:w-2/3 p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* Form */}
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-mikeDark uppercase tracking-wide">Emri Juaj</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-mikePurple transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-mikeDark uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      placeholder="shembull@email.com"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-mikePurple transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-mikeDark uppercase tracking-wide">Mesazhi</label>
                    <textarea 
                      rows={4}
                      placeholder="Si mund t'ju ndihmojmë?"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-mikePurple transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-5 bg-mikePurple text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-mikeDark transition-all shadow-lg shadow-purple-200">
                    DËRGO MESAZHIN <Send size={18} />
                  </button>
                </form>

                {/* Map Placeholder */}
                <div className="h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-gray-100 bg-gray-50 relative">
                  {/* <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x135031023a4f6645:0x9330922880c98f82!2zUnJ1Z2EgR3JhbW96IFBhc2hrbywgVGlyYW7DqywgQWxiYW5pYQ!5m2!1sen!2s" 
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.5943835616963!2d19.8334006!3d41.3176868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311ed4ef650b%3A0x22aab99593f11771!2sMIKE%20Center!5e0!3m2!1sen!2s!4v1776939643374!5m2!1sen!2s" width="600" height="450"  allowFullScreen={true}  loading="lazy"></iframe>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;