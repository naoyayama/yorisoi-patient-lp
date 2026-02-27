
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-yorisoi-green rounded-xl flex items-center justify-center shadow-sm shadow-yorisoi-green/30">
            <span className="text-white font-black text-xl">よ</span>
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">よりそい</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#problem" className="hover:text-yorisoi-green transition-colors">お悩み解決</a>
          <a href="#features" className="hover:text-yorisoi-green transition-colors">機能</a>
          <a href="#steps" className="hover:text-yorisoi-green transition-colors">使い方</a>
        </div>

        <a
          href="https://line.me"
          className="bg-[#06C755] text-white px-6 py-2.5 rounded-full text-[13px] font-black flex items-center gap-2 hover:bg-[#05b14c] transition-all shadow-md shadow-green-500/20 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
          </svg>
          <span className="hidden xs:inline text-xs opacity-80 font-medium">LINEで</span>始める
        </a>
      </div>
    </header>
  );
};

export default Navbar;
