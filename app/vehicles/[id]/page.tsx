import Image from 'next/image';
import Link from 'next/link';
import { Check, Star, Users, Flame, Battery, Shield, ArrowLeft, Calendar, Info } from 'lucide-react';

export default function VehicleDetail() {
  return (
    <div className="bg-[#F5F2EB] min-h-screen pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/explore" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Fleet
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Gallery & Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-zinc-950 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Camper Van</span>
                <div className="flex items-center text-sm font-medium text-zinc-600">
                  <Star className="w-4 h-4 text-[#FF5A00] fill-current mr-1" /> 4.9 (128 Reviews)
                </div>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-zinc-950 mb-2 tracking-tight">The Nomad Pro</h1>
              <p className="text-xl text-zinc-600">The ultimate off-grid adventure vehicle for couples.</p>
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image src="https://picsum.photos/seed/nomadpro_main/1200/800" alt="Nomad Pro Exterior" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <Image src="https://picsum.photos/seed/nomadpro_int1/600/400" alt="Interior Bed" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <Image src="https://picsum.photos/seed/nomadpro_int2/600/400" alt="Kitchen Setup" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center bg-zinc-900 group">
                  <Image src="https://picsum.photos/seed/nomadpro_int3/600/400" alt="Storage" fill className="object-cover opacity-50 group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
                  <span className="relative z-10 text-white font-bold flex items-center gap-2"><Map className="w-5 h-5" /> 360° View</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white p-8 rounded-xl border border-zinc-200">
              <h3 className="font-heading text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-[#F5F2EB] rounded-lg">
                  <Users className="w-8 h-8 text-[#FF5A00] mb-3" />
                  <span className="font-bold text-sm">Sleeps 2</span>
                  <span className="text-xs text-zinc-500 mt-1">Queen Bed</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[#F5F2EB] rounded-lg">
                  <Flame className="w-8 h-8 text-[#FF5A00] mb-3" />
                  <span className="font-bold text-sm">Full Kitchen</span>
                  <span className="text-xs text-zinc-500 mt-1">Stove & Fridge</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[#F5F2EB] rounded-lg">
                  <Battery className="w-8 h-8 text-[#FF5A00] mb-3" />
                  <span className="font-bold text-sm">Off-Grid Power</span>
                  <span className="text-xs text-zinc-500 mt-1">400W Solar</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-[#F5F2EB] rounded-lg">
                  <Shield className="w-8 h-8 text-[#FF5A00] mb-3" />
                  <span className="font-bold text-sm">4-Season</span>
                  <span className="text-xs text-zinc-500 mt-1">Insulated</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">About this vehicle</h3>
              <div className="prose prose-zinc max-w-none text-zinc-600 space-y-4">
                <p>The Nomad Pro is our flagship camper van, built on a reliable Mercedes Sprinter chassis. It's designed specifically for couples or solo travelers who want to explore without sacrificing comfort.</p>
                <p>Featuring a fixed queen-size bed, a fully functional indoor kitchen with an induction cooktop, and a massive garage space for bikes and gear, it's ready for any adventure.</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Indoor hot water shower and cassette toilet</li>
                  <li>Swivel front seats to create a dining area</li>
                  <li>30-gallon fresh water tank</li>
                  <li>Starlink-ready roof mount</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="border-t border-zinc-300 pt-12">
              <h3 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "Is insurance included?", a: "Basic liability is included. Comprehensive coverage is available as an add-on during checkout." },
                  { q: "Do I need a special license to drive this?", a: "No, a standard driver's license is all you need. The van drives very similarly to a large SUV." },
                  { q: "Can I bring my dog?", a: "Yes! We are pet-friendly. A small cleaning fee applies." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg border border-zinc-200">
                    <h4 className="font-bold text-lg mb-2 flex items-start gap-2"><Info className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" /> {faq.q}</h4>
                    <p className="text-zinc-600 ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-xl border border-zinc-200 shadow-xl">
              <div className="flex justify-between items-end mb-6 pb-6 border-b border-zinc-100">
                <div>
                  <span className="block text-sm text-zinc-500 font-medium mb-1">Rental Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-bold text-4xl text-zinc-950">$185</span>
                    <span className="text-zinc-500">/day</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-zinc-500 font-medium mb-1">Purchase Price</span>
                  <span className="font-bold text-xl text-zinc-950">$85,000</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-950 mb-2">Select Dates</label>
                  <div className="flex items-center border border-zinc-300 rounded-sm p-3 cursor-pointer hover:border-zinc-500 transition-colors">
                    <Calendar className="w-5 h-5 text-zinc-400 mr-3" />
                    <span className="text-zinc-600">Check-in — Check-out</span>
                  </div>
                </div>

                <div className="bg-[#F5F2EB] p-4 rounded-lg space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-600">$185 x 7 days</span>
                    <span className="font-medium">$1,295</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Cleaning fee</span>
                    <span className="font-medium">$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-600">Insurance (Basic)</span>
                    <span className="font-medium">Included</span>
                  </div>
                  <div className="border-t border-zinc-300 pt-3 flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>$1,395</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white py-4 rounded-sm font-bold text-lg transition-colors uppercase tracking-wide shadow-lg">
                    Book Rental
                  </button>
                  <button className="w-full bg-white border-2 border-zinc-950 hover:bg-zinc-950 hover:text-white text-zinc-950 py-4 rounded-sm font-bold text-lg transition-colors uppercase tracking-wide">
                    Buy This Van
                  </button>
                </div>
                
                <p className="text-center text-xs text-zinc-500 mt-4">You won't be charged yet.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Dummy Map icon since it wasn't imported from lucide-react in this file scope directly above
function Map(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}
