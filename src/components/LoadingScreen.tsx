import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap } from 'lucide-react';
import FFLogo from './FFLogo';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Allow fadeout animation
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Animated Glowing Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
          
          {/* Neon Glow spots */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-neon/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px] animate-pulse-slow" />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo and Icon Shield Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative mb-6"
            >
              <FFLogo size={140} className="animate-pulse drop-shadow-[0_0_20px_rgba(255,122,0,0.3)]" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-orbitron text-3xl font-black tracking-widest uppercase mb-1"
            >
              <span className="text-white">FF</span>{' '}
              <span className="text-gradient-neon">TOURNAMENT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-xs uppercase tracking-[0.3em] text-[#A0A0A0] mb-8"
            >
              Pakistan's Elite Esports Platform
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-64 h-[4px] bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5 relative mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-neon to-gold rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                layoutId="progress"
              />
            </div>

            {/* Percentage Indicator */}
            <div className="font-mono text-sm tracking-widest text-orange-neon font-bold">
              {Math.min(progress, 100)}%
            </div>

            {/* Loading text status */}
            <div className="font-sans text-[10px] text-[#A0A0A0]/60 uppercase tracking-widest mt-1">
              {progress < 40 && 'Initializing system files...'}
              {progress >= 40 && progress < 75 && 'Loading custom lobbies...'}
              {progress >= 75 && progress < 100 && 'Securing payment protocols...'}
              {progress >= 100 && 'Ready for match!'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
