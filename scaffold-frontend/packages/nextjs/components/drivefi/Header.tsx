"use client";

import { useTheme } from "~~/contexts/ThemeContext";
import { useLanguage } from "~~/contexts/LanguageContext";
import { useAccount } from "wagmi";
import Link from "next/link";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { address: connectedAddress } = useAccount();

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#041329] dark:bg-[#041329] border-b border-white/5">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <span className="material-symbols-outlined text-[#adc7ff] text-lg">directions_car</span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline tracking-tighter font-extrabold text-2xl text-[#adc7ff]">DriveFi</h1>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80">Arbitrum Sepolia</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/marketplace"
          className="text-[#b8c8da] font-headline text-sm hover:text-[#adc7ff] transition-all"
        >
          Marketplace
        </Link>
        <Link href="/defi" className="text-[#b8c8da] font-headline text-sm hover:text-[#adc7ff] transition-all">
          DeFi
        </Link>
        <Link
          href="/dashboard"
          className="text-[#b8c8da] font-headline text-sm hover:text-[#adc7ff] transition-all"
        >
          Dashboard
        </Link>
        <Link href="/admin" className="text-[#b8c8da] font-headline text-sm hover:text-[#adc7ff] transition-all">
          Admin
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="flex items-center bg-surface-container-low rounded-full p-1">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              language === "en" ? "bg-primary/20 text-primary" : "text-[#b8c8da] hover:bg-white/5"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("pt")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              language === "pt" ? "bg-primary/20 text-primary" : "text-[#b8c8da] hover:bg-white/5"
            }`}
          >
            PT
          </button>
        </div>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all text-[#b8c8da]"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="material-symbols-outlined">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        {/* Wallet Connection */}
        {connectedAddress ? (
          <button className="bg-surface-container-highest px-4 py-2 rounded-xl text-on-surface font-headline font-bold text-sm hover:brightness-125 transition-all active:scale-95 duration-100 flex items-center gap-2 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            {connectedAddress.slice(0, 6)}...{connectedAddress.slice(-4)}
          </button>
        ) : (
          <button className="bg-gradient-to-br from-primary to-on-primary-container px-4 py-2 rounded-xl text-on-primary font-headline font-bold text-sm hover:brightness-110 transition-all active:scale-95">
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
