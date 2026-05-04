"use client";
import React, { useState, useEffect } from 'react';
import { Lock, Send, CheckCircle, ClipboardList, AlertCircle, Loader2 } from 'lucide-react';

// Demo Questions - Në projektin real këto do të vijnë nga DB
const demoQuestions = [
  { _id: "65f1a2b3c4d5e6f7a8b9c0d1", questionText: "Përshkruani misionin e Qendrës M.I.K.E.", points: 20, isWritten: true },
  { _id: "65f1a2b3c4d5e6f7a8b9c0d2", questionText: "Sa kamera sigurie ka qendra?", points: 10, isWritten: false, options: ["10", "15", "23", "30"] },
  { _id: "65f1a2b3c4d5e6f7a8b9c0d3", questionText: "Cili është orari i punës?", points: 10, isWritten: false, options: ["07:30-17:00", "08:00-16:00", "09:00-18:00"] },
  { _id: "65f1a2b3c4d5e6f7a8b9c0d4", questionText: "Si do të vepronit në rastin e një konflikti mes dy fëmijëve?", points: 30, isWritten: true },
  { _id: "65f1a2b3c4d5e6f7a8b9c0d5", questionText: "Cila grupmoshë ndjek programin 'Save the Children'?", points: 30, isWritten: false, options: ["6m-3v", "3v-6v", "6v-10v"] },
];

export default function TestPanel() {
  const [examId, setExamId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [existingSubmission, setExistingSubmission] = useState<any>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. LOGIN & CHECK FOR EXISTING TEST
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/applications?examTakerId=${examId.toUpperCase()}`);
      const data = await res.json();

      if (data) {
        setExistingSubmission(data);
        setIsLoggedIn(true);
      } else {
        // Nëse nuk ka test të kryer, thjesht e lejojmë të bëjë testin e ri
        setIsLoggedIn(true);
      }
    } catch (err) {
      alert("Gabim gjatë verifikimit të ID-së.");
    } finally {
      setLoading(false);
    }
  };

  // 2. SUBMIT ANSWERS TO DATABASE
  const submitTest = async () => {
    setIsSubmitting(true);
    
    const formattedAnswers = demoQuestions.map(q => ({
      questionId: q._id,
      questionText: q.questionText,
      submittedAnswer: answers[q._id] || "",
      maxPoints: q.points,
      isWritten: q.isWritten
    }));

    try {
      const res = await fetch('/api/applications', { // Ose route specifik për submissions
        method: 'PATCH', // Përdorim PATCH ose POST sipas route-it tuaj
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          examTakerId: examId.toUpperCase(),
          gradedAnswers: formattedAnswers,
          status: 'pending'
        }),
      });

      if (res.ok) {
        const result = await res.json();
        setExistingSubmission(result.data);
      }
    } catch (err) {
      alert("Gabim gjatë ruajtjes së testit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // VIEW: LOGIN
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-md w-full border border-purple-50">
          <div className="w-20 h-20 bg-purple-100 text-mikePurple rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Lock size={40} />
          </div>
          <h1 className="text-2xl font-black text-center text-mikeDark mb-2">Panelit i Testimit</h1>
          <p className="text-gray-400 text-center text-sm mb-8 font-medium">Vendosni ID-në tuaj (p.sh. ANX-1234)</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" 
              placeholder="ID e Provimit"
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-mikePurple font-bold text-center uppercase tracking-widest"
              value={examId}
              onChange={(e) => setExamId(e.target.value)}
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-mikePurple text-white py-4 rounded-2xl font-black hover:bg-mikeDark transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : "HYR NË TEST"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // VIEW: SHOW PREVIOUS RESULTS (Nëse e ka bërë testin)
  if (existingSubmission) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl text-center">
          <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
          <h2 className="text-3xl font-black text-mikeDark mb-4">Testi është dorëzuar!</h2>
          <p className="text-gray-500 mb-10">Ju e keni përfunduar këtë provim. Më poshtë janë përgjigjet tuaja të ruajtura.</p>
          
          <div className="text-left space-y-6">
            {existingSubmission.answers.map((ans: any, i: number) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-mikePurple uppercase mb-2">Pyetja {i + 1} ({ans.maxPoints} pikë)</p>
                <p className="font-bold text-mikeDark mb-3">{ans.questionText}</p>
                <p className="text-gray-600 bg-white p-4 rounded-xl border border-gray-100 italic">"{ans.submittedAnswer}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // VIEW: TAKE TEST
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl shadow-sm">
          <h2 className="font-black text-mikeDark">ID: {examId.toUpperCase()}</h2>
          <div className="flex items-center gap-2 text-mikePurple">
            <ClipboardList size={20} />
            <span className="font-bold">5 Pyetje</span>
          </div>
        </div>

        <div className="space-y-8">
          {demoQuestions.map((q, idx) => (
            <div key={q._id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black bg-purple-50 text-mikePurple px-3 py-1 rounded-full uppercase">
                  {q.points} Pikë
                </span>
              </div>
              <p className="text-xl font-bold text-mikeDark mb-6">{idx + 1}. {q.questionText}</p>

              {q.isWritten ? (
                <textarea 
                  className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-100 outline-none focus:border-mikePurple min-h-[150px]"
                  placeholder="Shkruani përgjigjen tuaj këtu..."
                  onChange={(e) => setAnswers({...answers, [q._id]: e.target.value})}
                />
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {q.options?.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => setAnswers({...answers, [q._id]: opt})}
                      className={`p-4 rounded-xl text-left font-bold transition-all border ${
                        answers[q._id] === opt ? 'bg-mikePurple text-white border-mikePurple' : 'bg-gray-50 border-gray-100 hover:border-purple-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={submitTest}
          disabled={isSubmitting || Object.keys(answers).length < 5}
          className="w-full mt-12 bg-mikeDark text-white py-6 rounded-[2rem] font-black hover:bg-mikePurple transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <><Send size={20} /> DORËZO TESTIN</>}
        </button>
      </div>
    </div>
  );
}