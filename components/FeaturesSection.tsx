import React from 'react';

const features = [
  {
    title: 'AI自動サマリー',
    desc: '長い診察の会話を、大事なポイントに絞って要約します。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'To-Doリスト',
    desc: '「お薬を飲む」「再診予約」など、次にやることをリスト化。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: '質問メモ',
    desc: '先生に聞きたいことを事前にメモ。聞き忘れを防ぎます。',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink text-center mb-3">
          ただの録音ではありません
        </h2>
        <p className="text-ink-muted text-center mb-16">次の行動につながる機能がそろっています。</p>

        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/20 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{f.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
