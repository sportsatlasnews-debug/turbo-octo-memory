"use client";
import React, { useEffect, useState, use } from 'react'; // Shto 'use' këtu
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';

export default function GradeSubmission({ params }: { params: Promise<{ id: string }> }) {
  // 1. Hapim Promise-in e params për të marrë ID-në
  const unwrappedParams = use(params);
  const submissionId = unwrappedParams.id;

  const [submission, setSubmission] = useState<any>(null);
  const [grades, setGrades] = useState<Record<string, number>>({});
  const router = useRouter();

  useEffect(() => {
    // 2. Përdorim submissionId e nxjerrë më lart
    fetch(`/api/admin/submissions`)
      .then(res => res.json())
      .then(data => {
        const found = data.find((s: any) => s._id === submissionId);
        if (found) {
          setSubmission(found);
          const initialGrades: any = {};
          found.answers.forEach((a: any) => initialGrades[a.questionId] = a.gradedPoints || 0);
          setGrades(initialGrades);
        }
      });
  }, [submissionId]); // Dependency është tani ID-ja e thjeshtë

  const handleSave = async () => {
    const totalGrade = Object.values(grades).reduce((a, b) => a + b, 0);
    const updatedAnswers = submission.answers.map((a: any) => ({
      ...a,
      gradedPoints: grades[a.questionId]
    }));

    const res = await fetch('/api/admin/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submissionId: submissionId,
        gradedAnswers: updatedAnswers,
        totalGrade
      })
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    }
  };

  if (!submission) return <div className="p-20 text-center font-bold text-mikeDark">Duke ngarkuar të dhënat e aplikantit...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-gray-400 font-black mb-8 hover:text-mikePurple transition-colors uppercase text-xs tracking-widest">
          <ArrowLeft size={18} /> Kthehu te lista
        </button>

        <header className="flex justify-between items-center mb-10 bg-white p-10 rounded-[3rem] shadow-sm border border-purple-50">
          <div>
            <h1 className="text-3xl font-black text-mikeDark">{submission.testTakerId}</h1>
            <p className="text-mikePurple font-bold uppercase text-[10px] tracking-[0.3em] mt-1">Vlerësimi Profesional</p>
          </div>
          <div className="bg-mikeDark text-white px-8 py-4 rounded-3xl text-center">
            <div className="text-3xl font-black">{Object.values(grades).reduce((a, b) => a + b, 0)}</div>
            <div className="text-[10px] font-bold uppercase opacity-60 tracking-widest">Pikët Totale</div>
          </div>
        </header>

        {/* ... pjesa tjetër e kodit të UI mbetet e njëjtë ... */}
        <div className="space-y-6">
          {submission.answers.map((ans: any) => (
            <div key={ans.questionId} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase ${ans.isWritten ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-mikePurple'}`}>
                  {ans.isWritten ? 'Pyetje me shkrim' : 'Alternativa'}
                </span>
                <span className="text-xs font-bold text-gray-300 italic">Maksimumi: {ans.maxPoints} pikë</span>
              </div>
              <p className="font-bold text-mikeDark text-lg mb-6 leading-relaxed">{ans.questionText}</p>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6 text-gray-600 leading-relaxed relative">
                <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-black text-gray-300 uppercase">Përgjigjja e dhënë:</span>
                "{ans.submittedAnswer}"
              </div>

              <div className="flex items-center gap-4 bg-purple-50/50 p-4 rounded-2xl w-fit">
                <label className="text-xs font-black text-mikePurple uppercase tracking-wider">Vlerësimi:</label>
                <input 
                  type="number"
                  max={ans.maxPoints}
                  min={0}
                  value={grades[ans.questionId]}
                  onChange={(e) => setGrades({...grades, [ans.questionId]: Number(e.target.value)})}
                  className="w-20 p-2 rounded-xl border-2 border-white focus:border-mikePurple outline-none font-black text-center text-mikeDark shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={handleSave}
          className="w-full mt-12 bg-mikeDark text-white py-6 rounded-[2.5rem] font-black hover:bg-mikePurple transition-all shadow-xl shadow-purple-100 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm"
        >
          <Save size={20} /> Ruaj dhe Përfundo
        </button>
      </div>
    </div>
  );
}