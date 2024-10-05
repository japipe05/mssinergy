import React from "react";
import type { Metadata } from "next";
import DefaultTabs from "@/app/components/ui-components/Tabs/DefaultTabs";
import UnderlineTabs from "@/app/components/ui-components/Tabs/UnderlineTabs";
import TabsWithPill from "@/app/components/ui-components/Tabs/TabsWithPill";
import FullWidthTabs from "@/app/components/ui-components/Tabs/FullWidthTabs";
import StateTabs from "@/app/components/ui-components/Tabs/StateTabs";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Tabs",
};
const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Tabs" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="col-span-12">
          <DefaultTabs />
        </div>
        {/* Underline Tabs */}
        <div className="col-span-12">
          <UnderlineTabs />
        </div>
         {/* Tabs With Pill */}
         <div className="col-span-12">
          <TabsWithPill />
        </div>
        {/* Full Width Tabs */}
        <div className="col-span-12">
          <FullWidthTabs />
        </div>
        {/* State Tabs */}
        <div className="col-span-12">
          <StateTabs />
        </div>
      </div>
    </>
  );
};

export default page;