"use client";
import React from "react";
import { X, CheckCircle, Image as ImageIcon, FileText, Download, PlayCircle } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: "sq" | "en";
  images: string[];
}

export default function ProjectModal({ isOpen, onClose, language, images }: ProjectModalProps) {
  if (!isOpen) return null;

  const translations = {
    sq: {
      title: "MIKE në Lagjen Time",
      subtitle: "Nga barrë familjare në përgjegjësi komunitare.",
      meta: "Opening the Door to Care | Bashkia Vorë",
      close: "Mbyll",
      videoTitle: "Prezantimi i Projektit (Video)",
      galleryTitle: "Galeria e Projektit",
      galleryDesc: "Momente nga puna e përditshme e ekipit dhe nga jeta komunitare e të moshuarve.",
      pdfTitle: "Dokumentacioni i Projektit (PDF)",
      pdfDownload: "Shkarko Dokumentin PDF",
      pdfPlaceholder: "Shfletuesi juaj nuk mbështet shikimin e PDF-ve direkt. Ju mund ta shkarkoni skedarin duke klikuar butonin më sipër.",
      
      sections: {
        intro: {
          title: "1. Opening the Door to Care",
          p1: "“MIKE në Lagjen Time” është një model i integruar i kujdesit në banesë dhe në komunitet për të moshuarit, i zhvilluar nga Qendra M.I.K.E në partneritet me Bashkinë Vorë. Ky shërbim sjell pranë të moshuarve një ekip multidisiplinar që ofron mbështetje sociale, monitorim bazë shëndetësor, mbështetje psiko-sociale, fizioterapi, komunikim me familjarët, referim institucional dhe aktivitete komunitare.",
          p2: "Qëllimi ynë është që asnjë i moshuar të mos mbetet i padukshëm, i izoluar apo pa mbështetje. Kujdesi nuk është vetëm shërbim; është prani, dinjitet, besim dhe lidhje njerëzore."
        },
        about: {
          title: "2. Rreth shërbimit",
          p1: "“MIKE në Lagjen Time” është një shërbim i krijuar për të mbështetur të moshuarit që jetojnë med sëmundje kronike, lëvizshmëri të kufizuar, të ardhura të pamjaftueshme, izolim social ose mungesë të aksesit të rregullt në shërbime sociale dhe shëndetësore.",
          p2: "Shërbimi zbatohet përmes vizitave në banesë, planeve individuale të kujdesit dhe koordinimit me familjen, strukturat vendore, profesionistët e shëndetit dhe aktorët e komunitetit. Modeli synon të ndihmojë të moshuarit të qëndrojnë sa më gjatë në shtëpinë dhe komunitetin e tyre, duke ruajtur dinjitetin, sigurinë, shëndetin dhe përfshirjen sociale."
        },
        importance: {
          title: "3. Pse është i rëndësishëm",
          p1: "Në shumë zona rurale dhe gjysmë-rurale, kujdesi për të moshuarit mbetet kryesisht përgjegjësi e familjes. Por familjet shpesh përballen med vështirësi reale: migrim të fëmijëve, punë me orare të gjata, të ardhura të kufizuara, mungesë informacioni dhe mungesë shërbimesh të afërta.",
          p2: "Në Bashkinë Vorë, many të moshuar jetojnë med sëmundje kronike, kanë nevojë për monitorim të rregullt, mbështetje emocionale dhe ndihmë praktike. Disa jetojnë vetëm, ndërsa të tjerë kalojnë pjesën më të madhe të ditës pa mbështetje të vazhdueshme. “MIKE në Lagjen Time” i përgjigjet kësaj nevoje duke e afruar shërbimin aty ku i moshuari jeton: në shtëpi, në lagje dhe në komunitet. Ky model ndihmon që kujdesi të mos mbetet vetëm barrë private e familjes, bur të kthehet në përgjegjësi të përbashkët komunitare."
        },
        provisions: {
          title: "4. Çfarë ofron shërbimi",
          intro: "Shërbimi “MIKE në Lagjen Time” ofron mbështetje të integruar për të moshuarit dhe familjet e tyre, përmes:",
          items: [
            "Vizitave të rregullta në banesë;",
            "Vlerësimit të nevojave dhe hartimit të planeve individuale të kujdesit;",
            "Monitorimit bazë shëndetësor;",
            "Matjes së tensionit dhe shenjave vitale;",
            "Ndjekjes së terapisë sipas udhëzimeve mjekësore;",
            "Mbështetjes psiko-sociale dhe emocionale;",
            "Fizioterapisë dhe mbështetjes për lëvizshmërinë;",
            "Kujdesit social dhe ndihmës praktike;",
            "Komunikimit dhe këshillimit të familjarëve;",
            "Referimit pranë institucioneve vendore dhe shërbimeve shëndetësore;",
            "Aktiviteteve sociale dhe komunitare;",
            "Dokumentimit, monitorimit dhe ndjekjes së rasteve."
          ],
          outro: "Shërbimi nuk zëvendëson familjen; ai e mbështet familjen dhe e bën kujdesin më të sigurt, më të organizuar dhe më dinjitoz."
        },
        locations: {
          title: "5. Ku punojmë",
          p1: "Shërbimi zbatohet në Bashkinë Vorë dhe në zonat përreth saj, duke përfshirë komunitete urbane, rurale dhe gjysmë-rurale. Në fazën e parë, puna është fokusuar në zona si Vorë, Prezë, Bërxullë, Muçaj, Ahmetaq, Palaq, Domje dhe Gërdec.",
          p2: "Këto janë komunitete ku nevoja për kujdes të afërt, të koordinuar dhe të besueshëm është e lartë, ndërsa aksesi në shërbime të rregullta shpesh është i kufizuar."
        },
        partnership: {
          title: "6. Partneriteti me Bashkinë Vorë",
          p1: "“MIKE në Lagjen Time” zbatohet nga Qendra M.I.K.E në partneritet me Bashkinë Vorë. Ky partneritet është thelbësor për identifikimin e të moshuarve në nevojë, referimin e rasteve, koordinimin me strukturat vendore, monitorimin e shërbimit dhe forcimin e qëndrueshmërisë afatgjatë të modelit.",
          p2: "Bashkia Vorë ka mbështetur këtë nismë duke e vendosur kujdesin për të moshuarit më lart në agjendën sociale vendore dhe duke kontribuar në institucionalizimin e një modeli që mund të zgjerohet dhe replikohet edhe në bashki të tjera. Ky bashkëpunim tregon se kur organizatat sociale, pushteti vendor, profesionistët, familjet dhe komuniteti punojnë së bashku, kujdesi bëhet më njerëzor, më i organizuar dhe më i qëndrueshëm."
        },
        results: {
          title: "7. Rezultatet kryesore 2025–2026",
          intro: "Gjatë periudhës prill 2025 – prill 2026, modeli “MIKE në Lagjen Time” arriti rezultate të matshme dhe ndikim të drejtpërdrejtë në jetën e të moshuarve dhe familjeve të tyre. Rezultatet kryesore:",
          items: [
            "186 të moshuar të vlerësuar në territorin e Bashkisë Vorë;",
            "143 të moshuar të intervistuar me formular standard vlerësimi;",
            "30 përfitues të përzgjedhur për fazën pilot;",
            "35 përfitues aktivë deri në mesin e prillit 2026;",
            "Mbi 2,000 vizita dhe kontakte shërbimi të dokumentuara;",
            "5 ekipe terreni të krijuara;",
            "Trajnim 8-ditor për stafin lokal dhe ekipet multidisiplinare;",
            "Përfshirje e profesionistëve socialë, infermierëve, kujdestarëve, mjekut të familjes, psikologut/punonjësit social dhe fizioterapistit;",
            "Rritje e besimit të familjeve ndaj kujdesit në banesë;",
            "Forcim i bashkëpunimit ndërmjet Bashkisë Vorë, profesionistëve, familjeve dhe komunitetit."
          ],
          outro: "Përtej shifrave, rezultati më i rëndësishëm është ndryshimi i mënyrës se si shihet kujdesi për të moshuarit: jo si barrë private, bur si përgjegjësi e përbashkët komunitare."
        },
        impact: {
          title: "8. Ndikimi njerëzor",
          p1: "In fillim, disa të moshuar dhe familje ishin hezitues për të pranuar profesionistë nga jashtë familjes në shtëpinë e tyre. Përmes vizitave të respektueshme, dëgjimit, kujdesit të vazhdueshëm dhe komunikimit med familjarët, besimi u ndërtua gradualisht. Shërbimi ka ndihmuar të moshuarit të ndihen më të sigurt, më të mbështetur dhe më pak të izoluar. Familjet janë ndier më të qeta, sepse të afërmit e tyre ndiqen rregullisht nga një ekip profesional.",
          p2: "Disa të moshuar kanë filluar të marrin pjesë në aktivitete sociale, të frekuentojnë qendrën ditore, të ndajnë vaktet me të tjerët, të bëjnë aktivitete të lehta fizike dhe të përjetojnë më shumë lidhje njerëzore.",
          quote: "“Tani e kuptojmë sa i nevojshëm ishte ky shërbim. Nuk duam që të mungojë, edhe nëse familjet duhet të kontribuojnë për të.”",
          outro: "Ky mesazh përmbledh thelbin e “MIKE në Lagjen Time”: kujdesi nuk është vetëm ndihmë praktike; është dinjitet, prani, besim dhe lidhje njerëzore."
        },
        support: {
          title: "9. Mbështetje dhe partneritet",
          p1: "“MIKE në Lagjen Time” është një model që mund të zgjerohet dhe të forcohet më tej. Në fazën e ardhshme, Qendra M.I.K.E synon të zgjerojë shërbimin nga 35 përfitues aktivë në 50–70 të moshuar, të forcojë menaxhimin e rasteve, të investojë në transport, pajisje mjekësore bazë, aktivitete të qendrës ditore, trajnimin e familjarëve dhe raportimin digjital.",
          p2: "Ne ftojmë partnerë publikë, donatorë, biznese lokale, profesionistë dhe qytetarë që duan të mbështesin kujdesin dinjitoz për të moshuarit. Për bashkëpunim dhe mbështetje: info@mikecenter.org | www.mikecenter.org",
          tagline: "MIKE në Lagjen Time — sepse askush nuk duhet të plaket vetëm."
        }
      }
    },
    en: {
      title: "MIKE in My Neighborhood",
      subtitle: "From family burden to community responsibility.",
      meta: "Opening the Door to Care | Vorë Municipality",
      close: "Close",
      videoTitle: "Presentation (Video)",
      galleryTitle: "Project Gallery",
      galleryDesc: "Moments from the daily work of the care team and the community life of older persons.",
      pdfTitle: "Documentation (PDF)",
      pdfDownload: "Download PDF Document",
      pdfPlaceholder: "Your browser does not support viewing PDFs directly. You can download the file using the button above.",
      
      sections: {
        intro: {
          title: "1. Opening the Door to Care",
          p1: "“MIKE in My Neighborhood” is an integrated home-based and community care model for older persons, developed by M.I.K.E Center in partnership with Vorë Municipality. The service brings a multidisciplinary care team closer to older persons and their families, offering social care, basic health monitoring, psychosocial support, physiotherapy, family communication, institutional referrals, and community engagement.",
          p2: "Our goal is to ensure that no older person remains invisible, isolated, or unsupported. Care is not only a service; it is presence, dignity, trust, and human connection."
        },
        about: {
          title: "2. About the Service",
          p1: "“MIKE in My Neighborhood” is designed to support older persons living with chronic health conditions, reduced mobility, limited income, social isolation, or weak access to regular social and health-related services.",
          p2: "The service is delivered through home visits, individual care plans, and coordination with families, local authorities, health professionals, and community actors. The model helps older persons remain safely in their own homes and communities for as long as possible, while protecting their dignity, health, safety, and social inclusion."
        },
        importance: {
          title: "3. Why It Matters",
          p1: "In many rural and semi-rural areas, elderly care remains mainly a family responsibility. However, families often face real challenges: migration of children, long working hours, limited income, lack of information, and limited access to nearby services.",
          p2: "In Vorë Municipality, many older persons live with chronic health conditions and need regular monitoring, emotional support, and practical assistance. Some live alone, while others spend most of the day without continuous support. “MIKE in My Neighborhood” responds to this need by bringing care closer to where older persons live: at home, in the neighborhood, and in the community. The model helps transform elderly care from a private family burden into a shared community responsibility."
        },
        provisions: {
          title: "4. What We Provide",
          intro: "“MIKE in My Neighborhood” provides integrated support for older persons and their families through:",
          items: [
            "Regular home visits;",
            "Needs assessment and individual care planning;",
            "Basic health monitoring;",
            "Measurement of blood pressure and vital signs;",
            "Follow-up of therapy according to medical guidance;",
            "Psychosocial and emotional support;",
            "Physiotherapy and mobility support;",
            "Social care and practical assistance;",
            "Family communication and guidance;",
            "Referral to local institutions and health services;",
            "Social and community activities;",
            "Documentation, monitoring, and case follow-up."
          ],
          outro: "The service does not replace the family; it supports the family and makes care safer, more organized, and more dignified."
        },
        locations: {
          title: "5. Where We Work",
          p1: "The service is implemented in Vorë Municipality and surrounding urban, rural, and semi-rural communities. During its first phase, the work focused on areas such as Vorë, Prezë, Bërxullë, Muçaj, Ahmetaq, Palaq, Domje, and Gërdec.",
          p2: "These are communities where the need for close, coordinated, and trusted care is high, while access to regular services is often limited."
        },
        partnership: {
          title: "6. Our Partnership with Vorë Municipality",
          p1: "“MIKE in My Neighborhood” is implemented by M.I.K.E Center in partnership with Vorë Municipality. This partnership is essential for identifying vulnerable older persons, referring cases, coordinating with local structures, monitoring the service, and strengthening the long-term sustainability of the model.",
          p2: "Vorë Municipality has supported the initiative by placing elderly care higher on the local social agenda and contributing to the institutionalization of a model that can be expanded and replicated in other municipalities. This cooperation shows that when social organizations, local government, professionals, families, and communities work together, care becomes more human, more organized, and more sustainable."
        },
        results: {
          title: "7. Key Results 2025–2026",
          intro: "During the period April 2025 – April 2026, “MIKE in My Neighborhood” achieved measurable results and direct impact on the lives of older persons and their families. Key results:",
          items: [
            "186 older persons assessed in Vorë Municipality;",
            "143 older persons interviewed through a standard assessment form;",
            "30 beneficiaries selected for the pilot phase;",
            "35 active beneficiaries by mid-April 2026;",
            "Over 2,000 documented visits and service contacts;",
            "5 field teams created;",
            "8-day training delivered for local staff and multidisciplinary teams;",
            "Involvement of social professionals, nurses, caregivers, a family doctor, psychologist/social worker, and physiotherapist;",
            "Increased family trust in home-based care;",
            "Stronger cooperation between Vorë Municipality, professionals, families, and community actors."
          ],
          outro: "Beyond the numbers, the most important result is the change in how elderly care is understood: not as a private burden, but as a shared community responsibility."
        },
        impact: {
          title: "8. Human Impact",
          p1: "At first, some older persons and families were hesitant to accept professionals from outside the family into their homes. Through respectful visits, listening, continuous care, and communication with family members, trust was gradually built. The service has helped older persons feel safer, more supported, and less isolated. Families feel more reassured because their loved ones are followed regularly by a professional team.",
          p2: "Some older persons have started participating in social activities, attending the day center, sharing meals with others, engaging in light physical activities, and experiencing stronger human connection.",
          quote: "“Now we understand how much this service was needed. We do not want it to be missing, even if families have to contribute for it.”",
          outro: "This message reflects the core meaning of “MIKE in My Neighborhood”: care is not only practical assistance; it is dignity, presence, trust, and human connection."
        },
        support: {
          title: "9. Support and Partnership",
          p1: "“MIKE in My Neighborhood” is a model that can be expanded and strengthened further. In the next phase, M.I.K.E Center aims to expand the service from 35 active beneficiaries to 50–70 older persons, strengthen case management, invest in transport, basic medical equipment, day center activities, family training, and digital reporting.",
          p2: "We welcome public partners, donors, local businesses, professionals, and citizens who wish to support dignified care for older persons. For partnership and support: info@mikecenter.org | www.mikecenter.org",
          tagline: "MIKE in My Neighborhood — because no one should grow old alone."
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div>
            <span className="text-xs font-bold text-mikePurple uppercase tracking-widest">{t.meta}</span>
            <h3 className="text-xl md:text-2xl font-black text-mikeDark mt-1">{t.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white border border-gray-200 text-gray-400 hover:text-mikeDark rounded-full hover:shadow-md transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content - Scrollable Container */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-12 flex-1 text-left">
          
          {/* Raporti Tekstual i Dokumentit */}
          <div className="space-y-8 max-w-4xl">
            {/* 1. Intro */}
            <div>
              <h4 className="text-lg font-black text-mikePurple mb-3 uppercase tracking-tight">
                {t.sections.intro.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.sections.intro.p1}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.sections.intro.p2}</p>
            </div>

            {/* SEKSIONI I RI: INTEGRIMI I VIDEOS KRYESORE */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-mikeDark">
                <PlayCircle size={20} className="text-mikePurple" />
                <h4 className="text-base font-black uppercase tracking-tight">{t.videoTitle}</h4>
              </div>
              <div className="w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-lg border border-gray-100 relative group">
                <video 
                  src="/images/mikenelagjentime/videos/mainvideo.mp4" 
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 2 & 5. About & Locations */}
            <div className="grid md:grid-cols-2 gap-8 bg-purple-50/40 p-6 md:p-8 rounded-3xl border border-purple-100/50">
              <div>
                <h4 className="text-base font-black text-mikeDark mb-3 uppercase tracking-tight">
                  {t.sections.about.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{t.sections.about.p1}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{t.sections.about.p2}</p>
              </div>
              <div>
                <h4 className="text-base font-black text-mikeDark mb-3 uppercase tracking-tight">
                  {t.sections.locations.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{t.sections.locations.p1}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{t.sections.locations.p2}</p>
              </div>
            </div>

            {/* 3. Importance */}
            <div>
              <h4 className="text-lg font-black text-mikePurple mb-3 uppercase tracking-tight">
                {t.sections.importance.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.sections.importance.p1}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.sections.importance.p2}</p>
            </div>

            {/* 4. Çfarë ofron shërbimi */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
              <h4 className="text-base font-black text-mikePurple uppercase tracking-wider">
                {t.sections.provisions.title}
              </h4>
              <p className="text-gray-600 text-sm italic">{t.sections.provisions.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.sections.provisions.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle className="text-mikePurple shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs border-t border-gray-50 pt-4 mt-2">
                {t.sections.provisions.outro}
              </p>
            </div>

            {/* 6. Partneriteti */}
            <div>
              <h4 className="text-lg font-black text-mikePurple mb-3 uppercase tracking-tight">
                {t.sections.partnership.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.sections.partnership.p1}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.sections.partnership.p2}</p>
            </div>

            {/* 7. Rezultatet Kryesore */}
            <div className="bg-mikeDark text-white rounded-3xl p-8 space-y-6">
              <div>
                <h4 className="text-base font-black uppercase tracking-widest text-mikePurple">
                  {t.sections.results.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{t.sections.results.intro}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {t.sections.results.items.map((result, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-start gap-2">
                    <span className="text-mikePurple font-bold">•</span>
                    <span className="text-gray-200">{result}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 italic text-center border-t border-white/5 pt-4">
                {t.sections.results.outro}
              </p>
            </div>

            {/* 8. Ndikimi Njerëzor */}
            <div className="space-y-4">
              <h4 className="text-lg font-black text-mikePurple uppercase tracking-tight">
                {t.sections.impact.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t.sections.impact.p1}</p>
              <blockquote className="border-l-4 border-mikePurple bg-gray-50 p-4 rounded-r-xl my-4 text-sm font-medium italic text-mikeDark">
                {t.sections.impact.quote}
              </blockquote>
              <p className="text-gray-600 text-sm leading-relaxed">{t.sections.impact.outro}</p>
            </div>

            {/* 9. Mbështetja */}
            <div className="border-t border-gray-100 pt-8">
              <h4 className="text-lg font-black text-mikePurple uppercase tracking-tight mb-3">
                {t.sections.support.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.sections.support.p1}</p>
              <p className="text-gray-600 text-sm leading-relaxed font-semibold text-mikeDark mb-4">{t.sections.support.p2}</p>
              <div className="bg-purple-50 text-mikePurple py-3 px-6 rounded-full font-black text-xs md:text-sm tracking-wide text-center uppercase">
                {t.sections.support.tagline}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Seksioni i Galerisë Dinamike (Preloaded) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-mikeDark">
              <ImageIcon size={22} className="text-mikePurple" />
              <h4 className="text-lg font-black uppercase tracking-tight">{t.galleryTitle}</h4>
            </div>
            <p className="text-xs text-gray-400 -mt-2">{t.galleryDesc}</p>
            
            {images.length === 0 ? (
              <p className="text-xs text-gray-400 italic bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
                Po ngarkohen imazhet ose nuk u gjet asnjë skedar në dosje...
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                {images.map((src, i) => (
                  <div key={i} className="group relative h-40 rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
                    <img 
                      src={src} 
                      alt={`M.I.K.E Terren - Img ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <hr className="border-gray-100" />

          {/* Seksioni i PDF Reader */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-mikeDark">
                <FileText size={22} className="text-mikePurple" />
                <h4 className="text-lg font-black uppercase tracking-tight">{t.pdfTitle}</h4>
              </div>
              <a 
                href="/documents/MIKE_ne_Lagjen_Time_Project_Report.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-mikeDark font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-mikePurple hover:text-white transition-colors"
              >
                <Download size={14} />
                {t.pdfDownload}
              </a>
            </div>

            <div className="w-full h-[400px] border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 shadow-inner">
              <iframe 
                src="/documents/MIKE_ne_Lagjen_Time_Project_Report.pdf" 
                className="w-full h-full border-none"
                title="Project Report PDF Reader"
              >
                <div className="p-8 text-center text-xs text-gray-400">
                  {t.pdfPlaceholder}
                </div>
              </iframe>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 text-right">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl text-xs hover:border-gray-300 shadow-sm transition-all"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
}