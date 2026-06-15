"use client";

import Link from "next/link";
import { useLanguage } from "~~/contexts/LanguageContext";
import { Header } from "~~/components/drivefi/Header";

export default function HomePage() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: "account_balance",
      title: language === "en" ? "Fractional Ownership" : "Propriedade Fracionada",
      description:
        language === "en"
          ? "Own luxury vehicles through tokenized shares with transparent blockchain records"
          : "Possua veículos de luxo através de ações tokenizadas com registros transparentes na blockchain",
    },
    {
      icon: "currency_exchange",
      title: language === "en" ? "DeFi Yield" : "Rendimento DeFi",
      description:
        language === "en"
          ? "Earn passive income by providing liquidity to vehicle financing pools"
          : "Ganhe renda passiva fornecendo liquidez para pools de financiamento de veículos",
    },
    {
      icon: "link",
      title: language === "en" ? "Chainlink Powered" : "Powered by Chainlink",
      description:
        language === "en"
          ? "Real-time asset valuations and automated settlements via Chainlink oracles"
          : "Avaliações de ativos em tempo real e liquidações automatizadas via oráculos Chainlink",
    },
  ];

  const stats = [
    { value: "$12.4M", label: language === "en" ? "Total Value Locked" : "Valor Total Bloqueado" },
    { value: "847", label: language === "en" ? "Vehicles Tokenized" : "Veículos Tokenizados" },
    { value: "14.5%", label: language === "en" ? "Average APR" : "APR Médio" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-container-low to-surface text-on-surface font-body transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold font-label border border-primary/20 mb-6">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">verified</span>
            {language === "en" ? "Powered by Arbitrum & Chainlink" : "Powered by Arbitrum & Chainlink"}
          </div>

          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight mb-6">
            {language === "en" ? "Tokenized " : "Financiamento "}
            <span className="text-primary">
              {language === "en" ? "Vehicle" : "Veicular"}
            </span>
            <br />
            {language === "en" ? "Financing" : "Tokenizado"}
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant font-body mb-12 max-w-3xl mx-auto">
            {language === "en"
              ? "The future of automotive ownership. Buy luxury vehicles with USDC installments, earn yield from vehicle financing pools, or manage tokenized assets."
              : "O futuro da propriedade automotiva. Compre veículos de luxo com parcelas em USDC, ganhe rendimento de pools de financiamento de veículos, ou gerencie ativos tokenizados."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketplace"
              className="px-8 py-4 rounded-xl premium-gradient text-on-primary font-headline font-bold text-lg hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {language === "en" ? "Explore Marketplace" : "Explorar Marketplace"}
            </Link>
            <Link
              href="/defi"
              className="px-8 py-4 rounded-xl bg-surface-container-highest text-on-surface font-headline font-bold text-lg hover:brightness-110 transition-all border border-on-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {language === "en" ? "Earn Yield" : "Ganhar Rendimento"}
            </Link>
          </div>
        </div>

        {/* Stats — 3 different sizes for rhythm */}
        <div className="grid grid-cols-3 gap-4 mt-20 max-w-2xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-surface-container-low rounded-xl border border-on-surface/5 text-center ${idx === 0 ? "col-span-3 sm:col-span-1 py-8 px-6" : "py-6 px-4"}`}
            >
              <h3 className={`font-headline font-extrabold text-primary mb-1 ${idx === 0 ? "text-4xl" : "text-3xl"}`}>{stat.value}</h3>
              <p className="text-secondary font-label uppercase tracking-widest text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features — alternating layout instead of identical card grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4">
            {language === "en" ? "How It " : "Como "}
            <span className="text-primary">{language === "en" ? "Works" : "Funciona"}</span>
          </h2>
          <p className="text-lg text-on-surface-variant">
            {language === "en"
              ? "Three ways to participate in the tokenized vehicle economy"
              : "Três formas de participar da economia de veículos tokenizados"}
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 items-center bg-surface-container-low rounded-2xl border border-on-surface/5 p-8 hover:border-primary/20 transition-all`}
            >
              <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary" aria-hidden="true">{feature.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-primary font-label font-bold text-xs mb-1">0{idx + 1}</p>
                <h3 className="text-2xl font-headline font-bold mb-2">{feature.title}</h3>
                <p className="text-on-surface-variant">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section — purposeful glass here */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="glass-panel p-12 rounded-2xl border border-primary/20 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">
            {language === "en" ? "Ready to Get Started?" : "Pronto para Começar?"}
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Connect your wallet and start exploring tokenized vehicle financing on Arbitrum"
              : "Conecte sua carteira e comece a explorar financiamento veicular tokenizado na Arbitrum"}
          </p>
          <Link
            href="/marketplace"
            className="inline-block px-8 py-4 rounded-xl premium-gradient text-on-primary font-headline font-bold text-lg hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {language === "en" ? "Launch App" : "Acessar App"}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-on-surface/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary" aria-hidden="true">directions_car</span>
            <h3 className="font-headline text-2xl font-bold text-primary">DriveFi</h3>
          </div>
          <p className="text-sm text-secondary mb-4">
            {language === "en"
              ? "Tokenized vehicle financing powered by Arbitrum & Chainlink"
              : "Financiamento veicular tokenizado powered by Arbitrum & Chainlink"}
          </p>
          <p className="text-xs text-outline">
            © 2024 DriveFi. {language === "en" ? "All rights reserved." : "Todos os direitos reservados."}
          </p>
        </div>
      </footer>
    </div>
  );
}
