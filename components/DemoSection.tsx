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
        会話内容: "${inputText}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING, description: "会話の全体的なまとめ（優しく、患者さんに語りかけるようなトーン）" },
              todoList: { type: Type.ARRAY, items: { type: Type.STRING }, description: "患者さんがやるべき行動のリスト（3つ程度）" }
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
    <section id="demo" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-black text-ink text-center mb-3">
          AI要約を体験してみる
        </h2>
        <p className="text-ink-muted text-center mb-12">
          診察会話の例を入力して、要約のイメージを確認できます。
        </p>

        <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-slate-200">
          <label className="block text-sm font-bold text-ink-muted mb-3">会話のサンプルを入力、または選択</label>
          <textarea
            className="w-full h-40 p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-ink text-sm leading-relaxed"
            placeholder="例: 先生、最近胃がキリキリして... 先生: ストレスかもしれませんね。まずは胃薬を..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            {sampleConversations.map((sample, i) => (
              <button
                key={i}
                onClick={() => setInputText(sample)}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-ink hover:border-primary/40 hover:bg-primary-light/30 transition-colors"
              >
                サンプル {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleDemo}
            disabled={isLoading || !inputText}
            className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
              isLoading ? 'bg-slate-400' : 'bg-primary hover:bg-primary-dark'
            }`}
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                AIが要約中...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI要約を実行
              </>
            )}
          </button>

          {result && (
            <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-sm font-bold text-primary mb-4">よりそい AI からのメッセージ</h4>
              <p className="text-ink text-sm leading-relaxed mb-6 p-4 rounded-xl bg-surface">{result.summary}</p>
              <p className="text-xs font-bold text-ink-muted uppercase tracking-wider mb-3">To-Do</p>
              <ul className="space-y-2">
                {result.todoList.map((todo: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink">
                    <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                    {todo}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
