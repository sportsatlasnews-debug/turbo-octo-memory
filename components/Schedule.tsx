"use client";
import { useState } from 'react';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState("6-18 Muaj");
  const ageGroups = ["6-18 Muaj", "2-3 Vjeç", "3-4 Vjeç", "4-5 Vjeç", "5-6 Vjeç"];

  const scheduleData = {
  "6-18 Muaj": [
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
  "2-3 Vjeç": [
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
  "3-4 Vjeç": [
    { time: "07:30–09:00", task: "Mirëseardhja dhe Mëngjesi" },
    { time: "09:00–10:00", task: "Aktivitete Kreative (ngjyrosje, plastelinë)" },
    { time: "10:00–10:45", task: "Art / Lexim Libri" },
    { time: "10:45–11:30", task: "Përgatitja për Drekë" },
    { time: "11:30–12:30", task: "Dreka" },
    { time: "12:30–14:30", task: "Koha e Pushimit" },
    { time: "14:30–15:00", task: "Higjiena e Pasdites dhe Zemra" },
    { time: "15:30–16:30", task: "Muzikë dhe Lexim" },
    { time: "16:30–17:00", task: "Largimi" },
  ],
  "4-5 Vjeç": [
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
  "5-6 Vjeç": [
    { time: "07:30–09:00", task: "Mirëseardhja dhe Mëngjesi" },
    { time: "09:00–10:00", task: "Aktivitete Kreative (ngjyrosje, plastelinë)" },
    { time: "10:00–10:45", task: "Art / Lexim Libri" },
    { time: "10:45–11:30", task: "Përgatitja për Drekë" },
    { time: "11:30–12:30", task: "Dreka" },
    { time: "12:30–14:30", task: "Koha e Pushimit" },
    { time: "14:30–15:00", task: "Higjiena e Pasdites dhe Zemra" },
    { time: "15:30–16:30", task: "Muzikë dhe Lexim" },
    { time: "16:30–17:00", task: "Largimi" },
  ],
  // Add 3-4 Vjeç, 4-5 Vjeç, and 5-6 Vjeç groups...
};

  return (
    <section className="py-20 px-10 bg-gray-50/50" id='programiSipasMoshes'>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-mikePurple font-bold uppercase tracking-widest text-sm">Programet Tona</p>
          <h2 className="text-4xl font-bold text-mikeDark mt-2">Çfarë ofrojmë</h2>
          <p className="text-gray-500 mt-2">Programe të strukturuara sipas grupmoshës</p>
        </div>

        {/* Tab Navigation  */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageGroups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveTab(group)}
              className={`px-6 py-3 rounded-full font-bold transition-all border-2 ${
                activeTab === group 
                ? "bg-mikePurple text-white border-mikePurple shadow-md" 
                : "bg-white text-gray-500 border-gray-200 hover:border-mikePurple/30"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Schedule Table  */}
        <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl bg-white">
          <table className="w-full text-left">
            <thead className="bg-mikePurple text-white">
              <tr>
                <th className="p-6 font-bold uppercase tracking-wider text-sm">Ora</th>
                <th className="p-6 font-bold uppercase tracking-wider text-sm">Aktiviteti</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              {scheduleData[activeTab as keyof typeof scheduleData]?.map((row, i) => (
                <tr key={i} className="hover:bg-purple-50/30 transition-colors group">
                  <td className="p-6 text-gray-600 font-semibold w-1/3 border-r border-gray-50">
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