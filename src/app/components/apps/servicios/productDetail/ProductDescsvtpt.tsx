"use client";
import OutlineCard from "@/app/components/shared/OutlineCard";
import { IconPencil } from "@tabler/icons-react";
import { Button, Progress, Rating, Tabs } from "flowbite-react";
import React from "react";
const ProductDescsvtpt = () => {
  return (
    <>
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Discription">
          <div className="py-4">
            <p className="text-sm text-bodyclr dark:text-darkmuted mb-6 font-medium">
              En construcción
            </p>
          </div>
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default ProductDescsvtpt;
