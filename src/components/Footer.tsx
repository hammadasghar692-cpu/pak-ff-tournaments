import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Send, Mail, Phone, Facebook, 
  ArrowUpRight, ShieldCheck, HelpCircle, X 
} from 'lucide-react';
import FFLogo from './FFLogo';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-12 relative overflow-hidden px-4 md:px-8">
      {/* Absolute visual glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-orange-neon/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper footer grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo / Bio panel */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <FFLogo size={46} className="hover:scale-105 transition-transform" />
              <span className="font-orbitron text-lg font-black tracking-widest text-white uppercase">
                FF <span className="text-gradient-neon">TOURNAMENT</span>
              </span>
            </div>
            
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Pakistan's premium, high-integrity Free Fire custom matchmaking platform. Compete daily in standard maps, climb leaderboards, and withdraw cash winnings instantly to local wallets.
            </p>

            <div className="flex items-center gap-3.5 pt-1">
              {/* WhatsApp direct click */}
              <a 
                href="https://wa.me/923000000000" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-green-500 rounded-xl border border-white/5 text-gray-400 hover:text-black hover:scale-110 transition-all cursor-pointer"
                title="WhatsApp Support Chat"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Facebook mock connection */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-blue-600 rounded-xl border border-white/5 text-gray-400 hover:text-white hover:scale-110 transition-all cursor-pointer"
                title="Facebook Guild Group"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* Email direct click */}
              <a 
                href="mailto:support@fftournament.com" 
                className="p-2.5 bg-slate-900 hover:bg-[#FF7A00] rounded-xl border border-white/5 text-gray-400 hover:text-black hover:scale-110 transition-all cursor-pointer"
                title="Email Assistance Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav anchor column */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-orbitron text-xs font-bold text-gold uppercase tracking-[0.15em]">ARENA ACCESS</h4>
            
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#hero-section" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1">
                  Home Arena <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#features-section" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1">
                  App Features <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#tournaments-section" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1">
                  Tournament Roster <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#download-section" className="hover:text-[#FF7A00] transition-colors flex items-center gap-1">
                  Download APK <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory details column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-orbitron text-xs font-bold text-gold uppercase tracking-[0.15em]">LEGAL & INTEGRITY</h4>
            
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button 
                  onClick={() => setModalType('privacy')}
                  className="hover:text-gold transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Privacy Policy Guard</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalType('terms')}
                  className="hover:text-gold transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <HelpCircle className="w-4 h-4 text-orange-neon shrink-0" />
                  <span>Esports Terms of Service</span>
                </button>
              </li>
            </ul>

            <div className="p-3.5 bg-slate-900/50 rounded-xl border border-white/5 text-[10px] text-gray-500 leading-relaxed">
              ⚠️ <b>Disclaimer:</b> FF Tournament is an independent platform for Pakistani competitive players. This is not affiliated with or endorsed by Garena International or Free Fire. All intellectual assets belong to their respective copyright holders.
            </div>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 FF Tournament Inc. All Rights Reserved. Designed for Pakistani Champions.</p>
          
          <button 
            onClick={handleScrollToTop}
            className="mt-4 sm:mt-0 font-orbitron font-bold text-[10px] text-gold uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
          >
            ▲ BACK TO LOBBY CAP
          </button>
        </div>

      </div>

      {/* Lightbox / Overlay Dialogs for Privacy and Terms */}
      <AnimatePresence>
        {modalType !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0F172A] border border-gold/30 rounded-2xl p-6.5 max-w-lg w-full relative max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              {/* Close icon */}
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4.5 right-4.5 p-1 bg-slate-900 hover:bg-slate-800 text-gray-400 hover:text-white rounded-full border border-white/5 transition-all cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {modalType === 'privacy' ? (
                <div className="space-y-4 text-left">
                  <h3 className="font-orbitron font-black text-white text-lg uppercase">PRIVACY POLICY GUARD</h3>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    At FF Tournament, your privacy and data security are our absolute priorities. We encrypt all transactions and handle user-provided game credentials strictly under SSL guidelines.
                  </p>
                  <p className="font-sans text-xs text-gold font-bold">1. DATA WE GATHER:</p>
                  <p className="font-sans text-xs text-gray-400">
                    We collect your synced Free Fire UID, Nickname, and mobile cash account details (EasyPaisa/JazzCash) strictly to automate payouts and enforce device fair play policies. We never sell or share this data.
                  </p>
                  <p className="font-sans text-xs text-gold font-bold">2. DEVICE INTEGRITY:</p>
                  <p className="font-sans text-xs text-gray-400">
                    Our anti-cheat systems log device hardware identification (UUID) strictly to detect multiple account cheating rosters or emulate software setups. We do not inspect personal photos or files.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <h3 className="font-orbitron font-black text-white text-lg uppercase">ESPORTS TERMS OF SERVICE</h3>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    By downloading our APK or joining any of our custom lobbies, you agree to comply with our platform codes of conduct.
                  </p>
                  <p className="font-sans text-xs text-gold font-bold">1. FAIR PLAY MANDATE:</p>
                  <p className="font-sans text-xs text-gray-400">
                    The use of hacks, auto-aim files, configuration modifications, or teaming is strictly prohibited. Matches are recorded by live spectator moderators. Violation results in permanent account suspension and device UUID blacklisting.
                  </p>
                  <p className="font-sans text-xs text-gold font-bold">2. DEPOSIT & REFUND POLICY:</p>
                  <p className="font-sans text-xs text-gray-400">
                    Once registered for a match, slots cannot be cancelled within 1 hour of match start. Refunds of entry coins are processed automatically if a tournament is cancelled or rescheduled by our staff.
                  </p>
                </div>
              )}

              <button
                onClick={() => setModalType(null)}
                className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-orbitron font-bold text-xs py-3 rounded-xl border border-white/5 transition-all"
              >
                Acknowledge Protocol
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
