
import React from 'react';
import { ConfusedIllustration, MotherBabyIllustration, FamilyIllustration } from './Illustrations';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      role: '患者様',
      quote: '先生の説明が難しくて覚えきれない…',
      description: '帰ってから「あれ、どうするんだっけ？」と不安になる。',
      color: 'bg-[#F0FAF5]', // Custom soft green
      borderColor: 'border-green-100',
      textColor: 'text-green-800',
      illustration: <ConfusedIllustration className="w-full h-full" />
    },
    {
      role: 'パパ・ママ',
      quote: '子供が泣いていて聞き逃したかも…',
      description: 'ケアで手一杯。大事なポイントを後で再確認したい。',
      color: 'bg-[#FFF5F5]', // Custom soft red/peach
      borderColor: 'border-red-100',
      textColor: 'text-red-800',
      illustration: <MotherBabyIllustration className="w-full h-full" />
    },
    {
      role: 'ご家族',
      quote: '親の病状を正確に把握したい…',
      description: '離れて暮らす親の通院内容を、漏れなく共有したい。',
      color: 'bg-[#F5F9FF]', // Custom soft blue
      borderColor: 'border-blue-100',
      textColor: 'text-blue-800',
      illustration: <FamilyIllustration className="w-full h-full" />
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-6 leading-[1.4]">
            病院からの帰り道、<br />
            こんな「もやもや」ありませんか？
          </h2>
          <div className="w-12 h-1.5 bg-yorisoi-peach mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'} animate-fade-in`}
              style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
            >
              {/* User Tag */}
              <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-10 h-10 rounded-full bg-white border-2 shadow-sm ${p.borderColor} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                  {p.illustration}
                </div>
                <span className="text-[12px] font-black text-gray-400 uppercase tracking-widest">{p.role}</span>
              </div>

              {/* Chat Bubble */}
              <div className={`relative max-w-[92%] p-8 rounded-[2.5rem] shadow-xl border-2 ${p.borderColor} ${p.color} ${idx % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
                <h3 className="text-xl font-bold text-gray-800 leading-[1.5] mb-4">「{p.quote}」</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                  {p.description}
                </p>

                {/* Tail Decoration */}
                <div className={`absolute top-0 w-6 h-6 ${p.color} border-t-2 border-l-2 ${p.borderColor} ${idx % 2 === 0 ? '-left-3 -scale-x-100' : '-right-3'} transform rotate-45`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center animate-fade-in [animation-delay:1.2s]">
          <p className="text-2xl md:text-3xl font-black text-gray-900 leading-relaxed">
            その不安、「<span className="text-yorisoi-green relative inline-block">
              よりそい
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yorisoi-peach/20 -z-10 rounded-full"></span>
            </span>」が解決します。
          </p>
          <div className="mt-12">
            <a
              href="https://line.me"
              className="inline-flex items-center gap-3 bg-[#06C755] text-white px-10 py-5 rounded-[2rem] text-lg font-bold shadow-xl active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
              </svg>
              無料で今すぐ解決する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
