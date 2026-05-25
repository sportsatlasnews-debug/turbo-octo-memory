"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import WorksheetDownloads from '@/components/WorksheetDownloads';
import StaffSection from '@/components/StaffSection';
import Footer from '@/components/Footer';
import VideoTestimonials from '@/components/VideoTestimonials';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Clock, Calendar, MapPin, CheckCircle2, Star, 
  BookOpen, Heart, ShieldCheck, Users, Home, Video, Smile 
} from "lucide-react";

export default function RrethNesh() {
  const { language } = useLanguage();

  const translations = {
    sq: {
      heroTitle: "Qendra M.I.K.E",
      heroDesc: "Mjedis i ngrohtë, edukues dhe i sigurt për fëmijët që nga viti 2009.",
      
      // Quick Cards
      cardWorkHours: "Orari i Punës",
      cardDays: "E hënë – E premte",
      cardAcadYear: "Viti Akademik",
      cardMonths: "1 Shtator – 30 Korrik",
      cardHolidays: "Pushim: Gusht & Festat",
      cardLoc: "Lokacioni",
      cardCity: "Tiranë",
      cardStreet: "Rr. Gramoz Pashko",

      // About Section
      expTitle: "Vite Eksperiencë",
      badgeHolidays: "Pushim: Gusht & Festat Zyrtare",
      metaSub: "Qendra M.I.K.E (Çerdhe & Kopësht)",
      mainTitle: "Dashuri për të mësuar që nga hapat e parë",
      descP1: "E themeluar në vitin 2009, Qendra M.I.K.E është një mjedis i ngrohtë, edukues dhe i sigurt për fëmijët nga 6 muaj deri në 6 vjeç. Për më shumë se 17 vite, ne kemi krijuar një komunitet të besuar ku mirëqenia, siguria dhe zhvillimi i çdo fëmije është prioriteti ynë kryesor.",
      descP2: "Ne ofrojmë një përvojë të qëndrueshme dhe cilësore të edukimit të hershëm, bazuar në programe të miratuara nga institucionet kombëtare arsimore dhe sociale. Mësueset tona janë të gjitha me arsimin e lartë dhe të trajnuara posaçërisht për zhvillimin e hershëm, duke garantuar një mjedis profesional dhe të dashur.",
      
      bullets: [
        "Numër i limituar fëmijësh për klasë për vëmendje individuale.",
        "Mjedis i monitoruar 24/7 nga kompani sigurie & kamera.",
        "Pastërti dhe higjienë me standarde të larta në çdo klasë.",
        "Ushqim i balancuar me përbërës cilësorë & BIO."
      ],

      // Communication Mini-Section
      commTitle: "Komunikimi me Prindërit",
      commReport: "Raporte Ditore:",
      commReportVal: "Ushqimi, gjumi, aktivitetet",
      commMeetings: "Takime Prind-Mësuese:",
      commMeetingsVal: "2 herë në vit",
      commDevReport: "Raporti i Zhvillimit:",
      commDevReportVal: "I detajuar çdo 6 muaj",

      // Stats Section
      statsTitle: "Çfarë ofrojmë?",
      statsSub: "Shifrat tona flasin për përkushtimin tonë",
      statKids: "Fëmijë të lumtur",
      statRooms: "Ambiente të ndryshme",
      statStaff: "Punonjës në përkujdesje",
      statCameras: "Kamera sigurie",

      // Programs Section
      progTitle: "Programet Edukative",
      prog1Age: "6 muaj – 3 vjeç",
      prog1Title: "Programi Save the Children",
      prog1Subtitle: "Version i përshtatur në gjuhën shqipe:",
      prog1Items: ["Zhvillim motorik", "Social-emocional", "Gjuha & komunikimi", "Mësim përmes lojës"],
      prog2Age: "3 – 6 vjeç",
      prog2Title: "Programi i Ministrisë së Arsimit",
      prog2Subtitle: "Metodologjia \"Luaj dhe Mëso\" (Shtëpia Botuese Albas).",
      prog2Extra: "Aktivitete Jashtëkurrikulare:",
      prog2Tags: ["Kung-Fu", "Anglisht", "Robotik & Kodim"],

      // Philosophy Section
      phil1Title: "Gjuha & Leximi",
      phil1Desc: "Tregimet imagjinare dhe projektet kreative ushqejnë dashurinë për librat.",
      phil2Title: "Mësimi përmes Lojës",
      phil2Desc: "Lojëra me role, puzzle dhe eksperimente. Loja është baza e të mësuarit!",
      phil3Title: "Zhvillimi Holistik",
      phil3Desc: "Ndihmojmë fëmijët të rriten të sigurt në vetvete, të gëzuar dhe të pavarur."
    },
    en: {
      heroTitle: "M.I.K.E Center",
      heroDesc: "A warm, nurturing, and safe environment for children since 2009.",
      
      // Quick Cards
      cardWorkHours: "Working Hours",
      cardDays: "Monday – Friday",
      cardAcadYear: "Academic Year",
      cardMonths: "September 1 – July 30",
      cardHolidays: "Closed: August & Holidays",
      cardLoc: "Location",
      cardCity: "Tirana",
      cardStreet: "Gramoz Pashko St.",

      // About Section
      expTitle: "Years of Experience",
      badgeHolidays: "Closed: August & Official Holidays",
      metaSub: "M.I.K.E Center (Nursery & Kindergarten)",
      mainTitle: "Love for learning starting from the very first steps",
      descP1: "Established in 2009, M.I.K.E Center provides a warm, educational, and secure space for children aged 6 months to 6 years old. For over 17 years, we have built a trusted community where the well-being, safety, and development of every child remain our utmost priority.",
      descP2: "We offer a consistent and high-quality early childhood education experience based on frameworks approved by national educational and social institutions. All our teachers hold university degrees and are specially trained in early childhood development, guaranteeing a professional and loving environment.",
      
      bullets: [
        "Limited number of children per class for personalized attention.",
        "24/7 monitored environment by security companies & cameras.",
        "High standards of cleanliness and hygiene in every classroom.",
        "Balanced nutrition utilizing high-quality & organic ingredients."
      ],

      // Communication Mini-Section
      commTitle: "Parent Communication",
      commReport: "Daily Reports:",
      commReportVal: "Meals, naptime, activities",
      commMeetings: "Parent-Teacher Meetings:",
      commMeetingsVal: "2 times a year",
      commDevReport: "Development Report:",
      commDevReportVal: "Detailed assessment every 6 months",

      // Stats Section
      statsTitle: "What We Offer",
      statsSub: "Our numbers reflect our dedication",
      statKids: "Happy children",
      statRooms: "Different environments",
      statStaff: "Caregiving staff",
      statCameras: "Security cameras",

      // Programs Section
      progTitle: "Educational Programs",
      prog1Age: "6 months – 3 years old",
      prog1Title: "Save the Children Program",
      prog1Subtitle: "Adapted version in Albanian:",
      prog1Items: ["Motor skills development", "Social-emotional growth", "Language & communication", "Learning through play"],
      prog2Age: "3 – 6 years old",
      prog2Title: "Ministry of Education Program",
      prog2Subtitle: "\Play and Learn\" methodology (Albas Publishing House).",
      prog2Extra: "Extracurricular Activities:",
      prog2Tags: ["Kung-Fu", "English", "Robotics & Coding"],

      // Philosophy Section
      phil1Title: "Language & Reading",
      phil1Desc: "Imaginative stories and creative projects nurture a lifelong love for books.",
      phil2Title: "Learning through Play",
      phil2Desc: "Role-playing, puzzles, and interactive experiments. Play is the foundation of learning!",
      phil3Title: "Holistic Development",
      phil3Desc: "Helping children grow into self-confident, joyful, and independent individuals."
    }
  };

  const t = translations[language];

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
          <h1 className="text-4xl md:text-6xl font-black mb-6">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Info Quick Cards */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-2xl text-mikePurple"><Clock size={28} /></div>
            <div>
              <h4 className="font-bold text-mikeDark">{t.cardWorkHours}</h4>
              <p className="text-gray-500 text-sm">{t.cardDays}</p>
              <p className="text-mikePurple font-semibold">07:30 – 17:00</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-4 border-b-4 border-mikePurple">
            <div className="p-3 bg-purple-100 rounded-2xl text-mikePurple"><Calendar size={28} /></div>
            <div>
              <h4 className="font-bold text-mikeDark">{t.cardAcadYear}</h4>
              <p className="text-gray-500 text-sm">{t.cardMonths}</p>
              <p className="text-mikePurple font-semibold">{t.cardHolidays}</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-2xl text-mikePurple"><MapPin size={28} /></div>
            <div>
              <h4 className="font-bold text-mikeDark">{t.cardLoc}</h4>
              <p className="text-gray-500 text-sm">{t.cardCity}</p>
              <p className="text-mikePurple font-semibold">{t.cardStreet}</p>
            </div>
          </div>
        </div>
      </section>

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
                <p className="text-mikePurple font-black text-4xl leading-none">15+</p>
                <p className="text-mikeDark font-bold text-xs uppercase tracking-widest mt-1">{t.expTitle}</p>
              </div>
            </div>

            {/* Operational Details Card */}
            <div className="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-mikePurple font-black uppercase text-xs tracking-widest mb-2">{t.cardAcadYear}</h4>
                <p className="text-mikeDark font-bold text-sm">{t.cardMonths}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.badgeHolidays}</p>
              </div>
              <div>
                <h4 className="text-mikePurple font-black uppercase text-xs tracking-widest mb-2">{t.cardWorkHours}</h4>
                <p className="text-mikeDark font-bold text-sm">{t.cardDays}</p>
                <p className="text-gray-500 text-xs mt-0.5">07:30 – 17:00</p>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-mikePurple font-bold uppercase tracking-widest text-xs">{t.metaSub}</span>
            <h2 className="text-3xl md:text-5xl font-black text-mikeDark mt-3 mb-6 uppercase tracking-tight">
              {t.mainTitle}
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>{t.descP1}</p>
              <p>{t.descP2}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {t.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-mikePurple shrink-0 mt-1" size={20} />
                    <span className="text-sm font-medium text-mikeDark">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Parent Communication Mini-Section */}
              <div className="mt-8 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-mikeDark text-sm uppercase mb-4 tracking-widest">{t.commTitle}</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between text-xs border-b border-gray-50 pb-2">
                    <span className="text-gray-500 italic">{t.commReport}</span>
                    <span className="font-bold text-mikeDark">{t.commReportVal}</span>
                  </li>
                  <li className="flex justify-between text-xs border-b border-gray-100 pb-2">
                    <span className="text-gray-500 italic">{t.commMeetings}</span>
                    <span className="font-bold text-mikeDark">{t.commMeetingsVal}</span>
                  </li>
                  <li className="flex justify-between text-xs">
                    <span className="text-gray-500 italic">{t.commDevReport}</span>
                    <span className="font-bold text-mikeDark">{t.commDevReportVal}</span>
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
            <h2 className="text-3xl font-black">{t.statsTitle}</h2>
            <p className="opacity-80 mt-2">{t.statsSub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Smile className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">500+</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">{t.statKids}</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Home className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">8</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">{t.statRooms}</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Users className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">12+</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">{t.statStaff}</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl text-center backdrop-blur-sm border border-white/10">
              <Video className="mx-auto mb-4 text-white" size={40} />
              <h3 className="text-4xl font-black mb-1">23</h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">{t.statCameras}</p>
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
            <h2 className="text-3xl font-black mb-4">{t.progTitle}</h2>
            <div className="h-1 w-20 bg-mikePurple mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition">
              <span className="text-mikePurple font-bold uppercase tracking-widest text-sm">{t.prog1Age}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{t.prog1Title}</h3>
              <p className="text-gray-400 mb-6 italic">{t.prog1Subtitle}</p>
              <div className="grid grid-cols-2 gap-4">
                {t.prog1Items.map((item: string) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Star size={14} className="text-mikePurple" fill="currentColor" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition">
              <span className="text-mikePurple font-bold uppercase tracking-widest text-sm">{t.prog2Age}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4">{t.prog2Title}</h3>
              <p className="text-gray-400 mb-6">{t.prog2Subtitle}</p>
              <div className="p-4 bg-mikePurple/20 rounded-2xl">
                <p className="text-xs font-bold uppercase mb-3 text-mikePurple">{t.prog2Extra}</p>
                <div className="flex flex-wrap gap-3">
                  {t.prog2Tags.map((tag: string) => (
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
            <h4 className="font-bold mb-3 text-mikeDark">{t.phil1Title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{t.phil1Desc}</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-50 text-mikePurple rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h4 className="font-bold mb-3 text-mikeDark">{t.phil2Title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{t.phil2Desc}</p>
          </div>
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-50 text-mikePurple rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold mb-3 text-mikeDark">{t.phil3Title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{t.phil3Desc}</p>
          </div>
        </div>

        <VideoTestimonials/>
      </section>
      
      <Footer />
    </main>
  );
}