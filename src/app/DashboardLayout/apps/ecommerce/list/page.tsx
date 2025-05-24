import React from "react";
import { Metadata } from "next";
import { ProductProvider } from '@/app/context/Ecommercecontext/index';
import ProductTableList from '@/app/components/apps/ecommerce/productTableList/ProductTableList'
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Product List",
};
const EcomProductList = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Product list" />
        <ProductTableList />
      </ProductProvider>
    </>
  )
}

export default EcomProductList
