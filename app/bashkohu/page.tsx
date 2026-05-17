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
    <main className="bg-gray-50 min-h-screenw-full overflow-x-hidden">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 md:py-16 px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-mikeDark mb-8 md:mb-10">
          Bashkohu me Ekipin
        </h1>
        
        {/* Kontrollet Kryesore - Tani bëhen 1 kolonë në mobile */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-10">
          <select onChange={(e) => setFormType(e.target.value as any)} className="p-4 rounded-xl border bg-white w-full text-sm md:text-base">
            <option value="job">Aplikim për Punë</option>
            <option value="volunteer">Bëhu Vullnetar</option>
          </select>
          <select onChange={(e) => setTargetGroup(e.target.value as any)} className="p-4 rounded-xl border bg-white w-full text-sm md:text-base">
            <option value="mike">Për Qendrën M.I.K.E (Fëmijët)</option>
            <option value="zoterinjte">Për Shtëpinë e Zotërinjve (Të moshuarit)</option>
          </select>
        </div> */}

        {/* Forma kryesore - Përshtatur padding-u për mobile */}
        <form onSubmit={handleSubmit} className="bg-white p-5 sm:p-8 md:p-12 rounded-[1.8rem] md:rounded-[2.5rem] shadow-xl space-y-8">
          
          {/* SEKSIONI 1: TE DHENAT PERSONALE */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">1. Të Dhënat Personale</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="fullName" placeholder="Emër Mbiemër" required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="birthDate" type="date" required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="idNumber" placeholder="Nr. ID / Letërnjoftimi" className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="maritalStatus" placeholder="Statusi Civil (p.sh. Beqar)" className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="phone" placeholder="Numri i Telefonit" required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="email" type="email" placeholder="Email" required className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              {/* Rregulluar col-span që të mos dëmtojë telefonat */}
              <input name="address" placeholder="Adresa" className="p-4 bg-gray-50 rounded-xl border w-full text-sm md:col-span-2" />
            </div>
          </section>

          {/* SEKSIONI 2: ARSIMI & ROLI */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">2. Arsimi dhe Pozicioni</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="role" onChange={(e) => setRole(e.target.value)} className="p-4 bg-gray-50 rounded-xl border w-full text-sm">
                <option value="babysitter">Babysitter</option>
                <option value="kujdestar">Kujdestar për të moshuar</option>
                <option value="pastrues">Punonjëse pastrimi</option>
              </select>
              <input name="education" placeholder="Arsimi (p.sh. Universitet)" className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <input name="institution" placeholder="Institucioni / Shkolla" className="p-4 bg-gray-50 rounded-xl border w-full text-sm md:col-span-2" />
            </div>
          </section>

          {/* SEKSIONI 3: AFTESITE */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">3. Aftësitë dhe Gjuhët</h3>
            {/* Ndryshuar në flex-column për mobile që të mos shtypet teksti */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium text-mikeDark">
              {role === 'babysitter' && (
                <>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Bebe" className="w-4 h-4 accent-mikePurple" /> Kujdes për bebe</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Lojera" className="w-4 h-4 accent-mikePurple" /> Aktivitete edukative</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Detyra" className="w-4 h-4 accent-mikePurple" /> Ndihmë me detyrat</label>
                </>
              )}
              {role === 'kujdestar' && (
                <>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Ilaçe" className="w-4 h-4 accent-mikePurple" /> Administrim ilaçesh</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Higjiene" className="w-4 h-4 accent-mikePurple" /> Higjienë personale</label>
                  <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="skills" value="Alzheimer" className="w-4 h-4 accent-mikePurple" /> Alzheimer/Demencë</label>
                </>
              )}
              <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="languages" value="Anglisht" className="w-4 h-4 accent-mikePurple" /> Anglisht</label>
              <label className="flex items-center gap-2.5 p-1"><input type="checkbox" name="languages" value="Italisht" className="w-4 h-4 accent-mikePurple" /> Italisht</label>
            </div>
          </section>

          {/* SEKSIONI 4: DISPONUESHMERIA & PAGESA */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-mikePurple border-b pb-2">4. Disponueshmëria dhe Pagesa</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-mikeDark">
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Paradite" className="w-4 h-4 accent-mikePurple" /> Paradite</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Pasdite" className="w-4 h-4 accent-mikePurple" /> Pasdite</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Plote" className="w-4 h-4 accent-mikePurple" /> Kohë e plotë</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="availability" value="Fundjave" className="w-4 h-4 accent-mikePurple" /> Fundjavë</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input name="expectedAmount" placeholder="Shuma e pritshme e pagesës" className="p-4 bg-gray-50 rounded-xl border w-full text-sm" />
              <select name="isNegotiable" className="p-4 bg-gray-50 rounded-xl border w-full text-sm">
                <option value="Po">E negociueshme: Po</option>
                <option value="Jo">E negociueshme: Jo</option>
              </select>
            </div>
          </section>

          {/* Butoni i aplikimit */}
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full bg-mikePurple text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:shadow-lg active:scale-[0.99] transition disabled:bg-gray-400"
          >
            {status === 'sending' ? 'Duke u dërguar...' : 'Dërgo Aplikimin'}
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}