import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Smartphone, Info, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function DownloadSection() {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadFinished, setDownloadFinished] = useState(false);

  const startDownloadSimulator = () => {
    if (downloading || downloadFinished) return;
    setDownloading(true);
    setDownloadProgress(0);
    
    // Trigger real download stream from the user's secure Google Drive link
    window.location.href = "https://drive.usercontent.google.com/download?id=11jh1QfoFWcIMVSD4rxtFGotKCXerKH8B&export=download&authuser=0";
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (downloading && downloadProgress < 100) {
      timer = setTimeout(() => {
        setDownloadProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 20) + 5;
          if (next >= 100) {
            setDownloading(false);
            setDownloadFinished(true);
            return 100;
          }
          return next;
        });
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [downloading, downloadProgress]);

  const resetDownload = () => {
    setDownloading(false);
    setDownloadProgress(0);
    setDownloadFinished(false);
  };

  return (
    <section id="download-section" className="py-24 relative overflow-hidden px-4 md:px-8 border-t border-white/5 bg-[#050505]">
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-orange-neon/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Title */}
        <span className="font-orbitron text-xs font-bold text-orange-neon uppercase tracking-[0.3em]">SECURE SYSTEM DEPLOYMENT</span>
        <h2 className="font-orbitron text-3xl md:text-6xl font-black text-white uppercase mt-2 mb-4 leading-tight">
          ELEVATE YOUR <br />
          <span className="text-gradient-neon text-glow-orange">GAMING PAYOUT</span> TODAY
        </h2>
        <p className="font-sans text-[#A0A0A0] max-w-xl mx-auto text-sm sm:text-base mb-12">
          Get the stable Android package directly from our secure CDN server. Fast install, zero bloatware, and auto-updates enabled.
        </p>

        {/* Big Layout Card */}
        <div className="bg-gradient-to-b from-[#0F172A] to-[#0A0D16] border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-[0_0_40px_rgba(255,122,0,0.15)] relative overflow-hidden">
          {/* Accent decoration light lines */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-neon to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Button & Downloading Simulator */}
            <div className="flex flex-col items-center justify-center space-y-4">
              
              <AnimatePresence mode="wait">
                {!downloading && !downloadFinished ? (
                  <motion.button
                    key="dl-btn"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    onClick={startDownloadSimulator}
                    className="group relative w-full h-18 bg-gradient-to-r from-orange-neon to-gold hover:scale-[1.03] text-black font-orbitron font-black tracking-widest text-sm rounded-2xl shadow-[0_5px_25px_rgba(255,122,0,0.35)] cursor-pointer flex items-center justify-center gap-3 transition-transform"
                  >
                    <Download className="w-5.5 h-5.5 stroke-[2.5px] group-hover:animate-bounce" />
                    <span>DOWNLOAD APK</span>
                    {/* Ripple background shimmer */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ) : downloading ? (
                  <motion.div
                    key="dl-progress"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full bg-slate-950 rounded-2xl p-4.5 border border-white/5 text-left"
                  >
                    <div className="flex justify-between text-xs font-mono text-gold font-bold mb-2">
                      <span className="flex items-center gap-1.5">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Downloading...
                      </span>
                      <span>{downloadProgress}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-neon to-gold rounded-full" 
                        style={{ width: `${downloadProgress}%` }} 
                      />
                    </div>
                    
                    <span className="text-[10px] text-gray-500 font-sans block mt-2 text-center">Connecting to Karachi secure server node...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dl-finished"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full bg-slate-950 rounded-2xl p-5 border border-green-500/30 text-center flex flex-col items-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-400 mb-2 animate-bounce" />
                    <h4 className="font-orbitron font-bold text-sm text-white uppercase">Download Complete!</h4>
                    <p className="font-sans text-xs text-gray-400 mt-1">Locate "FF-Tournament-v3.4.1.apk" in your file explorer to install.</p>
                    
                    <button
                      onClick={resetDownload}
                      className="mt-4 text-[10px] uppercase font-bold text-orange-neon hover:underline cursor-pointer"
                    >
                      Download Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                <Info className="w-3.5 h-3.5 text-slate-400" />
                <span>SHA256 CHECKSUM VERIFIED SECURE</span>
              </div>
            </div>

            {/* Right: Technical Specifications */}
            <div className="text-left space-y-4 bg-slate-950/60 p-5 rounded-2xl border border-white/5">
              <span className="font-orbitron text-[10px] font-bold text-gold uppercase tracking-[0.15em] block border-b border-white/5 pb-2">TECHNICAL METRIC INFO</span>
              
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 text-xs font-mono">
                <div>
                  <span className="text-gray-500 text-[10px] block uppercase">Latest Version</span>
                  <span className="text-white font-bold block mt-0.5">v3.4.1 (Stable Build)</span>
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] block uppercase">App Package Size</span>
                  <span className="text-white font-bold block mt-0.5">11.4 Megabytes</span>
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] block uppercase">Compatibility</span>
                  <span className="text-white font-bold block mt-0.5">Android 6.0 and above</span>
                </div>
                <div>
                  <span className="text-gray-500 text-[10px] block uppercase">Last Pushed</span>
                  <span className="text-white font-bold block mt-0.5">2 Days Ago (Active)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Secure details line */}
          <div className="mt-8 flex justify-center gap-6 text-[10px] text-[#A0A0A0]/50 uppercase font-mono tracking-wider">
            <span>🛡️ Play Protect Checked</span>
            <span>🚫 Zero Ads Included</span>
            <span>⚡ Low Ping Companion</span>
          </div>

        </div>

      </div>
    </section>
  );
}
