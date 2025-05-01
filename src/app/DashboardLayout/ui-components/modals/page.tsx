import React from "react";
import type { Metadata } from "next";
import DefaultModal from "@/app/components/ui-components/Modals/DefaultModal";
import PopupModal from "@/app/components/ui-components/Modals/PopupModal";
import FormModal from "@/app/components/ui-components/Modals/FormModal";
import SizingModal from "@/app/components/ui-components/Modals/SizingModal";
import PlacementModal from "@/app/components/ui-components/Modals/PlacementModal";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Ui Modals",
};
const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Modals" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <DefaultModal />
        </div>
        {/* Popup Modal */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <PopupModal />
        </div>
        {/* Form Modal */}
        <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <FormModal />
        </div>
        {/* Sizing Modal */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <SizingModal />
        </div>
        {/* Placement Modal */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <PlacementModal />
        </div>
      </div>
    </>
  );
};

export default page;
