
import React from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "どんな病院でも使えますか？",
      a: "はい、全国どこの医療機関でもご利用いただけます。"
    },
    {
      q: "先生に許可をとる必要はありますか？",
      a: "スムーズな診察のために、「AIでメモを取らせてもらいますね」と一言お伝えすることをおすすめしています。"
    },
    {
      q: "個人情報は守られていますか？",
      a: "はい、データは匿名化処理され、厳重なセキュリティ下で管理されます。目的外の利用は一切ありません。"
    },
    {
      q: "LINEが使えれば誰でも使えますか？",
      a: "はい、LINEアプリがインストールされているスマートフォンをお持ちであれば、どなたでもすぐにご利用いただけます。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-4 leading-[1.3] relative inline-block">
            よくある質問
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-yorisoi-peach/20 -z-10 rounded-full"></div>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`border-2 rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm ${openIndex === i ? 'border-yorisoi-green/30 shadow-lg' : 'border-gray-50'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left p-8 flex items-center justify-between transition-colors group ${openIndex === i ? 'bg-yorisoi-soft-green/20' : 'bg-white hover:bg-yorisoi-soft-green/10'}`}
              >
                <h4 className="text-[17px] font-black flex items-start gap-4 pr-6 text-gray-900 leading-relaxed">
                  <span className="text-yorisoi-green font-black">Q.</span>
                  {f.q}
                </h4>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${openIndex === i ? 'bg-yorisoi-green text-white rotate-180' : 'bg-gray-50 text-gray-300'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 bg-gray-50/30 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 text-gray-700 text-[15px] leading-loose flex items-start gap-4 font-medium border-t border-gray-100/50">
                  <span className="font-black text-yorisoi-peach text-lg leading-none">A.</span>
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
