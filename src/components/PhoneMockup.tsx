import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, ChevronRight, Wifi, Battery, Signal, 
  Wallet, Trophy, Users, Shield, Zap, Play, ArrowUpRight, 
  Sparkles, CheckCircle, Bell, Plus, Smartphone 
} from 'lucide-react';

import homeImg from '../images/home.png.png';
import matchesImg from '../images/matches.png.png';
import detailsImg from '../images/details.png.png';
import aboutImg from '../images/about.png.png';

const imageMap: Record<string, string> = {
  home: homeImg,
  lobby: matchesImg,
  detail: detailsImg,
  community: aboutImg,
};

export default function PhoneMockup() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [useCustomImages, setUseCustomImages] = useState<Record<string, boolean>>({
    home: true,
    lobby: true,
    detail: true,
    community: true,
  });

  // Define our custom screens modeled inside the device exactly matching user screenshots
  const slides = [
    {
      id: 'home',
      title: 'Hammad\'s Esports Profile',
      subtitle: 'Welcome screen with active wallet balance ($0.00)',
      render: () => (
        <div className="w-full h-full bg-[#050508] text-white flex flex-col justify-between p-3 select-none font-sans text-left overflow-y-auto">
          <div>
            {/* Mock App Status Bar */}
            <div className="flex justify-between items-center text-[9px] text-gray-400 mb-2 font-mono">
              <span>12:45 PM</span>
              <div className="flex items-center gap-1">
                <Signal className="w-2.5 h-2.5" />
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Mock App Header */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FF7A00] to-yellow-500 flex items-center justify-center font-orbitron font-black text-[9px] text-black">
                  FF
                </div>
                <span className="font-orbitron font-black text-[10px] tracking-wider text-white">FF TOURNAMENT</span>
              </div>
              <div className="bg-[#121620] border border-white/5 px-2 py-0.5 rounded-full text-[9px] flex items-center gap-1 font-mono text-emerald-400">
                <Wallet className="w-2.5 h-2.5" />
                <span>$0.00</span>
              </div>
            </div>

            {/* Profile Welcome Box */}
            <div className="bg-[#0D111A] border border-white/5 rounded-xl p-3 mb-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/40 flex items-center justify-center">
                  <span className="text-yellow-400 text-xs font-bold">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-[11px] text-white leading-tight">
                    Welcome Back, <span className="text-orange-neon">Hammad</span>!
                  </h4>
                  <p className="text-[8px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                    <span className="text-[10px]">●</span> Account Active & Verified
                  </p>
                </div>
              </div>

              {/* Secure Wallet Balance Section */}
              <div className="mt-3 pt-2.5 border-t border-white/5 text-center">
                <span className="text-[8px] text-gray-400 uppercase tracking-wider block">Secure Wallet Balance</span>
                <span className="text-base font-black text-emerald-400 font-mono mt-0.5 block">$0.00</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="bg-gradient-to-r from-orange-neon to-yellow-500 text-black font-bold text-[9px] py-1.5 rounded-lg flex items-center justify-center gap-1 shadow-md shadow-orange-500/10">
                  <span className="text-[10px] font-black">+</span> Deposit
                </button>
                <button className="bg-[#161C2C] border border-white/5 text-white font-bold text-[9px] py-1.5 rounded-lg flex items-center justify-center gap-1">
                  <span>💼</span> Withdraw
                </button>
              </div>
            </div>

            {/* Carousel Banner Platform Announcement */}
            <div className="bg-gradient-to-b from-[#131926] to-[#0A0D15] border border-white/5 rounded-xl p-3 relative overflow-hidden shadow-lg">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[7.5px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.2 rounded font-black uppercase">
                  🔥 PLATFORM UPDATE
                </span>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-orange-neon" />
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                </div>
              </div>
              <h5 className="font-orbitron font-black text-[10px] text-white leading-tight uppercase tracking-wide">
                SECURE MASSIVE TOURNAMENT PAYOUTS
              </h5>
              <p className="text-[8px] text-gray-400 leading-relaxed mt-1">
                Super fast automated withdrawal systems. Play PUBG, Free Fire & Ludo tournaments to earn real cash rewards daily!
              </p>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="border-t border-white/5 bg-[#090D16] pt-1 pb-1 px-2 -mx-3 -mb-3 grid grid-cols-5 text-center font-sans">
            <div className="flex flex-col items-center cursor-pointer text-orange-neon">
              <span className="text-xs">🏠</span>
              <span className="text-[7px] font-bold mt-0.5">Home</span>
              <span className="w-1 h-1 rounded-full bg-orange-neon mt-0.5" />
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">🎮</span>
              <span className="text-[7px] font-medium mt-0.5">Matches</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💳</span>
              <span className="text-[7px] font-medium mt-0.5">Deposit</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💰</span>
              <span className="text-[7px] font-medium mt-0.5">Withdraw</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">👤</span>
              <span className="text-[7px] font-medium mt-0.5">About Me</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lobby',
      title: 'Booyah Solo Challenge',
      subtitle: 'Esports arena custom matchmaking schedule',
      render: () => (
        <div className="w-full h-full bg-[#050508] text-white flex flex-col justify-between p-3 select-none font-sans text-left overflow-y-auto">
          <div>
            {/* Mock App Status Bar */}
            <div className="flex justify-between items-center text-[9px] text-gray-400 mb-2 font-mono">
              <span>12:46 PM</span>
              <div className="flex items-center gap-1">
                <Signal className="w-2.5 h-2.5" />
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Mock App Header */}
            <div className="flex justify-between items-center mb-2.5">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FF7A00] to-yellow-500 flex items-center justify-center font-orbitron font-black text-[9px] text-black">
                  FF
                </div>
                <span className="font-orbitron font-black text-[10px] tracking-wider text-white">FF TOURNAMENT</span>
              </div>
              <div className="bg-[#121620] border border-white/5 px-2 py-0.5 rounded-full text-[9px] flex items-center gap-1 font-mono text-emerald-400">
                <Wallet className="w-2.5 h-2.5" />
                <span>$0.00</span>
              </div>
            </div>

            <h4 className="font-orbitron font-bold text-xs text-white uppercase tracking-wide">Esports Tournament Lobby</h4>
            <p className="text-[8px] text-gray-400 mt-0.5 leading-tight mb-3">Select and participate in matches to claim daily cash prizes.</p>

            {/* Match Card Listing */}
            <div className="bg-[#0D111A] border border-white/5 rounded-xl overflow-hidden shadow-lg">
              
              {/* Card Banner Image Render (CSS-illustrated premium banner matching screenshot) */}
              <div className="relative h-20 w-full bg-gradient-to-br from-slate-900 to-amber-950 flex flex-col justify-between p-2">
                {/* Banner graphics */}
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                <span className="relative z-10 self-start text-[7px] bg-black/80 text-white font-black px-1.5 py-0.2 rounded-md uppercase tracking-wide">
                  Free Fire
                </span>

                <div className="relative z-10 text-center flex flex-col items-center">
                  <span className="font-orbitron font-black text-xs text-yellow-400 tracking-wider drop-shadow-md">SOLO CUSTOM</span>
                  <span className="font-orbitron font-black text-[7px] text-white tracking-widest uppercase bg-orange-600/80 px-1 rounded-sm mt-0.5">ONE MAN SHOW</span>
                </div>

                <div className="relative z-10 flex justify-between items-center text-[7px] text-gray-300 font-bold bg-black/30 p-1 rounded-md">
                  <span>2nd 500 PKR</span>
                  <span className="text-yellow-400 text-[8px] font-black">1st 800 PKR</span>
                  <span>3rd 205 PKR</span>
                </div>
              </div>

              {/* Match Details Content */}
              <div className="p-3 space-y-2.5">
                <div>
                  <h5 className="font-orbitron font-black text-[11px] text-white leading-tight">Booyah Solo Challenge</h5>
                  <div className="flex gap-2.5 mt-1 text-[8px] text-gray-400">
                    <span>📅 Jul 10</span>
                    <span>🕒 12:22 PM</span>
                    <span>🗺️ Bermuda</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-2 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <span className="text-[7px] text-gray-500 uppercase block">Entry Fee</span>
                    <span className="text-[10px] font-black text-white">$50.00</span>
                  </div>
                  <div>
                    <span className="text-[7px] text-gray-500 uppercase block">Prize Pool</span>
                    <span className="text-[10px] font-black text-emerald-400">$800.00</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[8px] text-gray-400">
                    <span>👥</span>
                    <span className="font-bold text-white">1 / 50</span>
                    <span>Slots Left</span>
                  </div>
                  <button className="bg-gradient-to-r from-orange-neon to-yellow-500 text-black font-orbitron font-black text-[8.5px] tracking-wide px-3 py-1 rounded-lg shadow-sm">
                    Register
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="border-t border-white/5 bg-[#090D16] pt-1 pb-1 px-2 -mx-3 -mb-3 grid grid-cols-5 text-center font-sans">
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">🏠</span>
              <span className="text-[7px] font-medium mt-0.5">Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-orange-neon">
              <span className="text-xs">🎮</span>
              <span className="text-[7px] font-bold mt-0.5">Matches</span>
              <span className="w-1 h-1 rounded-full bg-orange-neon mt-0.5" />
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💳</span>
              <span className="text-[7px] font-medium mt-0.5">Deposit</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💰</span>
              <span className="text-[7px] font-medium mt-0.5">Withdraw</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">👤</span>
              <span className="text-[7px] font-medium mt-0.5">About Me</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'detail',
      title: 'Match Inset Information',
      subtitle: 'Review specific rules, registration status & specs',
      render: () => (
        <div className="w-full h-full bg-[#050508] text-white flex flex-col justify-between p-3 select-none font-sans text-left overflow-y-auto">
          <div>
            {/* Mock App Status Bar */}
            <div className="flex justify-between items-center text-[9px] text-gray-400 mb-2 font-mono">
              <span>12:47 PM</span>
              <div className="flex items-center gap-1">
                <Signal className="w-2.5 h-2.5" />
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Mock App Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-400 cursor-pointer flex items-center gap-0.5">
                  <span>←</span> Back to Tournaments
                </span>
              </div>
              <div className="bg-[#121620] border border-white/5 px-2 py-0.5 rounded-full text-[9px] flex items-center gap-1 font-mono text-emerald-400">
                <Wallet className="w-2.5 h-2.5" />
                <span>$0.00</span>
              </div>
            </div>

            {/* Detail Banner Illustrate */}
            <div className="relative h-24 w-full bg-gradient-to-r from-red-950 to-slate-900 border border-white/5 rounded-lg overflow-hidden mb-3">
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/30" />
              
              <div className="absolute inset-x-2 bottom-2 text-center">
                <span className="font-orbitron font-black text-[13px] text-yellow-400 tracking-wider">SOLO CUSTOM</span>
                <span className="font-orbitron font-black text-[8px] text-white tracking-widest uppercase bg-orange-600 px-1 rounded-sm mt-0.5 block w-max mx-auto">ONE MAN SHOW</span>
              </div>
            </div>

            {/* Specifications quick pills list */}
            <div className="grid grid-cols-5 gap-1 text-center text-[7px] text-gray-300 font-medium mb-3">
              <div className="bg-[#121620] p-1 rounded">👤 Mode: Solo</div>
              <div className="bg-[#121620] p-1 rounded">🗺️ Bermuda</div>
              <div className="bg-[#121620] p-1 rounded">🚪 Room: Cust</div>
              <div className="bg-[#121620] p-1 rounded">👥 Slots: 50</div>
              <div className="bg-[#121620] p-1 rounded text-orange-neon">🟢 Open Now</div>
            </div>

            {/* Title Block */}
            <h4 className="font-orbitron font-black text-xs text-white leading-tight">Booyah Solo Challenge</h4>
            <span className="inline-block text-[7px] bg-blue-600 text-white font-bold px-1.5 py-0.2 rounded mt-1.5 mb-3.5">
              Free Fire
            </span>

            {/* About Tournament segment */}
            <div className="space-y-1.5">
              <span className="text-[8px] text-gold uppercase tracking-wider font-bold block">About Tournament</span>
              <p className="text-[8px] text-gray-400 leading-relaxed bg-[#0D111A] border border-white/5 p-2 rounded-lg">
                Welcome to the Booyah Solo Challenge – an intense 50-player Free Fire Solo Custom Tournament where only the strongest survive. Compete on the standard Bermuda map, secure max kills, and grab real payouts directly credited to your active EasyPaisa or JazzCash wallets.
              </p>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="border-t border-white/5 bg-[#090D16] pt-1 pb-1 px-2 -mx-3 -mb-3 grid grid-cols-5 text-center font-sans">
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">🏠</span>
              <span className="text-[7px] font-medium mt-0.5">Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-orange-neon">
              <span className="text-xs">🎮</span>
              <span className="text-[7px] font-bold mt-0.5">Matches</span>
              <span className="w-1 h-1 rounded-full bg-orange-neon mt-0.5" />
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💳</span>
              <span className="text-[7px] font-medium mt-0.5">Deposit</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💰</span>
              <span className="text-[7px] font-medium mt-0.5">Withdraw</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">👤</span>
              <span className="text-[7px] font-medium mt-0.5">About Me</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'community',
      title: 'Guild WhatsApp Connection',
      subtitle: 'Live support channel and tournament management',
      render: () => (
        <div className="w-full h-full bg-[#050508] text-white flex flex-col justify-between p-3 select-none font-sans text-left overflow-y-auto">
          <div>
            {/* Mock App Status Bar */}
            <div className="flex justify-between items-center text-[9px] text-gray-400 mb-2 font-mono">
              <span>12:48 PM</span>
              <div className="flex items-center gap-1">
                <Signal className="w-2.5 h-2.5" />
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Mock App Header */}
            <div className="flex justify-between items-center mb-2.5">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded bg-gradient-to-br from-[#FF7A00] to-yellow-500 flex items-center justify-center font-orbitron font-black text-[9px] text-black">
                  FF
                </div>
                <span className="font-orbitron font-black text-[10px] tracking-wider text-white">FF TOURNAMENT</span>
              </div>
              <div className="bg-[#121620] border border-white/5 px-2 py-0.5 rounded-full text-[9px] flex items-center gap-1 font-mono text-emerald-400">
                <Wallet className="w-2.5 h-2.5" />
                <span>$0.00</span>
              </div>
            </div>

            {/* Header section title */}
            <h4 className="font-orbitron font-black text-xs text-white uppercase tracking-wider flex items-center gap-1">
              <span className="text-yellow-400">⭐</span> ABOUT & COMMUNITY HUB
            </h4>
            <p className="text-[7.5px] text-gray-400 leading-tight mt-0.5 mb-3">
              View official bio details, manage your profile, write feedback, and read terms.
            </p>

            {/* Tabs row buttons */}
            <div className="grid grid-cols-2 gap-1 mb-3 bg-[#0D111A] p-0.5 rounded-lg border border-white/5 text-center text-[8.5px] font-bold">
              <span className="bg-[#161C2C] text-orange-neon px-2 py-1 rounded-md cursor-pointer border-b-2 border-orange-neon">
                🛡️ About & Links
              </span>
              <span className="text-gray-400 px-2 py-1 rounded-md cursor-pointer">
                👤 Edit Profile
              </span>
            </div>

            {/* Rating / Review Link row and Log Out option */}
            <div className="flex justify-between items-center text-[8.5px] mb-3 text-gray-400 px-1">
              <span className="flex items-center gap-1 font-bold text-slate-300">
                💬 Reviews & Ratings (3)
              </span>
              <span className="flex items-center gap-1 text-red-400 font-bold cursor-pointer">
                🚪 Log Out
              </span>
            </div>

            {/* WHO WE ARE organization details */}
            <div className="bg-[#0D111A] border border-white/5 rounded-xl p-3 space-y-3.5 shadow-lg">
              <div className="space-y-1">
                <span className="text-[7.5px] text-yellow-500 font-bold uppercase tracking-wider block">🛡️ WHO WE ARE</span>
                <h5 className="font-bold text-[10px] text-yellow-400">Welcome to AURA GAMING</h5>
                <p className="text-[8px] text-gray-400 leading-relaxed">
                  The ultimate destination for competitive eSports gaming. Join custom matchmaking tournaments, sharpen your battle skills, and get real-world rewards daily.
                </p>
              </div>

              {/* Active WhatsApp direct call button */}
              <button className="w-full bg-[#FF7A00] hover:bg-orange-600 text-black font-orbitron font-black text-[9px] py-2 px-1 rounded-xl shadow-md flex items-center justify-center gap-1.5 leading-none uppercase tracking-wider">
                <span>💬</span> JOIN OUR OFFICIAL WHATSAPP GROUP
              </button>

              <div className="text-center">
                <p className="text-[7.5px] text-gray-500 font-medium leading-normal flex items-center justify-center gap-1">
                  <span>🛡️</span> Real-time Match ID Room codes & results shared instantly
                </p>
              </div>
            </div>

          </div>

          {/* Bottom App Navigation Bar */}
          <div className="border-t border-white/5 bg-[#090D16] pt-1 pb-1 px-2 -mx-3 -mb-3 grid grid-cols-5 text-center font-sans">
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">🏠</span>
              <span className="text-[7px] font-medium mt-0.5">Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">🎮</span>
              <span className="text-[7px] font-medium mt-0.5">Matches</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💳</span>
              <span className="text-[7px] font-medium mt-0.5">Deposit</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-400">
              <span className="text-xs">💰</span>
              <span className="text-[7px] font-medium mt-0.5">Withdraw</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-orange-neon">
              <span className="text-xs">👤</span>
              <span className="text-[7px] font-bold mt-0.5">About Me</span>
              <span className="w-1 h-1 rounded-full bg-orange-neon mt-0.5" />
            </div>
          </div>
        </div>
      )
    }
  ];

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSlide]);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handlePrev = () => {
    resetTimer();
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetTimer();
    setDirection(1);
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="phone-showcase" className="flex flex-col items-center justify-center w-full max-w-md mx-auto relative z-10 px-4">
      {/* Visual Title / Context of active slide */}
      <div className="text-center mb-6 h-12">
        <motion.h4
          key={slides[activeSlide].title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base font-orbitron font-bold text-gold tracking-widest uppercase"
        >
          {slides[activeSlide].title}
        </motion.h4>
        <motion.p
          key={slides[activeSlide].subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="text-xs text-slate-300 font-sans mt-1"
        >
          {slides[activeSlide].subtitle}
        </motion.p>
      </div>

      {/* Android Device Container Mockup */}
      <div className="relative w-[280px] h-[550px] rounded-[40px] border-[5px] border-slate-800 bg-black shadow-[0_0_60px_rgba(255,122,0,0.25)] p-2 z-10">
        {/* Shiny Edge reflection */}
        <div className="absolute inset-[1px] rounded-[34px] border border-white/10 pointer-events-none z-30" />
        
        {/* Device camera notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-40 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-white/5 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-indigo-950" />
          </div>
          <div className="w-6 h-1 rounded bg-slate-950 ml-3" />
        </div>

        {/* Screen Display Panel */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-950">
          
          {/* Glass reflection gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />

          {/* Sliding Content */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full h-full"
            >
              {useCustomImages[slides[activeSlide].id] ? (
                <img
                  src={imageMap[slides[activeSlide].id]}
                  alt={slides[activeSlide].title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  onError={() => setUseCustomImages(prev => ({ ...prev, [slides[activeSlide].id]: false }))}
                />
              ) : (
                slides[activeSlide].render()
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Home Navigation bar mockup (Bottom line) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full z-40" />
      </div>

      {/* Controls: Prev/Next & Dots */}
      <div className="flex items-center justify-between w-full mt-6 px-4">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-[#FF7A00] text-white hover:text-black hover:scale-110 transition-all border border-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeSlide ? 1 : -1);
                setActiveSlide(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === idx 
                  ? 'w-7 bg-gradient-to-r from-orange-neon to-gold shadow-[0_0_8px_rgba(255,122,0,0.6)]' 
                  : 'w-2.5 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-[#FF7A00] text-white hover:text-black hover:scale-110 transition-all border border-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mini Device Metadata labels */}
      <div className="mt-4 text-center font-mono text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
        <Smartphone className="w-3.5 h-3.5 text-[#FF7A00]" />
        <span>Fully Interactive Application Mockup</span>
      </div>
    </div>
  );
}
