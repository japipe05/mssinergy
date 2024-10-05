"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { forwardRef } from "react";
import CardBox from "../../shared/CardBox";

let MyCustomButton = forwardRef(function (props, ref: any) {
  return <button className="..." ref={ref} {...props} />;
});

const RenderAsElementTab = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">
            Rendering As Different Elements
          </h4>
        </div>
        <TabGroup manual>
          <TabList className="flex gap-3" as="aside">
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">
              Tab 1
            </Tab>
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary ">
              Tab 2
            </Tab>
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-none data-[selected]:bg-primary data-[hover]:text-white data-[selected]:text-white data-[hover]:bg-primary data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-primary">
              Tab 3
            </Tab>
          </TabList>
          <TabPanels
            className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3"
            as="section"
          >
            <TabPanel className="text-bodyclr dark:text-darkmuted font-medium">
              One Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
            <TabPanel className="text-bodyclr dark:text-darkmuted font-medium">
              Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
            <TabPanel className="text-bodyclr dark:text-darkmuted font-medium">
              Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’
              (complete text) is dummy text that is not meant to mean anything.
              It is used as a placeholder in magazine layouts, for example, in
              order to give an impression of the finished document.
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </CardBox>
    </div>
  );
};

export default RenderAsElementTab;