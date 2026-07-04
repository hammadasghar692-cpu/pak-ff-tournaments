import { motion } from 'motion/react';
import { Download, Play, Trophy, Shield, Zap, Flame } from 'lucide-react';
import FFLogo from './FFLogo';

export default function HeroSection({ onExploreClick }: { onExploreClick: () => void }) {
  
  const handleDownload = () => {
    // Trigger real download stream from the user's secure Google Drive link
    window.location.href = "https://drive.usercontent.google.com/download?id=11jh1QfoFWcIMVSD4rxtFGotKCXerKH8B&export=download&authuser=0";

    // Smooth scroll to download details or trigger download
    const el = document.getElementById('download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col items-center lg:items-start justify-center py-2 w-full">
      {/* Dynamic Glowing Blobs for Esports theme */}
      <div className="absolute top-1/3 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-1/4 w-[300px] h-[300px] rounded-full bg-orange-neon/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Esports Live Tournament Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 bg-gradient-to-r from-orange-neon/15 to-gold/15 border border-orange-neon/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,122,0,0.15)]"
        >
          <Flame className="w-4 h-4 text-orange-neon animate-bounce" />
          <span className="font-orbitron font-bold text-[10px] sm:text-xs uppercase tracking-widest text-white">
            Daily Live Rooms & Brackets
          </span>
        </motion.div>

        {/* Brand App Name and Logo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-1.5 mb-4"
        >
          <FFLogo size={46} className="hover:scale-105 transition-transform" />
          <span className="font-orbitron text-xl sm:text-2xl font-black tracking-widest text-white uppercase">
            FF <span className="text-gradient-neon">TOURNAMENT</span>
          </span>
        </motion.div>

        {/* Large Display Heading - Pakistan's Premium Free Fire Tournament Platform */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="font-orbitron text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          Pakistan's Premium <br />
          <span className="text-gradient-neon text-glow-orange">Free Fire</span>{' '}
          <span className="text-gradient-gold text-glow-gold">Tournament</span> Platform
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-sans text-sm sm:text-lg text-slate-300 max-w-2xl mt-5 leading-relaxed"
        >
          Join daily tournaments, win real cash prizes instantly, and compete with the best players in Pakistan. Level up your gaming legacy today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
        >
          {/* Download APK Button */}
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-neon to-gold text-black font-orbitron font-black tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl shadow-[0_4px_25px_rgba(255,122,0,0.4)] hover:shadow-[0_4px_30px_rgba(255,122,0,0.65)] hover:scale-[1.03] transition-all cursor-pointer"
          >
            <Download className="w-4.5 h-4.5 stroke-[2.5px] group-hover:animate-bounce" />
            <span>DOWNLOAD APK</span>
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Join Tournament / Explore Lobbies Button */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 bg-slate-950 hover:bg-slate-900 text-white font-orbitron font-black tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl border-2 border-white/10 hover:border-gold/30 transition-all cursor-pointer shadow-lg"
          >
            <Play className="w-3.5 h-3.5 fill-white group-hover:text-gold group-hover:fill-gold transition-colors" />
            <span>EXPLORE LOBBIES</span>
          </button>
        </motion.div>

        {/* Floating Quick Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 mt-10 text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-widest"
        >
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-orange-neon" /> Instant Cashout</span>
          <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold" /> Fair Play Verified</span>
          <span className="flex items-center gap-1.5"><Trophy className="w-3.5 h-3.5 text-orange-neon" /> PKR 5M+ Distributed</span>
        </motion.div>
      </div>
    </div>
  );
}
