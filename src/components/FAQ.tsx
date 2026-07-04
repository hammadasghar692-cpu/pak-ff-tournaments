import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { FAQ } from '../types';

export default function FAQComponent() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      question: 'How to Join a Tournament?',
      answer: 'First, download our APK and register an account. Ensure your exact Free Fire 10-digit UID is synced with your profile. Navigate to the App Lobby, pick any open Solo/Duo/Squad match, pay the entry fee in coins, and join! The match custom room ID and password will unlock inside your joined card exactly 15 minutes before match start time.'
    },
    {
      id: 'faq-2',
      question: 'How to Deposit Balance/Coins?',
      answer: 'Go to your secure Mobile Wallet inside the application dashboard. Tap the "Deposit" button, specify the PKR amount you wish to add, and pick EasyPaisa or JazzCash. Follow the instant billing instruction on your screen. Your entry coins will load automatically in 30 seconds.'
    },
    {
      id: 'faq-3',
      question: 'How to Withdraw My Cash Winnings?',
      answer: 'Go to your Wallet dashboard, click on "Withdraw", and type the PKR cash value you want to cashout. Choose JazzCash, EasyPaisa, or your Bank Account. Our automated system processes payouts within 10 to 15 minutes, with confirmation sent to your registered phone via SMS.'
    },
    {
      id: 'faq-4',
      question: 'How to Receive Custom Match Room ID & Password?',
      answer: 'You do not need to look at spammy WhatsApp or Messenger chats! Simply open your FF Tournament mobile application, navigate to "My Joined Matches", and find the active matchcard. When the countdown timer reaches 15 minutes, the room ID and password fields will automatically reveal for you. Copy and paste them into your Free Fire custom lobby.'
    },
    {
      id: 'faq-5',
      question: 'When is the Tournament Prize Paid Out?',
      answer: 'Once the Custom match ends, our backend API automatically fetches results from the Free Fire Pakistan server lobby. Match logs and kills charts are analyzed for fair play. Once cleared, total winnings are added directly into your secure wallet within 20 to 30 minutes of match completion.'
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="py-20 relative overflow-hidden px-4 md:px-8 bg-slate-950/40">
      {/* Background neon flares */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-orange-neon/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">HAVE QUERIES? WE CAN HELP</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white uppercase mt-2">
            FREQUENTLY ASKED <span className="text-gradient-gold">QUESTIONS</span>
          </h2>
          <p className="font-sans text-[#A0A0A0] max-w-lg mx-auto mt-4 text-sm sm:text-base">
            Everything you need to know about deposits, custom room schedules, and payouts.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0F172A] border border-white/5 hover:border-orange-neon/20 transition-all overflow-hidden"
              >
                {/* Question Row trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5.5 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0 group-hover:text-orange-neon transition-colors" />
                    <span className="font-orbitron text-sm sm:text-base font-bold text-white uppercase tracking-wide group-hover:text-slate-200 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron arrow indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400 group-hover:text-white"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Answer sliding box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5.5 pb-6 pt-1 border-t border-white/5 font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Guild note */}
        <div className="mt-12 bg-slate-950/60 p-4.5 rounded-2xl border border-white/5 flex items-start gap-3 text-xs text-gray-400 max-w-2xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
          <span>Still have unanswered queries or deposit discrepancies? Chat with our 24/7 dedicated esports helpdesk managers directly via our WhatsApp icon below.</span>
        </div>

      </div>
    </section>
  );
}
