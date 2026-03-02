import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-primary font-bold text-lg tracking-tight">よりそい</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-ink-muted font-medium">
          <a href="#problem" className="hover:text-primary transition-colors">お悩み</a>
          <a href="#features" className="hover:text-primary transition-colors">機能</a>
          <a href="#steps" className="hover:text-primary transition-colors">使い方</a>
        </nav>
        <a
          href="https://line.me"
          className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#05a847] transition-colors shadow-sm"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 10.304c0-5.231-5.383-9.489-12-9.489s-12 4.258-12 9.489c0 4.69 4.269 8.596 10.031 9.345l-.651 3.922c-.044.264.21.472.443.328l5.242-3.232c5.687-.568 9.935-4.226 9.935-8.863z" />
          </svg>
          LINEで始める
        </a>
      </div>
    </header>
  );
};

export default Navbar;
