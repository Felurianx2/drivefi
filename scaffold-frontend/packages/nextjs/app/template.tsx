"use client";

import { ThemeProvider as CustomThemeProvider } from "~~/contexts/ThemeContext";
import { LanguageProvider } from "~~/contexts/LanguageContext";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <CustomThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </CustomThemeProvider>
  );
}
