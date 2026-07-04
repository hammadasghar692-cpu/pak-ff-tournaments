import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, Award, Zap, Shield, Sparkles, 
  ChevronLeft, ChevronRight, MessageSquare, Play, HelpCircle 
} from 'lucide-react';

import homeImg from '../images/home.png.png';
import matchesImg from '../images/matches.png.png';
import detailsImg from '../images/details.png.png';
import aboutImg from '../images/about.png.png';

const imageMap: Record<string, string> = {
  home: homeImg,
  matches: matchesImg,
  details: detailsImg,
  about: aboutImg,
};

export default function ScreenshotGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomImg, setZoomImg] = useState<number | null>(null);
  const sliderRef = useRef<NodeJS.Timeout | null>(null);

  const [useCustomImages, setUseCustomImages] = useState<Record<string, boolean>>({
    home: true,
    matches: true,
    details: true,
    about: true,
  });

  // Gallery slides represented as high-fidelity app views designed directly in CSS
  const gallery = [
    {
      id: 'home',
      title: 'Hammad\'s Esports Profile',
      sub: 'User dashboard showing verified status, wallet controls, and platform announcements.',
      badge: 'PROFILE DASHBOARD',
      icon: <Sparkles className="w-4 h-4 text-orange-neon" />,
      theme: 'from-orange-neon/10 via-slate-950 to-slate-950',
      render: () => (
        <div className="w-full h-full bg-[#050508] p-5 text-left font-sans flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] bg-[#121620] border border-white/5 px-2 py-0.5 rounded-full text-emerald-400 font-mono font-bold flex items-center gap-1">
                <span>💳</span> $0.00 Wallet
              </span>
              <span className="text-[9px] text-gray-500 font-mono">App Build v4.1</span>
            </div>
            
            <div className="bg-[#0D111A] border border-white/5 rounded-2xl p-4 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/30 flex items-center justify-center">
                  <span className="text-yellow-400 text-sm">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white leading-tight">
                    Welcome Back, <span className="text-orange-neon">Hammad</span>!
                  </h4>
                  <p className="text-[9px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                    <span className="text-[10px]">●</span> Account Active & Verified
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] text-gray-400 uppercase tracking-wider block">Wallet Balance</span>
                <span className="text-sm font-black text-emerald-400 font-mono mt-0.5 block">$0.00</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-gradient-to-r from-orange-neon to-yellow-500 text-black font-bold text-[10px] py-2.5 rounded-xl flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
                <span className="font-black">+</span> Deposit Money
              </button>
              <button className="bg-[#161C2C] border border-white/5 text-white font-bold text-[10px] py-2.5 rounded-xl flex items-center justify-center gap-1">
                <span>💼</span> Withdraw Cashout
              </button>
            </div>
          </div>
          
          <div className="p-3 bg-gradient-to-b from-[#131926] to-[#0A0D15] rounded-xl border border-white/5 text-[9px] text-slate-300 leading-relaxed shadow">
            <span className="text-yellow-400 font-bold block mb-0.5">🔥 PLATFORM UPDATE</span>
            Super fast automated withdrawal systems. Play PUBG, Free Fire & Ludo tournaments to earn real cash rewards daily!
          </div>
        </div>
      )
    },
    {
      id: 'matches',
      title: 'Booyah Solo Challenge',
      sub: 'Interactive tournament list featuring entry fees, direct prize pools, and open registrations.',
      badge: 'MATCHES TOURNAMENTS LOBBY',
      icon: <Play className="w-4 h-4 text-gold" />,
      theme: 'from-gold/10 via-slate-950 to-slate-950',
      render: () => (
        <div className="w-full h-full bg-[#050508] p-5 text-left font-sans flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] bg-orange-neon/15 text-orange-neon border border-orange-neon/20 px-2 py-0.5 rounded-full font-bold">LOBBY OPEN</span>
              <span className="text-[9px] text-gray-500 font-mono">Booyah Arena #1</span>
            </div>

            {/* Match Card Row */}
            <div className="bg-[#0D111A] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-20 bg-gradient-to-r from-slate-950 via-[#1C1A10] to-slate-950 p-3 flex flex-col justify-between">
                <span className="self-start text-[8px] bg-black/80 text-white font-black px-1.5 py-0.5 rounded uppercase">Free Fire</span>
                <div className="text-center">
                  <span className="font-orbitron font-black text-xs text-yellow-400 block tracking-wide">SOLO CUSTOM</span>
                  <span className="font-orbitron font-black text-[8px] text-white tracking-widest bg-orange-600 px-1 rounded-sm mt-0.5">ONE MAN SHOW</span>
                </div>
                <div className="flex justify-between text-[7.5px] text-gray-400 bg-black/40 p-1 rounded">
                  <span>2nd 500 PKR</span>
                  <span className="text-yellow-400 font-bold">1st 800 PKR</span>
                  <span>3rd 205 PKR</span>
                </div>
              </div>

              <div className="p-3.5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-orbitron font-black text-xs text-white">Booyah Solo Challenge</h4>
                    <p className="text-[8.5px] text-gray-400 mt-1">📅 Jul 10 • 🕒 12:22 PM • 🗺️ Bermuda</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-2 flex justify-between text-[10px]">
                  <div>
                    <span className="text-[8px] text-gray-500 uppercase block">Entry Fee</span>
                    <span className="font-bold text-white">$50.00</span>
                  </div>
                  <div>
                    <span className="text-[8px] text-gray-500 uppercase block">Prize Pool</span>
                    <span className="font-bold text-emerald-400">$800.00</span>
                  </div>
                  <div className="text-right flex flex-col justify-end">
                    <span className="text-[8px] text-gray-400">👥 1 / 50 Joined</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-[#121620] rounded-xl border border-white/5 text-[9.5px] text-slate-400 flex justify-between items-center">
            <span>👉 Ready to play and claim your daily cash reward?</span>
            <span className="text-orange-neon font-black cursor-pointer">Register Now →</span>
          </div>
        </div>
      )
    },
    {
      id: 'details',
      title: 'Match Inset Details',
      sub: 'Dive into individual game configurations, rule specifications, and maps.',
      badge: 'TOURNAMENT DETAILS VIEW',
      icon: <Shield className="w-4 h-4 text-orange-neon" />,
      theme: 'from-orange-neon/10 via-slate-950 to-slate-950',
      render: () => (
        <div className="w-full h-full bg-[#050508] p-5 text-left font-sans flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-gray-400 flex items-center gap-1 cursor-pointer">
                <span>←</span> Back to Tournaments
              </span>
              <span className="text-[9px] text-emerald-400 font-bold">🟢 Open Registration</span>
            </div>

            {/* Spec pills banner */}
            <div className="bg-gradient-to-r from-red-950 to-slate-950 h-16 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
              <span className="font-orbitron font-black text-sm text-yellow-400">SOLO CUSTOM SHOWDOWN</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 text-center text-[8px] text-slate-300 font-bold">
              <div className="bg-[#0D111A] border border-white/5 p-1.5 rounded-lg">👤 Solo</div>
              <div className="bg-[#0D111A] border border-white/5 p-1.5 rounded-lg">🗺️ Bermuda</div>
              <div className="bg-[#0D111A] border border-white/5 p-1.5 rounded-lg">🚪 Room</div>
              <div className="bg-[#0D111A] border border-white/5 p-1.5 rounded-lg">👥 50 Max</div>
              <div className="bg-[#0D111A] border border-orange-neon/20 p-1.5 rounded-lg text-orange-neon">🟢 Active</div>
            </div>

            <h4 className="font-orbitron font-black text-sm text-white">Booyah Solo Challenge</h4>
            <span className="inline-block text-[8px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded-md">Free Fire</span>
          </div>

          <div className="p-3.5 bg-[#0D111A] border border-white/5 rounded-xl space-y-1.5">
            <span className="text-[9px] text-yellow-400 font-black block uppercase tracking-wider">About Tournament</span>
            <p className="text-[9px] text-slate-400 leading-relaxed">
              Welcome to the Booyah Solo Challenge – an intense 50-player Free Fire Solo Custom Tournament where only the strongest survive. Compete, secure max kills, and grab real rewards!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'support-hub',
      title: 'Guild WhatsApp Connection',
      sub: 'Connect with community moderators and manage your user preferences instantly.',
      badge: 'COMMUNITY & LINKS HUB',
      icon: <MessageSquare className="w-4 h-4 text-gold" />,
      theme: 'from-gold/10 via-slate-950 to-slate-950',
      render: () => (
        <div className="w-full h-full bg-[#050508] p-5 text-left font-sans flex flex-col justify-between overflow-y-auto">
          <div className="space-y-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider flex items-center gap-1">⭐ ABOUT & COMMUNITY</span>
              <span className="text-[9px] text-red-400 font-bold cursor-pointer">🚪 Log Out</span>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-[#0D111A] p-1 rounded-xl border border-white/5 text-center text-[10px] font-black">
              <span className="bg-[#161C2C] text-orange-neon py-2 rounded-lg border-b-2 border-orange-neon">🛡️ About & Links</span>
              <span className="text-gray-400 py-2 rounded-lg">👤 Edit Profile</span>
            </div>

            <div className="bg-[#0D111A] border border-white/5 rounded-2xl p-4 space-y-4 shadow-xl">
              <div className="space-y-1.5">
                <span className="text-[8px] text-yellow-500 font-bold block uppercase tracking-widest">🛡️ WHO WE ARE</span>
                <h5 className="font-bold text-xs text-yellow-400">Welcome to AURA GAMING</h5>
                <p className="text-[9.5px] text-slate-400 leading-relaxed">
                  The ultimate destination for competitive eSports gaming. Join custom matchmaking tournaments, sharpen your battle skills, and get real-world rewards daily.
                </p>
              </div>

              {/* Action WhatsApp */}
              <button className="w-full bg-[#FF7A00] hover:bg-orange-600 text-black font-orbitron font-black text-[10px] py-3 rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.01]">
                <span>💬</span> JOIN OUR OFFICIAL WHATSAPP GROUP
              </button>
            </div>
          </div>

          <div className="p-2 bg-slate-900/60 rounded-xl border border-white/5 text-[9px] text-slate-400 flex items-center gap-1.5">
            <span>🛡️</span> Real-time Match ID Room codes & results shared instantly.
          </div>
        </div>
      )
    }
  ];

  // Auto play slide every 4 seconds
  useEffect(() => {
    sliderRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (sliderRef.current) clearInterval(sliderRef.current);
    };
  }, [activeIdx]);

  const handlePrev = () => {
    if (sliderRef.current) clearInterval(sliderRef.current);
    setActiveIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (sliderRef.current) clearInterval(sliderRef.current);
    setActiveIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery-section" className="py-20 relative overflow-hidden px-4 md:px-8 bg-slate-950/20">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">APPLICATION VISUALS</span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
              APP <span className="text-gradient-neon">SCREENSHOTS</span> GALLERY
            </h2>
            <p className="font-sans text-[#A0A0A0] max-w-md mt-3 text-sm sm:text-base">
              Explore the premium, dark-themed UI aesthetics of the FF Tournament application. Click to zoom.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="p-3 bg-slate-900/80 border border-white/10 text-white rounded-xl hover:bg-[#FF7A00] hover:text-black transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next screenshot"
              className="p-3 bg-slate-900/80 border border-white/10 text-white rounded-xl hover:bg-[#FF7A00] hover:text-black transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Container Box */}
        <div className="relative">
          {/* Main Slide Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-slate-950 via-[#0C0F1D] to-slate-950 border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
            {/* Gloss reflection shimmer across the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full animate-[pulse_6s_infinite] pointer-events-none" />

            {/* Left Info description panel */}
            <div className="lg:col-span-5 space-y-4 text-left z-10">
              <span className="font-orbitron text-xs font-bold text-gold uppercase tracking-[0.2em] flex items-center gap-1.5">
                {gallery[activeIdx].icon}
                {gallery[activeIdx].badge}
              </span>
              
              <h3 className="font-orbitron text-xl md:text-2xl font-black text-white uppercase leading-snug">
                {gallery[activeIdx].title}
              </h3>
              
              <p className="font-sans text-sm text-gray-400">
                {gallery[activeIdx].sub}
              </p>

              {/* Feature highlight labels */}
              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <p className="flex items-center gap-2">✓ Beautiful responsive Glassmorphism dashboard</p>
                <p className="flex items-center gap-2">✓ Lightweight build optimized for low-end devices</p>
                <p className="flex items-center gap-2">✓ Real-time automated data synchronization</p>
              </div>

              {/* Click to Zoom Trigger */}
              <button
                onClick={() => setZoomImg(activeIdx)}
                className="mt-4 flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-xs font-orbitron font-bold text-white px-4.5 py-2.5 rounded-lg border border-white/5 cursor-pointer hover:scale-105 transition-transform"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>ZOOM VIEWPORT</span>
              </button>
            </div>

            {/* Right Display Render representation (looks like actual phone mockup screenshot screen) */}
            <div className="lg:col-span-7 flex justify-center z-10">
              <div 
                onClick={() => setZoomImg(activeIdx)}
                className={`relative w-full max-w-md h-[280px] rounded-2xl border border-white/10 bg-gradient-to-br ${gallery[activeIdx].theme} overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-zoom-in group transition-all duration-300 hover:scale-[1.015]`}
              >
                {/* Visual Glass Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none group-hover:scale-110 transition-transform" />
                
                {/* Embedded High Fidelity App Page */}
                {useCustomImages[gallery[activeIdx].id] ? (
                  <img
                    src={imageMap[gallery[activeIdx].id]}
                    alt={gallery[activeIdx].title}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    onError={() => setUseCustomImages(prev => ({ ...prev, [gallery[activeIdx].id]: false }))}
                  />
                ) : (
                  gallery[activeIdx].render()
                )}

                {/* Hover indicator banner */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <span className="bg-orange-neon text-black font-orbitron font-black text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Maximize2 className="w-4.5 h-4.5 stroke-[2.5px]" />
                    ZOOM PREVIEW
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Micro dots pagination indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to screenshot ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx 
                    ? 'w-6 bg-[#FF7A00] shadow-[0_0_8px_rgba(255,122,0,0.5)]' 
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Zoom Lightbox Modal overlay */}
        <AnimatePresence>
          {zoomImg !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomImg(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl bg-[#090D16] border border-gold/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,122,0,0.25)] relative h-[400px]"
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setZoomImg(null)}
                  className="absolute top-4 right-4 z-40 p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-white transition-colors cursor-pointer border border-white/5"
                >
                  ✕
                </button>

                {/* Embedded High Fidelity App View */}
                <div className="w-full h-full relative p-4">
                  <div className="absolute bottom-4 left-4 z-30 bg-slate-950/80 border border-white/5 px-4 py-2.5 rounded-xl text-left">
                    <span className="font-orbitron font-bold text-[10px] text-gold uppercase tracking-widest">{gallery[zoomImg].badge}</span>
                    <h4 className="font-orbitron font-bold text-sm text-white">{gallery[zoomImg].title}</h4>
                    <p className="font-sans text-xs text-gray-400 mt-0.5">{gallery[zoomImg].sub}</p>
                  </div>
                  
                  {/* Actual screen layout */}
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 relative">
                    {useCustomImages[gallery[zoomImg].id] ? (
                      <img
                        src={imageMap[gallery[zoomImg].id]}
                        alt={gallery[zoomImg].title}
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                        onError={() => setUseCustomImages(prev => ({ ...prev, [gallery[zoomImg].id]: false }))}
                      />
                    ) : (
                      gallery[zoomImg].render()
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
