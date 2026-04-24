import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-8">
        {/* Replace with your logo image */}
        <div className="w-12 h-12 bg-mikeYellow rounded-lg flex items-center justify-center font-bold text-white">M</div>
        
        <div className="hidden md:flex space-x-6 text-mikeDark font-medium">
          <Link href="/" className="hover:text-mikePurple">Kreu</Link>
          <Link href="/rreth-nesh" className="hover:text-mikePurple">Rreth Nesh</Link>
          <Link href="/sherbimet" className="hover:text-mikePurple">Shërbimet</Link>
          <Link href="/galeri" className="hover:text-mikePurple">Galeri</Link>
          <Link href="/kontakt" className="hover:text-mikePurple">Kontakt</Link>
        </div>
      </div>

      <a href="/bashkohu" className="bg-mikePurple text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition">
        Apliko 
        <span className="text-xs">▼</span>
      </a>
    </nav>
  );
}