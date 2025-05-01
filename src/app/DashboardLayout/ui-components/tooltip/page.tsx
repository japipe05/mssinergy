import React from "react";
import type { Metadata } from "next";
import TooltipStyle from "@/app/components/ui-components/Tooltip/TooltipStyle";
import TooltipTrigger from "@/app/components/ui-components/Tooltip/TooltipTrigger";
import DisableTooltip from "@/app/components/ui-components/Tooltip/DisableTooltip";
import AnimatioTooltip from "@/app/components/ui-components/Tooltip/AnimatioTooltip";
import TooltipPlacement from "@/app/components/ui-components/Tooltip/TooltipPlacement";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Ui Tooltip",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Tooltips" />

      <div className="grid grid-cols-12 gap-6">
        {/* Tooltip Style */}
        <div className="lg:col-span-4 col-span-12">
          <TooltipStyle />
        </div>
        {/* Tooltip Trigger */}
        <div className="lg:col-span-4 col-span-12">
          <TooltipTrigger/>
        </div>
        {/* Tooltip Disable Icon */}
        <div className="lg:col-span-4 col-span-12">
          <DisableTooltip/>
        </div>
        {/* Animatio Tooltip */}
        <div className="col-span-12">
          <AnimatioTooltip/>
        </div>
         {/* Tooltip Placement */}
         <div className="col-span-12">
          <TooltipPlacement/>
        </div>
      </div>
    </>
  );
};

export default page;
