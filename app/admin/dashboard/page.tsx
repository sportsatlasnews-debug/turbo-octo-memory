"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, ClipboardCheck, Clock, ChevronRight, Search } from 'lucide-react';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/submissions')
      .then(res => res.json())
      .then(data => {
        setSubmissions(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-mikeDark">Paneli i Menaxhimit</h1>
            <p className="text-gray-500">Vlerësoni testet e aplikantëve të Qendrës M.I.K.E</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <Users className="text-mikePurple" />
            <span className="font-bold text-mikeDark">{submissions.length} Aplikantë</span>
          </div>
        </div>

        <div className="grid gap-4">
          {loading ? (
            <p>Duke ngarkuar të dhënat...</p>
          ) : (
            submissions.map((sub: any) => (
              <div key={sub._id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all">
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${sub.status === 'graded' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                    <ClipboardCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-mikeDark text-lg">{sub.testTakerId}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Clock size={14}/> {new Date(sub.submittedAt).toLocaleDateString()}</span>
                      <span className={sub.status === 'graded' ? 'text-green-500' : 'text-orange-500'}>
                        {sub.status === 'graded' ? `Vlerësuar: ${sub.totalGrade}/100` : 'Pritet Vlerësimi'}
                      </span>
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/admin/grade/${sub._id}`}
                  className="bg-gray-50 hover:bg-mikePurple hover:text-white p-4 rounded-2xl transition-all"
                >
                  <ChevronRight size={20} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}