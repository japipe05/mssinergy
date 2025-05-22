
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
import EcommerceShop from "@/app/components/apps/ecommerce/productGrid";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ecommerce Shop",
};



const Ecommerce = () => {
  return (
    <>
      <ThemeBreadcrumb title="Shop App"/>
      <EcommerceShop />
    </>
  );
};

export default Ecommerce;
