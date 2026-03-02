import React from 'react';

const problems = [
  {
    label: '患者さん',
    quote: '先生の説明が難しくて覚えきれない…',
    desc: '帰宅してから「あれ、何だっけ？」と不安になる。',
  },
  {
    label: 'パパ・ママ',
    quote: '子どもが泣いていて、聞き逃したかも…',
    desc: 'ケアで手一杯。あとでポイントを確認したい。',
  },
  {
    label: 'ご家族',
    quote: '離れて暮らす親の通院内容を共有したい',
    desc: '病状を正確に把握して、安心したい。',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink text-center mb-4">
          こんな「もやもや」、ありませんか？
        </h2>
        <p className="text-ink-muted text-center mb-16">病院からの帰り道に感じる、あの気持ち。</p>

        <div className="space-y-6 max-w-2xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-surface/50 hover:border-primary/30 hover:bg-primary-light/20 transition-colors"
            >
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{p.label}</p>
              <p className="text-lg font-bold text-ink mb-2">「{p.quote}」</p>
              <p className="text-ink-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-14 text-xl font-bold text-ink">
          その不安、<span className="text-primary">よりそい</span>が手助けします。
        </p>
        <div className="text-center mt-8">
          <a
            href="https://line.me"
            className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#05a847] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
            </svg>
            無料ではじめる
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
