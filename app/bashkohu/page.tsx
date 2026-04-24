"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function RecruitmentPage() {
  const [formType, setFormType] = useState<"job" | "volunteer">("job");
  const [targetGroup, setTargetGroup] = useState<"mike" | "zoterinjte">("mike");
  const [role, setRole] = useState("babysitter");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
      if (res.ok) { setStatus("success"); (e.target as HTMLFormElement).reset(); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-mikeDark mb-10">Bashkohu me Ekipin</h1>
        
        {/* Kontrollet Kryesore */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <select onChange={(e) => setFormType(e.target.value as any)} className="p-4 rounded-xl border">
            <option value="job">Aplikim për Punë</option>
            <option value="volunteer">Bëhu Vullnetar</option>
          </select>
          <select onChange={(e) => setTargetGroup(e.target.value as any)} className="p-4 rounded-xl border">
            <option value="mike">Për Qendrën M.I.K.E (Fëmijët)</option>
            <option value="zoterinjte">Për Shtëpinë e Zotërinjve (Të moshuarit)</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-8">
          {/* SEKSIONI 1: TE DHENAT PERSONALE */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-mikePurple border-b pb-2">1. Të Dhënat Personale</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="fullName" placeholder="Emër Mbiemër" required className="p-4 bg-gray-50 rounded-xl border" />
              <input name="birthDate" type="date" required className="p-4 bg-gray-50 rounded-xl border" />
              <input name="idNumber" placeholder="Nr. ID / Letërnjoftimi" className="p-4 bg-gray-50 rounded-xl border" />
              <input name="maritalStatus" placeholder="Statusi Civil (p.sh. Beqar)" className="p-4 bg-gray-50 rounded-xl border" />
              <input name="phone" placeholder="Numri i Telefonit" required className="p-4 bg-gray-50 rounded-xl border" />
              <input name="email" type="email" placeholder="Email" required className="p-4 bg-gray-50 rounded-xl border" />
              <input name="address" placeholder="Adresa" className="p-4 bg-gray-50 rounded-xl border col-span-2" />
            </div>
          </section>

          {/* SEKSIONI 2: ARSIMI & ROLI */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-mikePurple border-b pb-2">2. Arsimi dhe Pozicioni</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* {formType === 'job' && ( */}
                <select name="role" onChange={(e) => setRole(e.target.value)} className="p-4 bg-gray-50 rounded-xl border">
                  <option value="babysitter">Babysitter</option>
                  <option value="kujdestar">Kujdestar për të moshuar</option>
                  <option value="pastrues">Punonjëse pastrimi</option>
                </select>
              {/* )} */}
              <input name="education" placeholder="Arsimi (p.sh. Universitet)" className="p-4 bg-gray-50 rounded-xl border" />
              <input name="institution" placeholder="Institucioni / Shkolla" className="p-4 bg-gray-50 rounded-xl border" />
            </div>
          </section>

          {/* SEKSIONI 3: AFTESITE (DINAMIKE) */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-mikePurple border-b pb-2">3. Aftësitë dhe Gjuhët</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {role === 'babysitter' && (
                <>
                  <label><input type="checkbox" name="skills" value="Bebe" /> Kujdes për bebe</label>
                  <label><input type="checkbox" name="skills" value="Lojera" /> Aktivitete edukative</label>
                  <label><input type="checkbox" name="skills" value="Detyra" /> Ndihmë me detyrat</label>
                </>
              )}
              {role === 'kujdestar' && (
                <>
                  <label><input type="checkbox" name="skills" value="Ilaçe" /> Administrim ilaçesh</label>
                  <label><input type="checkbox" name="skills" value="Higjiene" /> Higjienë personale</label>
                  <label><input type="checkbox" name="skills" value="Alzheimer" /> Alzheimer/Demencë</label>
                </>
              )}
              <label><input type="checkbox" name="languages" value="Anglisht" /> Anglisht</label>
              <label><input type="checkbox" name="languages" value="Italisht" /> Italisht</label>
            </div>
          </section>

          {/* SEKSIONI 4: DISPONUESHMERIA & PAGESA */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-mikePurple border-b pb-2">4. Disponueshmëria dhe Pagesa</h3>
            <div className="flex flex-wrap gap-4">
              <label><input type="checkbox" name="availability" value="Paradite" /> Paradite</label>
              <label><input type="checkbox" name="availability" value="Pasdite" /> Pasdite</label>
              <label><input type="checkbox" name="availability" value="Plote" /> Kohë e plotë</label>
              <label><input type="checkbox" name="availability" value="Fundjave" /> Fundjavë</label>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="expectedAmount" placeholder="Shuma e pritshme e pagesës" className="p-4 bg-gray-50 rounded-xl border" />
              <select name="isNegotiable" className="p-4 bg-gray-50 rounded-xl border">
                <option value="Po">E negociueshme: Po</option>
                <option value="Jo">E negociueshme: Jo</option>
              </select>
            </div>
          </section>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-mikePurple text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition disabled:bg-gray-400"
          >
            {status === 'sending' ? 'Duke u dërguar...' : 'Dërgo Aplikimin'}
          </button>
        </form>
      </div>
       <Footer />
    </main>
  );
}