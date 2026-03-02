import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* 背景イラスト（デザインDNA統一） */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.95]"
        style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
        aria-hidden
      />
      {/* テキスト視認用のオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-surface/60 pointer-events-none" aria-hidden />
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-bold bg-primary-light text-primary border border-primary/20">
          アプリ不要・LINEですぐ
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink leading-tight mb-6 max-w-3xl mx-auto">
          診察の「わからない」を、
          <br />
          <span className="text-primary">安心</span>に変える。
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          AIが診察内容を要約し、LINEで届く。あなたとご家族に寄りそう、診察メモサービスです。
        </p>
        <a
          href="https://line.me"
          className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-[#05a847] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
          </svg>
          LINEで無料ではじめる
        </a>
        <p className="mt-4 text-sm text-ink-muted">登録は約3秒・完全無料</p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-muted/70">
        <span className="text-xs font-medium">スクロール</span>
        <div className="w-px h-8 bg-primary/30 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
