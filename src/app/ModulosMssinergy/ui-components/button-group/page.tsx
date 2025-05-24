import React from "react";
import type { Metadata } from "next";
import DefaultGroup from "@/app/components/ui-components/ButtonGroup/DefaultGroup";
import OutlineButtonGroup from "@/app/components/ui-components/ButtonGroup/OutlineButtonGroup";
import ColorOptions from "@/app/components/ui-components/ButtonGroup/ColorOptions";
import GroupWithIcon from "@/app/components/ui-components/ButtonGroup/GroupWithIcon";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Button Group",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Button Group"  />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <DefaultGroup />
        </div>
        {/* Outline Button Group */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <OutlineButtonGroup />
        </div>
        {/* Color Options */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <ColorOptions />
        </div>
        {/* Group With Icon */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <GroupWithIcon />
        </div>
      </div>
    </>
  );
};

export default page;
