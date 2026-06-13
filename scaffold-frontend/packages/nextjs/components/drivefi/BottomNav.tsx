"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "~~/contexts/LanguageContext";

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/dashboard", icon: "dashboard", label: t("nav.dashboard") },
    { href: "/marketplace", icon: "storefront", label: t("nav.marketplace") },
    { href: "/defi", icon: "currency_exchange", label: t("nav.defi") },
    { href: "/admin", icon: "toll", label: t("nav.admin") },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe pt-3 bg-surface/95 backdrop-blur-xl rounded-t-xl shadow-[0_-4px_40px_rgba(0,0,0,0.15)] border-t border-on-surface/5">
      {navItems.map(item => {
        const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center rounded-xl px-3 py-1 transition-all duration-200 ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-on-surface-variant opacity-60 hover:bg-primary/5 hover:opacity-100"
            }`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="font-inter text-[10px] uppercase tracking-widest mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
