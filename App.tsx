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
    const handleScroll = () => setShowStickyCta(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/20">
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

      <div
        className={`fixed bottom-6 left-0 right-0 z-50 px-4 transition-all duration-300 ${
          showStickyCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto">
          <a
            href="https://line.me"
            className="flex items-center justify-center gap-3 w-full bg-[#06C755] text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#05a847] transition-colors active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
            </svg>
            LINEで無料ではじめる
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
