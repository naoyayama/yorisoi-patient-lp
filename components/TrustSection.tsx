import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink text-center mb-16">
          大切な情報は、厳重に守ります
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">匿名化処理</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              データは個人が特定できないよう加工して管理。プライバシーを最優先にしています。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-ink mb-2">目的外利用なし</h3>
            <p className="text-ink-muted text-sm leading-relaxed">
              サービス改善・研究以外（広告や外部販売など）には一切使用しません。
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-2xl p-8 sm:p-10 text-white">
          <h3 className="text-xl font-bold mb-4">医療機関との連携で、さらに安心</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            提携クリニックでは、AIが作った要約を医師・スタッフが確認してからお届けします。医療のプロの目を通すため、誤った情報の心配がありません。
          </p>
          <p className="text-white/70 text-xs">
            ※提携外の医療機関でも、AI要約機能はご利用いただけます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
