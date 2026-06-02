"use client";

import { ThemeProvider as CustomThemeProvider } from "~~/contexts/ThemeContext";
import { LanguageProvider } from "~~/contexts/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CustomThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </CustomThemeProvider>
  );
}
