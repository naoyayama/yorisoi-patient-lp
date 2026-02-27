
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import DemoSection from './components/DemoSection';
import StepsSection from './components/StepsSection';
import TrustSection from './components/TrustSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-yorisoi-green/30">
      <Navbar />

      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <FeaturesSection />
        <DemoSection />
        <StepsSection />
        <TrustSection />
        <PricingSection />
        <FAQSection />
      </main>

      <Footer />

      {/* Floating Sticky CTA for Mobile/Desktop */}
      <div className={`fixed bottom-8 left-0 right-0 z-50 px-6 transition-all duration-500 transform ${showStickyCta ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#06C755] to-[#05b14c] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <a
            href="https://line.me"
            className="relative flex items-center justify-center gap-4 w-full bg-[#06C755] text-white py-5 rounded-full shadow-2xl hover:bg-[#05b14c] transition-all font-black text-xl active:scale-[0.98] border-2 border-white/20"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
            </svg>
            LINEで無料で始める
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
