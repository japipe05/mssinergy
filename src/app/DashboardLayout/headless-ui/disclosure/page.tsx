import type { Metadata } from "next";
import React from "react";
import BasicDisclosure from "@/app/components/headless-ui/Disclosure/BasicDisclosure";
import TransitionDisclosure from "@/app/components/headless-ui/Disclosure/TransitionDisclosure";
import FramerDiclosure from "@/app/components/headless-ui/Disclosure/FramerDiclosure";
import DisclosureManually from "@/app/components/headless-ui/Disclosure/DisclosureManually";
import RenderingDisclosure from "@/app/components/headless-ui/Disclosure/RenderingDisclosure";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "HeadlessUI Disclosure",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Disclosure" />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 col-span-12">
          <BasicDisclosure />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <TransitionDisclosure />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <DisclosureManually />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <RenderingDisclosure />
        </div>
        <div className="col-span-12">
          <FramerDiclosure />
        </div>
      </div>
    </>
  );
};

export default page;
