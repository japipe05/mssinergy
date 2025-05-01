import type { Metadata } from "next";
import React from "react";
import BasicDialog from "@/app/components/headless-ui/Dialog/BasicDialog";
import DialogWithBackdrop from "@/app/components/headless-ui/Dialog/DialogWithBackdrop";
import ScrollableDialog from "@/app/components/headless-ui/Dialog/ScrollableDialog";
import TranstionDialog from "@/app/components/headless-ui/Dialog/TranstionDialog";
import FramerAnimationDialog from "@/app/components/headless-ui/Dialog/FramerAnimationDialog";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "HeadlessUI Dialog",
};
const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Dialog"  />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <BasicDialog />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DialogWithBackdrop />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ScrollableDialog />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <TranstionDialog />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <FramerAnimationDialog />
        </div>
      </div>
    </>
  );
};

export default page;
