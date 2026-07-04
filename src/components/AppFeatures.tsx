import { motion } from 'motion/react';
import { 
  Trophy, Wallet, ArrowUpRight, PlusCircle, Radio, 
  Coins, ShieldAlert, BellRing, UserCheck, Check, Zap, Target
} from 'lucide-react';
import { Feature } from '../types';

export default function AppFeatures() {
  const features: Feature[] = [
    {
      id: 'tournaments',
      title: 'Daily Tournaments',
      description: 'Compete in customized Solo, Duo, and Squad matches hosted every single hour on Bermuda & Purgatory.',
      iconName: 'Trophy'
    },
    {
      id: 'wallet',
      title: 'Secure Wallet',
      description: 'Your balance is safeguarded with double-encrypted protocols. View real-time transaction history anytime.',
      iconName: 'Wallet'
    },
    {
      id: 'withdraw',
      title: 'Fast Withdrawals',
      description: 'Instantly transfer your tournament cash prizes directly to EasyPaisa, JazzCash, or your Bank Account within minutes.',
      iconName: 'ArrowUpRight'
    },
    {
      id: 'deposit',
      title: 'Easy Deposits',
      description: 'Instant, hassle-free deposits via local payment channels with automated balance updates in 30 seconds.',
      iconName: 'PlusCircle'
    },
    {
      id: 'live',
      title: 'Live Match Updates',
      description: 'Access Free Fire Custom Room IDs, passwords, and live slot info automatically when the match countdown starts.',
      iconName: 'Radio'
    },
    {
      id: 'rewards',
      title: 'Real Cash Rewards',
      description: 'Convert your gameplay skills directly into real PKR. Every single kill and rank payout is calculated automatically.',
      iconName: 'Coins'
    },
    {
      id: 'management',
      title: 'Fair Esports Refereeing',
      description: 'Anti-cheat detection with active live moderators. Absolute zero-tolerance for hackers or teaming.',
      iconName: 'ShieldAlert'
    },
    {
      id: 'notifications',
      title: 'Instant Reminders',
      description: 'Never miss custom room openings! Get push notifications and SMS alerts for upcoming games you join.',
      iconName: 'BellRing'
    },
    {
      id: 'profile',
      title: 'Pro Player Profiles',
      description: 'Track your career statistics, match count, overall KD ratio, and showcase your achievements badges.',
      iconName: 'UserCheck'
    }
  ];

  // Helper to resolve icon components dynamically
  const renderIcon = (name: string) => {
    const props = { className: "w-7 h-7 text-gold transition-colors duration-300" };
    switch (name) {
      case 'Trophy': return <Trophy {...props} />;
      case 'Wallet': return <Wallet {...props} />;
      case 'ArrowUpRight': return <ArrowUpRight className="w-7 h-7 text-orange-neon transition-colors duration-300" />;
      case 'PlusCircle': return <PlusCircle {...props} />;
      case 'Radio': return <Radio className="w-7 h-7 text-orange-neon transition-colors duration-300" />;
      case 'Coins': return <Coins {...props} />;
      case 'ShieldAlert': return <ShieldAlert className="w-7 h-7 text-red-400" />;
      case 'BellRing': return <BellRing {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      default: return <Target {...props} />;
    }
  };

  return (
    <section id="features-section" className="py-20 relative overflow-hidden px-4 md:px-8 bg-slate-950/40">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">PRO APPLICATION UTILITIES</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
            STRIKING <span className="text-gradient-gold">APP FEATURES</span>
          </h2>
          <p className="font-sans text-[#A0A0A0] max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Equipped with highly optimized modules to deliver the fastest esports booking and match-playing experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel hover:glass-panel-orange p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between cursor-default border border-white/5 hover:shadow-[0_10px_30px_rgba(255,122,0,0.15)]"
            >
              <div>
                {/* Feature Icon Shield wrapper */}
                <div className="w-14 h-14 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-5 group-hover:border-orange-neon/40 transition-colors duration-300">
                  {renderIcon(feat.iconName)}
                </div>

                <h3 className="font-orbitron text-lg font-bold text-white uppercase tracking-wider group-hover:text-orange-neon transition-colors duration-300 mb-2">
                  {feat.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-[#A0A0A0] leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feat.description}
                </p>
              </div>

              {/* Decorative Subtle indicator bottom right */}
              <div className="flex justify-end mt-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Check className="w-4 h-4 text-orange-neon" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
