
import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-yorisoi-peach/5 border-t border-yorisoi-peach/10">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-[1.85rem] md:text-5xl font-black mb-10 text-gray-900 leading-[1.3]">すべての機能を<br className="md:hidden" />「完全無料」で。</h2>
        <div className="flex items-center justify-center gap-6 mb-12">
          <span className="text-7xl md:text-9xl font-black text-yorisoi-peach drop-shadow-sm">¥0</span>
          <div className="text-left">
            <div className="text-xl md:text-2xl font-black text-gray-400">（無料）</div>
            <div className="text-xs font-black text-yorisoi-peach bg-yorisoi-peach/10 px-2 py-0.5 rounded uppercase tracking-tighter">no hidden cost</div>
          </div>
        </div>

        <div className="bg-white border-2 border-yorisoi-peach/20 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-yorisoi-peach/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-yorisoi-peach/5 rounded-full blur-3xl -z-10"></div>
          <p className="text-gray-600 text-[1.1rem] md:text-xl leading-loose mb-12 font-medium">
            現在はプロトタイプ版として提供しているため、<br className="md:hidden" />利用料は一切かかりません。<br className="hidden md:block" />
            オプション料金や、隠れたコストもありません。<br className="hidden md:block" />
            まずは一度、次回の通院で気軽にお試しください。
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['AI要約', 'To-Do作成', 'LINE連携', '診察メモ'].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-[15px] font-black text-gray-700 bg-gray-50 py-4 rounded-2xl border border-gray-100/50">
                <svg className="w-5 h-5 text-yorisoi-peach" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
