import React from "react";
import type { Metadata } from "next";
import DropDownHeader from "@/app/components/ui-components/Dropdown/DropdownHeader";
import DropdownWithIcon from "@/app/components/ui-components/Dropdown/DropdownWithIcon";
import DropDownSize from "@/app/components/ui-components/Dropdown/DropDownSize";
import DropdownPalcements from "@/app/components/ui-components/Dropdown/DropdownPlacements";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";


export const metadata: Metadata = {
  title: "Ui Dropdown",
};
const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Dropdown" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default Drodown & Header Dropdown*/}
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DropDownHeader />
        </div>
        {/* Drodown with icon*/}
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DropdownWithIcon />
        </div>
        {/* Drodown sizes*/}
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DropDownSize />
        </div>
        {/* Drodown Placement*/}
        <div className="col-span-12">
          <DropdownPalcements />
        </div>
      </div>
    </>
  );
};

export default page;
