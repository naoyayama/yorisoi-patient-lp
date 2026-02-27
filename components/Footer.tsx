
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-20 shadow-2xl border border-gray-100 text-center mb-24 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-yorisoi-soft-green/20 rounded-full blur-3xl -z-10"></div>
          <h2 className="text-[1.85rem] md:text-5xl font-black mb-8 text-gray-900 leading-[1.3]">「わかる」が<br className="md:hidden" />「安心」にかわる体験を。</h2>
          <p className="text-[1.05rem] md:text-xl text-gray-600 mb-12 leading-loose font-medium px-4">次回の診察から、不安を家に持ち帰るのはやめましょう。<br className="hidden md:block" />あなたのポケットに、いつも「よりそい」がいます。</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-shrink-0 bg-gray-50 p-4 rounded-3xl border border-gray-100">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me" alt="QR Code" className="w-32 h-32 md:w-40 md:h-40" />
              <p className="text-xs text-gray-400 mt-2">スマホで読み取り</p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-auto">
              <a
                href="https://line.me"
                className="w-full md:w-auto bg-[#06C755] text-white px-12 py-6 rounded-full text-xl font-black flex items-center justify-center gap-4 hover:bg-[#05b14c] transition-all transform hover:scale-105 shadow-xl active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
                </svg>
                LINEで今すぐ始める
              </a>
              <p className="text-[15px] font-black text-yorisoi-peach tracking-widest uppercase bg-yorisoi-peach/5 py-2 rounded-full border border-yorisoi-peach/10">✨ 登録後すぐに使えます / 完全無料</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 pt-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-6 h-6 bg-yorisoi-green rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">よ</span>
              </div>
              <span className="font-bold tracking-tight text-gray-800">よりそい</span>
            </div>
            <p className="text-xs text-gray-400">© 2024 株式会社メディキャンバス. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[13px] font-bold text-gray-400">
            <a href="#" className="hover:text-yorisoi-green transition-colors">利用規約</a>
            <a href="#" className="hover:text-yorisoi-green transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-yorisoi-green transition-colors">特定商取引法</a>
            <a href="#" className="hover:text-yorisoi-green transition-colors">運営会社</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
