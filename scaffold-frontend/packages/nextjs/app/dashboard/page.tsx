"use client";

import { useLanguage } from "~~/contexts/LanguageContext";
import { Header } from "~~/components/drivefi/Header";
import { BottomNav } from "~~/components/drivefi/BottomNav";
import { useAccount } from "wagmi";

export default function DashboardPage() {
  const { t } = useLanguage();
  const { address } = useAccount();

  const availableUSDC = 125_500;
  const tvlInAssets = 3_850_000;
  const assetPerformance = 21.2;

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">monitoring</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em]">Profile: Investor</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">
            {t("dashboard.welcome")},{" "}
            <span className="text-primary">{address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "User"}</span>
          </h2>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" aria-label="Portfolio overview">
          <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between min-h-[180px] border border-on-surface/5">
            <div className="flex justify-between items-start">
              <p className="text-secondary font-label text-xs uppercase tracking-widest">{t("dashboard.availableUSDC")}</p>
              <span className="material-symbols-outlined text-primary" aria-hidden="true">account_balance_wallet</span>
            </div>
            <div>
              <h3 className="text-5xl font-headline font-bold text-on-surface">{availableUSDC.toLocaleString("en-US")} <span className="text-base font-normal text-secondary">USDC</span></h3>
              <p className="text-primary text-sm mt-1">+12.4% from last month</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between min-h-[180px] border border-on-surface/5">
            <div className="flex justify-between items-start">
              <p className="text-secondary font-label text-xs uppercase tracking-widest">{t("dashboard.tvlInAssets")}</p>
              <span className="material-symbols-outlined text-tertiary" aria-hidden="true">token</span>
            </div>
            <div>
              <h3 className="text-4xl font-headline font-bold text-on-surface">{tvlInAssets.toLocaleString("en-US")}</h3>
              <p className="text-secondary text-sm mt-1">Across 7 premium assets</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden flex flex-col min-h-[180px] border border-on-surface/5">
            <div className="z-10">
              <p className="text-secondary font-label text-xs uppercase tracking-widest">{t("dashboard.assetPerformance")}</p>
              <h3 className="text-2xl font-headline font-bold text-tertiary">
                +{assetPerformance}% <span className="text-xs font-normal text-on-surface-variant">APY</span>
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 opacity-40">
              <svg className="w-full h-full" viewBox="0 0 400 100">
                <path d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,30" fill="none" stroke="var(--color-primary)" strokeWidth="3" />
                <path
                  d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,30 L400,100 L0,100 Z"
                  fill="url(#grad1)"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0.2 }} />
                    <stop offset="100%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        <section className="glass-panel p-12 rounded-2xl border border-primary/20 text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4 block">construction</span>
          <h2 className="text-3xl font-headline font-bold mb-4">Dashboard Under Construction</h2>
          <p className="text-on-surface-variant mb-6">
            Full dashboard with active financing, transaction history, and asset breakdown coming soon.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/marketplace" className="px-6 py-3 rounded-xl bg-primary/20 text-primary font-headline font-bold hover:bg-primary/30 transition-all">
              Visit Marketplace
            </a>
            <a href="/defi" className="px-6 py-3 rounded-xl bg-surface-container-highest text-on-surface font-headline font-bold hover:brightness-125 transition-all border border-on-surface/10">
              Explore DeFi
            </a>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
