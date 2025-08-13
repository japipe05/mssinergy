
"use client";
import React from "react";

import Misiondemo from "@/app/components/landingpage/productdemos/mision";
import Visiondemo from "@/app/components/landingpage/productdemos/vision";
import Linetdemo from "@/app/components/landingpage/productdemos/lineatiempo";
import Whastappdemo from "@/app/components/landingpage/productdemos/whastapp";
import LpBanners from "@/app/components/landingpage/banner/banner";
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import Ticket from "@/app/components/landingpage/ticket/Ticket";
import Footer from "@/app/components/landingpage/footer/Footer";

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
          <Whastappdemo /> 
      
        </div>
      </Flowbite>
    </>
  );
};
