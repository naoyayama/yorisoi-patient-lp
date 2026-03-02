import React from 'react';
import { Mic, Stethoscope, ClipboardCheck } from 'lucide-react';

const steps = [
  { step: '1', title: '開始', desc: 'LINEの「診察メモ開始」をタップして、スマホを置くだけ。' },
  { step: '2', title: '診察', desc: 'いつも通り先生とお話ししてください。AIが聞いています。' },
  { step: '3', title: '完了', desc: '診察終了後に「完了」。数十秒でLINEに要約が届きます。' },
];

const stepIcons = [Mic, Stethoscope, ClipboardCheck];

const StepsSection: React.FC = () => {
  return (
    <section id="steps" className="relative py-20 sm:py-28 overflow-hidden">
      {/* 背景イラスト（ヒーローと同じデザインDNA・スマホ左配置） */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.92]"
        style={{ backgroundImage: 'url(/images/steps-bg.png)' }}
        aria-hidden
      />
      {/* テキスト・カード視認用のオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-surface/70 pointer-events-none" aria-hidden />

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink text-center mb-4">
          使い方は3ステップ
        </h2>
        <p className="text-ink-muted text-center text-base mb-14">
          新しいアプリは不要。いつものLINEで使えます。
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-start gap-5 p-8 rounded-2xl bg-white/95 border border-slate-100 shadow-sm hover:border-primary/20 transition-colors sm:min-w-0 sm:flex-1"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary [&_svg]:[stroke-width:2]">
                  <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">STEP {s.step}</p>
                  <h3 className="text-base font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-ink-muted text-sm leading-[1.6]">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center mt-10 text-sm text-ink-muted leading-relaxed">
          ※画面ロックの設定にのみご注意ください。
        </p>
      </div>
    </section>
  );
};

export default StepsSection;
