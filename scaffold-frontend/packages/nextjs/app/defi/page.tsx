"use client";

import { useState } from "react";
import { useLanguage } from "~~/contexts/LanguageContext";
import { Header } from "~~/components/drivefi/Header";
import { BottomNav } from "~~/components/drivefi/BottomNav";

export default function DeFiPage() {
  const { t } = useLanguage();
  const [stakeAmount, setStakeAmount] = useState("");
  const [stakeDuration, setStakeDuration] = useState("30");

  const totalLiquidity = 12_450_000;
  const currentAPR = 14.5;
  const yourStaked = 45_200;
  const poolDominance = 0.36;
  const walletBalance = 85_420.5;

  const stakingHistory = [
    { type: "deposit", action: "Deposit Assets", date: "Oct 24, 2023 • 14:02", amount: 12_000, status: "CONFIRMED" },
    { type: "harvest", action: "Harvest Rewards", date: "Sep 30, 2023 • 08:15", amount: 450.25, status: "HARVESTED" },
    { type: "deposit", action: "Deposit Assets", date: "Aug 15, 2023 • 18:45", amount: 33_200, status: "CONFIRMED" },
  ];

  const handleStake = () => {
    // TODO: integrate staking contract
  };

  const estimateMonthlyYield = () => {
    if (!stakeAmount || isNaN(parseFloat(stakeAmount))) return 0;
    return (parseFloat(stakeAmount) * (currentAPR / 100)) / 12;
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4">
            {t("defi.title").split("from")[0]}
            <span className="text-primary">from Real Assets</span>
          </h2>
          <p className="text-on-surface-variant font-body text-lg max-w-2xl">{t("defi.subtitle")}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
            <div className="flex justify-between items-start mb-4">
              <p className="text-secondary font-label text-xs uppercase tracking-widest">{t("defi.totalLiquidity")}</p>
              <span className="material-symbols-outlined text-primary">savings</span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-on-surface">${totalLiquidity.toLocaleString("en-US")}</h3>
            <p className="text-primary text-sm mt-1">USDC Pooled</p>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
            <div className="flex justify-between items-start mb-4">
              <p className="text-secondary font-label text-xs uppercase tracking-widest">{t("defi.currentAPR")}</p>
              <span className="material-symbols-outlined text-tertiary">trending_up</span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-tertiary">{currentAPR}%</h3>
            <p className="text-primary text-sm mt-1">+2.1% from last month</p>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-on-surface/5">
            <div className="flex justify-between items-start mb-4">
              <p className="text-secondary font-label text-xs uppercase tracking-widest">{t("defi.yourStaked")}</p>
              <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-on-surface">${yourStaked.toLocaleString("en-US")}</h3>
            <p className="text-secondary text-sm mt-1">3,420 DFI Shares</p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-surface-container-low rounded-xl border border-on-surface/5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-headline font-bold">{t("defi.poolDominance")}</h3>
              <p className="text-secondary text-sm">Your share relative to the total liquidity provider pool.</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-label uppercase text-secondary">Remaining Equity</p>
              <p className="text-2xl font-headline font-bold text-on-surface">{poolDominance}%</p>
            </div>
          </div>
          <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-tertiary to-primary transition-all duration-500"
              style={{ width: `${poolDominance}%` }}
            />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-headline font-bold">{t("defi.stakingHistory")}</h3>
              <button className="text-primary font-headline text-sm hover:underline">Download CSV</button>
            </div>
            <div className="space-y-4">
              {stakingHistory.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-surface-container/50 rounded-xl border border-on-surface/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.type === "deposit" ? "bg-primary/10" : "bg-tertiary/10"}`}>
                      <span className={`material-symbols-outlined text-sm ${item.type === "deposit" ? "text-primary" : "text-tertiary"}`}>
                        {item.type === "deposit" ? "add_card" : "payments"}
                      </span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm">{item.action}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase font-label">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-headline font-bold ${item.type === "deposit" ? "text-error" : "text-primary"}`}>
                      {item.type === "deposit" ? "-" : "+"}${item.amount.toLocaleString("en-US")}
                    </p>
                    <p className="text-[10px] text-secondary uppercase font-label">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-high p-6 rounded-xl border border-on-surface/5 space-y-6">
            <h3 className="text-xl font-headline font-bold">{t("defi.stakeAssets")}</h3>
            <div>
              <label className="block text-xs font-label uppercase tracking-widest text-secondary mb-2">Amount to Stake (USDC)</label>
              <div className="relative">
                <input
                  type="text"
                  value={stakeAmount}
                  onChange={e => setStakeAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full bg-surface-container-lowest border border-on-surface/10 rounded-lg px-4 py-3 text-on-surface font-headline text-2xl font-bold focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  onClick={() => setStakeAmount(walletBalance.toString())}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-bold hover:bg-primary/30 transition-all"
                >
                  {t("common.max")}
                </button>
              </div>
              <p className="text-xs text-secondary mt-2">{t("defi.walletBalance")}: {walletBalance.toLocaleString("en-US")} USDC</p>
            </div>

            <div>
              <label className="block text-xs font-label uppercase tracking-widest text-secondary mb-3">Lock Duration</label>
              <div className="grid grid-cols-3 gap-3">
                {["7", "30", "90"].map(days => (
                  <button
                    key={days}
                    onClick={() => setStakeDuration(days)}
                    className={`py-2 rounded-lg font-headline font-bold text-sm transition-all ${
                      stakeDuration === days
                        ? "bg-primary/20 text-primary border-2 border-primary"
                        : "bg-surface-container-lowest text-on-surface border border-on-surface/10 hover:border-primary/50"
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-lg border border-primary/20">
              <p className="text-xs font-label uppercase tracking-widest text-secondary mb-1">{t("defi.estMonthlyYield")}</p>
              <p className="text-2xl font-headline font-bold text-tertiary">
                ≈${estimateMonthlyYield().toFixed(2)}{" "}
                <span className="text-xs text-on-surface-variant">USDC</span>
              </p>
              <p className="text-xs text-primary mt-1">Calculated from variable APR of {currentAPR}%</p>
            </div>

            <button
              onClick={handleStake}
              disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
              className="w-full py-4 rounded-xl premium-gradient text-on-primary font-headline font-bold text-lg hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              {t("defi.approveAndStake")}
            </button>

            <p className="text-[10px] text-secondary text-center">
              <span className="material-symbols-outlined text-xs align-middle">info</span> Staking involves smart contract risks. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
