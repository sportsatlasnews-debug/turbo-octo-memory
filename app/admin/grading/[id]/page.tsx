"use client";
import React, { useState, useEffect } from 'react';
import { Save, AlertCircle, CheckCircle } from 'lucide-react';

export default function GradingPage({ params }: { params: { id: string } }) {
  const [submission, setSubmission] = useState<any>(null);
  const [grades, setGrades] = useState<Record<string, number>>({});

  // Simulohet marrja e të dhënave nga API
  const handleGradeChange = (answerId: string, value: number, max: number) => {
    if (value > max) value = max; // Sigurohet që mos t'i japë më shumë pikë se limiti
    setGrades({ ...grades, [answerId]: value });
  };

  const submitGrades = async () => {
    // API Call: PATCH /api/submissions/[id] me 'grades'
    const total = Object.values(grades).reduce((a, b) => a + b, 0);
    console.log("Duke ruajtur gradimin...", { grades, total });
    alert(`Testi u gradua me ${total} pikë!`);
  };

  if (!submission) return <div className="p-10 text-center">Duke ngarkuar testin...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-black text-mikeDark">Vlerësimi i Testit</h1>
            <p className="text-gray-500 font-medium">Aplikanti: {submission.testTakerId}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Pikët Totale</p>
            <p className="text-4xl font-black text-mikePurple">
              {Object.values(grades).reduce((a, b) => a + b, 0)} / 100
            </p>
          </div>
        </header>

        <div className="space-y-6">
          {submission.answers.map((ans: any, idx: number) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-mikePurple text-[10px] font-black px-2 py-1 rounded-md uppercase">
                    {ans.isWritten ? "Me Shkrim" : "Me Zgjedhje"}
                  </span>
                  <p className="text-xs text-gray-400 font-bold">Pyetja {idx + 1}</p>
                </div>
                <p className="font-bold text-mikeDark mb-4 text-lg">{ans.questionText}</p>
                <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-2">Përgjigja e Aplikantit:</p>
                  <p className="text-gray-700 italic">"{ans.submittedAnswer}"</p>
                </div>
              </div>

              <div className="w-full md:w-48 flex flex-col justify-center border-l border-gray-50 md:pl-8">
                <label className="text-xs font-bold text-gray-400 uppercase mb-2">Pikët (Max: {ans.maxPoints})</label>
                <div className="relative">
                  <input 
                    type="number" 
                    min="0"
                    max={ans.maxPoints}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl font-black text-mikePurple focus:ring-2 focus:ring-mikePurple outline-none"
                    onChange={(e) => handleGradeChange(ans._id, Number(e.target.value), ans.maxPoints)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={submitGrades}
          className="mt-12 w-full bg-mikeDark text-white py-6 rounded-[2rem] font-black hover:bg-mikePurple transition-all shadow-2xl flex items-center justify-center gap-3"
        >
          <Save size={24} /> RUAJ DHE PËRFUNDO VLERËSIMIN
        </button>
      </div>
    </div>
  );
}