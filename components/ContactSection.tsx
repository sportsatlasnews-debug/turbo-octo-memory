"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();

  const translations = {
    sq: {
      sub: "NA KONTAKTONI",
      title: "Jemi këtu për ju",
      desc: "Na shkruani për çdo pyetje rreth regjistrimeve ose shërbimeve tona.",
      infoTitle: "Informacioni",
      addressLabel: "Adresa",
      addressVal: "Rr. Gramoz Pashko, Tiranë",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      labelName: "Emri Juaj",
      placeholderName: "Jane Doe",
      labelEmail: "Email",
      placeholderEmail: "shembull@email.com",
      labelMessage: "Mesazhi",
      placeholderMessage: "Si mund t'ju ndihmojmë?",
      btnText: "DËRGO MESAZHIN"
    },
    en: {
      sub: "CONTACT US",
      title: "We are here for you",
      desc: "Reach out to us with any questions regarding enrollments or our services.",
      infoTitle: "Information",
      addressLabel: "Address",
      addressVal: "Gramoz Pashko St., Tirana",
      phoneLabel: "Phone",
      emailLabel: "Email",
      labelName: "Your Name",
      placeholderName: "Jane Doe",
      labelEmail: "Email",
      placeholderEmail: "example@email.com",
      labelMessage: "Message",
      placeholderMessage: "How can we help you?",
      btnText: "SEND MESSAGE"
    }
  };

  const t = translations[language];

  return (
    <section className="py-20 bg-gray-50" id='contactSection'>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">{t.sub}</span>
          <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-2">{t.title}</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Informacioni i Kontaktit (E majta) */}
            <div className="lg:w-1/3 bg-mikePurple p-10 md:p-16 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">{t.infoTitle}</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 uppercase font-bold tracking-wider">{t.addressLabel}</p>
                      <p className="font-medium">{t.addressVal}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 uppercase font-bold tracking-wider">{t.phoneLabel}</p>
                      <p className="font-medium">+355 69 20 47 006</p>
                      <p className="font-medium">+355 69 88 62 444</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm opacity-70 uppercase font-bold tracking-wider">{t.emailLabel}</p>
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
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-mikeDark uppercase tracking-wide">{t.labelName}</label>
                    <input 
                      type="text" 
                      placeholder={t.placeholderName}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-mikePurple transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-mikeDark uppercase tracking-wide">{t.labelEmail}</label>
                    <input 
                      type="email" 
                      placeholder={t.placeholderEmail}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-mikePurple transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-mikeDark uppercase tracking-wide">{t.labelMessage}</label>
                    <textarea 
                      rows={4}
                      placeholder={t.placeholderMessage}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-mikePurple transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-5 bg-mikePurple text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-mikeDark transition-all shadow-lg shadow-purple-200">
                    {t.btnText} <Send size={18} />
                  </button>
                </form>

                {/* Map */}
                <div className="h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-gray-100 bg-gray-50 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.5943835616963!2d19.8334006!3d41.3176868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350311ed4ef650b%3A0x22aab99593f11771!2sMIKE%20Center!5e0!3m2!1sen!2s!4v1776939643374!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
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