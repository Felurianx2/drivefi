"use client";

import { useState } from "react";
import { useLanguage } from "~~/contexts/LanguageContext";
import { Header } from "~~/components/drivefi/Header";
import { BottomNav } from "~~/components/drivefi/BottomNav";
import Image from "next/image";

interface Car {
  id: number;
  name: string;
  image: string;
  priceUSDC: number;
  installments: number;
  installmentValue: number;
  paidInstallments: number;
  year: number;
  mileage: string;
  color: string;
  vin: string;
  transmission: string;
  fuel: string;
  category: string;
  badge: string;
}

export default function MarketplacePage() {
  const { t } = useLanguage();
  const [hoveredCar, setHoveredCar] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const cars: Car[] = [
    {
      id: 1,
      name: "Tesla Model S Plaid",
      image: "/cars/tesla-model-s.jpg",
      priceUSDC: 89990,
      installments: 24,
      installmentValue: 3749.58,
      paidInstallments: 8,
      year: 2023,
      mileage: "12,000 km",
      color: "Pearl White",
      vin: "5YJSA1E26MF424551",
      transmission: "Electric",
      fuel: "Electric",
      category: "electric",
      badge: "PREMIUM",
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      image: "/cars/bmw-m4.jpg",
      priceUSDC: 75900,
      installments: 36,
      installmentValue: 2108.33,
      paidInstallments: 12,
      year: 2022,
      mileage: "18,500 km",
      color: "São Paulo Yellow",
      vin: "WBS8M9C57NCE12345",
      transmission: "Automatic",
      fuel: "Gasoline",
      category: "luxury",
      badge: "TOKENIZED",
    },
    {
      id: 3,
      name: "Porsche 911 Turbo S",
      image: "/cars/porsche-911.jpg",
      priceUSDC: 207000,
      installments: 48,
      installmentValue: 4312.5,
      paidInstallments: 0,
      year: 2024,
      mileage: "3,200 km",
      color: "GT Silver Metallic",
      vin: "WP0AB2A99PS123456",
      transmission: "PDK",
      fuel: "Gasoline",
      category: "luxury",
      badge: "PREMIUM",
    },
  ];

  const filters = [
    { id: "all", label: t("marketplace.allAssets") },
    { id: "luxury", label: t("marketplace.luxury") },
    { id: "electric", label: t("marketplace.electric") },
  ];

  const filteredCars = cars.filter(car => {
    const matchesFilter = activeFilter === "all" || car.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.vin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold font-label border border-primary/20 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">link</span>
                  {t("marketplace.securedBy").toUpperCase()}
                </span>
              </div>
              <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-4">
                {t("marketplace.title").split(" ").slice(0, 2).join(" ")}{" "}
                <span className="text-primary">{t("marketplace.title").split(" ").slice(2).join(" ")}</span>
              </h2>
              <p className="text-on-surface-variant font-body text-lg max-w-lg">{t("marketplace.subtitle")}</p>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="bg-surface-container-lowest p-1 rounded-xl flex items-center border border-primary/40 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 shadow-lg shadow-primary/10 transition-all">
                <span className="material-symbols-outlined px-3 text-outline">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-on-surface w-full py-3 font-body placeholder:text-outline"
                  placeholder={t("marketplace.search")}
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mt-10">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-manrope font-bold text-sm transition-all active:scale-95 ${
                  activeFilter === filter.id
                    ? "premium-gradient text-on-primary shadow-md"
                    : "bg-surface-container-highest text-on-surface hover:bg-surface-bright border border-on-surface/5"
                }`}
              >
                {filter.label}
              </button>
            ))}
            <button className="px-6 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 font-manrope font-bold text-sm transition-all active:scale-95 border border-primary/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">account_balance</span>
              {t("marketplace.financing")}
            </button>
            <div className="ml-auto flex items-center gap-2 text-on-surface-variant text-sm">
              <span className="material-symbols-outlined text-sm">sort</span>
              <span className="font-label uppercase tracking-widest text-[10px]">{t("marketplace.sortBy")}</span>
            </div>
          </div>
        </section>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map(car => {
            const isHovered = hoveredCar === car.id;
            return (
              <div
                key={car.id}
                className="glass-card rounded-xl overflow-visible group transition-all hover:translate-y-[-8px] border border-on-surface/5"
                onMouseEnter={() => setHoveredCar(car.id)}
                onMouseLeave={() => setHoveredCar(null)}
              >
                <div className="relative h-56 -mt-8 px-6">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="p-6 pt-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                        {car.category}
                      </span>
                      <h3 className="font-headline text-2xl font-bold tracking-tight text-on-surface">{car.name}</h3>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-bold font-label border ${
                        car.badge === "TOKENIZED"
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-tertiary/10 text-tertiary border-tertiary/20"
                      }`}
                    >
                      {car.badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="bg-surface-container-low p-2 rounded-lg text-center">
                      <p className="font-label text-[9px] uppercase text-outline-variant mb-1">{t("vehicle.year")}</p>
                      <p className="font-manrope font-bold text-sm text-secondary">{car.year}</p>
                    </div>
                    <div className="bg-surface-container-low p-2 rounded-lg text-center">
                      <p className="font-label text-[9px] uppercase text-outline-variant mb-1">{t("vehicle.mileage")}</p>
                      <p className="font-manrope font-bold text-sm text-secondary">{car.mileage}</p>
                    </div>
                    <div className="bg-surface-container-low p-2 rounded-lg text-center">
                      <p className="font-label text-[9px] uppercase text-outline-variant mb-1">{t("vehicle.vin")}</p>
                      <p className="font-manrope font-bold text-sm text-secondary truncate">{car.vin}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-on-surface/5">
                    <div className="space-y-1">
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-tertiary-container">
                        {t("marketplace.installmentPrice")}
                      </p>
                      <p className="font-headline text-xl font-extrabold text-on-surface">
                        {car.installmentValue.toLocaleString("en-US")}{" "}
                        <span className="text-xs font-medium text-outline">{t("marketplace.perMonth")}</span>
                      </p>
                    </div>
                    <button className="premium-gradient p-3 rounded-xl shadow-lg active:scale-90 transition-transform">
                      <span className="material-symbols-outlined text-on-primary block">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
