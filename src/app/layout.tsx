import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "./context/customizerContext";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="en" className={montserrat.className}>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Flowbite theme={{ theme: customTheme }}>
          <CustomizerContextProvider>
            {children}
          </CustomizerContextProvider>
        </Flowbite>
      </body>
    </html>
  );
}
