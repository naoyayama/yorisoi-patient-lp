
import React from 'react';
import { DoctorTrustIllustration, SecurityShieldIllustration, PrivacyIllustration } from './Illustrations';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16 border border-gray-100 shadow-inner">
          <div className="text-center mb-16 px-4">
            <h2 className="text-[1.85rem] md:text-5xl font-black mb-8 text-gray-900 leading-[1.3]">
              大切な情報は、<br className="md:hidden" />厳重に守ります。
            </h2>
            <div className="w-16 h-1.5 bg-yorisoi-peach mx-auto rounded-full shadow-sm shadow-yorisoi-peach/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center gap-8 text-center group">
              <div className="w-32 h-32 transform transition-transform group-hover:scale-110 duration-500 bg-gray-50 rounded-full p-6">
                <SecurityShieldIllustration className="w-full h-full" />
              </div>
              <div>
                <h4 className="font-black mb-4 text-xl text-gray-900">匿名化処理</h4>
                <p className="text-[1.05rem] text-gray-600 leading-loose font-medium">データは個人が特定できないように加工して管理。プライバシーを最優先に考えます。</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center gap-8 text-center group">
              <div className="w-32 h-32 transform transition-transform group-hover:scale-110 duration-500 bg-gray-50 rounded-full p-6">
                <PrivacyIllustration className="w-full h-full" />
              </div>
              <div>
                <h4 className="font-black mb-4 text-xl text-gray-900">目的外利用なし</h4>
                <p className="text-[1.05rem] text-gray-600 leading-loose font-medium">サービスの改善や研究目的以外（広告配信や外部販売など）には一切使用しません。</p>
              </div>
            </div>
          </div>

          <div className="bg-yorisoi-green text-white p-10 rounded-[2.5rem] shadow-2xl shadow-yorisoi-green/20 relative overflow-hidden group">
            <div className="absolute right-0 top-0 opacity-10 transform scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-1000">
              <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" /></svg>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border-4 border-white/30 shadow-xl">
                <DoctorTrustIllustration className="w-full h-full scale-125" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black mb-6 leading-tight">医療機関との連携で、<br className="md:hidden" />さらに安心。</h4>
                <p className="text-[1.05rem] md:text-lg leading-loose text-white/90 font-medium">
                  提携クリニックでは、AIが作った要約を医師やスタッフが確認してから送信します。医療のプロの目を通すから、誤った情報の心配がありません。
                  <span className="block mt-6 text-[13px] font-black text-white/70 bg-black/10 px-4 py-2 rounded-xl inline-block border border-white/10 uppercase tracking-widest">※提携外の医療機関でも、AI要約機能はご利用いただけます。</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
