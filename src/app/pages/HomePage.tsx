import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { FadeUp, StaggerList, StaggerItem } from '../components/FadeUp';
import { products } from '../data/products';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    else navigate('/products');
  };


  return (
    <div>
      {/* ── HERO ── */}
      
      <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #1a8c8c 40%, #29ABE2 100%)' }}>
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1440 560"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,100 C200,20 400,180 600,100 C800,20 1000,160 1200,80 C1320,40 1400,90 1440,70 L1440,0 L0,0 Z" fill="#8BC34A" opacity="0.6"/>
          <path d="M0,180 C180,80 360,240 600,160 C840,80 1020,220 1200,150 C1320,110 1400,170 1440,140 L1440,0 L0,0 Z" fill="#4FC3F7" opacity="0.5"/>
          <path d="M0,260 C220,160 440,300 680,220 C880,150 1080,280 1280,200 C1380,160 1430,220 1440,200 L1440,0 L0,0 Z" fill="#A5D63A" opacity="0.4"/>
          <path d="M0,340 C200,250 450,380 700,300 C900,230 1100,360 1320,270 C1400,240 1440,290 1440,270 L1440,0 L0,0 Z" fill="#29ABE2" opacity="0.3"/>
        </svg>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="heroWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#29ABE2" />
                <stop offset="100%" stopColor="#7DC242" />
              </linearGradient>
            </defs>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="url(#heroWave)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 text-center">
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Packaging That Performs
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-white/90 drop-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            High-quality rigid plastic packaging solutions designed for industrial excellence.
          </motion.p>

          {/* Search bar */}
          <motion.form
            onSubmit={handleSearch}
            className="flex items-center w-full max-w-xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.4)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          >
            <Search className="w-5 h-5 ml-3 sm:ml-4 flex-shrink-0 text-white/70" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 min-w-0 bg-transparent px-3 sm:px-4 py-3 sm:py-4 text-white placeholder-white/60 outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: '#7DC242' }}
            >
              Search
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          >
            <Link
              to="/products"
              className="text-white px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2 font-semibold shadow-lg hover:scale-105 active:scale-95"
              style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)' }}
            >
              Browse All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1a5c20' }}>
                About Hisahi Plastochem
              </h2>
              <p className="mb-4" style={{ color: '#3a5a3a' }}>
                Welcome to Hisahi Plastochem, your trusted partner in high-quality rigid plastic packaging solutions. Based in Silvassa, we operate a state-of-the-art manufacturing facility equipped with advanced blow moulding technology.
              </p>
              <p className="mb-4" style={{ color: '#3a5a3a' }}>
                Our commitment to precision, quality, and reliability has made us a preferred choice for industries ranging from agrochemicals to edible oils. With a production capacity of 100 MT of raw material processing per month, we deliver excellence at scale.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3"
                style={{ color: '#7DC242' }}
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="relative">
                <img
                  src="/factory.jpeg"
                  alt="Hisahi Plastochem manufacturing facility"
                  className="rounded-lg shadow-xl"
                  style={{ border: '3px solid #A5D63A' }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-16" style={{ background: 'linear-gradient(160deg, #eef8d8 0%, #f0f9f0 50%, #EBF5FC 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 uppercase tracking-tight" style={{ color: '#1a3a1a' }}>
              Industries We Serve
            </h2>
          </FadeUp>
          <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">

            {/* Agro Chemicals */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="22" width="16" height="30" rx="3" stroke="#7DC242" strokeWidth="2"/>
                  <rect x="13" y="16" width="10" height="8" rx="2" stroke="#7DC242" strokeWidth="2"/>
                  <path d="M15 16V12H19V16" stroke="#7DC242" strokeWidth="2"/>
                  <path d="M26 30 Q35 20 44 28" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                  <circle cx="44" cy="30" r="3" fill="#29ABE2"/>
                  <path d="M38 24 L52 24 L52 48 Q52 52 48 52 L42 52 Q38 52 38 48 Z" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                  <line x1="42" y1="30" x2="48" y2="30" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="42" y1="35" x2="48" y2="35" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="42" y1="40" x2="48" y2="40" stroke="#29ABE2" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Agro Chemicals</p>
              </div>
            </StaggerItem>

            {/* Lubricating Oils */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 18 L20 50 Q20 54 24 54 L40 54 Q44 54 44 50 L44 18 Z" stroke="#7DC242" strokeWidth="2" fill="none"/>
                  <path d="M24 18 L24 12 L40 12 L40 18" stroke="#7DC242" strokeWidth="2" fill="none"/>
                  <rect x="30" y="8" width="8" height="6" rx="2" stroke="#7DC242" strokeWidth="2"/>
                  <path d="M44 28 L50 28 L50 36 L44 36" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="26" y1="24" x2="38" y2="24" stroke="#7DC242" strokeWidth="1.5"/>
                  <line x1="26" y1="30" x2="38" y2="30" stroke="#7DC242" strokeWidth="1.5"/>
                  <line x1="26" y1="36" x2="38" y2="36" stroke="#7DC242" strokeWidth="1.5"/>
                  <line x1="26" y1="42" x2="38" y2="42" stroke="#7DC242" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Lubricating Oils</p>
              </div>
            </StaggerItem>

            {/* Petrochemicals */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="32" cy="20" rx="16" ry="6" stroke="#29ABE2" strokeWidth="2"/>
                  <path d="M16 20 L16 46 Q16 52 32 52 Q48 52 48 46 L48 20" stroke="#29ABE2" strokeWidth="2"/>
                  <ellipse cx="32" cy="46" rx="16" ry="4" stroke="#29ABE2" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <line x1="24" y1="14" x2="24" y2="10" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="32" y1="12" x2="32" y2="8" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="40" y1="14" x2="40" y2="10" stroke="#29ABE2" strokeWidth="2"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Petrochemicals &amp; Additives</p>
              </div>
            </StaggerItem>

            {/* Industrial Chemicals */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 10 L26 28 L14 50 Q12 54 16 54 L48 54 Q52 54 50 50 L38 28 L38 10 Z" stroke="#7DC242" strokeWidth="2" fill="none"/>
                  <line x1="24" y1="10" x2="40" y2="10" stroke="#7DC242" strokeWidth="2"/>
                  <circle cx="28" cy="40" r="3" fill="#29ABE2"/>
                  <circle cx="36" cy="44" r="2" fill="#29ABE2"/>
                  <circle cx="32" cy="36" r="2" fill="#7DC242"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Industrial Chemicals</p>
              </div>
            </StaggerItem>

            {/* Edible Oils */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 18 L22 50 Q22 54 26 54 L38 54 Q42 54 42 50 L42 18 Q42 14 38 14 L26 14 Q22 14 22 18 Z" stroke="#7DC242" strokeWidth="2" fill="none"/>
                  <rect x="27" y="10" width="10" height="6" rx="2" stroke="#7DC242" strokeWidth="2"/>
                  <rect x="30" y="7" width="4" height="4" rx="1" stroke="#7DC242" strokeWidth="1.5"/>
                  <path d="M26 30 Q32 24 38 30" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                  <line x1="26" y1="38" x2="38" y2="38" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="26" y1="44" x2="38" y2="44" stroke="#29ABE2" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Edible Oils</p>
              </div>
            </StaggerItem>

            {/* Personal Care */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 22 L24 50 Q24 54 28 54 L36 54 Q40 54 40 50 L40 22 Q40 18 36 18 L28 18 Q24 18 24 22 Z" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                  <rect x="28" y="12" width="8" height="8" rx="2" stroke="#29ABE2" strokeWidth="2"/>
                  <path d="M30 12 L30 8 Q32 6 34 8 L34 12" stroke="#29ABE2" strokeWidth="1.5"/>
                  <rect x="30" y="18" width="4" height="6" rx="1" fill="#29ABE2" opacity="0.3"/>
                  <line x1="28" y1="32" x2="36" y2="32" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="28" y1="38" x2="36" y2="38" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="28" y1="44" x2="36" y2="44" stroke="#29ABE2" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Personal Care / Hygiene</p>
              </div>
            </StaggerItem>

            {/* Water Treatment */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 10 Q40 22 40 32 A8 8 0 0 1 24 32 Q24 22 32 10Z" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                  <path d="M16 44 Q20 40 24 44 Q28 48 32 44 Q36 40 40 44 Q44 48 48 44" stroke="#29ABE2" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d="M16 50 Q20 46 24 50 Q28 54 32 50 Q36 46 40 50 Q44 54 48 50" stroke="#7DC242" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Water Treatment</p>
              </div>
            </StaggerItem>

            {/* Automobile Components */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="14" stroke="#7DC242" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="5" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="32" y1="18" x2="32" y2="24" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="32" y1="40" x2="32" y2="46" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="18" y1="32" x2="24" y2="32" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="40" y1="32" x2="46" y2="32" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="22" y1="22" x2="26" y2="26" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="38" y1="38" x2="42" y2="42" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="42" y1="22" x2="38" y2="26" stroke="#29ABE2" strokeWidth="1.5"/>
                  <line x1="26" y1="38" x2="22" y2="42" stroke="#29ABE2" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Automobile Components</p>
              </div>
            </StaggerItem>

          </StaggerList>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16" style={{ background: 'linear-gradient(160deg, #EBF5FC 0%, #f0f9f0 50%, #eef8d8 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12 uppercase tracking-tight" style={{ color: '#1a3a1a' }}>
              Why Choose Us
            </h2>
          </FadeUp>
          <StaggerList className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-5">

            {/* 100 MT Capacity */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="28" width="12" height="28" rx="2" stroke="#7DC242" strokeWidth="2"/>
                  <rect x="26" y="18" width="12" height="38" rx="2" stroke="#7DC242" strokeWidth="2"/>
                  <rect x="44" y="8" width="12" height="48" rx="2" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="4" y1="56" x2="60" y2="56" stroke="#1a3a1a" strokeWidth="2"/>
                  <path d="M44 14 L50 8 L56 14" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>100 MT/Month Capacity</p>
              </div>
            </StaggerItem>

            {/* 100% Leak Tested */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8 L52 18 L52 36 Q52 50 32 58 Q12 50 12 36 L12 18 Z" stroke="#7DC242" strokeWidth="2" fill="none"/>
                  <path d="M22 32 L28 38 L42 24" stroke="#7DC242" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>100% Leak Tested</p>
              </div>
            </StaggerItem>

            {/* 200-Pt Parison */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="16" stroke="#29ABE2" strokeWidth="2"/>
                  <circle cx="32" cy="32" r="6" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="32" y1="10" x2="32" y2="16" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="32" y1="48" x2="32" y2="54" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="10" y1="32" x2="16" y2="32" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="48" y1="32" x2="54" y2="32" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="18" y1="18" x2="22" y2="22" stroke="#7DC242" strokeWidth="1.5"/>
                  <line x1="42" y1="42" x2="46" y2="46" stroke="#7DC242" strokeWidth="1.5"/>
                  <line x1="46" y1="18" x2="42" y2="22" stroke="#7DC242" strokeWidth="1.5"/>
                  <line x1="22" y1="42" x2="18" y2="46" stroke="#7DC242" strokeWidth="1.5"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>200-Pt Parison Control</p>
              </div>
            </StaggerItem>

            {/* 5-Colour Printing */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="20" width="40" height="28" rx="3" stroke="#7DC242" strokeWidth="2"/>
                  <rect x="20" y="12" width="24" height="10" rx="2" stroke="#7DC242" strokeWidth="2"/>
                  <rect x="20" y="36" width="24" height="8" rx="1" stroke="#29ABE2" strokeWidth="1.5"/>
                  <circle cx="22" cy="28" r="2" fill="#C41230"/>
                  <circle cx="29" cy="28" r="2" fill="#7DC242"/>
                  <circle cx="36" cy="28" r="2" fill="#29ABE2"/>
                  <circle cx="43" cy="28" r="2" fill="#A5D63A"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>5-Colour Screen Printing</p>
              </div>
            </StaggerItem>

            {/* Custom Moulding */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10 L44 10 L50 20 L50 54 L14 54 L14 20 Z" stroke="#7DC242" strokeWidth="2" fill="none"/>
                  <path d="M14 20 L50 20" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="24" y1="30" x2="40" y2="30" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="24" y1="38" x2="40" y2="38" stroke="#29ABE2" strokeWidth="2"/>
                  <line x1="24" y1="46" x2="34" y2="46" stroke="#29ABE2" strokeWidth="2"/>
                  <path d="M38 10 L44 10 L50 20 L38 20 Z" stroke="#7DC242" strokeWidth="1.5" fill="none"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Custom Moulding</p>
              </div>
            </StaggerItem>

            {/* Induction Sealing */}
            <StaggerItem>
              <div className="bg-white rounded-2xl p-3 sm:p-5 flex flex-col items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow duration-300 h-full" style={{ border: '1px solid #e0e8f0' }}>
                <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="18" y="30" width="28" height="22" rx="3" stroke="#29ABE2" strokeWidth="2"/>
                  <path d="M24 30 L24 22 Q24 14 32 14 Q40 14 40 22 L40 30" stroke="#29ABE2" strokeWidth="2" fill="none"/>
                  <circle cx="32" cy="41" r="4" stroke="#7DC242" strokeWidth="2"/>
                  <line x1="32" y1="45" x2="32" y2="49" stroke="#7DC242" strokeWidth="2"/>
                  <path d="M26 10 Q32 6 38 10" stroke="#7DC242" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center" style={{ color: '#1a3a1a' }}>Induction Sealing</p>
              </div>
            </StaggerItem>

          </StaggerList>

          {/* Quote */}
          <FadeUp delay={0.3}>
            <div className="mt-10 text-center px-4">
              <p className="text-base italic" style={{ color: '#3a5a5a' }}>
                "To be best at satisfying customers needs with innovative and tailored packaging products — we will strive to be among the best in the world in manufacturing of rigid plastic packaging."
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(170deg, #ffffff 0%, #d6f0a0 60%, #A5D63A 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1a3a1a' }}>
                Manufacturing Infrastructure
              </h2>
              <p style={{ color: '#3a5a3a' }}>
                Our facility is equipped with the latest technology to ensure superior product quality and efficient production.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1}>
              <StaggerList className="space-y-4 mb-8">
                {[
                  { title: 'Blow Moulding Machines', desc: 'Advanced automated blow moulding technology' },
                  { title: 'Injection Moulding Machines', desc: 'Precision cap and closure manufacturing' },
                  { title: 'Leak Detection Systems', desc: '100% leak testing for quality assurance' },
                  { title: 'Automatic Deflashing System', desc: 'Automated finishing for perfect products' },
                  { title: 'Screen Printing Setup', desc: 'In-house branding and customization' },
                ].map(item => (
                  <StaggerItem key={item.title}>
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#7DC242' }}></div>
                      <div>
                        <h4 className="font-semibold" style={{ color: '#1a3a1a' }}>{item.title}</h4>
                        <p className="text-sm" style={{ color: '#3a5a3a' }}>{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>

              <div className="rounded-lg p-4 mb-6" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(46,170,46,0.3)' }}>
                <p className="font-semibold" style={{ color: '#1a6c1a' }}>Production Capacity</p>
                <p className="text-2xl font-bold" style={{ color: '#1a3a1a' }}>100 MT / Month</p>
                <p className="text-sm" style={{ color: '#3a5a3a' }}>Raw material processing capacity</p>
              </div>

              <Link
                to="/infrastructure"
                className="inline-flex items-center gap-2 transition-colors font-semibold hover:gap-3"
                style={{ color: '#1a6c1a' }}
              >
                View Full Infrastructure
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                {/* Large circle */}
                <div className="rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    width: '200px', height: '200px',
                    border: '5px solid rgba(125,194,66,0.5)',
                    boxShadow: '0 0 0 10px rgba(125,194,66,0.12), 0 16px 48px rgba(46,170,46,0.25)',
                  }}>
                  <img src="/work.jpeg" alt="Factory floor" className="w-full h-full object-cover" />
                </div>
                {/* Small circle */}
                <div className="rounded-full overflow-hidden flex-shrink-0"
                  style={{
                    width: '150px', height: '150px',
                    border: '5px solid rgba(41,171,226,0.5)',
                    boxShadow: '0 0 0 8px rgba(41,171,226,0.1), 0 12px 36px rgba(41,171,226,0.25)',
                  }}>
                  <img src="/work2.jpeg" alt="Manufacturing process" className="w-full h-full object-cover" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #e8f5f9 0%, #f0faf0 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a5c20' }}>
                Featured Products
              </h2>
              <p className="max-w-2xl mx-auto" style={{ color: '#3a6060' }}>
                Explore our range of high-quality containers designed for various industries
              </p>
            </div>
          </FadeUp>

          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-stretch">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id} className="h-full">
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerList>

          <FadeUp delay={0.2}>
            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg transition-all font-semibold shadow-md hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-white" style={{ borderTop: '2px solid #d0eef8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#29ABE2' }}>What Our Clients Say</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#1a4d1a' }}>Customer Testimonials</h2>
              <div className="mt-3 mx-auto w-16 h-0.5" style={{ background: 'linear-gradient(90deg, #7DC242, #29ABE2)' }} />
            </div>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Rajesh Patel',
                company: 'AgroChem Industries, Gujarat',
                text: 'Hisahi Plastochem has been our trusted packaging partner for over 5 years. Their HDPE containers are robust, 100% leak-proof, and the induction sealing is flawless. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Sunil Mehta',
                company: 'Mehta Lubricants, Mumbai',
                text: 'Excellent quality and on-time delivery every single time. The custom branding on our containers looks professional and the containers withstand the toughest industrial conditions.',
                rating: 5,
              },
              {
                name: 'Anita Verma',
                company: 'PureEdible Oils, Pune',
                text: 'We switched to Hisahi containers for our edible oil range and haven\'t looked back. The food-grade quality and consistent sizing make our filling line run smoothly.',
                rating: 5,
              },
            ].map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col" style={{ border: '1px solid #d0eef8', boxShadow: '0 4px 16px rgba(41,171,226,0.08)' }}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#7DC242">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: '#3a5a5a' }}>"{t.text}"</p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7DC242, #29ABE2)' }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: '#1a4d1a' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: '#6a9090' }}>{t.company}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #7DC242 0%, #29ABE2 100%)' }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="white" opacity="0.15"/>
          </svg>
        </div>
        <FadeUp>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for custom packaging solutions tailored to your industry needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/products"
                  className="bg-white px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center font-semibold shadow-lg"
                  style={{ color: '#1a8c8c' }}
                >
                  Browse Products
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
