
import React from 'react';
import { PatientIllustration, ParentIllustration } from './Illustrations';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-8 leading-[1.3]">
            「よりそい」がある生活で、<br className="md:hidden" />通院はもっと安心に。
          </h2>
        </div>

        <div className="space-y-24">
          {/* Patient */}
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 w-full max-w-[320px]">
              <PatientIllustration className="w-full h-auto" />
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-green-100">患者さんご本人へ</div>
              <h3 className="text-2xl md:text-4xl font-black mb-6 text-gray-900 leading-[1.4]">「覚えること」はAIに任せて、<br />先生の目を見てお話しください。</h3>
              <p className="text-gray-600 text-[1.05rem] md:text-lg mb-8 leading-loose font-medium">
                メモを取る必要はありません。大事なポイントはAIがすべて記録しています。診察室では、先生とのコミュニケーションに100%集中できます。
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-700 font-bold text-[1.05rem]">
                  <div className="mt-1 text-yorisoi-green flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  難しい病状の説明も、あとでゆっくり見返せる。
                </li>
              </ul>
            </div>
          </div>

          {/* Parents */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 w-full max-w-[320px]">
              <ParentIllustration className="w-full h-auto" />
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 bg-peach-50 text-yorisoi-peach rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-yorisoi-peach/20">パパ・ママへ</div>
              <h3 className="text-2xl md:text-4xl font-black mb-6 text-gray-900 leading-[1.4]">お子様が泣いても大丈夫。<br />AIが代わりに聞いています。</h3>
              <p className="text-gray-600 text-[1.05rem] md:text-lg mb-8 leading-loose font-medium">
                子供のケアで手一杯の診察。聞き逃しや「あれ？」という不安をゼロに。AIがしっかり記録しているので、あとでゆっくりTo-Doを確認できます。
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-700 font-bold text-[1.05rem]">
                  <div className="mt-1 text-yorisoi-peach flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  帰宅後、パートナーへの共有も転送するだけ。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
