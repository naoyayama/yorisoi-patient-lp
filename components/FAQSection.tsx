import React, { useState } from 'react';

const faqs = [
  { q: 'どんな病院でも使えますか？', a: 'はい、全国どこの医療機関でもご利用いただけます。' },
  { q: '先生に許可をとる必要はありますか？', a: 'スムーズな診察のため、「AIでメモを取らせてもらいますね」と一言お伝えすることをおすすめしています。' },
  { q: '個人情報は守られていますか？', a: 'はい。データは匿名化処理され、厳重に管理されています。目的外の利用は一切ありません。' },
  { q: 'LINEが使えれば誰でも使えますか？', a: 'はい。LINEアプリが入ったスマートフォンがあれば、どなたでもご利用いただけます。' },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-black text-ink text-center mb-12">
          よくある質問
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-colors ${
                openIndex === i ? 'border-primary/40 shadow-md' : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-ink pr-4">{f.q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-transform ${
                    openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-ink-muted'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-ink-muted text-sm leading-relaxed pl-0">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
