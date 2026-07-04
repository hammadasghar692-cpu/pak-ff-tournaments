import React from 'react';
import { motion } from 'motion/react';
import { Download, UserPlus, Wallet, Trophy, Swords, ArrowRight, ArrowDown } from 'lucide-react';
import { StepItem } from '../types';

export default function HowItWorks() {
  const steps: (StepItem & { icon: React.ReactNode })[] = [
    {
      step: '01',
      title: 'Download APK',
      description: 'Grab the latest lightweight APK build from our official website secure link.',
      icon: <Download className="w-5 h-5 text-orange-neon" />
    },
    {
      step: '02',
      title: 'Register',
      description: 'Create your account within 20 seconds. Sync your Free Fire game UID correctly.',
      icon: <UserPlus className="w-5 h-5 text-gold" />
    },
    {
      step: '03',
      title: 'Load Coins',
      description: 'Deposit entry coins instantly via EasyPaisa or JazzCash starting from PKR 30 only.',
      icon: <Wallet className="w-5 h-5 text-orange-neon" />
    },
    {
      step: '04',
      title: 'Join Arena',
      description: 'Pick an open custom matchroom (Solo/Duo/Squad) and book your slot in one click.',
      icon: <Swords className="w-5 h-5 text-gold" />
    },
    {
      step: '05',
      title: 'Win Prize',
      description: 'Check Room details on app, join match, kill rivals and claim the Chicken/Booyah prize!',
      icon: <Trophy className="w-5 h-5 text-orange-neon" />
    },
    {
      step: '06',
      title: 'Withdraw',
      description: 'Cashout your total match winnings to your mobile wallet inside 10 minutes.',
      icon: <UserPlus className="w-5 h-5 text-green-400" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden px-4 md:px-8 bg-slate-950/40">
      {/* Background vector glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">SIX-STEP ESCORTS FLOW</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
            HOW IT <span className="text-gradient-gold">WORKS</span>
          </h2>
          <p className="font-sans text-[#A0A0A0] max-w-xl mx-auto mt-4 text-sm sm:text-base">
            No complex registration hoops. Here is the exact path to elevate from a daily gamer to a paid tournament champion.
          </p>
        </div>

        {/* Steps Grid - Adapts to single-column on mobile, horizontal with arrows on desktops */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 relative">
          
          {steps.map((item, idx) => (
            <div key={item.step} className="relative flex flex-col items-center">
              
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="w-full bg-[#0F172A] rounded-2xl border border-white/5 p-5 flex flex-col items-center text-center relative z-10 group shadow-lg"
              >
                {/* Float-badge of Step Number */}
                <span className="absolute top-3 left-3 font-mono text-[10px] text-gray-500 font-bold bg-slate-950 px-2 py-0.5 rounded border border-white/5 group-hover:text-gold transition-colors">
                  STEP {item.step}
                </span>

                {/* Styled Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center mt-4 mb-4 group-hover:border-orange-neon/50 transition-colors">
                  {item.icon}
                </div>

                {/* Step Title */}
                <h3 className="font-orbitron text-sm font-black text-white uppercase tracking-wider mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              {/* Connecting Arrows */}
              {idx < steps.length - 1 && (
                <>
                  {/* Desktop Right Arrow (hidden on mobile/tablet) */}
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-gold/30">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                  {/* Mobile Down Arrow (hidden on desktop) */}
                  <div className="flex lg:hidden my-3 text-gold/30">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                </>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
