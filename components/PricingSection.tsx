import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink mb-8">
          すべての機能を、完全無料で
        </h2>
        <div className="mb-10">
          <span className="text-5xl sm:text-6xl font-black text-primary">¥0</span>
          <span className="text-xl text-ink-muted font-bold ml-2">（無料）</span>
        </div>
        <p className="text-ink-muted leading-relaxed mb-10">
          現在はプロトタイプ版のため、利用料はかかりません。オプション料金や隠れたコストもありません。次回の通院から、気軽にお試しください。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['AI要約', 'To-Do作成', 'LINE連携', '診察メモ'].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-xl bg-surface border border-slate-200 text-sm font-bold text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
