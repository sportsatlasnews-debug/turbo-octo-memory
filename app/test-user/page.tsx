"use client";
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Send, Loader2, CheckCircle } from 'lucide-react';

export default function ApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [examTakerId, setExamTakerId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    type: "job", // ose 'volunteer'
    education: "",
    institution: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setExamTakerId(result.examTakerId);
      } else {
        alert("Gabim: " + result.error);
      }
    } catch (error) {
      alert("Ndodhi një gabim gjatë aplikimit.");
    } finally {
      setLoading(false);
    }
  };

  // Nëse aplikimi u krye, shfaqim kodin e gjeneruar
  if (examTakerId) {
    return (
      <div className="max-w-2xl mx-auto my-20 p-12 bg-white rounded-[3rem] shadow-2xl border border-green-100 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-black text-mikeDark mb-4">Aplikimi u dërgua!</h2>
        <p className="text-gray-500 mb-8">
          Kodi juaj unik për të hyrë në panelin e testimit është gjeneruar. 
          Ju është dërguar gjithashtu një email me këtë kod.
        </p>
        <div className="bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-mikePurple mb-8">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-2">Kodi juaj i testimit:</span>
          <span className="text-4xl font-black text-mikePurple tracking-[0.2em]">{examTakerId}</span>
        </div>
        <a 
          href="/test-panel" 
          className="inline-block bg-mikeDark text-white px-10 py-4 rounded-2xl font-black hover:bg-mikePurple transition-all"
        >
          SHKO TE TESTI
        </a>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Side Info */}
          <div className="md:w-1/3 bg-mikePurple p-12 text-white">
            <h2 className="text-3xl font-black mb-6 uppercase leading-tight">Bashkohu me Ekipin</h2>
            <p className="text-purple-100 text-sm leading-relaxed mb-8">
              Plotësoni formularin për të marrë ID-në tuaj të testimit dhe për të vazhduar me fazën e vlerësimit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold uppercase">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">1</div>
                Aplikimi
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase opacity-50">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">2</div>
                Testimi Online
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase opacity-50">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">3</div>
                Intervista
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:w-2/3 p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-2">Emri i Plotë</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    required
                    type="text"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-mikePurple outline-none transition-all"
                    placeholder="Filan Fisteku"
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    required
                    type="email"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-mikePurple outline-none transition-all"
                    placeholder="email@shembull.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-2">Telefon</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    required
                    type="tel"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-mikePurple outline-none transition-all"
                    placeholder="+355 6X XX XX XXX"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 ml-2">Pozicioni</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <select 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-mikePurple outline-none transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="job">Edukatore</option>
                    <option value="job">Ndihmës Edukatore</option>
                    <option value="volunteer">Vullnetar/e</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 ml-2">Arsimi / Universiteti</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="text"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-mikePurple outline-none transition-all"
                  placeholder="Bachelor në Edukim, Universiteti i Tiranës"
                  onChange={(e) => setFormData({...formData, education: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-mikeDark text-white py-5 rounded-2xl font-black hover:bg-mikePurple transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Dërgo Aplikimin</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}