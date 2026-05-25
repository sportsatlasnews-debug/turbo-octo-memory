"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, CheckCircle, GraduationCap, X, ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CoursesPage() {
  const { language } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [showContact, setShowContact] = useState(false);

  const translations = {
    sq: {
      backBtn: "Kthehu te M.I.K.E",
      navTitle: "KURSET PROFESIONALE",
      heroSub: "Kualifikim Profesional",
      heroTitle: "Kualifikim Profesional",
      heroDesc: "Zgjidhni një nga kurset tona dhe filloni karrierën tuaj të re med mbështetjen e Qendrës M.I.K.E.",
      btnDetails: "Detalet e Kursit",
      modalIncludes: "Çfarë përfshihet:",
      modalPractice: "Mundësitë e praktikës:",
      btnRegister: "Regjistrohu Tani",
      contactTitle: "Na Kontaktoni",
      contactSub: "Për regjistrime dhe pagesa",
      contactPhone: "Telefon",
      contactEmail: "Email",
      contactAddress: "Adresa",
      contactAddressVal: "Tiranë, Shqipëri",
      btnClose: "Mbyll",
      courses: [
        {
          id: "moshart",
          title: "Kujdestari për Moshën e Tretë",
          duration: "8 Javë",
          description: "Trajnim profesional për kujdesin shëndetësor dhe social ndaj të moshuarve, duke u fokusuar te empatia dhe asistenca mjekësore bazë.",
          includes: ["Etika e komunikimit", "Ndihma e shpejtë", "Praktikë te Shtëpia e Zotërinjve"],
          practice: "Mundësi punësimi ose praktikë 1-mujore për rezultatet e larta."
        },
        {
          id: "babysitter",
          title: "Babysitter",
          duration: "4 Javë",
          description: "Gjithçka që ju duhet për t'u kujdesur për fëmijët: nga siguria shtëpiake te zhvillimi i hershëm dhe argëtimi edukativ.",
          includes: ["Psikologjia e fëmijës", "Siguria në ambient", "Certifikatë trajnimi"],
          practice: "Praktikë e ndjekur në ambientet e Qendrës M.I.K.E."
        },
        {
          id: "cleaning",
          title: "Pastrimi i shtëpisë",
          duration: "2 Javë",
          description: "Teknikat profesionale të pastrimit, përdorimi i pajisjeve dhe menaxhimi i kohës për një shërbim elitë në ambientet shtëpiake.",
          includes: ["Organizimi i hapësirës", "Përdorimi i kimikateve", "Efikasiteti në punë"],
          practice: "Sistemi i referimit për punësim pas përfundimit të kursit."
        }
      ]
    },
    en: {
      backBtn: "Back to M.I.K.E",
      navTitle: "PROFESSIONAL COURSES",
      heroSub: "Professional Qualification",
      heroTitle: "Professional Qualification",
      heroDesc: "Choose one of our courses and start your new career with the support of M.I.K.E Center.",
      btnDetails: "Course Details",
      modalIncludes: "What's included:",
      modalPractice: "Practice opportunities:",
      btnRegister: "Register Now",
      contactTitle: "Contact Us",
      contactSub: "For registrations and payments",
      contactPhone: "Phone",
      contactEmail: "Email",
      contactAddress: "Address",
      contactAddressVal: "Tirana, Albania",
      btnClose: "Close",
      courses: [
        {
          id: "moshart",
          title: "Elderly Caregiving",
          duration: "8 Weeks",
          description: "Professional training for the health and social care of the elderly, focusing on empathy and basic medical assistance.",
          includes: ["Communication ethics", "First aid training", "Practice at 'Shtëpia e Zotërinjve'"],
          practice: "Employment opportunities or a 1-month internship for high-achieving students."
        },
        {
          id: "babysitter",
          title: "Babysitter",
          duration: "4 Weeks",
          description: "Everything you need to care for children: from home safety to early childhood development and educational entertainment.",
          includes: ["Child psychology", "Environment safety", "Training certificate"],
          practice: "Supervised practice held within the facilities of M.I.K.E Center."
        },
        {
          id: "cleaning",
          title: "Home Cleaning",
          duration: "2 Weeks",
          description: "Professional cleaning techniques, equipment usage, and time management for an elite service in residential environments.",
          includes: ["Space organization", "Chemical product usage", "Work efficiency"],
          practice: "Job referral system available upon course completion."
        }
      ]
    }
  };

  const t = translations[language];

  // Gjejmë kursin e përzgjedhur dinamikisht nga lista e përkthyer për të përditësuar modalin
  const activeCourseModal = selectedCourse 
    ? t.courses.find(c => c.id === selectedCourse.id) 
    : null;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2 text-mikeDark font-black uppercase text-xs tracking-tighter hover:text-mikePurple transition-colors">
          <ArrowLeft size={16} /> {t.backBtn}
        </Link>
        <div className="font-black text-mikeDark italic tracking-tighter text-sm md:text-base">{t.navTitle}</div>
      </nav>

      {/* Hero Section */}
      <section className="bg-mikeDark py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-mikePurple blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-mikePurple blur-3xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase italic">{t.heroTitle}</h1>
        <p className="max-w-xl mx-auto text-purple-200 font-medium text-sm leading-relaxed">
          {t.heroDesc}
        </p>
      </section>

      {/* Course Cards */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.courses.map((course) => (
          <div 
            key={course.id}
            className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="bg-purple-50 text-mikePurple w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-black text-mikeDark mb-3 leading-tight">{course.title}</h3>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1 mb-4">
              <Clock size={12}/> {course.duration}
            </span>
            <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">
              {course.description}
            </p>
            <button 
              onClick={() => setSelectedCourse(course)}
              className="w-full bg-gray-50 text-mikeDark py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-mikePurple hover:text-white transition-all"
            >
              {t.btnDetails}
            </button>
          </div>
        ))}
      </section>

      {/* Modal: Detajet e Kursit */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-mikeDark/90 backdrop-blur-md" onClick={() => setSelectedCourse(null)} />
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <button onClick={() => setSelectedCourse(null)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
              <X size={20} />
            </button>
            <div className="p-10">
              <h2 className="text-2xl font-black text-mikeDark mb-6 leading-tight">{activeCourseModal.title}</h2>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-mikePurple mb-3 tracking-widest">{t.modalIncludes}</h4>
                  <ul className="space-y-2">
                    {activeCourseModal.includes.map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-mikePurple mb-1 tracking-widest">{t.modalPractice}</h4>
                  <p className="text-sm font-medium text-gray-500 italic leading-relaxed">{activeCourseModal.practice}</p>
                </div>
              </div>
              <button 
                onClick={() => { setSelectedCourse(null); setShowContact(true); }}
                className="w-full bg-mikeDark text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-mikePurple transition-all"
              >
                {t.btnRegister}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Informacioni i Kontaktit */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-mikePurple/80 backdrop-blur-md" onClick={() => setShowContact(false)} />
          <div className="relative bg-white w-full max-w-sm rounded-[3rem] shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="p-10 text-center">
              <div className="w-16 h-16 bg-mikeDark text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} />
              </div>
              <h2 className="text-2xl font-black text-mikeDark mb-2 italic">{t.contactTitle}</h2>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{t.contactSub}</p>
              
              <div className="space-y-4 text-left bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-mikePurple"><Phone size={16}/></div>
                  <div><p className="text-[10px] font-black text-gray-300 uppercase leading-none">{t.contactPhone}</p><p className="font-bold text-mikeDark text-sm">+355 6X XXX XXXX</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-mikePurple"><Mail size={16}/></div>
                  <div><p className="text-[10px] font-black text-gray-300 uppercase leading-none">{t.contactEmail}</p><p className="font-bold text-mikeDark text-sm">info@mike.al</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-mikePurple"><MapPin size={16}/></div>
                  <div><p className="text-[10px] font-black text-gray-300 uppercase leading-none">{t.contactAddress}</p><p className="font-bold text-mikeDark text-sm">{t.contactAddressVal}</p></div>
                </div>
              </div>

              <button 
                onClick={() => setShowContact(false)}
                className="mt-8 w-full py-4 border-2 border-gray-100 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all"
              >
                {t.btnClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}