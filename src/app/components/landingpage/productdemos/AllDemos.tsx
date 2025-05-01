import React from "react";
import * as DemosName from "../Data";
import { Button, Tooltip } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
const AllDemos = () => {
  return (
    <>
      {/* Demos */}
      <div className="grid grid-cols-12 gap-6 mt-10">
        {DemosName.Demos.map((item, index) => (
          <React.Fragment key={index}>
            {item.type == true ? (
              <div className="lg:col-span-4 md:col-span-6 col-span-12 " data-aos="fade-up"
              data-aos-delay="200" data-aos-duration="1000">
                <div className="relative overflow-hidden">
                    <div className="overflow-hidden rounded-md relative flex justify-center items-center group ">
                      <Image
                        src={item.img}
                        alt="materialm"
                        className="w-full"
                      />
                      <div className={`absolute left-1/2 -translate-x-1/2 justify-center items-center  mx-auto invisible group-hover:visible z-[1] ${item.active?"flex":"hidden"}`} >
                      <Tooltip content="Live Preview" style="dark" className="text-nowrap">
                      <Link href={item.link} className="flex w-12 h-12 justify-center items-center rounded-full bg-primary text-white " >
                        <Icon icon="solar:laptop-minimalistic-line-duotone" className="text-2xl" ></Icon>
                      </Link>
                    </Tooltip>
                      </div>
                      <div className={`absolute top-0 bottom-0 left-0 h-full w-full bg-blue-100  mix-blend-multiply invisible group-hover:visible ${item.active?"":"hidden"}`}></div>
                    </div>
                  <div className="rounded-t-none rounded-md border-ld border-b  p-4">
                    <Link href={item.link} className="text-base text-dark dark:text-white hover:text-primary font-semibold">{item.name}</Link>
                    <p className="text-bodyclr dark:text-darkmuted mt-1">{item.active?"Demo":"Included in the package"}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AllDemos;
