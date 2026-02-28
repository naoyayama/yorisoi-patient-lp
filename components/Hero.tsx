import React from 'react';

const HERO_VISUAL = '/images/hero/hero-visual.png';

const Hero: React.FC = () => {
  return (
    <section className="hero relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 背景: イラストを全面に */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_VISUAL}
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
          aria-hidden="true"
        />
      </div>

      {/* 適度な透過オーバーレイ（文字の見やすさ＋イラストが透けて見える） */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(253,252,248,0.92) 0%, rgba(253,252,248,0.65) 45%, rgba(253,252,248,0.25) 75%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full font-bold text-sm bg-white/95 border border-[#0d7a6f]/25 text-[#0d7a6f] shadow-sm backdrop-blur-sm">
            アプリ不要・LINEですぐ使える
          </div>

          <h1 className="text-[2rem] md:text-4xl lg:text-5xl font-black leading-[1.35] md:leading-tight mb-4 md:mb-6 text-gray-900 [text-shadow:0_1px_2px_rgba(255,255,255,0.9)]">
            診察室の「わからない」を、
            <br />
            <span className="hero-heading-accent text-[#0d7a6f] text-[2rem] md:text-4xl lg:text-5xl font-black leading-[1.35] md:leading-tight">「安心」</span>{' '}
            にかえる。
          </h1>

          <p className="text-[1.05rem] md:text-lg mb-8 md:mb-10 text-gray-800 leading-relaxed [text-shadow:0_1px_2px_rgba(255,255,255,0.8)]">
            あなたと家族に寄りそい、AI診察メモサービス。
            <br className="hidden md:block" />
            「録音」→「AI要約」→「LINEに届く」をスマホ一台で。
          </p>

          <a
            href="https://line.me"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#06C755] text-white px-10 py-4 md:px-12 md:py-5 rounded-[2rem] text-base md:text-xl font-bold hover:bg-[#05b14c] transition-all shadow-lg active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
            </svg>
            LINEで無料で始める
          </a>
          <p className="mt-4 text-xs font-bold text-gray-600 [text-shadow:0_1px_1px_rgba(255,255,255,0.6)]">
            登録は3秒で完了。個人情報も安心管理
          </p>

          <div className="mt-10 flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200/80 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-yorisoi-peach rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
                無料
              </div>
              <div className="text-left">
                <p className="text-[9px] text-gray-500 font-black uppercase tracking-wider leading-none">Service</p>
                <p className="text-sm font-black text-gray-900 leading-none">医療従事者監修</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[9px] font-black tracking-[0.25em] text-gray-700 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-yorisoi-green/80 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
