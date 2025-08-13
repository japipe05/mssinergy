import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "./context/customizerContext";
import "./api/index";
import { dir } from "i18next";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: false, 
});

export const metadata: Metadata = {
  title: "Ms Sinergy SAS - Metrología y Ensayos Industriales",
  description:
    "Ms Sinergy SAS ofrece servicios de metrología en magnitud de presión y ensayos para los sectores industrial, farmacéutico, alimentario, hospitalario y veterinario. Acreditación ONAC en proceso y compromiso con la mejora continua.",
  keywords: [
    "metrología",
    "calibraciones",
    "ensayos",
    "magnitud de presión",
    "magnitud de temperatura",
    "humedad relativa",
    "calificación de vehículos",
    "mapeos térmicos",
    "acreditación ONAC",
    "ISO 9001",
    "ISO 17025",
    "consultoría",
    "Ms Sinergy SAS",
  ],
  authors: [{ name: "Ms Sinergy SAS" }],
  openGraph: {
    title: "Ms Sinergy SAS - Metrología y Ensayos Industriales",
    description:
      "Especialistas en metrología y ensayos, con enfoque en calidad, acreditación ONAC y mejora continua para múltiples sectores industriales.",
    url: "https://www.mssinergy.com",
    siteName: "Ms Sinergy SAS",
    locale: "es_CO",
    type: "website",
  },
};


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
   params: { lng: string };
}) {
   const lng = params.lng || "es"; 
   
  return (
     <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
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
