import { motion } from 'motion/react';
import { 
  ShieldCheck, Banknote, Timer, Headset, 
  Sparkles, Zap, Star, ShieldAlert, Cpu 
} from 'lucide-react';
import { WhyChooseUsItem } from '../types';

export default function WhyChooseUs() {
  const items: WhyChooseUsItem[] = [
    {
      title: '100% Fair Play Policy',
      description: 'We run state-of-the-art anti-cheat detection on all registered mobile devices. Hardware UUID bans for config folders, scripts, or emulator hacks.',
      iconName: 'ShieldCheck'
    },
    {
      title: 'Secure & Instant Cashouts',
      description: 'Your wallet earnings are fully encrypted. Request payouts directly from the dashboard and receive funds securely.',
      iconName: 'Banknote'
    },
    {
      title: 'Fast 10-Min Withdrawals',
      description: 'No long holding queues. Our automated dispatch system completes EasyPaisa and JazzCash withdrawals within 10 to 15 minutes max.',
      iconName: 'Timer'
    },
    {
      title: '24/7 Professional Staff',
      description: 'Stuck with a match or room password? Connect instantly with our dedicated support executives on WhatsApp or our elite Discord server.',
      iconName: 'Headset'
    },
    {
      title: 'Mega Daily Events',
      description: 'Never run out of actions! We schedule free-entry practice pools, custom weekend clash squad matches, and high-prize tournaments.',
      iconName: 'Sparkles'
    },
    {
      title: 'Lightweight & Lag-free App',
      description: 'Optimized for lag-free performance on all budget phones. Lightweight Android package size under 12MB that runs smoothly without stutter.',
      iconName: 'Cpu'
    }
  ];

  const renderIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-gold" };
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Banknote': return <Banknote className="w-6 h-6 text-[#FF7A00]" />;
      case 'Timer': return <Timer {...props} />;
      case 'Headset': return <Headset className="w-6 h-6 text-[#FF7A00]" />;
      case 'Sparkles': return <Sparkles {...props} />;
      default: return <Cpu {...props} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden px-4 md:px-8 bg-slate-950/20">
      {/* Background design accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-orange-neon/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">OUR ESPORTS PROMISES</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
            WHY COMPETITIVE <span className="text-gradient-gold">PLAYERS TRUST US</span>
          </h2>
          <p className="font-sans text-[#A0A0A0] max-w-xl mx-auto mt-4 text-sm sm:text-base">
            We operate under the highest standards of integrity and speed to ensure Pakistan's competitive Free Fire community receives the premium care they deserve.
          </p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="p-6.5 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#0A0D16] border border-white/5 hover:border-orange-neon/30 hover:shadow-[0_8px_25px_rgba(255,122,0,0.1)] transition-all cursor-default flex items-start gap-4"
            >
              {/* Icon Container */}
              <div className="p-3.5 bg-slate-950 rounded-xl border border-white/5 shrink-0 flex items-center justify-center">
                {renderIcon(item.iconName)}
              </div>

              {/* Text Context */}
              <div className="space-y-1.5">
                <h3 className="font-orbitron text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
