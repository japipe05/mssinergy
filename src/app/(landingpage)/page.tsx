
"use client";
import React, { useEffect } from "react";
import Landingpage from "../components/landingpage";
import type { Metadata } from "next";
import Misiondemo from "@/app/components/landingpage/productdemos/mision";
import Visiondemo from "@/app/components/landingpage/productdemos/vision";
import Linetdemo from "@/app/components/landingpage/productdemos/lineatiempo";
import Whastappdemo from "@/app/components/landingpage/productdemos/whastapp";
import LpBanners from "@/app/components/landingpage/banner/banner";
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import AllFeatures from "@/app/components/landingpage/features/AllFeatures";
import Ticket from "@/app/components/landingpage/ticket/Ticket";
import Footer from "@/app/components/landingpage/footer/Footer";
import AppsDemos from "@/app/components/landingpage/productdemos/AppsDemos";
//import '../../utils/i18n';

export default function page()  {
  
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <div className="landingpage">
        <LpBanners />
        <Misiondemo />
        <Visiondemo />
        <Linetdemo />

        
        <Ticket />
          
          <Footer />
          <Whastappdemo /> {/* Botón de WhatsApp */}
      {/* 
          <ProductDemos />
          <LpBanners />
          <AppsDemos/>
          <AllFeatures />
          <Ticket />
          <Footer />
          */}
        </div>
      </Flowbite>
    </>
  );
};
