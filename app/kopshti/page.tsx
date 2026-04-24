import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Vision from '@/components/Vision';
import ServicesShowcase from '@/components/ServicesShowcase';
import DirectorSection from '@/components/DirectorSection';
import ProgramAndEnvironment from '@/components/ProgramAndEnvironment';
import ParentFeedbacks from '@/components/ParentFeedbacks';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function KopshtiPage() {
  return (
    <main>
      <Navbar />
      {/* We can reuse the Hero, but customize the text specifically for the Kindergarten */}
      <Hero />
      
      {/* Detailed Info Section based on Pershkrimi documents */}
      <section className="py-16 px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-purple-50 rounded-2xl">
            <h3 className="font-bold text-mikePurple mb-2">Siguria</h3>
            <p className="text-sm text-gray-600">Çdo klasë dhe ambient i jashtëm është i pajisur me kamera sigurie për qetësinë tuaj.</p>
          </div>
          <div className="p-8 bg-green-50 rounded-2xl">
            <h3 className="font-bold text-mikeGreen mb-2">Kurrikula</h3>
            <p className="text-sm text-gray-600">Përdorim metodologjinë 'Play and Learn' dhe programin 'Save the Children'.</p>
          </div>
          <div className="p-8 bg-yellow-50 rounded-2xl">
            <h3 className="font-bold text-mikeDark mb-2">Aktivitete</h3>
            <p className="text-sm text-gray-600">Kung-Fu dhe Anglisht të përfshira në tarifë për grupmoshat 3-6 vjeç.</p>
          </div>
        </div>
      </section>

      <Vision />
      <Schedule />
      <ServicesShowcase />
      <DirectorSection />
      <ProgramAndEnvironment />
      <ParentFeedbacks />
      
      <ContactSection />
      
     <Footer />
    </main>
  );
}