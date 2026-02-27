
import React from 'react';
import { SummaryIllustration } from './Illustrations';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-yorisoi-soft-green/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 px-2">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-8 leading-[1.3]">
            診察の内容を、<br className="md:hidden" />AIがやさしく「要約」
          </h2>
          <p className="text-gray-600 text-[1.05rem] md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            診察室でのブラックボックスを、<br className="md:hidden" />AIとLINEで「安心」と「共有」に変える。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
          <div className="flex-1 space-y-10 w-full">
            <div className="flex gap-8 items-start p-10 bg-white rounded-[2.5rem] shadow-xl border border-yorisoi-green/5 relative overflow-hidden group hover:scale-[1.02] transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-yorisoi-green"></div>
              <div className="w-14 h-14 rounded-2xl bg-yorisoi-green flex items-center justify-center font-black text-white text-xl flex-shrink-0 shadow-lg shadow-yorisoi-green/20">1</div>
              <div>
                <h4 className="text-xl font-black mb-2 text-gray-900">録音する</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">スマホを置いておくだけ。難しい操作は一切ありません。</p>
              </div>
            </div>

            <div className="flex gap-8 items-start p-10 bg-white rounded-[2.5rem] shadow-xl border border-yorisoi-green/5 relative overflow-hidden group hover:scale-[1.02] transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-yorisoi-green"></div>
              <div className="w-14 h-14 rounded-2xl bg-yorisoi-green flex items-center justify-center font-black text-white text-xl flex-shrink-0 shadow-lg shadow-yorisoi-green/20">2</div>
              <div>
                <h4 className="text-xl font-black mb-2 text-gray-900">AIがまとめる</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">医療用語も噛み砕いて、あなたに寄り添った言葉で要約します。</p>
              </div>
            </div>

            <div className="flex gap-8 items-start p-10 bg-white rounded-[2.5rem] shadow-xl border border-yorisoi-green/5 relative overflow-hidden group hover:scale-[1.02] transition-all">
              <div className="absolute top-0 left-0 w-2 h-full bg-yorisoi-green"></div>
              <div className="w-14 h-14 rounded-2xl bg-yorisoi-green flex items-center justify-center font-black text-white text-xl flex-shrink-0 shadow-lg shadow-yorisoi-green/20">3</div>
              <div>
                <h4 className="text-xl font-black mb-2 text-gray-900">LINEに届く</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">いつものLINEにサッと届く。家族への共有も転送するだけ。</p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="max-w-sm mx-auto">
              <SummaryIllustration className="w-full h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
