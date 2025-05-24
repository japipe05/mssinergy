import CardBox from "@/app/components/shared/CardBox";
import {
  IconBriefcase,
  IconDeviceDesktop,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import React from "react";

const Introduction = () => {
  return (
    <>
      <CardBox>
        <h5 className="card-title font-semibold">Introduction</h5>
        <p className="card-subtitle">
          Hello, I am Jonathan Deo. I love making websites and graphics. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex gap-3 items-center">
            <IconBriefcase size="20" className="text-ld" />
            <p className="text-ld font-semibold">Sir, P P Institute Of Science</p>
          </div>
          <div className="flex gap-3 items-center">
            <IconMail size="20" className="text-ld" />
            <p className="text-ld font-semibold">xyzjonathan@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <IconDeviceDesktop size="20" className="text-ld" />
            <p className="text-ld font-semibold">www.xyz.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <IconMapPin size="20" className="text-ld" />
            <p className="text-ld font-semibold">Newyork, USA - 100001</p>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default Introduction;
