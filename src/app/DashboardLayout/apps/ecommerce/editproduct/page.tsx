import React from "react";
import GeneralDetail from "@/app/components/apps/ecommerce/editProduct/GeneralDetail";
import Media from "@/app/components/apps/ecommerce/editProduct/Media";
import Variation from "@/app/components/apps/ecommerce/editProduct/Variation";
import Pricing from "@/app/components/apps/ecommerce/editProduct/Pricing";
import { Button } from "flowbite-react";
import Thumbnail from "@/app/components/apps/ecommerce/editProduct/Thumbnail";
import Status from "@/app/components/apps/ecommerce/editProduct/Status";
import ProductData from "@/app/components/apps/ecommerce/editProduct/ProductData";
import Producttemplate from "@/app/components/apps/ecommerce/editProduct/ProductTemplate";
import ProductrChart from "@/app/components/apps/ecommerce/editProduct/ProductrChart";
import CustomerReviews from "@/app/components/apps/ecommerce/editProduct/CustomerReviews";
import { Metadata } from "next";
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";


export const metadata: Metadata = {
  title: "Edit Product",
};
const EditProduct = () => {
  return (
    <>
      <ThemeBreadcrumb title="Edit Product"/>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-8 col-span-12">
          <div className="flex flex-col gap-6">
            {/* General */}
            <GeneralDetail />
            {/* Media  */}
            <Media />
            {/* Variation  */}
            <Variation />
            {/* Pricing  */}
            <Pricing />
            {/* CustomerReviews */}
            <CustomerReviews />
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="flex flex-col gap-6">
            {/* Thumbnail */}
            <Thumbnail />
            {/* Status */}
            <Status />
            {/* ProductData */}
            <ProductData />
            {/* ProductrChart */}
            <ProductrChart />
            {/* Producttemplate */}
            <Producttemplate />
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <div className="sm:flex gap-3">
          <Button color={"primary"} className="sm:mb-0 mb-3 w-fit bg-primary text-white hover:bg-primaryemphasis">
              Save changes
            </Button>
            <Button color={"lighterror"} className="w-fit bg-lighterror text-error hover:bg-error hover:text-white">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
