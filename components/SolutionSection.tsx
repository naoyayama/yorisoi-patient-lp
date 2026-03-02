import React from 'react';

const steps = [
  { num: '1', title: '録音する', desc: 'スマホを置くだけ。操作は最小限です。' },
  { num: '2', title: 'AIがまとめる', desc: '医療用語もわかりやすい言葉で要約します。' },
  { num: '3', title: 'LINEに届く', desc: 'いつものLINEで受け取れ、家族へ転送も簡単。' },
];

/** バッテリーアイコン（右端まで描画して途切れないSVG） */
const BatteryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="0.5" y="1" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="19" y="3.5" width="2" height="5" rx="0.8" fill="currentColor" />
    <rect x="2.5" y="3" width="13" height="6" rx="1" fill="currentColor" />
  </svg>
);

/** iPhoneフレーム内の「よりそい」要約画面（モックアップ） */
const YorisoiScreenMock: React.FC = () => (
  <div className="bg-[#F5F5F0] min-h-[420px] sm:min-h-[500px] flex flex-col text-left overflow-hidden">
    {/* ステータスバー（左：時刻、中央：ダイナミックアイランド、右：電波・充電） */}
    <div className="flex-shrink-0 h-12 flex items-center pl-5 pr-6 bg-[#F5F5F0] relative">
      {/* 左：時刻 */}
      <div className="flex-1 flex items-center min-w-0">
        <span className="text-[13px] font-semibold text-ink tabular-nums">9:41</span>
      </div>
      {/* 中央：ダイナミックアイランド（小さめでアイコンと被らない） */}
      <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-16 h-5 bg-black rounded-full flex-shrink-0 z-10 pointer-events-none" />
      {/* 右：電波・充電のみ */}
      <div className="flex-1 flex items-center justify-end gap-1.5 min-w-0 pl-4">
        <svg className="w-4 h-3 text-ink flex-shrink-0" viewBox="0 0 18 12" fill="currentColor" aria-hidden>
          <rect x="0" y="8" width="2" height="4" rx="0.5" />
          <rect x="4" y="6" width="2" height="6" rx="0.5" />
          <rect x="8" y="4" width="2" height="8" rx="0.5" />
          <rect x="12" y="2" width="2" height="10" rx="0.5" />
        </svg>
        <BatteryIcon className="w-5 h-[10px] text-ink flex-shrink-0" />
      </div>
    </div>

    {/* メインカード：診察メモ */}
    <div className="flex-1 px-3 pb-4 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 min-h-[320px] sm:min-h-[380px]">
        <p className="text-[10px] sm:text-xs text-ink-muted mb-3 font-bold">■ 診察メモ きょうの要点</p>
        <ul className="space-y-1.5 mb-4 text-[11px] sm:text-xs text-ink leading-relaxed">
          <li className="pl-3 border-l-2 border-primary/30">胸の動悸と血圧について相談しました。</li>
          <li className="pl-3 border-l-2 border-primary/30">普段の血圧は120/80前後です。</li>
          <li className="pl-3 border-l-2 border-primary/30">毎日決まった時間に血圧を測り記録します。</li>
        </ul>
        <p className="text-[10px] sm:text-xs text-primary font-bold mb-2 flex items-center gap-1">
          <span className="text-primary">✔</span> あなたがやること
        </p>
        <ul className="space-y-1 text-[11px] sm:text-xs text-ink leading-relaxed mb-4">
          <li>・朝・晩の血圧を記録する</li>
          <li>・次回診察時に記録を持参する</li>
        </ul>
        <p className="text-[10px] sm:text-xs text-ink-muted font-bold">こんな時は連絡</p>
        <p className="text-[11px] sm:text-xs text-ink mt-0.5">安静時でも180/110以上のとき</p>
      </div>
    </div>

    {/* ホームインジケーター */}
    <div className="flex-shrink-0 h-7 flex justify-center items-center">
      <div className="w-32 h-1 rounded-full bg-slate-400/80" />
    </div>
  </div>
);

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-surface overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-ink text-center mb-3">
          診察内容を、AIがやさしく要約
        </h2>
        <p className="text-ink-muted text-center text-sm sm:text-base mb-10 sm:mb-14 max-w-2xl mx-auto">
          診察室での「聞き逃し」を、安心と共有に変えます。
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* iPhoneモックアップ */}
          <div className="flex justify-center mb-10 lg:mb-0 lg:flex-shrink-0">
            <div
              className="relative rounded-[2.75rem] bg-slate-800/95 p-2.5 sm:p-3 shadow-2xl border-[10px] sm:border-[12px] border-slate-900"
              style={{ width: 'min(280px, 82vw)' }}
            >
              <div className="rounded-[2rem] overflow-hidden bg-slate-900">
                <YorisoiScreenMock />
              </div>
            </div>
          </div>

          {/* 右側（PC）or 下側（SP）：3ステップ */}
          <div className="flex-1 grid sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-black mb-4">
                  {s.num}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-ink mb-1.5">{s.title}</h3>
                <p className="text-ink-muted text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
