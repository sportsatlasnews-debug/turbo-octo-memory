"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import WorksheetDownloads from '@/components/WorksheetDownloads';
import StaffSection from '@/components/StaffSection';
import Footer from '@/components/Footer';
import VideoTestimonials from '@/components/VideoTestimonials';
import { 
  Clock, Calendar, MapPin, CheckCircle2, Star, 
  BookOpen, Heart, ShieldCheck, Users, Home, Video, Smile 
} from "lucide-react";

export default function RrethNesh() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-mikePurple overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Qendra M.I.K.E</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
            Mjedis i ngrohtë, edukues dhe i sigurt për fëmijët që nga viti 2009.
          </p>
        </div>
      </section>

      {/* Info Quick Cards */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-2xl text-mikePurple"><Clock size={28} /></div>
            <div>
              <h4 className="font-bold text-mikeDark">Orari i Punës</h4>
              <p className="text-gray-500 text-sm">E hënë – E premte</p>
              <p className="text-mikePurple font-semibold">07:30 – 17:00</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-4 border-b-4 border-mikePurple">
            <div className="p-3 bg-purple-100 rounded-2xl text-mikePurple"><Calendar size={28} /></div>
            <div>
              <h4 className="font-bold text-mikeDark">Viti Akademik</h4>
              <p className="text-gray-500 text-sm">1 Shtator – 30 Korrik</p>
              <p className="text-mikePurple font-semibold">Pushim: Gusht & Festat</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-2xl text-mikePurple"><MapPin size={28} /></div>
            <div>
              <h4 className="font-bold text-mikeDark">Lokacioni</h4>
              <p className="text-gray-500 text-sm">Tiranë</p>
              <p className="text-mikePurple font-semibold">Rr. Gramoz Pashko</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
{/* About Section with Detailed Info */}
<section className="py-24 container mx-auto px-6">
  <div className="flex flex-col lg:flex-row items-start gap-16">
    
    {/* Left Side: Images & Quick Stats */}
    <div className="w-full lg:w-1/2 space-y-8">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-mikePurple rounded-[2.5rem] -z-10" />
        <img 
          src="https://i.ibb.co/bg65SNnC/0I5A2412.jpg" 
          alt="Qendra MIKE Ambient" 
          className="rounded-[2.5rem] shadow-2xl w-full h-[550px] object-cover"
        />
        {/* Experience Badge */}
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-purple-50">
          <p className="text-mikePurple font-black text-4xl line-height-1">15+</p>
          <p className="text-mikeDark font-bold text-xs uppercase tracking-widest">Vite Eksperiencë</p>
        </div>
      </div>

      {/* Operational Details Card */}
      <div className="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-mikePurple font-black uppercase text-xs tracking-widest mb-2">Viti Akademik</h4>
          <p className="text-mikeDark font-bold text-sm">1 Shtator – 30 Korrik</p>
          <p className="text-gray-500 text-xs">Pushim: Gusht & Festat Zyrtare</p>
        </div>
        <div>
          <h4 className="text-mikePurple font-black uppercase text-xs tracking-widest mb-2">Orari</h4>
          <p className="text-mikeDark font-bold text-sm">E hënë – E premte</p>
          <p className="text-gray-500 text-xs">07:30 – 17:00</p>
        </div>
      </div>
    </div>

    {/* Right Side: Content */}
    <div className="w-full lg:w-1/2">
      <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">Qendra M.I.K.E (Çerdhe & Kopësht)</span>
      <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-3 mb-6 uppercase tracking-tight">
        Dashuri për të mësuar që nga hapat e parë
      </h2>
      
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          E themeluar në vitin 2009, Qendra M.I.K.E është një mjedis i ngrohtë, edukues dhe i sigurt për fëmijët nga <strong>6 muaj deri në 6 vjeç</strong>. Për më shumë se 15 vite, ne kemi krijuar një komunitet të besuar ku mirëqenia, siguria dhe zhvillimi i çdo fëmije është prioriteti ynë kryesor.
        </p>
        
        <p>
          Ne ofrojmë një përvojë të qëndrueshme dhe cilësore të edukimit të hershëm, bazuar në programe të miratuara nga institucionet kombëtare arsimore dhe sociale. 
          Mësueset tona janë të gjitha me <strong>arsimin e lartë</strong> dhe të trajnuara posaçërisht për zhvillimin e hershëm, duke garantuar një mjedis profesional dhe të dashur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-mikePurple shrink-0 mt-1" size={20} />
            <span className="text-sm font-medium text-mikeDark">Numër i limituar fëmijësh për klasë për vëmendje individuale.</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-mikePurple shrink-0 mt-1" size={20} />
            <span className="text-sm font-medium text-mikeDark">Mjedis i monitoruar 24/7 nga kompani sigurie & kamera.</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-mikePurple shrink-0 mt-1" size={20} />
            <span className="text-sm font-medium text-mikeDark">Pastërti dhe higjienë me standarde të larta në çdo klasë.</span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-mikePurple shrink-0 mt-1" size={20} />
            <span className="text-sm font-medium text-mikeDark">Ushqim i balancuar me përbërës cilësorë & BIO.</span>
          </div>
        </div>

        {/* Parent Communication Mini-Section */}
        <div className="mt-8 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <h4 className="font-black text-mikeDark text-sm uppercase mb-4 tracking-widest">Komunikimi me Prindërit</h4>
          <ul className="space-y-3">
            <li className="flex justify-between text-xs border-b border-gray-50 pb-2">
              <span className="text-gray-500 italic">Raporte Ditore:</span>
              <span className="font-bold text-mikeDark">Ushqimi, gjumi, aktivitetet</span>
            </li>
            <li className="flex justify-between text-xs border-b border-gray-100 pb-2">
              <span className="text-gray-500 italic">Takime Prind-Mësuese:</span>
              <span className="font-bold text-mikeDark">2 herë në vit</span>
            </li>
            <li className="flex justify-between text-xs">
              <span className="text-gray-500 italic">Raporti i Zhvillimit:</span>
              <span className="font-bold text-mikeDark">I detajuar çdo 6 muaj</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* NEW STATS SECTION: Cfare ofrojme? */}
      <section className="pb-24 container mx-auto px-6">
        <div className="bg-mikePurple rounded-[3rem] p-12 shadow-2xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black">Çfarë ofrojmë?</h2>
            <p className="opacity-80 mt-2">Shifrat tona flasin për përkushtimin tonë</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Smile className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">500+</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Fëmijë të lumtur</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Home className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">8</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Ambiente të ndryshme</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Users className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">12+</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Punonjës në përkujdesje</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Video className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">23</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Kamera sigurie</p>
            </div>
          </div>
        </div>
      </section>

      <StaffSection />
      <WorksheetDownloads />

      {/* Programet Section */}
      <section className="py-20 bg-mikeDark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Programet Edukative</h2>
            <div className="h-1 w-20 bg-mikePurple mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition">
              <span className="text-mikePurple font-bold uppercase tracking-widest text-sm">6 muaj – 3 vjeç</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Programi Save the Children</h3>
              <p className="text-gray-400 mb-6 italic">Version i përshtatur në gjuhën shqipe:</p>
              <div className="grid grid-cols-2 gap-4">
                {["Zhvillim motorik", "Social-emocional", "Gjuha & komunikimi", "Mësim përmes lojës"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Star size={14} className="text-mikePurple" fill="currentColor" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition">
              <span className="text-mikePurple font-bold uppercase tracking-widest text-sm">3 – 6 vjeç</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">Programi i Ministrisë së Arsimit</h3>
              <p className="text-gray-400 mb-6">Metodologjia "Luaj dhe Mëso" (Shtëpia Botuese Albas).</p>
              <div className="p-4 bg-mikePurple/20 rounded-2xl">
                <p className="text-xs font-bold uppercase mb-3 text-mikePurple">Aktivitete Jashtëkurrikulare:</p>
                <div className="flex flex-wrap gap-3">
                  {["Kung-Fu", "Anglisht", "Robotik & Kodim"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filozofia & Ambienti Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-50 text-mikePurple rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h4 className="font-bold mb-3 text-mikeDark">Gjuha & Leximi</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Tregimet imagjinare dhe projektet kreative ushqejnë dashurinë për librat.</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-50 text-mikePurple rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h4 className="font-bold mb-3 text-mikeDark">Mësimi përmes Lojës</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Lojëra me role, puzzle dhe eksperimente. Loja është baza e të mësuarit!</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-50 text-mikePurple rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold mb-3 text-mikeDark">Zhvillimi Holistik</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Ndihmojmë fëmijët të rriten të sigurt në vetvete, të gëzuar dhe të pavarur.</p>
          </div>
        </div>

        <VideoTestimonials/>
      </section>
      
      <Footer />
    </main>
  );
}