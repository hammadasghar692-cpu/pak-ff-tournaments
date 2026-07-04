import React from 'react';
import { motion } from 'motion/react';
import { Users, Trophy, DollarSign, Star, Award, Heart } from 'lucide-react';
import { StatItem } from '../types';

export default function Statistics() {
  const stats: (StatItem & { icon: React.ReactNode })[] = [
    {
      value: '10,000+',
      label: 'Active Players',
      suffix: 'Pakistani Gamers',
      icon: <Users className="w-5 h-5 text-orange-neon" />
    },
    {
      value: '2,500+',
      label: 'Completed Tournaments',
      suffix: 'Hourly Matches',
      icon: <Trophy className="w-5 h-5 text-gold" />
    },
    {
      value: 'PKR 5M+',
      label: 'Prize Distributed',
      suffix: 'Instant Payouts',
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />
    },
    {
      value: '4.9 ★',
      label: 'App User Rating',
      suffix: 'Based on 4,000+ reviews',
      icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
    }
  ];

  return (
    <section id="statistics-section" className="py-16 relative overflow-hidden px-4 md:px-8 border-y border-white/5 bg-[#070709]">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-orange-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bento Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,215,0,0.3)' }}
              className="glass-panel-gold p-6 rounded-2xl flex flex-col justify-between border border-gold/15 bg-slate-950/60 shadow-lg relative overflow-hidden group cursor-default"
            >
              {/* Highlight background shine */}
              <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-300" />

              {/* Upper Header info */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-xs text-[#A0A0A0] uppercase tracking-wider">verified figure</span>
                <div className="p-2 bg-slate-900 rounded-lg border border-white/5">
                  {stat.icon}
                </div>
              </div>

              {/* Counter big text */}
              <div>
                <span className="font-orbitron text-3xl md:text-4xl font-black text-white tracking-tight uppercase block group-hover:scale-105 origin-left transition-transform duration-300">
                  {stat.value}
                </span>
                
                <h4 className="font-orbitron text-xs md:text-sm font-bold text-gold uppercase tracking-wider mt-2">
                  {stat.label}
                </h4>
                
                <p className="font-sans text-[10px] text-gray-500 mt-1">
                  {stat.suffix}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom banner reinforcing the high-end gaming feel */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 bg-gradient-to-r from-orange-neon/10 via-slate-950 to-gold/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-3.5 text-left mb-4 sm:mb-0">
            <Award className="w-8 h-8 text-gold animate-bounce" />
            <div>
              <p className="font-orbitron font-black text-sm uppercase text-white tracking-wider">OFFICIALLY RECOGNIZED ESPORTS PORTAL</p>
              <p className="font-sans text-xs text-gray-400 mt-0.5">We maintain strict matchmaking standards in compliance with Free Fire custom room rules.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-orange-neon">
            <Heart className="w-3.5 h-3.5 fill-orange-neon" />
            <span>MADE IN PAKISTAN FOR PAKISTANI HEROES</span>
          </div>
        </div>

      </div>
    </section>
  );
}
