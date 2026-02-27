
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const DemoSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDemo = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `以下の診察会話の内容を、「よりそい」サービスのように、優しく、分かりやすく要約してJSON形式で返してください。
        
        会話内容:
        "${inputText}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING, description: "会話の全体的なまとめ（優しく、患者さんに語りかけるようなトーン）" },
              todoList: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "患者さんがやるべき行動のリスト（3つ程度）"
              }
            },
            required: ["summary", "todoList"]
          }
        }
      });

      const jsonStr = response.text.trim();
      setResult(JSON.parse(jsonStr));
    } catch (error) {
      console.error("AI Demo Error:", error);
      alert("AI要約のデモでエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const sampleConversations = [
    "先生、最近喉が痛くて。昨日から熱も37.5度くらいあります。 | そうですか。喉が少し赤いですね。季節の変わり目なので風邪でしょう。うがい薬と抗生物質を出しておきます。5日間、毎食後に飲んでください。安静にして水分を多めに摂ってくださいね。",
    "子供が夜中にずっと咳き込んでいて心配なんです。 | 胸の音は綺麗ですよ。咳を鎮めるシロップを出しておきますね。寝るときは少し頭を高くしてあげると楽になりますよ。加湿も忘れずに。もし明日も続くようならまた来てください。"
  ];

  return (
    <section id="demo" className="py-24 bg-white border-y border-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[1.85rem] md:text-5xl font-black text-gray-900 mb-6 leading-[1.3]">AI要約を体験してみる</h2>
          <p className="text-gray-600 text-[1.05rem] md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">実際の診察会話（例）を入力して、<br className="md:hidden" />どのように要約されるか見てみましょう。</p>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-6 md:p-12 shadow-inner border border-gray-100">
          <div className="mb-8">
            <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-4">会話のサンプルを入力、または選択してください</label>
            <textarea
              className="w-full h-48 p-6 rounded-3xl border-2 border-gray-100 focus:ring-4 focus:ring-yorisoi-green/20 focus:border-yorisoi-green transition-all outline-none text-[15px] font-medium leading-relaxed bg-white shadow-sm"
              placeholder="例: 先生、最近胃がキリキリして... 先生: ストレスかもしれませんね。まずは胃薬を..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {sampleConversations.map((sample, i) => (
              <button
                key={i}
                onClick={() => setInputText(sample)}
                className="text-xs font-bold px-4 py-2.5 bg-white border border-gray-200 rounded-full hover:bg-yorisoi-soft-green hover:border-yorisoi-green transition-all shadow-sm active:scale-95"
              >
                サンプル {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleDemo}
            disabled={isLoading || !inputText}
            className={`w-full py-6 rounded-[2rem] font-black text-xl text-white transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] ${isLoading ? 'bg-gray-400' : 'bg-yorisoi-green hover:bg-[#6ecbb5] hover:shadow-2xl'}`}
          >
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                AIが要約中...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                AI要約を実行
              </>
            )}
          </button>

          {result && (
            <div className="mt-12 p-8 bg-white rounded-[2.5rem] border-2 border-yorisoi-green/20 shadow-xl animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yorisoi-peach/5 rounded-full blur-3xl -z-10"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-2.5 h-8 bg-yorisoi-green rounded-full shadow-sm shadow-yorisoi-green/30"></div>
                <h4 className="text-lg font-black text-gray-900">「よりそい」AIからのメッセージ</h4>
              </div>

              <div className="mb-8 text-gray-700 leading-loose text-[1.05rem] bg-gray-50 p-6 rounded-2xl font-medium border border-gray-100 shadow-inner">
                {result.summary}
              </div>

              <div className="space-y-4">
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">To-Do List</p>
                {result.todoList.map((todo: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 text-[15px] text-gray-800 font-bold animate-fade-in bg-white p-4 rounded-xl shadow-sm border border-gray-50" style={{ animationDelay: `${i * 0.15 + 0.3}s` }}>
                    <span className="w-6 h-6 bg-yorisoi-peach text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-yorisoi-peach/30">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="leading-tight pt-0.5">{todo}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
