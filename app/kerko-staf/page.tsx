"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function StaffRequestPage() {
  const [serviceType, setServiceType] = useState("Pastrim");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Logic to handle multi-select checkboxes from PDF
    data.specificServices = formData.getAll("specificServices") as any;
    data.difficultyType = formData.getAll("difficultyType") as any;

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, serviceType }),
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
          <h1 className="text-4xl font-extrabold text-mikeDark">Formular Kërkese për Staf</h1>
          <p className="text-gray-500 mt-2">Plotësoni të dhënat sipas shërbimit që kërkoni</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-[2rem] p-8 md:p-12 border border-gray-100">
          
          {/* SECTION 1: Service Selection (Reflecting PDF Pages 1, 4, 7, 9) */}
          <div className="mb-10">
            <label className="block text-sm font-bold text-gray-700 mb-4">Zgjidhni llojin e shërbimit:</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Pastrim", "Babysitter", "Kujdestar i moshuar", "Specialist"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setServiceType(type)}
                  className={`py-3 px-4 rounded-xl font-semibold border-2 transition ${
                    serviceType === type ? "border-mikePurple bg-purple-50 text-mikePurple" : "border-gray-100 text-gray-400"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 2: Personal Data (Standard for all pages) */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <input name="fullName" required placeholder="Emri dhe Mbiemri i Kërkuesit" className="input-field" />
            <input name="email" required type="email" placeholder="Email" className="input-field" />
            <input name="phone" required type="tel" placeholder="Telefoni" className="input-field" />
            <input name="address" required placeholder="Adresa ku do ofrohet shërbimi" className="input-field" />
          </div>

          {/* SECTION 3: Dynamic Fields based on Service Type */}
          <div className="bg-gray-50 p-6 rounded-2xl mb-10">
            
            {/* CLEANING FIELDS (PDF Page 1) */}
            {serviceType === "Pastrim" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Lloji i ambientit:</label>
                  <select name="environmentType" className="input-field">
                    <option>Shtëpi private</option>
                    <option>Apartament</option>
                    <option>Zyrë</option>
                    <option>Institucion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3">Shërbimet specifike:</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {["Pastrim i përgjithshëm", "Larje dhe hekurosje", "Pastrim pas ndërtimi", "Pastrim dritaresh"].map(s => (
                      <label key={s} className="flex items-center space-x-2 text-sm"><input type="checkbox" name="specificServices" value={s} /> <span>{s}</span></label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SPECIALIST FIELDS (PDF Page 9) */}
            {serviceType === "Specialist" && (
              <div className="space-y-6">
                <select name="specialistRole" className="input-field" required>
                  <option value="">Zgjidhni Specialistin</option>
                  <option>Logoped</option>
                  <option>Terapist zhvillimi</option>
                  <option>Fizioterapist</option>
                  <option>Psikolog</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input name="patientAge" placeholder="Mosha e pacientit" className="input-field" />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="hasDiagnosis" id="diag" />
                    <label htmlFor="diag" className="text-sm font-bold">Ka diagnozë të identifikuar?</label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: Schedule & Payment (PDF Page 10) */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <label className="block text-sm font-bold mb-2">Frekuenca e punës:</label>
              <select name="frequency" className="input-field">
                <option>Çdo ditë</option>
                <option>Disa herë në javë</option>
                <option>Një herë në javë</option>
                <option>Herë pas here</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Pagesa e Ofruar:</label>
              <div className="flex space-x-2">
                <input name="offeredPayment" placeholder="Shuma" className="flex-1 p-3 border rounded-xl" />
                <select name="paymentForm" className="p-3 border rounded-xl bg-white text-sm">
                  <option>për orë</option>
                  <option>për seancë</option>
                  <option>mujore</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-mikePurple text-white py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition disabled:bg-gray-300"
          >
            {status === "sending" ? "Duke dërguar..." : "Dërgo Kërkesën"}
          </button>

          {status === "success" && <p className="mt-4 text-green-600 font-bold text-center">U dërgua me sukses! Do t'ju kontaktojmë së shpejti.</p>}
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