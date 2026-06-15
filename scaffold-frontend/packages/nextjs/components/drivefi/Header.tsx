"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "~~/contexts/LanguageContext";
import { useAccount } from "wagmi";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { address: connectedAddress } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-surface/95 backdrop-blur-xl border-b border-on-surface/5 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
          <Image
            src={isDark ? "/drivefi-logo-dark.png" : "/drivefi-logo-light.png"}
            alt="DriveFi"
            width={120}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/80 hidden sm:block">
            Arbitrum Sepolia
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
        {[
          { href: "/marketplace", label: "Marketplace" },
          { href: "/defi", label: "DeFi" },
          { href: "/dashboard", label: "Dashboard" },
          { href: "/admin", label: "Admin" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-on-surface-variant font-headline text-sm hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-0.5"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {/* Language Switcher */}
        <div
          className="flex items-center bg-surface-container-low rounded-full p-1 border border-on-surface/5"
          role="group"
          aria-label="Language switcher"
        >
          {(["en", "pt"] as const).map(lang => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`min-w-[44px] min-h-[36px] px-3 rounded-full text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                language === lang ? "bg-primary/20 text-primary" : "text-on-surface-variant hover:bg-on-surface/5"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Theme Switcher */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-on-surface/5 transition-all text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
        )}

        {/* Wallet Connection */}
        {connectedAddress ? (
          <button className="bg-surface-container-highest px-4 py-2 rounded-xl text-on-surface font-headline font-bold text-sm hover:brightness-110 transition-all active:scale-95 duration-100 flex items-center gap-2 border border-on-surface/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <span className="w-2 h-2 rounded-full bg-success" aria-hidden="true"></span>
            <span className="sr-only">Connected wallet: </span>
            {connectedAddress.slice(0, 6)}...{connectedAddress.slice(-4)}
          </button>
        ) : (
          <button className="premium-gradient px-4 py-2 rounded-xl text-on-primary font-headline font-bold text-sm hover:brightness-110 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
