"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function RecruitmentPage() {
  const { language } = useLanguage();
  const [formType, setFormType] = useState<"job" | "volunteer">("job");
  const [targetGroup, setTargetGroup] = useState<"mike" | "zoterinjte">("mike");
  const [role, setRole] = useState("babysitter");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const translations = {
    sq: {
      pageTitle: "Bashkohu me Ekipin",
      section1: "1. Të Dhënat Personale",
      pName: "Emër Mbiemër",
      pId: "Nr. ID / Letërnjoftimi",
      pMarital: "Statusi Civil (p.sh. Beqar)",
      pPhone: "Numri i Telefonit",
      pEmail: "Email",
      pAddress: "Adresa",
      
      section2: "2. Arsimi dhe Pozicioni",
      roleBabysitter: "Babysitter",
      roleCaregiver: "Kujdestar për të moshuar",
      roleCleaner: "Punonjëse pastrimi",
      pEducation: "Arsimi (p.sh. Universitet)",
      pInstitution: "Institucioni / Shkolla",

      section3: "3. Aftësitë dhe Gjuhët",
      skillBebe: "Kujdes për bebe",
      skillGames: "Aktivitete edukative",
      skillHomework: "Ndihmë me detyrat",
      skillMeds: "Administrim ilaçesh",
      skillHygiene: "Higjienë personale",
      skillAlzheimer: "Alzheimer/Demencë",
      langEn: "Anglisht",
      langIt: "Italisht",

      section4: "4. Disponueshmëria dhe Pagesa",
      availMorning: "Paradite",
      availAfternoon: "Pasdite",
      availFulltime: "Kohë e plotë",
      availWeekend: "Fundjavë",
      pExpectedAmount: "Shuma e pritshme e pagesës",
      negPo: "E negociueshme: Po",
      negJo: "E negociueshme: Jo",

      btnSending: "Duke u dërguar...",
      btnSubmit: "Dërgo Aplikimin",
      msgSuccess: "Aplikimi u dërgua me sukses!",
      msgError: "Ndodhi një gabim gjatë dërgimit. Ju lutem provoni përsëri."
    },
    en: {
      pageTitle: "Join the Team",
      section1: "1. Personal Information",
      pName: "Full Name",
      pId: "ID / Passport Number",
      pMarital: "Marital Status (e.g., Single)",
      pPhone: "Phone Number",
      pEmail: "Email",
      pAddress: "Address",
      
      section2: "2. Education and Position",
      roleBabysitter: "Babysitter",
      roleCaregiver: "Caregiver for the elderly",
      roleCleaner: "Cleaning staff",
      pEducation: "Education (e.g., University)",
      pInstitution: "Institution / School",

      section3: "3. Skills and Languages",
      skillBebe: "Infant care",
      skillGames: "Educational activities",
      skillHomework: "Homework assistance",
      skillMeds: "Medication administration",
      skillHygiene: "Personal hygiene",
      skillAlzheimer: "Alzheimer's/Dementia care",
      langEn: "English",
      langIt: "Italian",

      section4: "4. Availability and Compensation",
      availMorning: "Morning",
      availAfternoon: "Afternoon",
      availFulltime: "Full-time",
      availWeekend: "Weekends",
      pExpectedAmount: "Expected salary/payment amount",
      negPo: "Negotiable: Yes",
      negJo: "Negotiable: No",

      btnSending: "Sending...",
      btnSubmit: "Submit Application",
      msgSuccess: "Application submitted successfully!",
      msgError: "An error occurred while sending. Please try again."
    }
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    const payload = {
      type: formType,
      targetGroup,
      role: formType === "job" ? role : "vullnetar",
      fullName: formData.get("fullName"),
      birthDate: formData.get("birthDate"),
      idNumber: formData.get("idNumber"),
      address: formData.get("address"),
      city: formData.get("city"),
      zipCode: formData.get("zipCode"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      maritalStatus: formData.get("maritalStatus"),
      education: formData.get("education"),
      institution: formData.get("institution"),
      graduationYear: formData.get("graduationYear"),
      hasExperience: formData.get("hasExperience"),
      experienceDetails: formData.get("experienceDetails"),
      skills: formData.getAll("skills"),
      languages: formData.getAll("languages"),
      availability: formData.getAll("availability"),
      startDate: formData.get("startDate"),
      paymentPreference: formData.get("paymentPreference"),
      expectedAmount: formData.get("expectedAmount"),
      isNegotiable: formData.get("isNegotiable"),
      whyVolunteer: formData.get("whyVolunteer"),
      healthCondition: formData.get("healthCondition"),
    };

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) { 
        setStatus("success"); 
        (e.target as HTMLFormElement).reset(); 
      } else { 
        setStatus("error"); 
      }
    } catch { 
      setStatus("error"); 
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-mikeDark mb-8 md:mb-10">
          {t.pageTitle}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-5 sm:p-8 md:p-12 rounded-[1.8rem] md:rounded-[2.5rem] shadow-xl space-y-8">
          
          {/* SEKSIONI 1: TE DHENAT PERSONALE */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">{t.section1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="fullName" placeholder={t.pName} required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="birthDate" type="date" required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="idNumber" placeholder={t.pId} className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="maritalStatus" placeholder={t.pMarital} className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="phone" placeholder={t.pPhone} required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="email" type="email" placeholder={t.pEmail} required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="address" placeholder={t.pAddress} className="p-4 bg-gray-50 rounded-xl border w-full text-sm md:col-span-2" />
            </div>
          </section>

          {/* SEKSIONI 2: ARSIMI & ROLI */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">{t.section2}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="role" onChange={(e) => setRole(e.target.value)} className="p-4 bg-gray-50 rounded-xl border w-full text-sm">
                <option value="babysitter">{t.roleBabysitter}</option>
                <option value="kujdestar">{t.roleCaregiver}</option>
                <option value="pastrues">{t.roleCleaner}</option>
              </select>
              <input name="education" placeholder={t.pEducation} className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="institution" placeholder={t.pInstitution} className="p-4 bg-gray-50 rounded-xl border w-full text-sm md:col-span-2" />
            </div>
          </section>

          {/* SEKSIONI 3: AFTESITE */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">{t.section3}</h3>
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium text-mikeDark">
              {role === 'babysitter' && (
                <>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Bebe" className="w-4 h-4 accent-mikePurple" /> {t.skillBebe}</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Lojera" className="w-4 h-4 accent-mikePurple" /> {t.skillGames}</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Detyra" className="w-4 h-4 accent-mikePurple" /> {t.skillHomework}</label>
                </>
              )}
              {role === 'kujdestar' && (
                <>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Ilaçe" className="w-4 h-4 accent-mikePurple" /> {t.skillMeds}</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Higjiene" className="w-4 h-4 accent-mikePurple" /> {t.skillHygiene}</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Alzheimer" className="w-4 h-4 accent-mikePurple" /> {t.skillAlzheimer}</label>
                </>
              )}
              <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="languages" value="Anglisht" className="w-4 h-4 accent-mikePurple" /> {t.langEn}</label>
              <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="languages" value="Italisht" className="w-4 h-4 accent-mikePurple" /> {t.langIt}</label>
            </div>
          </section>

          {/* SEKSIONI 4: DISPONUESHMERIA & PAGESA */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">{t.section4}</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-mikeDark">
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Paradite" className="w-4 h-4 accent-mikePurple" /> {t.availMorning}</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Pasdite" className="w-4 h-4 accent-mikePurple" /> {t.availAfternoon}</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Plote" className="w-4 h-4 accent-mikePurple" /> {t.availFulltime}</label>
                <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Fundjave" className="w-4 h-4 accent-mikePurple" /> {t.availWeekend}</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input name="expectedAmount" placeholder={t.pExpectedAmount} className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <select name="isNegotiable" className="p-4 bg-gray-50 rounded-xl border w-full text-sm">
                <option value="Po">{t.negPo}</option>
                <option value="Jo">{t.negJo}</option>
              </select>
            </div>
          </section>

          {/* Njoftimet e statusit */}
          {status === 'success' && (
            <div className="p-4 bg-green-50 text-green-700 font-medium rounded-xl text-sm border border-green-100">
              {t.msgSuccess}
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-700 font-medium rounded-xl text-sm border border-red-100">
              {t.msgError}
            </div>
          )}

          {/* Butoni i aplikimit */}
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-mikePurple text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:shadow-lg active:scale-[0.99] transition disabled:bg-gray-400"
          >
            {status === 'sending' ? t.btnSending : t.btnSubmit}
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}