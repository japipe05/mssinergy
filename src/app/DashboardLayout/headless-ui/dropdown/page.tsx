import React from "react";
import type { Metadata } from "next";
import BasicDropdown from "@/app/components/headless-ui/Dropdown/BasicDropdown";
import LinkDropdown from "@/app/components/headless-ui/Dropdown/LinkDropdown";
import ButtonDropdown from "@/app/components/headless-ui/Dropdown/ButtonDropdown";
import DisablingItem from "@/app/components/headless-ui/Dropdown/DisablingItem";
import SepratorDropdown from "@/app/components/headless-ui/Dropdown/SepraterDropdown";
import GroupingItems from "@/app/components/headless-ui/Dropdown/GroupingItems";
import DropDownPosition from "@/app/components/headless-ui/Dropdown/DropDownPosition";
import DropdownWidth from "@/app/components/headless-ui/Dropdown/DropdownWidth";
import TransitionDropdown from "@/app/components/headless-ui/Dropdown/TransitionDropdown";
import FramerMotion from "@/app/components/headless-ui/Dropdown/FramerMotion";
import ClosingManually from "@/app/components/headless-ui/Dropdown/ClosingManually";
import RendringElements from "@/app/components/headless-ui/Dropdown/RendringElements";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "HeadlessUI Dropdown",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Dropdown"  />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <BasicDropdown />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <LinkDropdown />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <ButtonDropdown />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <DisablingItem />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <SepratorDropdown />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <GroupingItems />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <DropDownPosition />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <DropdownWidth />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <TransitionDropdown />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <FramerMotion />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <ClosingManually />
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <RendringElements />
        </div>
      </div>
    </>
  );
};

export default page;
