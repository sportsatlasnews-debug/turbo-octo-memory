import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-8">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12"> {/* Këtu mund të ndryshosh w-12 h-12 për përmasa të tjera */}
            <Image 
              src="/assets/logo.png" 
              alt="Qendra MIKE Logo"
              fill
              className="object-contain"
              priority // Siguron që logoja të ngarkohet e para
            />
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-6 text-mikeDark font-medium">
          <Link href="/" className="hover:text-mikePurple">Kreu</Link>
          <Link href="/rreth-nesh" className="hover:text-mikePurple">Rreth Nesh</Link>
          <Link href="/sherbimet" className="hover:text-mikePurple">Shërbimet</Link>
          <Link href="/galeri" className="hover:text-mikePurple">Galeri</Link>
          <Link href="/kopshti#contactSection" className="hover:text-mikePurple">Kontakt</Link>
        </div>
      </div>

      <a href="/bashkohu" className="bg-mikePurple text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition">
        Apliko 
        <span className="text-xs">▼</span>
      </a>
    </nav>
  );
}