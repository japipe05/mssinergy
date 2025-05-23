
import ProductCheckout from "@/app/components/apps/ecommerce/checkout/ProductCheckout";
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import { ProductProvider } from '@/app/context/Ecommercecontext/index';
import { Metadata } from "next";
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Checkout App",
};

const Checkout = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Checkout"  />
        <CardBox>
          <ProductCheckout />
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default Checkout;
