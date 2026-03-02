import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface pt-20 pb-12 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-10 sm:p-16 border border-slate-200 shadow-sm text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-ink mb-4">
            「わかる」が「安心」に変わる体験を
          </h2>
          <p className="text-ink-muted mb-10 max-w-xl mx-auto">
            次回の診察から、不安を家に持ち帰らない。あなたのポケットに、いつもよりそいがいます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="flex-shrink-0 p-4 bg-surface rounded-xl border border-slate-200">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://line.me"
                alt="LINE QR"
                className="w-32 h-32 sm:w-36 sm:h-36"
              />
              <p className="text-xs text-ink-muted mt-2">スマホで読み取り</p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://line.me"
                className="inline-flex items-center justify-center gap-3 bg-[#06C755] text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-[#05a847] transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
                </svg>
                LINEで今すぐ始める
              </a>
              <p className="text-sm font-medium text-ink-muted">登録後すぐ利用可能・完全無料</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200">
          <div className="text-center sm:text-left">
            <span className="font-bold text-ink">よりそい</span>
            <p className="text-xs text-ink-muted mt-1">© 2024 株式会社メディキャンバス</p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-sm font-medium text-ink-muted">
            <a href="#" className="hover:text-primary transition-colors">利用規約</a>
            <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary transition-colors">特定商取引法</a>
            <a href="#" className="hover:text-primary transition-colors">運営会社</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
