import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "./context/customizerContext";
import "./api/index";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: false, // 🔧 evita precarga en compilación
});

export const metadata: Metadata = {
  title: "Adminpro Starterkit - Nextjs",
  description: "Adminpro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <Flowbite theme={{ theme: customTheme }}>
          <CustomizerContextProvider>
            {children}
          </CustomizerContextProvider>
        </Flowbite>
      </body>
    </html>
  );
}
