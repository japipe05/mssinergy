import React from "react";
import type { Metadata } from "next";
import CardBox from "@/app/components/shared/CardBox";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Tabler Icons",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Tabler Icons" />
      <CardBox>
        <iframe
          src="https://tabler-icons.io/"
          title="Inline Frame Example"
          width="100%"
          height="650"
        ></iframe>
      </CardBox>
    </>
  );
};

export default page;
