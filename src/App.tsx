import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Download, Menu, X, Swords } from 'lucide-react';

// Import our custom modular components
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import PhoneMockup from './components/PhoneMockup';
import Statistics from './components/Statistics';
import AppFeatures from './components/AppFeatures';
import LiveTournaments from './components/LiveTournaments';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import ScreenshotGallery from './components/ScreenshotGallery';
import Reviews from './components/Reviews';
import FAQComponent from './components/FAQ';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import FFLogo from './components/FFLogo';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler for quick anchors
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadClick = () => {
    setMobileMenuOpen(false);
    // Trigger real download stream from the user's secure Google Drive link
    window.location.href = "https://drive.usercontent.google.com/download?id=11jh1QfoFWcIMVSD4rxtFGotKCXerKH8B&export=download&authuser=0";

    const el = document.getElementById('download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF7A00] selection:text-black overflow-x-hidden">
      
      {/* Intro Loading Screen */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      <AnimatePresence>
        {loadingComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen"
          >
            {/* Sticky Header Navigation Bar */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
              <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
                
                {/* Logo */}
                <div 
                  onClick={() => scrollToSection('hero-section')}
                  className="flex items-center gap-1.5 cursor-pointer group"
                >
                  <FFLogo size={42} className="group-hover:scale-105 transition-transform" />
                  <span className="font-orbitron text-base font-black tracking-widest text-white uppercase group-hover:text-glow-orange transition-all">
                    FF <span className="text-gradient-neon">TOURNAMENT</span>
                  </span>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex items-center gap-7 font-orbitron text-[11px] font-bold uppercase tracking-wider text-gray-300">
                  <button onClick={() => scrollToSection('tournaments-section')} className="hover:text-gold transition-colors cursor-pointer">Lobbies</button>
                  <button onClick={() => scrollToSection('features-section')} className="hover:text-gold transition-colors cursor-pointer">Features</button>
                  <button onClick={() => scrollToSection('how-it-works')} className="hover:text-gold transition-colors cursor-pointer">How it works</button>
                  <button onClick={() => scrollToSection('gallery-section')} className="hover:text-gold transition-colors cursor-pointer">Gallery</button>
                  <button onClick={() => scrollToSection('reviews-section')} className="hover:text-gold transition-colors cursor-pointer">Reviews</button>
                  <button onClick={() => scrollToSection('faq-section')} className="hover:text-gold transition-colors cursor-pointer">FAQs</button>
                </nav>

                {/* Right side download triggers */}
                <div className="hidden sm:flex items-center gap-3">
                  <button
                    onClick={() => scrollToSection('tournaments-section')}
                    className="group flex items-center gap-1.5 font-orbitron font-bold text-[10px] text-white tracking-wider border border-white/10 hover:border-gold/30 px-4.5 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    <Swords className="w-3.5 h-3.5 text-orange-neon" />
                    <span>LOBBY GATE</span>
                  </button>

                  <button
                    onClick={handleDownloadClick}
                    className="group flex items-center gap-1.5 bg-gradient-to-r from-orange-neon to-gold text-black font-orbitron font-black text-[10px] tracking-wider px-5 py-2.5 rounded-xl shadow-[0_3px_15px_rgba(255,122,0,0.25)] hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5px]" />
                    <span>GET APK</span>
                  </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-400 hover:text-white cursor-pointer"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Drawer Navigation */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="lg:hidden bg-[#0A0D16] border-b border-white/5 overflow-hidden font-orbitron text-xs font-bold uppercase tracking-widest text-left"
                  >
                    <div className="px-6 py-4.5 flex flex-col gap-4">
                      <button onClick={() => scrollToSection('tournaments-section')} className="hover:text-gold text-left py-1 cursor-pointer">Lobbies</button>
                      <button onClick={() => scrollToSection('features-section')} className="hover:text-gold text-left py-1 cursor-pointer">Features</button>
                      <button onClick={() => scrollToSection('how-it-works')} className="hover:text-gold text-left py-1 cursor-pointer">How it works</button>
                      <button onClick={() => scrollToSection('gallery-section')} className="hover:text-gold text-left py-1 cursor-pointer">Gallery</button>
                      <button onClick={() => scrollToSection('reviews-section')} className="hover:text-gold text-left py-1 cursor-pointer">Reviews</button>
                      <button onClick={() => scrollToSection('faq-section')} className="hover:text-gold text-left py-1 cursor-pointer">FAQs</button>
                      
                      <div className="flex gap-2.5 pt-4 border-t border-white/5">
                        <button
                          onClick={handleDownloadClick}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-neon to-gold text-black py-3 rounded-xl font-black text-[10px] cursor-pointer"
                        >
                          <Download className="w-4 h-4 stroke-[2.5px]" />
                          <span>DOWNLOAD APK</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* Main Web Body Sections */}
            <main className="flex-1">
              
              {/* Top Hero Showcase Section Grid (Desktop: Side-by-side; Mobile: stacked) */}
              <div id="hero-section" className="relative pt-18 overflow-hidden">
                
                {/* Background high-contrast radial lights */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-neon/5 to-transparent blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 md:py-16 relative z-10">
                  
                  {/* Left Column - Hero Description */}
                  <div className="lg:col-span-7 text-left">
                    <HeroSection onExploreClick={() => scrollToSection('tournaments-section')} />
                  </div>

                  {/* Right Column - Interactive Device Simulator */}
                  <div className="lg:col-span-5 flex justify-center">
                    <PhoneMockup />
                  </div>

                </div>
              </div>

              {/* Statistics Counters segment */}
              <Statistics />

              {/* Application modular premium features */}
              <AppFeatures />

              {/* Live Arena schedule lists */}
              <LiveTournaments />

              {/* Core promises of why choose us */}
              <WhyChooseUs />

              {/* Structured flow indicator */}
              <HowItWorks />

              {/* Screenshots slide representation */}
              <ScreenshotGallery />

              {/* Gamer reviews */}
              <Reviews />

              {/* Accordion FAQ list */}
              <FAQComponent />

              {/* Large Download block */}
              <DownloadSection />

            </main>

            {/* Brand footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
