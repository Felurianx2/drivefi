import "@rainbow-me/rainbowkit/styles.css";
import "@scaffold-ui/components/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { LanguageProvider } from "~~/contexts/LanguageContext";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "DriveFi - Tokenized Vehicle Financing",
  description: "Fractional ownership of luxury vehicles powered by blockchain and Chainlink",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider enableSystem>
          <LanguageProvider>
            <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
