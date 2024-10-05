import React from "react";
import type { Metadata } from "next";
import Default from "@/app/components/ui-components/Badge/Default";
import LightBadges from "@/app/components/ui-components/Badge/LightBadges";
import LinkBadges from "@/app/components/ui-components/Badge/LinkBadges";
import BadgesWithIconText from "@/app/components/ui-components/Badge/BadgesWithIconText";
import IconBadge from "@/app/components/ui-components/Badge/IconBadge";
import BadgeSizes from "@/app/components/ui-components/Badge/BadgeSizes";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Badge",
};


const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Badges" />

      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <Default />
        </div>
        {/* Light */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <LightBadges />
        </div>
        {/* Link */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <LinkBadges />
        </div>
        {/* Icon & Text */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <BadgesWithIconText />
        </div>
        {/* Icon*/}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <IconBadge />
        </div>
        {/* Sizes*/}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <BadgeSizes />
        </div>
      </div>
    </>
  );
};

export default page;