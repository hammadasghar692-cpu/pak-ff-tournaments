import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, Flame, Users, Calendar, Clock, Sword, 
  X, Check, AlertTriangle, ShieldCheck, Wallet, Download
} from 'lucide-react';
import { Tournament } from '../types';

export default function LiveTournaments() {
  const [activeTab, setActiveTab] = useState<'All' | 'Upcoming' | 'Live' | 'Completed'>('All');
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [gameUid, setGameUid] = useState('');
  const [inGameName, setInGameName] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDownloadStep, setShowDownloadStep] = useState(true);

  const triggerApkDownload = () => {
    window.location.href = "https://drive.usercontent.google.com/download?id=11jh1QfoFWcIMVSD4rxtFGotKCXerKH8B&export=download&authuser=0";
  };

  // Seed highly realistic Free Fire tournament rosters
  const [tournaments, setTournaments] = useState<Tournament[]>([
    {
      id: 'tour-1',
      banner: 'linear-gradient(135deg, #1e1b4b 0%, #311005 100%)',
      game: 'Free Fire',
      title: 'Sunday Squad Grand Finale',
      mode: 'Squad',
      entryFee: 150,
      prizePool: 50000,
      date: 'Sunday, July 05, 2026',
      time: '08:00 PM (PKT)',
      joined: 88,
      totalSlots: 100,
      status: 'Upcoming',
      category: 'Bermuda Classic'
    },
    {
      id: 'tour-2',
      banner: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
      game: 'Free Fire',
      title: 'Daily Clash Squad Pro Series',
      mode: 'Duo',
      entryFee: 50,
      prizePool: 10000,
      date: 'Today, July 04, 2026',
      time: '09:30 PM (PKT)',
      joined: 44,
      totalSlots: 48,
      status: 'Live',
      category: 'Clash Squad 4v4'
    },
    {
      id: 'tour-3',
      banner: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
      game: 'Free Fire',
      title: 'Solo Purgatory Survival Rush',
      mode: 'Solo',
      entryFee: 0,
      prizePool: 5000,
      date: 'Today, July 04, 2026',
      time: '04:00 PM (PKT)',
      joined: 50,
      totalSlots: 50,
      status: 'Completed',
      category: 'Purgatory Survival'
    },
    {
      id: 'tour-4',
      banner: 'linear-gradient(135deg, #311005 0%, #450a0a 100%)',
      game: 'Free Fire',
      title: 'Midnight Clash Squad Cup',
      mode: 'Squad',
      entryFee: 100,
      prizePool: 25000,
      date: 'Saturday, July 04, 2026',
      time: '11:50 PM (PKT)',
      joined: 64,
      totalSlots: 96,
      status: 'Upcoming',
      category: 'CS Custom Room'
    },
    {
      id: 'tour-5',
      banner: 'linear-gradient(135deg, #090d16 0%, #1e1b4b 100%)',
      game: 'Free Fire',
      title: 'Kalahari Sandstorm Showdown',
      mode: 'Solo',
      entryFee: 30,
      prizePool: 8000,
      date: 'Monday, July 06, 2026',
      time: '06:00 PM (PKT)',
      joined: 12,
      totalSlots: 50,
      status: 'Upcoming',
      category: 'Kalahari Rush'
    },
    {
      id: 'tour-6',
      banner: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      game: 'Free Fire',
      title: 'Esports Elite Championship #4',
      mode: 'Squad',
      entryFee: 200,
      prizePool: 65000,
      date: 'Friday, July 03, 2026',
      time: '08:00 PM (PKT)',
      joined: 100,
      totalSlots: 100,
      status: 'Completed',
      category: 'Bermuda Hardcore'
    }
  ]);

  const filteredTournaments = tournaments.filter(t => {
    if (activeTab === 'All') return true;
    return t.status === activeTab;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameUid.trim() || !inGameName.trim()) return;

    setIsSubmitting(true);
    // Simulate API registration lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(true);

      // Increment joined slots in local state for selected tournament
      if (selectedTournament) {
        setTournaments(prev => prev.map(t => {
          if (t.id === selectedTournament.id) {
            return { ...t, joined: Math.min(t.joined + 1, t.totalSlots) };
          }
          return t;
        }));
      }
    }, 1500);
  };

  const openRegisterModal = (tour: Tournament) => {
    setSelectedTournament(tour);
    setGameUid('');
    setInGameName('');
    setSuccessMsg(false);
    setShowDownloadStep(true);
  };

  return (
    <section id="tournaments-section" className="py-20 relative overflow-hidden px-4 md:px-8">
      {/* Background graphics */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-orange-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">LIVE BRACKETS & SCHEDULES</span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
              ACTIVE <span className="text-gradient-gold">TOURNAMENT</span> ARENA
            </h2>
            <p className="font-sans text-[#A0A0A0] max-w-lg mt-3 text-sm sm:text-base">
              Real-time available custom matchrooms. Download our APK to access your specific Room ID and Password before match hours.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 mt-6 lg:mt-0 bg-[#0F172A]/80 border border-white/5 p-1.5 rounded-xl font-orbitron text-xs font-bold">
            {(['All', 'Upcoming', 'Live', 'Completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4.5 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-orange-neon to-gold text-black shadow-[0_0_12px_rgba(255,122,0,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {tab} Lobbies
              </button>
            ))}
          </div>
        </div>

        {/* Tournaments Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTournaments.map((tour) => {
              const progressPercentage = (tour.joined / tour.totalSlots) * 100;
              const isFull = tour.joined >= tour.totalSlots;

              return (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#0F172A] rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all flex flex-col justify-between shadow-2xl relative"
                >
                  {/* Banner / Card Header styling */}
                  <div 
                    className="h-36 relative p-4.5 flex flex-col justify-between"
                    style={{ background: tour.banner }}
                  >
                    {/* Dark gradient mask on bottom half */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                    
                    {/* Upper Row: Badges */}
                    <div className="relative z-10 flex justify-between items-center">
                      <span className="bg-slate-950/80 border border-white/10 text-white font-mono text-[9px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Sword className="w-2.5 h-2.5 text-orange-neon" />
                        {tour.mode} Match
                      </span>

                      {/* Status Badges */}
                      {tour.status === 'Live' && (
                        <span className="bg-red-600 text-white font-orbitron font-bold text-[8px] tracking-widest px-2.5 py-0.5 rounded-full animate-pulse flex items-center gap-1 shadow-md">
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                          LIVE
                        </span>
                      )}
                      {tour.status === 'Upcoming' && (
                        <span className="bg-[#FF7A00]/15 border border-[#FF7A00]/40 text-[#FF7A00] font-orbitron font-bold text-[8px] tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          UPCOMING
                        </span>
                      )}
                      {tour.status === 'Completed' && (
                        <span className="bg-slate-800 text-slate-400 font-orbitron font-bold text-[8px] tracking-widest px-2.5 py-0.5 rounded-full">
                          ENDED
                        </span>
                      )}
                    </div>

                    {/* Category Title bottom part */}
                    <div className="relative z-10">
                      <span className="text-[9px] uppercase tracking-wider text-orange-neon font-black block">
                        {tour.category}
                      </span>
                      <h3 className="font-orbitron text-lg font-black tracking-tight text-white mt-0.5 leading-snug">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3.5 mb-5">
                      {/* Grid metrics details */}
                      <div className="grid grid-cols-2 gap-4 bg-slate-950/50 p-3 rounded-xl border border-white/5">
                        <div>
                          <span className="text-[9px] text-gray-400 uppercase tracking-wider">Prize Pool</span>
                          <p className="font-orbitron font-bold text-sm text-gold mt-0.5 font-mono">
                            PKR {tour.prizePool.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] text-gray-400 uppercase tracking-wider text-right block">Entry Fee</span>
                          <p className={`font-orbitron font-bold text-sm mt-0.5 text-right ${tour.entryFee === 0 ? 'text-green-400' : 'text-slate-200'}`}>
                            {tour.entryFee === 0 ? 'FREE' : `PKR ${tour.entryFee}`}
                          </p>
                        </div>
                      </div>

                      {/* Timestamps */}
                      <div className="space-y-1.5 text-xs text-gray-300">
                        <div className="flex items-center gap-2.5">
                          <Calendar className="w-4 h-4 text-[#A0A0A0]" />
                          <span>{tour.date}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-[#A0A0A0]" />
                          <span>{tour.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Slots Progression Bar and Action Button */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-gray-400 mb-1.5 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-gold" />
                          <span>Joined: <b>{tour.joined}</b> / {tour.totalSlots}</span>
                        </span>
                        <span>{Math.round(progressPercentage)}% Full</span>
                      </div>

                      {/* Progress Bar background */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden mb-5">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-neon to-gold rounded-full" 
                          style={{ width: `${progressPercentage}%` }} 
                        />
                      </div>

                      {/* CTA Action Button */}
                      {tour.status === 'Completed' ? (
                        <button 
                          disabled
                          className="w-full py-3 rounded-xl bg-slate-900 text-slate-500 font-orbitron font-bold text-xs uppercase tracking-wider cursor-not-allowed border border-white/5"
                        >
                          Roster Finalized
                        </button>
                      ) : tour.status === 'Live' ? (
                        <button 
                          onClick={() => openRegisterModal(tour)}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-neon text-white font-orbitron font-black text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-[0_4px_15px_rgba(239,68,68,0.25)] cursor-pointer"
                        >
                          Spectate / Join Bracket
                        </button>
                      ) : (
                        <button
                          disabled={isFull}
                          onClick={() => openRegisterModal(tour)}
                          className={`w-full py-3 rounded-xl font-orbitron font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.02] cursor-pointer ${
                            isFull 
                              ? 'bg-slate-900 text-red-500 border border-red-500/20' 
                              : 'bg-gradient-to-r from-orange-neon to-gold text-black shadow-[0_4px_15px_rgba(255,122,0,0.2)] hover:shadow-[0_4px_20px_rgba(255,122,0,0.35)]'
                          }`}
                        >
                          {isFull ? 'SLOTS FULL' : 'REGISTER TO PLAY'}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Fallback for no search/filter matches */}
        {filteredTournaments.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-white/5 mt-6">
            <Trophy className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <p className="text-gray-400 font-sans">No matches found matching this tournament category.</p>
          </div>
        )}

        {/* Modal: Register overlay */}
        <AnimatePresence>
          {selectedTournament && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-lg bg-[#0F172A] rounded-2xl border border-gold/30 p-6 relative overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.15)]"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedTournament(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {!successMsg ? (
                  showDownloadStep ? (
                    <div className="text-center py-4">
                      <div className="w-16 h-16 bg-orange-neon/15 border border-orange-neon/40 text-orange-neon rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-[0_0_15px_rgba(255,122,0,0.2)]">
                        <Download className="w-8 h-8 stroke-[2.5px]" />
                      </div>

                      <h3 className="font-orbitron text-xl font-black text-white uppercase mb-2">
                        MOBILE APP REQUIRED
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-sm mx-auto mb-6 leading-relaxed">
                        To compete in <span className="text-gold"><b>{selectedTournament.title}</b></span>, view live matchroom brackets, and copy your secure custom Room ID & Password, you must download Pakistan's premium FF Tournament mobile app.
                      </p>

                      <div className="space-y-3 max-w-sm mx-auto">
                        <button
                          onClick={triggerApkDownload}
                          className="w-full bg-gradient-to-r from-orange-neon to-gold hover:scale-[1.01] text-black font-orbitron font-black tracking-widest text-xs py-4 rounded-xl shadow-[0_4px_20px_rgba(255,122,0,0.35)] transition-transform flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Download className="w-4 h-4 stroke-[2.5px]" />
                          <span>DOWNLOAD APP APK</span>
                        </button>

                        <button
                          onClick={() => setShowDownloadStep(false)}
                          className="w-full bg-slate-900 hover:bg-slate-800 text-gray-300 font-orbitron font-bold text-[10px] tracking-wider py-3 rounded-xl border border-white/5 transition-all cursor-pointer"
                        >
                          Already have the app? Proceed with UID
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterSubmit}>
                      <div className="flex items-center gap-2 text-gold mb-2">
                        <Trophy className="w-5 h-5" />
                        <span className="font-orbitron font-bold text-xs uppercase tracking-widest">REGISTRATION DESK</span>
                      </div>

                      <h3 className="font-orbitron text-lg font-black text-white uppercase mb-1">
                        {selectedTournament.title}
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mb-6">
                        Provide your valid Game Credential to sync with Pakistan's server custom room API.
                      </p>

                      {/* Info Card inside */}
                      <div className="bg-slate-950 p-4 rounded-xl border border-white/5 mb-5 space-y-2.5 text-xs text-gray-300">
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span className="font-bold text-white uppercase">{selectedTournament.mode} ({selectedTournament.category})</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prize Pool:</span>
                          <span className="font-bold text-gold font-mono">PKR {selectedTournament.prizePool.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Registration Fee:</span>
                          <span className="font-bold text-green-400">
                            {selectedTournament.entryFee === 0 ? 'FREE' : `PKR ${selectedTournament.entryFee}`}
                          </span>
                        </div>
                      </div>

                      {/* Input Field: UID */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">
                            Free Fire Player UID (10 Digits)
                          </label>
                          <input
                            type="text"
                            required
                            pattern="[0-9]{8,12}"
                            placeholder="e.g., 2910384720"
                            value={gameUid}
                            onChange={(e) => setGameUid(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 focus:border-orange-neon/50 outline-none rounded-xl px-4 py-3 text-sm text-white font-mono placeholder:text-gray-600"
                          />
                          <p className="text-[10px] text-slate-500 mt-1">Make sure your ID is 100% correct, prize is sent automatically to this ID profile.</p>
                        </div>

                        {/* Input Field: Nickname */}
                        <div>
                          <label className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">
                            In-Game Nickname (IGN)
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g.,亗 OP_FAHAD 亗"
                            value={inGameName}
                            onChange={(e) => setInGameName(e.target.value)}
                            className="w-full bg-slate-950 border border-white/10 focus:border-orange-neon/50 outline-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600"
                          />
                        </div>

                        {/* Warning notice */}
                        <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-xl flex items-start gap-2 text-[11px] text-orange-300 leading-snug">
                          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-orange-400" />
                          <span>Hacking tools, scripting, configuration overrides, or emulator teammates are strictly banned. Offenders receive an immediate HWID device bans.</span>
                        </div>
                      </div>

                      {/* Pay and Register Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-6 bg-gradient-to-r from-orange-neon to-gold hover:scale-[1.01] text-black font-orbitron font-black tracking-widest text-xs py-4 rounded-xl shadow-[0_4px_20px_rgba(255,122,0,0.3)] disabled:opacity-50 transition-transform cursor-pointer"
                      >
                        {isSubmitting ? 'PROCESSING REGISTRATION...' : 'CONFIRM & JOIN TOURNAMENT'}
                      </button>
                    </form>
                  )   ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="w-10 h-10" />
                    </div>

                    <h3 className="font-orbitron text-xl font-black text-white uppercase mb-2">
                      ROSTER ASSIGNED SUCCESSFULLY!
                    </h3>
                    <p className="font-sans text-sm text-gray-400 max-w-sm mx-auto mb-6">
                      Congratulations <b>{inGameName}</b> (UID: {gameUid}). You have been secured for <b>{selectedTournament.title}</b>.
                    </p>

                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5 text-left text-xs text-gray-300 mb-6 space-y-2">
                      <p className="font-bold text-gold">⚠️ IMPORTANT NEXT STEPS:</p>
                      <p>1. Open your <b>FF Tournament Mobile App</b> on your phone.</p>
                      <p>2. Navigate to <b>"My Matches"</b> inside your dashboard.</p>
                      <p>3. Copy the <b>Room ID & Password</b> which unlocks 15 minutes before the start time ({selectedTournament.time}).</p>
                    </div>

                    <button
                      onClick={() => setSelectedTournament(null)}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-orbitron font-bold text-xs px-6 py-3 rounded-xl border border-white/5"
                    >
                      Close Arena Gate
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
