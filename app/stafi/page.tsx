"use client";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import StaffSection from '@/components/StaffSection';

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <Navbar />
        <StaffSection />
       <Footer />
    </main>
    
  );
}