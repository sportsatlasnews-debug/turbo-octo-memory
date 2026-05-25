"use client";
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Schedule() {
  const { language } = useLanguage();
  
  // Përcaktojmë çelësat e thjeshtë për tab-et në mënyrë që të mos ndikohen nga përkthimi i emrit vizual
  const [activeTab, setActiveTab] = useState<"toddler" | "preschool">("toddler");

  const translations = {
    sq: {
      title: "Rutina Ditore",
      method: "Metodologjia e përdorur: Play & Learn",
      currToddler: "Kurrikula: Save the Children",
      currPreschool: "Kurrikula: Programet e Ministrisë së Arsimit",
      thTime: "Ora",
      thActivity: "Aktivitete",
      tabs: { toddler: "0-3 Vjeç", preschool: "3-6 Vjeç" }
    },
    en: {
      title: "Daily Routine",
      method: "Methodology used: Play & Learn",
      currToddler: "Curriculum: Save the Children",
      currPreschool: "Curriculum: Ministry of Education Programs",
      thTime: "Time",
      thActivity: "Activity",
      tabs: { toddler: "0-3 Years", preschool: "3-6 Years" }
    }
  };

  const t = translations[language];

  const scheduleData = {
    toddler: {
      sq: [
        { time: "07:30–09:00", task: "Mirëseardhja dhe Mëngjesi" },
        { time: "09:00–09:30", task: "Lojëra me Mendje (puzzle, ndërtim)" },
        { time: "09:30–10:00", task: "Kujdesi Higjienik" },
        { time: "10:00–10:45", task: "Zhvillimi Motorik dhe Kognitiv" },
        { time: "10:45–11:30", task: "Përgatitja për Drekë" },
        { time: "11:30–12:30", task: "Dreka" },
        { time: "12:30–14:30", task: "Koha e Pushimit" },
        { time: "14:30–15:00", task: "Higjiena e Pasdites dhe Zemra" },
        { time: "15:30–16:30", task: "Muzikë dhe Lexim" },
        { time: "16:30–17:00", task: "Largimi" },
      ],
      en: [
        { time: "07:30–09:00", task: "Welcome and Breakfast" },
        { time: "09:00–09:30", task: "Mind Games (puzzles, building blocks)" },
        { time: "09:30–10:00", task: "Hygiene Care" },
        { time: "10:00–10:45", task: "Motor and Cognitive Development" },
        { time: "10:45–11:30", task: "Preparation for Lunch" },
        { time: "11:30–12:30", task: "Lunch" },
        { time: "12:30–14:30", task: "Rest Time" },
        { time: "14:30–15:00", task: "Afternoon Hygiene and Snack" },
        { time: "15:30–16:30", task: "Music and Reading" },
        { time: "16:30–17:00", task: "Departure" },
      ]
    },
    preschool: {
      sq: [
        { time: "07:30–09:00", task: "Mirëseardhja dhe Mëngjesi" },
        { time: "09:00–10:00", task: "Aktivitete Kreative (ngjyrosje, plastelinë)" },
        { time: "10:00–10:45", task: "Zhvillimi Motorik dhe Kognitiv" },
        { time: "10:45–11:30", task: "Përgatitja për Drekë" },
        { time: "11:30–12:30", task: "Dreka" },
        { time: "12:30–14:30", task: "Koha e Pushimit" },
        { time: "14:30–15:00", task: "Higjiena e Pasdites dhe Zemra" },
        { time: "15:30–16:30", task: "Muzikë dhe Lexim" },
        { time: "16:30–17:00", task: "Largimi" },
      ],
      en: [
        { time: "07:30–09:00", task: "Welcome and Breakfast" },
        { time: "09:00–10:00", task: "Creative Activities (coloring, playdough)" },
        { time: "10:00–10:45", task: "Motor and Cognitive Development" },
        { time: "10:45–11:30", task: "Preparation for Lunch" },
        { time: "11:30–12:30", task: "Lunch" },
        { time: "12:30–14:30", task: "Rest Time" },
        { time: "14:30–15:00", task: "Afternoon Hygiene and Snack" },
        { time: "15:30–16:30", task: "Music and Reading" },
        { time: "16:30–17:00", task: "Departure" },
      ]
    }
  };

  const ageGroups = [
    { id: "toddler" as const, name: t.tabs.toddler },
    { id: "preschool" as const, name: t.tabs.preschool }
  ];

  return (
    <section className="py-20 px-4 sm:px-10 bg-gray-50/50" id='rutinaDitore'>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-mikeDark mt-2">{t.title}</h2>
          <p className="text-mikePurple font-bold mt-2 italic">{t.method}</p>
          <p className="text-gray-500 mt-1">
            {activeTab === "toddler" ? t.currToddler : t.currPreschool}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-10 py-3 rounded-full font-bold transition-all border-2 ${
                activeTab === group.id 
                  ? "bg-mikePurple text-white border-mikePurple shadow-md" 
                  : "bg-white text-gray-500 border-gray-200 hover:border-mikePurple/30"
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto rounded-[2rem] border border-gray-100 shadow-xl bg-white">
          <table className="w-full text-left min-w-[500px]">
            <thead className="bg-mikePurple text-white">
              <tr>
                <th className="p-6 font-bold uppercase tracking-wider text-sm w-1/3">{t.thTime}</th>
                <th className="p-6 font-bold uppercase tracking-wider text-sm">{t.thActivity}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              {scheduleData[activeTab][language].map((row, i) => (
                <tr key={i} className="hover:bg-purple-50/30 transition-colors group">
                  <td className="p-6 text-gray-600 font-semibold border-r border-gray-50">
                    {row.time}
                  </td>
                  <td className="p-6 text-mikeDark font-medium group-hover:text-mikePurple transition-colors">
                    {row.task}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}