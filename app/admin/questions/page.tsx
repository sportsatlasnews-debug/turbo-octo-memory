"use client";
import React, { useEffect, useState } from 'react';
import { Plus, Trash2, Edit3, GraduationCap, X } from 'lucide-react';

// 1. Interface për TypeScript
interface IQuestion {
  _id?: string;
  text: string;
  category: string;
  isWritten: boolean;
  options: string[];
  correctAnswer: string;
  maxPoints: number;
}

export default function ManageBabysitterQuestions() {
  // 2. Deklarimi i State-ve
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Zgjidhja e errorit tend
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<IQuestion>({
    text: '',
    category: 'babysitter',
    isWritten: true,
    options: ['', '', '', ''],
    correctAnswer: '',
    maxPoints: 2
  });

  const fetchQuestions = async () => {
    setLoading(true); // Tani TypeScript e njeh kete
    try {
      const res = await fetch('/api/admin/questions?category=babysitter');
      const data = await res.json();
      if (Array.isArray(data)) {
        setQuestions(data);
      }
    } catch (err) {
      console.error("Gabim:", err);
    } finally {
      setLoading(false); // Ketu ishte problemi
    }
  };

  useEffect(() => { 
    fetchQuestions(); 
  }, []);

  // Funksioni që hap modalin për Editim
  const openEditModal = (question: any) => {
    setEditingId(question._id);
    setFormData({
      text: question.text,
      category: question.category,
      isWritten: question.isWritten,
      options: question.options || ['', '', '', ''],
      correctAnswer: question.correctAnswer,
      maxPoints: question.maxPoints
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    const method = editingId ? 'PUT' : 'POST';
    const body = editingId ? { ...formData, _id: editingId } : formData;

    const res = await fetch('/api/admin/questions', {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    
    if (res.ok) {
      setIsModalOpen(false);
      setEditingId(null);
      setFormData({ text: '', category: 'babysitter', isWritten: true, options: ['', '', '', ''], correctAnswer: '', maxPoints: 2 });
      fetchQuestions();
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-black text-mikeDark uppercase italic">Pyetjet: Babysitter</h1>
          <button 
            onClick={() => { setEditingId(null); setIsModalOpen(true); }}
            className="bg-mikeDark text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-mikePurple transition-all text-xs"
          >
            <Plus size={18} /> Shto Pyetje
          </button>
        </header>

        <div className="grid gap-4">
          {questions.map((q: any) => (
            <div key={q._id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex justify-between items-center group">
              <div className="flex-1">
                <p className="font-bold text-mikeDark">{q.text}</p>
                <span className="text-[10px] font-black text-mikePurple uppercase">{q.isWritten ? 'Me shkrim' : 'Alternativa'}</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => openEditModal(q)} 
                  className="p-3 text-gray-400 hover:text-mikePurple hover:bg-purple-50 rounded-xl transition-all"
                >
                  <Edit3 size={18}/>
                </button>
                <button className="p-3 text-gray-300 hover:text-red-500 rounded-xl transition-all">
                  <Trash2 size={18}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Shtim/Editim */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-mikeDark/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-xl rounded-[3rem] p-10 shadow-2xl">
            <h2 className="text-2xl font-black text-mikeDark mb-6 uppercase italic">
              {editingId ? "Edito Pyetjen" : "Shto Pyetje të Re"}
            </h2>
            
            <div className="space-y-4">
              <textarea 
                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-bold text-mikeDark outline-none"
                rows={3}
                value={formData.text}
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                placeholder="Teksti i pyetjes..."
              />
              
              <div className="grid grid-cols-2 gap-4">
                <select 
                  className="bg-gray-50 border-none rounded-2xl p-4 font-bold text-mikeDark outline-none"
                  value={formData.isWritten ? 'true' : 'false'}
                  onChange={(e) => setFormData({...formData, isWritten: e.target.value === 'true'})}
                >
                  <option value="true">Me shkrim</option>
                  <option value="false">Me Alternativa</option>
                </select>
                <input 
                  type="number"
                  className="bg-gray-50 border-none rounded-2xl p-4 font-bold text-mikeDark outline-none"
                  value={formData.maxPoints}
                  onChange={(e) => setFormData({...formData, maxPoints: Number(e.target.value)})}
                />
              </div>

              {!formData.isWritten && (
                <div className="grid grid-cols-2 gap-2 p-4 bg-purple-50 rounded-2xl">
                  {formData.options.map((opt, i) => (
                    <input 
                      key={i} 
                      placeholder={`Opsioni ${['a','b','c','d'][i]}`} 
                      className="bg-white border-none rounded-lg p-2 text-xs font-bold shadow-sm" 
                      value={opt} 
                      onChange={(e) => {
                        const newOpts = [...formData.options];
                        newOpts[i] = e.target.value;
                        setFormData({...formData, options: newOpts});
                      }}
                    />
                  ))}
                </div>
              )}

              <input 
                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-bold text-mikeDark outline-none"
                placeholder="Përgjigja e saktë"
                value={formData.correctAnswer}
                onChange={(e) => setFormData({...formData, correctAnswer: e.target.value})}
              />

              <div className="flex gap-3 mt-4">
                <button onClick={handleSave} className="flex-1 bg-mikeDark text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-mikePurple">
                  {editingId ? "Përditëso" : "Ruaj"}
                </button>
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-4 border-2 border-gray-100 rounded-2xl font-black uppercase text-xs text-gray-400">
                  Anulo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}