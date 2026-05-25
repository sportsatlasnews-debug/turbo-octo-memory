"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

type ServiceId = "cleaning" | "babysitter" | "caregiver" | "specialist";

export default function StaffRequestPage() {
  const { language } = useLanguage();
  const [serviceType, setServiceType] = useState<ServiceId>("cleaning");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const translations = {
    sq: {
      pageTitle: "Formular Kërkese për Staf",
      pageDesc: "Plotësoni të dhënat sipas shërbimit që kërkoni",
      serviceLabel: "Zgjidhni llojin e shërbimit:",
      
      services: [
        { id: "cleaning", name: "Pastrim" },
        { id: "babysitter", name: "Babysitter" },
        { id: "caregiver", name: "Kujdestar i moshuar" },
        { id: "specialist", name: "Specialist" }
      ],

      // Të dhënat personale
      pName: "Emri dhe Mbiemri i Kërkuesit",
      pEmail: "Email",
      pPhone: "Telefoni",
      pAddress: "Adresa ku do ofrohet shërbimi",

      // Pastrim
      envLabel: "Lloji i ambientit:",
      environments: ["Shtëpi private", "Apartament", "Zyrë", "Institucion"],
      specServicesLabel: "Shërbimet specifike:",
      cleaningServices: ["Pastrim i përgjithshëm", "Larje dhe hekurosje", "Pastrim pas ndërtimi", "Pastrim dritaresh"],

      // Specialist
      specSelectLabel: "Zgjidhni Specialistin",
      specialists: ["Logoped", "Terapist zhvillimi", "Fizioterapist", "Psikolog"],
      patAge: "Mosha e pacientit",
      hasDiagLabel: "Ka diagnozë të identifikuar?",

      // Orari dhe Pagesa
      freqLabel: "Frekuenca e punës:",
      frequencies: ["Çdo ditë", "Disa herë në javë", "Një herë në javë", "Herë pas here"],
      payLabel: "Pagesa e Ofruar:",
      payAmount: "Shuma",
      payOptions: ["për orë", "për seancë", "mujore"],

      btnSending: "Duke dërguar...",
      btnSubmit: "Dërgo Kërkesën",
      msgSuccess: "U dërgua me sukses! Do t'ju kontaktojmë së shpejti.",
      msgError: "Ndodhi një gabim gjatë dërgimit. Ju lutem provoni përsëri."
    },
    en: {
      pageTitle: "Staff Request Form",
      pageDesc: "Fill in the details according to the service you require",
      serviceLabel: "Select the type of service:",
      
      services: [
        { id: "cleaning", name: "Cleaning" },
        { id: "babysitter", name: "Babysitter" },
        { id: "caregiver", name: "Elderly Caregiver" },
        { id: "specialist", name: "Specialist" }
      ],

      // Personal data
      pName: "Requester's Full Name",
      pEmail: "Email",
      pPhone: "Phone Number",
      pAddress: "Address where service will be provided",

      // Pastrim
      envLabel: "Environment type:",
      environments: ["Private house", "Apartment", "Office", "Institution"],
      specServicesLabel: "Specific services:",
      cleaningServices: ["General cleaning", "Laundry and ironing", "Post-construction cleaning", "Window cleaning"],

      // Specialist
      specSelectLabel: "Select Specialist",
      specialists: ["Speech Therapist", "Developmental Therapist", "Physiotherapist", "Psychologist"],
      patAge: "Patient's Age",
      hasDiagLabel: "Has an identified diagnosis?",

      // Orari dhe Pagesa
      freqLabel: "Work frequency:",
      frequencies: ["Every day", "A few times a week", "Once a week", "Occasionally"],
      payLabel: "Offered Payment:",
      payAmount: "Amount",
      payOptions: ["per hour", "per session", "monthly"],

      btnSending: "Sending...",
      btnSubmit: "Submit Request",
      msgSuccess: "Submitted successfully! We will contact you shortly.",
      msgError: "An error occurred while sending. Please try again."
    }
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    data.specificServices = formData.getAll("specificServices") as any;
    data.difficultyType = formData.getAll("difficultyType") as any;

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, serviceType }), // Dërgon çelësin statik në anglisht te backend-i
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-12 px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-mikeDark">{t.pageTitle}</h1>
          <p className="text-gray-500 mt-2">{t.pageDesc}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-[2rem] p-8 md:p-12 border border-gray-100">
          
          {/* SECTION 1: Service Selection */}
          <div className="mb-10">
            <label className="block text-sm font-bold text-gray-700 mb-4">{t.serviceLabel}</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {t.services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setServiceType(service.id as ServiceId)}
                  className={`py-3 px-4 rounded-xl font-semibold border-2 transition text-sm md:text-base ${
                    serviceType === service.id ? "border-mikePurple bg-purple-50 text-mikePurple" : "border-gray-100 text-gray-400"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 2: Personal Data */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <input name="fullName" required placeholder={t.pName} className="input-field" />
            <input name="email" required type="email" placeholder={t.pEmail} className="input-field" />
            <input name="phone" required type="tel" placeholder={t.pPhone} className="input-field" />
            <input name="address" required placeholder={t.pAddress} className="input-field" />
          </div>

          {/* SECTION 3: Dynamic Fields based on Service Type */}
          <div className="bg-gray-50 p-6 rounded-2xl mb-10">
            
            {/* CLEANING FIELDS */}
            {serviceType === "cleaning" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">{t.envLabel}</label>
                  <select name="environmentType" className="input-field">
                    {t.environments.map((env) => <option key={env}>{env}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3">{t.specServicesLabel}</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {t.cleaningServices.map(s => (
                      <label key={s} className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" name="specificServices" value={s} className="accent-mikePurple w-4 h-4" /> 
                        <span>{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SPECIALIST FIELDS */}
            {serviceType === "specialist" && (
              <div className="space-y-6">
                <select name="specialistRole" className="input-field" required>
                  <option value="">{t.specSelectLabel}</option>
                  {t.specialists.map((spec) => <option key={spec}>{spec}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input name="patientAge" placeholder={t.patAge} className="input-field" />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="hasDiagnosis" id="diag" className="accent-mikePurple w-4 h-4" />
                    <label htmlFor="diag" className="text-sm font-bold cursor-pointer">{t.hasDiagLabel}</label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: Schedule & Payment */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <label className="block text-sm font-bold mb-2">{t.freqLabel}</label>
              <select name="frequency" className="input-field">
                {t.frequencies.map((freq) => <option key={freq}>{freq}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{t.payLabel}</label>
              <div className="flex space-x-2">
                <input name="offeredPayment" placeholder={t.payAmount} className="flex-1 p-3 border rounded-xl outline-none focus:border-mikePurple" />
                <select name="paymentForm" className="p-3 border rounded-xl bg-white text-sm focus:border-mikePurple outline-none">
                  {t.payOptions.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Status Feedback Alerts */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 font-bold rounded-xl text-sm border border-green-100 text-center">
              {t.msgSuccess}
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 font-bold rounded-xl text-sm border border-red-100 text-center">
              {t.msgError}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-mikePurple text-white py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition disabled:bg-gray-300"
          >
            {status === "sending" ? t.btnSending : t.btnSubmit}
          </button>
        </form>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          outline: none;
          background-color: white;
        }
        .input-field:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
        }
      `}</style>
      <Footer />
    </main>
  );
}