import React from "react";
import CardBox from "@/app/components/shared/CardBox";
import { Metadata } from "next";
import ProductCarousel from "@/app/components/apps/ecommerce/productDetail/ProductCarousel";
import ProductDesc from "@/app/components/apps/ecommerce/productDetail/ProductDesc";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";
import ProductRelated from "@/app/components/apps/ecommerce/productDetail/ProductRelated";
import { ProductProvider } from '@/app/context/Ecommercecontext/index';
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Shop Detail",
};

const EcommerceDetail = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Shop Detail"/>
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12"><ProductCarousel /></div>
            <div className="lg:col-span-6 col-span-12"><ProductDetail /></div>
          </div>
        </CardBox>
        {/* Description Tabs Products */}
        <CardBox className="mt-[30px] pt-2">
          <ProductDesc />
        </CardBox>
        {/* Related Products */}
        <ProductRelated />
      </ProductProvider>
    </>
  );
};

export default EcommerceDetail;
