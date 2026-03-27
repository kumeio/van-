'use client';

import Link from 'next/link';
import { Menu, X, Compass, Map } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-[#FF5A00]" />
              <span className="font-heading font-bold text-2xl tracking-tighter">NOMADDRIVE</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/explore" className="text-sm font-medium hover:text-[#FF5A00] transition-colors">Explore Vehicles</Link>
            <Link href="/build" className="text-sm font-medium hover:text-[#FF5A00] transition-colors">Build Your Van</Link>
            <Link href="/destinations" className="text-sm font-medium hover:text-[#FF5A00] transition-colors">Destinations</Link>
            <Link href="/stories" className="text-sm font-medium hover:text-[#FF5A00] transition-colors">Stories</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:text-zinc-300 transition-colors">Log In</Link>
            <Link href="/explore" className="bg-[#FF5A00] hover:bg-[#e04f00] text-white px-6 py-2.5 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/explore" className="block px-3 py-2 text-base font-medium hover:text-[#FF5A00]">Explore Vehicles</Link>
            <Link href="/build" className="block px-3 py-2 text-base font-medium hover:text-[#FF5A00]">Build Your Van</Link>
            <Link href="/destinations" className="block px-3 py-2 text-base font-medium hover:text-[#FF5A00]">Destinations</Link>
            <Link href="/stories" className="block px-3 py-2 text-base font-medium hover:text-[#FF5A00]">Stories</Link>
            <Link href="/login" className="block px-3 py-2 text-base font-medium text-zinc-400">Log In</Link>
            <Link href="/explore" className="block px-3 py-2 text-base font-bold text-[#FF5A00]">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
