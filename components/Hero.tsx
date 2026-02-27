
import React from 'react';
import { ConsultationIllustration } from './Illustrations';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-b from-yorisoi-soft-green/50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 bg-white rounded-full border border-yorisoi-green/10 text-yorisoi-green font-bold text-sm shadow-sm animate-fade-in">
          アプリ不要・LINEですぐ使える
        </div>

        <h1 className="text-[2.25rem] md:text-6xl font-black text-gray-900 leading-[1.3] md:leading-tight mb-8 animate-fade-in">
          診察室の「わからない」を、<br />
          <span className="relative inline-block text-yorisoi-green">
            「安心」
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 Q50,10 100,5" stroke="#FFA69E" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span> にかえる。
        </h1>

        <p className="text-[1.15rem] md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s]">
          あなたと家族に寄りそい、AI診察メモサービス。<br className="hidden md:block" />
          「録音」→「AI要約」→「LINEに届く」をスマホ一台で。
        </p>

        <div className="flex flex-col items-center justify-center gap-6 mb-20 animate-fade-in [animation-delay:0.4s]">
          <a
            href="https://line.me"
            className="w-full sm:w-auto bg-[#06C755] text-white px-12 py-6 rounded-[2.5rem] text-xl font-bold flex items-center justify-center gap-4 hover:bg-[#05b14c] transition-all shadow-2xl active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
            </svg>
            LINEで無料で始める
          </a>
          <p className="text-xs font-bold text-gray-400">登録は3秒で完了。個人情報も安心管理</p>
        </div>

        <div className="relative max-w-2xl mx-auto animate-fade-in [animation-delay:0.6s]">
          <div className="absolute inset-0 bg-yorisoi-green/20 rounded-full blur-[80px] -z-10"></div>
          <div className="bg-white p-4 md:p-8 rounded-[3.5rem] shadow-2xl border border-white/50 aspect-square flex items-center justify-center max-w-[340px] md:max-w-[500px] mx-auto overflow-hidden ring-4 ring-yorisoi-soft-green/30">
            <ConsultationIllustration className="w-full h-full" />
          </div>

          <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 animate-bounce duration-[4000ms]">
            <div className="bg-white p-5 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-yorisoi-peach rounded-full flex items-center justify-center text-white font-bold shadow-inner">無料</div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Service</p>
                <p className="text-[15px] font-black text-gray-800 leading-none">医療従事者監修</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-24 flex flex-col items-center gap-3 animate-bounce opacity-25">
          <span className="text-[9px] font-black tracking-[0.4em] text-gray-400 uppercase">Scroll</span>
          <div className="w-px h-20 bg-gradient-to-b from-yorisoi-green via-yorisoi-green to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
