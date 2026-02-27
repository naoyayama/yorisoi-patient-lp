
import React from 'react';
import { RecordingIllustration, ConsultationIllustration, NotificationIllustration } from './Illustrations';

const StepsSection: React.FC = () => {
  const steps = [
    {
      title: '開始',
      desc: 'LINEメニューの「診察メモ開始」をタップしてスマホを置くだけ。',
      illustration: <RecordingIllustration className="w-full h-full" />
    },
    {
      title: '診察',
      desc: 'いつも通り先生とお話ししてください。AIがしっかり聞いています。',
      illustration: <ConsultationIllustration className="w-full h-full" />
    },
    {
      title: '完了',
      desc: '診察が終わったら「完了」。数十秒でLINEに要約が届きます。',
      illustration: <NotificationIllustration className="w-full h-full" />
    }
  ];

  return (
    <section id="steps" className="py-24 bg-yorisoi-soft-green/20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-16 px-4">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-6 leading-[1.3]">
            使い方は、<br className="md:hidden" />たったの3ステップ。
          </h2>
          <p className="text-gray-600 text-[1.05rem] md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            新しいアプリは不要。いつものLINEですぐに使えます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto mb-16">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-64 h-64 md:w-72 md:h-72 mb-8 transform transition-transform hover:scale-105 drop-shadow-xl">
                {s.illustration}
              </div>
              <div className="bg-yorisoi-green text-white px-6 py-1.5 rounded-full font-black text-sm mb-6 shadow-sm shadow-yorisoi-green/30 tracking-widest">
                STEP {i + 1}
              </div>
              <h4 className="text-2xl font-black mb-4 text-gray-900">{s.title}</h4>
              <p className="text-gray-600 text-[1.05rem] max-w-[280px] leading-loose font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-xs font-black text-gray-400 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-inner border border-white">
            <span className="w-2.5 h-2.5 bg-yorisoi-peach rounded-full animate-pulse shadow-sm shadow-yorisoi-peach/50"></span>
            画面ロックの設定にのみご注意ください。
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
