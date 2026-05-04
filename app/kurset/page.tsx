"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, CheckCircle, GraduationCap, X, ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';

const COURSES = [
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
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2 text-mikeDark font-black uppercase text-xs tracking-tighter hover:text-mikePurple transition-colors">
          <ArrowLeft size={16} /> Kthehu te M.I.K.E
        </Link>
        <div className="font-black text-mikeDark italic tracking-tighter">KURSET PROFESIONALE</div>
      </nav>

      {/* Hero Section */}
      <section className="bg-mikeDark py-16 px-6 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-mikePurple blur-3xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-mikePurple blur-3xl" />
         </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase italic">Kualifikim Profesional</h1>
        <p className="max-w-xl mx-auto text-purple-200 font-medium text-sm">
          Zgjidhni një nga kurset tona dhe filloni karrierën tuaj të re me mbështetjen e Qendrës M.I.K.E.
        </p>
      </section>

      {/* Course Cards */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {COURSES.map((course) => (
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
              Detajet e Kursit
            </button>
          </div>
        ))}
      </section>

      {/* Modal: Detajet e Kursit */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-mikeDark/90 backdrop-blur-md" onClick={() => setSelectedCourse(null)} />
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
            <button onClick={() => setSelectedCourse(null)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
              <X size={20} />
            </button>
            <div className="p-10">
              <h2 className="text-2xl font-black text-mikeDark mb-6 leading-tight">{selectedCourse.title}</h2>
              <div className="space-y-6 mb-10">
                <div>
                    <h4 className="text-[10px] font-black uppercase text-mikePurple mb-3 tracking-widest">Çfarë përfshihet:</h4>
                    <ul className="space-y-2">
                        {selectedCourse.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600">
                            <CheckCircle size={14} className="text-green-500" /> {item}
                        </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-[10px] font-black uppercase text-mikePurple mb-1 tracking-widest">Mundësitë e praktikës:</h4>
                    <p className="text-sm font-medium text-gray-500 italic leading-relaxed">{selectedCourse.practice}</p>
                </div>
              </div>
              <button 
                onClick={() => { setSelectedCourse(null); setShowContact(true); }}
                className="w-full bg-mikeDark text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-mikePurple transition-all"
              >
                Regjistrohu Tani
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
                <h2 className="text-2xl font-black text-mikeDark mb-2 italic">Na Kontaktoni</h2>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Për regjistrime dhe pagesa</p>
                
                <div className="space-y-4 text-left bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-mikePurple"><Phone size={16}/></div>
                        <div><p className="text-[10px] font-black text-gray-300 uppercase leading-none">Telefon</p><p className="font-bold text-mikeDark text-sm">+355 6X XXX XXXX</p></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-mikePurple"><Mail size={16}/></div>
                        <div><p className="text-[10px] font-black text-gray-300 uppercase leading-none">Email</p><p className="font-bold text-mikeDark text-sm">info@mike.al</p></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-mikePurple"><MapPin size={16}/></div>
                        <div><p className="text-[10px] font-black text-gray-300 uppercase leading-none">Adresa</p><p className="font-bold text-mikeDark text-sm">Tiranë, Shqipëri</p></div>
                    </div>
                </div>

                <button 
                    onClick={() => setShowContact(false)}
                    className="mt-8 w-full py-4 border-2 border-gray-100 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-50 transition-all"
                >
                    Mbyll
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}