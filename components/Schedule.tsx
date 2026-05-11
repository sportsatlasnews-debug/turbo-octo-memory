"use client";
import { useState } from 'react';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState("0-3 Vjeç");
  const ageGroups = ["0-3 Vjeç", "3-6 Vjeç"];

  const scheduleData = {
    "0-3 Vjeç": [
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
    "3-6 Vjeç": [
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
  };

  return (
    <section className="py-20 px-10 bg-gray-50/50" id='rutinaDitore'>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          {/* <p className="text-mikePurple font-bold uppercase tracking-widest text-sm">Programet Tona</p> */}
          <h2 className="text-4xl font-bold text-mikeDark mt-2">Rutina Ditore</h2>
          <p className="text-mikePurple font-bold mt-2 italic">Metodologjia e përdorur: Play & Learn</p>
          <p className="text-gray-500 mt-1">
            {activeTab === "0-3 Vjeç" 
              ? "Kurrikula: Save the Children" 
              : "Kurrikula: Programet e Ministrisë së Arsimit"}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageGroups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveTab(group)}
              className={`px-10 py-3 rounded-full font-bold transition-all border-2 ${
                activeTab === group 
                ? "bg-mikePurple text-white border-mikePurple shadow-md" 
                : "bg-white text-gray-500 border-gray-200 hover:border-mikePurple/30"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
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