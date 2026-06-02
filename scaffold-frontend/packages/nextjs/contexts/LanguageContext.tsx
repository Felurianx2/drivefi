"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.marketplace": "Marketplace",
    "nav.dashboard": "Dashboard",
    "nav.defi": "DeFi",
    "nav.admin": "Admin",
    "nav.wallet": "Wallet",

    // Marketplace
    "marketplace.title": "Elite Fleet Marketplace",
    "marketplace.subtitle": "Acquire fractional ownership of high-performance assets with real-time valuation via decentralized oracles.",
    "marketplace.search": "Search model or performance spec...",
    "marketplace.allAssets": "All Assets",
    "marketplace.luxury": "Luxury",
    "marketplace.electric": "Electric",
    "marketplace.financing": "Available for Financing",
    "marketplace.sortBy": "Sort by: High Performance",
    "marketplace.installmentPrice": "Installment Price",
    "marketplace.perMonth": "USDC/mo",
    "marketplace.viewTerms": "View Terms",
    "marketplace.securedBy": "Secured by Chainlink Price Feeds",

    // Vehicle Card
    "vehicle.year": "Year",
    "vehicle.mileage": "Mileage",
    "vehicle.vin": "VIN",
    "vehicle.tokenized": "Tokenized",
    "vehicle.premium": "Premium",
    "vehicle.viewEscrow": "View Escrow",
    "vehicle.makePayment": "Make Payment",
    "vehicle.payInstallment": "Pay Installment",

    // DeFi
    "defi.title": "Yield from Real Assets",
    "defi.subtitle": "Earn institutional-grade returns by providing liquidity to tokenized luxury automotive fleets.",
    "defi.totalLiquidity": "Total Liquidity",
    "defi.currentAPR": "Current APR",
    "defi.yourStaked": "Your Staked Amount",
    "defi.poolDominance": "Pool Dominance",
    "defi.stakingHistory": "Staking History",
    "defi.stakeAssets": "Stake Assets",
    "defi.approveAndStake": "Approve & Stake Assets",
    "defi.depositAssets": "Deposit Assets",
    "defi.harvestRewards": "Harvest Rewards",
    "defi.walletBalance": "Wallet Balance",
    "defi.estMonthlyYield": "Est. Monthly Yield",

    // Admin
    "admin.title": "Mint Vehicle Asset",
    "admin.subtitle": "Generate a unique digital twin on the blockchain.",
    "admin.assetIdentity": "Asset Identity",
    "admin.verifiedTelemetry": "Verified Telemetry",
    "admin.setUpEscrow": "Set Up Escrow",
    "admin.provenance": "Provenance",
    "admin.uploadDocs": "Upload Provenance Documents",
    "admin.mintNFT": "Mint DriveFi NFT",
    "admin.saveDraft": "Save Draft",
    "admin.vehicleId": "Vehicle Identification Number (VIN)",
    "admin.productionYear": "Production Year",
    "admin.make": "Make",
    "admin.model": "Model",
    "admin.mileageKm": "Mileage (km)",
    "admin.serviceHistory": "Service History Status",
    "admin.escrowDuration": "Escrow Duration (Days)",
    "admin.commissionFee": "Commission Fee (%)",
    "admin.enableMultiSig": "Enable Multi-Sig Verification",
    "admin.renavam": "RENAVAM (National Registry)",
    "admin.networkFee": "Network Fee",
    "admin.assetClass": "Asset Class",

    // Dashboard
    "dashboard.welcome": "Welcome back",
    "dashboard.profile": "Profile",
    "dashboard.availableUSDC": "Available USDC",
    "dashboard.tvlInAssets": "TVL in Car NFTs",
    "dashboard.assetPerformance": "Asset Performance",
    "dashboard.activeFinancing": "Active Financing",
    "dashboard.viewAll": "View All Assets",
    "dashboard.recentActivity": "Recent Activity",
    "dashboard.assetBreakdown": "Asset Breakdown",
    "dashboard.equityOwned": "Equity Owned",
    "dashboard.remaining": "Remaining",
    "dashboard.dueIn": "Due in",
    "dashboard.days": "days",

    // Common
    "common.connectWallet": "Connect Wallet",
    "common.loading": "Loading...",
    "common.confirm": "Confirm",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.max": "MAX",
    "common.confirmed": "Confirmed",
    "common.pending": "Pending",
    "common.failed": "Failed",
  },
  pt: {
    // Navigation
    "nav.marketplace": "Marketplace",
    "nav.dashboard": "Dashboard",
    "nav.defi": "DeFi",
    "nav.admin": "Admin",
    "nav.wallet": "Carteira",

    // Marketplace
    "marketplace.title": "Marketplace Elite",
    "marketplace.subtitle":
      "Adquira propriedade fracionada de ativos de alta performance com avaliação em tempo real via oráculos descentralizados.",
    "marketplace.search": "Buscar modelo ou especificação...",
    "marketplace.allAssets": "Todos os Ativos",
    "marketplace.luxury": "Luxo",
    "marketplace.electric": "Elétrico",
    "marketplace.financing": "Disponível para Financiamento",
    "marketplace.sortBy": "Ordenar por: Alta Performance",
    "marketplace.installmentPrice": "Valor da Parcela",
    "marketplace.perMonth": "USDC/mês",
    "marketplace.viewTerms": "Ver Termos",
    "marketplace.securedBy": "Protegido por Chainlink Price Feeds",

    // Vehicle Card
    "vehicle.year": "Ano",
    "vehicle.mileage": "Km",
    "vehicle.vin": "VIN",
    "vehicle.tokenized": "Tokenizado",
    "vehicle.premium": "Premium",
    "vehicle.viewEscrow": "Ver Escrow",
    "vehicle.makePayment": "Fazer Pagamento",
    "vehicle.payInstallment": "Pagar Parcela",

    // DeFi
    "defi.title": "Rendimento de Ativos Reais",
    "defi.subtitle":
      "Ganhe retornos de nível institucional fornecendo liquidez para frotas automotivas de luxo tokenizadas.",
    "defi.totalLiquidity": "Liquidez Total",
    "defi.currentAPR": "APR Atual",
    "defi.yourStaked": "Seu Valor em Stake",
    "defi.poolDominance": "Dominância no Pool",
    "defi.stakingHistory": "Histórico de Staking",
    "defi.stakeAssets": "Fazer Stake",
    "defi.approveAndStake": "Aprovar & Fazer Stake",
    "defi.depositAssets": "Depositar Ativos",
    "defi.harvestRewards": "Coletar Recompensas",
    "defi.walletBalance": "Saldo na Carteira",
    "defi.estMonthlyYield": "Rendimento Mensal Est.",

    // Admin
    "admin.title": "Mintar Ativo Veicular",
    "admin.subtitle": "Gere um gêmeo digital único na blockchain.",
    "admin.assetIdentity": "Identidade do Ativo",
    "admin.verifiedTelemetry": "Telemetria Verificada",
    "admin.setUpEscrow": "Configurar Escrow",
    "admin.provenance": "Procedência",
    "admin.uploadDocs": "Upload de Documentos de Procedência",
    "admin.mintNFT": "Mintar NFT DriveFi",
    "admin.saveDraft": "Salvar Rascunho",
    "admin.vehicleId": "Número de Identificação do Veículo (VIN)",
    "admin.productionYear": "Ano de Fabricação",
    "admin.make": "Marca",
    "admin.model": "Modelo",
    "admin.mileageKm": "Quilometragem (km)",
    "admin.serviceHistory": "Status do Histórico de Serviço",
    "admin.escrowDuration": "Duração do Escrow (Dias)",
    "admin.commissionFee": "Taxa de Comissão (%)",
    "admin.enableMultiSig": "Habilitar Verificação Multi-Sig",
    "admin.renavam": "RENAVAM (Registro Nacional)",
    "admin.networkFee": "Taxa de Rede",
    "admin.assetClass": "Classe do Ativo",

    // Dashboard
    "dashboard.welcome": "Bem-vindo de volta",
    "dashboard.profile": "Perfil",
    "dashboard.availableUSDC": "USDC Disponível",
    "dashboard.tvlInAssets": "TVL em Car NFTs",
    "dashboard.assetPerformance": "Performance de Ativos",
    "dashboard.activeFinancing": "Financiamento Ativo",
    "dashboard.viewAll": "Ver Todos os Ativos",
    "dashboard.recentActivity": "Atividade Recente",
    "dashboard.assetBreakdown": "Distribuição de Ativos",
    "dashboard.equityOwned": "Equity Possuído",
    "dashboard.remaining": "Restante",
    "dashboard.dueIn": "Vence em",
    "dashboard.days": "dias",

    // Common
    "common.connectWallet": "Conectar Carteira",
    "common.loading": "Carregando...",
    "common.confirm": "Confirmar",
    "common.cancel": "Cancelar",
    "common.close": "Fechar",
    "common.save": "Salvar",
    "common.edit": "Editar",
    "common.delete": "Deletar",
    "common.search": "Buscar",
    "common.filter": "Filtrar",
    "common.sort": "Ordenar",
    "common.max": "MÁX",
    "common.confirmed": "Confirmado",
    "common.pending": "Pendente",
    "common.failed": "Falhou",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("drivefi-language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "pt")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("drivefi-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
