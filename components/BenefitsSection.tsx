import React, { useState } from 'react';

const benefits = [
  {
    tag: '患者さんへ',
    title: '「覚えること」はAIに任せて、先生の目を見て話す',
    desc: 'メモを取らなくて大丈夫。大事なポイントはAIが記録します。診察室では先生との会話に集中できます。',
    point: '難しい説明も、あとでゆっくり見返せます。',
    image: '/images/patient.png',
    imageAlt: '覚えることはAIに任せて、先生の目を見て話すイメージ',
  },
  {
    tag: 'パパ・ママへ',
    title: 'お子さんが泣いていても大丈夫。AIが聞いています',
    desc: '聞き逃しの不安を減らせます。あとでTo-Doを確認して、パートナーへも転送するだけ。',
    point: '帰宅後の共有も、LINEでかんたんに。',
    image: '/images/parent.png',
    imageAlt: 'お子さんが泣いていても大丈夫、AIが聞いていますのイメージ',
  },
];

const BenefitsSection: React.FC = () => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink text-center mb-16">
          よりそいがあると、通院がもっと安心に
        </h2>

        <div className="space-y-16">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center gap-10`}
            >
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-light text-primary mb-4">
                  {b.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4 leading-snug">{b.title}</h3>
                <p className="text-ink-muted mb-4 leading-relaxed">{b.desc}</p>
                <p className="text-ink font-medium flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">✓</span>
                  {b.point}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-2 ring-white ring-offset-4 ring-offset-white">
                  {!imageError[i] ? (
                    <img
                      src={b.image}
                      alt={b.imageAlt}
                      className="w-full h-full object-cover scale-125"
                      onError={() => setImageError((prev) => ({ ...prev, [i]: true }))}
                    />
                  ) : null}
                  {imageError[i] && (
                    <span className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 bg-slate-50" aria-hidden="true">
                      {i === 0 ? '👤' : '👨‍👩‍👧'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
