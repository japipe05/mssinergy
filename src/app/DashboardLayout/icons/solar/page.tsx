import React from "react";
import type { Metadata } from "next";
import CardBox from "@/app/components/shared/CardBox";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Solar Icons",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Solar Icons" />
      <CardBox>
        <iframe
          src="https://icon-sets.iconify.design/solar/"
          title="Inline Frame Example"
          width="100%"
          height="650"
        ></iframe>
      </CardBox>
    </>
  );
};

export default page;
