import React from "react";
import type { Metadata } from "next";
import DefaultSpinner from "@/app/components/ui-components/Spinner/DefaultSpinner";
import ColorSpinner from "@/app/components/ui-components/Spinner/ColorSpinner";
import SizingSpinner from "@/app/components/ui-components/Spinner/SizingSpinner";
import AlignSpinner from "@/app/components/ui-components/Spinner/AlignSpinner";
import LoadButton from "@/app/components/ui-components/Spinner/LoadButton";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Spinner",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Spinner" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <DefaultSpinner />
        </div>
         {/* Color Spinner */}
         <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <ColorSpinner />
        </div>
        {/* Sizing Spinner */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <SizingSpinner />
        </div>
        {/* Align Spinner */}
        <div className="lg:col-span-6 col-span-12">
          <AlignSpinner />
        </div>
        {/* Load Button */}
        <div className="lg:col-span-6 col-span-12">
          <LoadButton />
        </div>
      </div>
    </>
  );
};

export default page;
