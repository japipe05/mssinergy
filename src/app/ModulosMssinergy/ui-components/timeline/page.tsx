import React from "react";
import type { Metadata } from "next";
import DefaultTimeline from "@/app/components/ui-components/Timeline/DefaultTimeline";
import VerticalTimeline from "@/app/components/ui-components/Timeline/VerticalTimeline";
import HorizontalTimeline from "@/app/components/ui-components/Timeline/HorizontalTimeline";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Timeline",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Timeline" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className=" col-span-12">
          <DefaultTimeline />
        </div>
         {/* Vertical Timeline */}
         <div className=" col-span-12">
          <VerticalTimeline />
        </div>
         {/* Horizontal Timeline */}
         <div className=" col-span-12">
          <HorizontalTimeline />
        </div>
      </div>
    </>
  );
};

export default page;
