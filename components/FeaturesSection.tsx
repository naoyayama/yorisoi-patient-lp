
import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'AI自動サマリー',
      desc: '長い診察の会話を、大事なポイントだけに絞って要約します。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      color: 'bg-yorisoi-soft-green text-yorisoi-green'
    },
    {
      title: 'To-Doリスト化',
      desc: '「お薬を飲む」「再診予約」など、次にやるべきことをリストにします。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
      ),
      color: 'bg-orange-50 text-orange-500'
    },
    {
      title: '質問メモ機能',
      desc: '先生に聞きたいことを事前にメモ。診察時の「聞き忘れ」を防ぎます。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      color: 'bg-blue-50 text-blue-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-6 leading-[1.3]">
            ただの録音ではありません。
          </h2>
          <p className="text-gray-600 text-[1.05rem] md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            「次の行動」につながる、<br className="md:hidden" />便利な機能が充実しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white border-2 border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className={`w-24 h-24 rounded-[2rem] ${f.color} flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                {f.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 text-gray-900">{f.title}</h4>
              <p className="text-gray-600 text-[1.05rem] leading-loose font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
