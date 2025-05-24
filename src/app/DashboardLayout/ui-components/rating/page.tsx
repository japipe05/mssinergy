import React from "react";
import type { Metadata } from "next";
import DefaultRatting from "@/app/components/ui-components/Ratting/DefaultRatting";
import WithTextRattings from "@/app/components/ui-components/Ratting/WithTextRattings";
import RattingCount from "@/app/components/ui-components/Ratting/RattingCount";
import StarRatting from "@/app/components/ui-components/Ratting/StarRatting";
import AdvanceRatting from "@/app/components/ui-components/Ratting/AdvanceRatting";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Ratting",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Rating" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-4 col-span-12">
          <DefaultRatting />
        </div>
        {/* With Text Rattings */}
        <div className="lg:col-span-4 col-span-12">
          <WithTextRattings />
        </div>
        {/* Ratting Count*/}
        <div className="lg:col-span-4 col-span-12">
          <RattingCount />
        </div>
        {/* Star Ratting*/}
        <div className="lg:col-span-6 col-span-12">
          <StarRatting />
        </div>
        {/* Advance Ratting*/}
        <div className="lg:col-span-6 col-span-12">
          <AdvanceRatting />
        </div>
      </div>
    </>
  );
};

export default page;
