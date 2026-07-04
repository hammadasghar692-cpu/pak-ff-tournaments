import { motion } from 'motion/react';
import { Star, Quote, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { Review } from '../types';

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: '亗 OP_FAHAD 亗',
      country: 'Lahore, Pakistan',
      avatar: 'https://picsum.photos/seed/fahad/100/100',
      rating: 5,
      comment: 'Best Free Fire custom platform in Pakistan! Won PKR 15,000 in the Sunday Squad Finale and received my payout on EasyPaisa within 10 minutes. Absolute zero hackers!'
    },
    {
      id: 'rev-2',
      name: 'FF_HUNTER',
      country: 'Karachi, Pakistan',
      avatar: 'https://picsum.photos/seed/hunter/100/100',
      rating: 5,
      comment: 'The automatic Room ID and Password delivery system is lightning fast. I do not have to wait in WhatsApp group chats anymore. App size is extremely lightweight as well.'
    },
    {
      id: 'rev-3',
      name: '亗 LEGEND_G 亗',
      country: 'Peshawar, Pakistan',
      avatar: 'https://picsum.photos/seed/legendg/100/100',
      rating: 5,
      comment: 'Support team is highly professional. I entered an incorrect UID during registration, pinged their WhatsApp helpdesk, and they updated my roster slot in 2 minutes. Amazing!'
    },
    {
      id: 'rev-4',
      name: 'LONE_WOLF',
      country: 'Rawalpindi, Pakistan',
      avatar: 'https://picsum.photos/seed/wolf/100/100',
      rating: 5,
      comment: 'Daily Clash Squad 4v4 matches are super intense and high-octane. Their hardware device bans prevent emulators and scripts, ensuring 100% fair play. Fully recommended!'
    }
  ];

  return (
    <section id="reviews-section" className="py-20 relative overflow-hidden px-4 md:px-8">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-orange-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">GUILD COMMUNITY VOICES</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
            WHAT OUR <span className="text-gradient-gold">CHAMPIONS SAY</span>
          </h2>
          <p className="font-sans text-[#A0A0A0] max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Honest feedback from professional Free Fire tournament veterans across major cities in Pakistan.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,122,0,0.3)' }}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#080B13] border border-white/5 hover:border-orange-neon/30 transition-all flex flex-col justify-between shadow-xl relative group cursor-default"
            >
              {/* Floating Quote visual marker */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-orange-neon/10 transition-colors duration-300" />

              {/* Review Comment */}
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic z-10">
                "{rev.comment}"
              </p>

              {/* Bottom Profile Details Row */}
              <div className="flex items-center justify-between mt-6.5 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3.5">
                  {/* Avatar wrapper */}
                  <div className="relative">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full border border-gold/40 object-cover" 
                    />
                    {/* Tiny green active badge on avatar */}
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-xs sm:text-sm font-black text-white tracking-wider uppercase">
                      {rev.name}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-500 font-medium">
                      {rev.country}
                    </p>
                  </div>
                </div>

                {/* Rating Stars row */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Callout Banner */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-slate-500">
            Have you participated in our tournaments? Share your experience with us on our{' '}
            <span className="text-orange-neon cursor-pointer font-bold hover:underline">Official WhatsApp feedback line</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
