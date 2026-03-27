import Link from 'next/link';
import { Compass, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 text-white">
              <Compass className="w-6 h-6 text-[#FF5A00]" />
              <span className="font-heading font-bold text-xl tracking-tighter">NOMADDRIVE</span>
            </Link>
            <p className="text-sm mb-6">
              Premium vans, camper rentals, and mobile living spaces built for freedom. Drive your freedom anywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-wider text-sm">Vehicles</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/explore" className="hover:text-[#FF5A00] transition-colors">Vans for Sale</Link></li>
              <li><Link href="/explore" className="hover:text-[#FF5A00] transition-colors">Camper Rentals</Link></li>
              <li><Link href="/explore" className="hover:text-[#FF5A00] transition-colors">Camping Containers</Link></li>
              <li><Link href="/build" className="hover:text-[#FF5A00] transition-colors">Custom Builds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-[#FF5A00] transition-colors">About Us</Link></li>
              <li><Link href="/stories" className="hover:text-[#FF5A00] transition-colors">Community Stories</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF5A00] transition-colors">Blog & Guides</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF5A00] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/faq" className="hover:text-[#FF5A00] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF5A00] transition-colors">Contact Us</Link></li>
              <li><Link href="/insurance" className="hover:text-[#FF5A00] transition-colors">Insurance & Safety</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF5A00] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} NOMADDRIVE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
