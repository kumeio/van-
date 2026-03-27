import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Map, BatteryCharging, BedDouble, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/vanlife-epic/1920/1080" 
            alt="Camper van parked in a cinematic mountain landscape at golden hour" 
            fill 
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
            Own the Road.<br />Live Anywhere.
          </h1>
          <p className="text-lg md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-light">
            Premium vans, camper rentals, and mobile living spaces built for freedom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/explore" className="w-full sm:w-auto bg-[#FF5A00] hover:bg-[#e04f00] text-white px-8 py-4 rounded-sm font-bold text-lg transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
              Book Your Van <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/explore" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm font-bold text-lg transition-colors uppercase tracking-wide flex items-center justify-center">
              Explore Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & SOCIAL PROOF STRIP */}
      <section className="bg-zinc-950 py-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex text-[#FF5A00]">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-white font-medium">Trusted by 10,000+ travelers</span>
          </div>
          <div className="flex items-center gap-8 text-zinc-500 font-heading font-bold text-xl uppercase tracking-widest opacity-70">
            <span>Outside</span>
            <span className="hidden sm:block">NatGeo</span>
            <span>VanLife</span>
            <span className="hidden md:block">GearPatrol</span>
          </div>
        </div>
      </section>

      {/* CORE OFFERINGS SECTION */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">Your Journey, Your Way</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Choose how you want to experience the outdoors with our flexible ownership and rental models.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://picsum.photos/seed/buyvan/800/600" alt="Buy a Van" fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-2">Buy a Van</h3>
                <p className="text-zinc-600 mb-6 h-12">Build your dream home on wheels. Custom and ready-made options available.</p>
                <Link href="/explore" className="inline-flex items-center font-bold text-[#FF5A00] hover:text-zinc-950 transition-colors uppercase tracking-wide text-sm">
                  View Inventory <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://picsum.photos/seed/rentcamper/800/600" alt="Rent a Camper" fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-2">Rent a Camper</h3>
                <p className="text-zinc-600 mb-6 h-12">Adventure without commitment. Fully equipped vans ready for your next trip.</p>
                <Link href="/explore" className="inline-flex items-center font-bold text-[#FF5A00] hover:text-zinc-950 transition-colors uppercase tracking-wide text-sm">
                  Check Availability <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image src="https://picsum.photos/seed/container/800/600" alt="Camping Containers" fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-2">Camping Containers</h3>
                <p className="text-zinc-600 mb-6 h-12">Take your basecamp anywhere. Portable, off-grid living units.</p>
                <Link href="/explore" className="inline-flex items-center font-bold text-[#FF5A00] hover:text-zinc-950 transition-colors uppercase tracking-wide text-sm">
                  Explore Models <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">Featured Fleet</h2>
              <p className="text-lg text-zinc-600 max-w-2xl">Our most popular models, engineered for comfort and off-grid capability.</p>
            </div>
            <Link href="/explore" className="hidden md:inline-flex items-center font-bold text-zinc-950 hover:text-[#FF5A00] transition-colors uppercase tracking-wide text-sm mt-4">
              View All Vehicles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vehicle 1 */}
            <div className="border border-zinc-200 rounded-xl overflow-hidden group flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-zinc-950 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Best Seller</div>
                <Image src="https://picsum.photos/seed/nomadpro/800/600" alt="The Nomad Pro" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold">The Nomad Pro</h3>
                  <div className="text-right">
                    <span className="block text-sm text-zinc-500">From</span>
                    <span className="font-bold text-lg">$185<span className="text-sm font-normal text-zinc-500">/day</span></span>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-zinc-600 mb-6">
                  <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Sleeps 2</span>
                  <span className="flex items-center gap-1"><BatteryCharging className="w-4 h-4" /> Solar 400W</span>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <Link href="/vehicles/nomad-pro" className="text-center border border-zinc-300 hover:border-zinc-950 text-zinc-950 py-3 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
                    Details
                  </Link>
                  <Link href="/vehicles/nomad-pro?book=true" className="text-center bg-zinc-950 hover:bg-zinc-800 text-white py-3 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="border border-zinc-200 rounded-xl overflow-hidden group flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <Image src="https://picsum.photos/seed/weekendwarrior/800/600" alt="Weekend Warrior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold">Weekend Warrior</h3>
                  <div className="text-right">
                    <span className="block text-sm text-zinc-500">From</span>
                    <span className="font-bold text-lg">$145<span className="text-sm font-normal text-zinc-500">/day</span></span>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-zinc-600 mb-6">
                  <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Sleeps 4</span>
                  <span className="flex items-center gap-1"><Map className="w-4 h-4" /> AWD</span>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <Link href="/vehicles/weekend-warrior" className="text-center border border-zinc-300 hover:border-zinc-950 text-zinc-950 py-3 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
                    Details
                  </Link>
                  <Link href="/vehicles/weekend-warrior?book=true" className="text-center bg-zinc-950 hover:bg-zinc-800 text-white py-3 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Vehicle 3 */}
            <div className="border border-zinc-200 rounded-xl overflow-hidden group flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#FF5A00] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">New Model</div>
                <Image src="https://picsum.photos/seed/basecamp/800/600" alt="Basecamp Container" fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold">Basecamp Unit</h3>
                  <div className="text-right">
                    <span className="block text-sm text-zinc-500">Buy From</span>
                    <span className="font-bold text-lg">$45k</span>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-zinc-600 mb-6">
                  <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> Sleeps 2-4</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> 4-Season</span>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <Link href="/vehicles/basecamp" className="text-center border border-zinc-300 hover:border-zinc-950 text-zinc-950 py-3 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
                    Details
                  </Link>
                  <Link href="/vehicles/basecamp?quote=true" className="text-center bg-zinc-950 hover:bg-zinc-800 text-white py-3 rounded-sm font-bold text-sm transition-colors uppercase tracking-wide">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/explore" className="inline-flex items-center font-bold text-zinc-950 hover:text-[#FF5A00] transition-colors uppercase tracking-wide text-sm">
              View All Vehicles <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose NOMADDRIVE?</h2>
              <p className="text-lg text-zinc-400 mb-10">We don't just build vehicles; we engineer freedom. Every van and container is designed to give you the ultimate balance of comfort and adventure.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5A00]/20 flex items-center justify-center text-[#FF5A00]">
                    <Map className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Freedom to travel anytime</h4>
                    <p className="text-zinc-400">No hotel bookings, no strict itineraries. Go where the road takes you.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5A00]/20 flex items-center justify-center text-[#FF5A00]">
                    <BedDouble className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Fully equipped living space</h4>
                    <p className="text-zinc-400">Premium mattresses, functional kitchens, and smart storage solutions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF5A00]/20 flex items-center justify-center text-[#FF5A00]">
                    <BatteryCharging className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Built for off-grid adventures</h4>
                    <p className="text-zinc-400">Robust solar setups and large water tanks mean you can stay out longer.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-xl overflow-hidden">
              <Image src="https://picsum.photos/seed/vaninterior/800/1000" alt="Luxurious van interior" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-950 mb-16 tracking-tight">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-zinc-300 z-0"></div>
            
            {[
              { step: "01", title: "Choose Vehicle", desc: "Select from our fleet of premium camper vans or containers." },
              { step: "02", title: "Customize or Book", desc: "Pick your dates for rental, or customize your build for purchase." },
              { step: "03", title: "Pickup or Delivery", desc: "Grab the keys at our hub or have it delivered to your driveway." },
              { step: "04", title: "Start Journey", desc: "Hit the road with 24/7 support and comprehensive insurance." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-[#F5F2EB] shadow-md flex items-center justify-center font-heading font-bold text-3xl text-[#FF5A00] mb-6">
                  {item.step}
                </div>
                <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE / BRAND STORY */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/campfire/1920/1080" alt="People around a campfire next to a van" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-zinc-950/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Go where roads end.</h2>
          <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed">
            Sleep under the stars. Wake anywhere. We believe that the best experiences aren't found in hotels, but at the end of a dirt road. Your home. Your journey.
          </p>
          <Link href="/stories" className="inline-flex items-center font-bold text-white hover:text-[#FF5A00] transition-colors uppercase tracking-wide text-lg border-b-2 border-[#FF5A00] pb-1">
            Read Community Stories <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-950 mb-4 tracking-tight">Stories from the Road</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F2EB] p-10 rounded-xl relative">
              <div className="flex text-[#FF5A00] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl font-medium text-zinc-900 mb-8 italic">"Best travel experience of my life. The Nomad Pro had everything we needed for 2 weeks off-grid in Utah. Felt like home anywhere we parked."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/user1/100/100" alt="Sarah J." fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h5 className="font-bold">Sarah & Mike</h5>
                  <span className="text-sm text-zinc-500">Rented The Nomad Pro</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F2EB] p-10 rounded-xl relative">
              <div className="flex text-[#FF5A00] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl font-medium text-zinc-900 mb-8 italic">"We bought a custom van from NOMADDRIVE last year. The build quality is exceptional, and the team was incredible throughout the design process."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/user2/100/100" alt="David T." fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h5 className="font-bold">David T.</h5>
                  <span className="text-sm text-zinc-500">Custom Van Owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#FF5A00] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 tracking-tighter">Your Adventure Starts Today</h2>
          <p className="text-xl mb-10 opacity-90">Limited availability for the upcoming peak season. Secure your dates now.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/explore" className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-800 text-white px-10 py-5 rounded-sm font-bold text-lg transition-colors uppercase tracking-wide shadow-xl">
              Book Now
            </Link>
            <Link href="/contact" className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#FF5A00] text-white px-10 py-5 rounded-sm font-bold text-lg transition-colors uppercase tracking-wide">
              Get a Quote
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-medium">
            <CheckCircle2 className="w-5 h-5" /> <span>Get 10% off your first trip when you book today</span>
          </div>
        </div>
      </section>
    </div>
  );
}
