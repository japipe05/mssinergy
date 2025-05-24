"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import CardBox from "@/app/components/shared/CardBox";

interface BreadCrumbType {
  title: string;
}

const ThemeBreadcrumb = ({
  title
}: BreadCrumbType) => {
  return (
    <> 
      <CardBox className="mb-6">
        <div className="sm:flex justify-between items-center" >
          <div className="relative after:w-0.5 after:absolute after:top-0 after:-start-6 after:bg-primary after:h-full" >
          <h6 className="text-lg font-medium">{title}</h6>
          </div>
          <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-transparent p-0 dark:bg-transparent">
            <Breadcrumb.Item href="/">
              <span className="text-primary" >Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item >{title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </CardBox>
    </>
  );
};

export default ThemeBreadcrumb;
