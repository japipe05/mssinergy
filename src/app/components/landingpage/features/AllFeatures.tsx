

import React from "react";
import * as listFeatureData from "../Data";
import CardBox from "../../shared/CardBox";

const AllFeatures = () => {
  return (
    <>
      <div className="md:py-20 py-12 relative dark:bg-dark" id="demos">
        <div className="container">
          <div className=" lg:w-8/12 w-full" data-aos="fade-up" data-aos-duration="500">
            <p className="text-body text-sm font-medium dark:text-darkmuted" >Almost covered everything</p>
            <h2 className=" sm:text-[30px] text-2xl font-bold leading-10 mt-1">
            Amazing Features & Flexibility Provided
            </h2>
          </div>
          {/* Demos */}
          <div className="grid grid-cols-12 mt-10">
        {listFeatureData.listFeature.map((item, index) => (
         <div key={index} className="xl:col-span-3 bg-white dark:bg-darkgray hover:scale-110 transition-all lg:col-span-6 col-span-12 p-30px border border-border dark:border-darkborder">
            {<item.featureicon stroke={1} size={40} className="text-primary" />}
            <h5 className="font-medium text-dark dark:text-white mt-30px mb-2 text-lg" >{item.title}</h5>
            <p className="text-body font-medium dark:text-darkmuted text-sm mb-4" >{item.subtitle}.</p>
         </div>
        ))}

      </div>
        </div>
      </div>  
      <div className="bg-white dark:bg-dark pb-0">
        <div className="container">
          <div className="w-full flex justify-center py-8">
            <div className="lg:w-1/2 w-full">
                <CardBox className=" text-center p-4 pt-7">
                  <h3 className="text-2xl text-dark dark:text-white font-semibold pt-6">
                    Haven't found an answer to your question?
                  </h3>
                  <p className="mb-7 text-body text-sm font-medium pb-2">
                    Connect with us either on discord or email us
                  </p>
                  <div className="sm:flex items-center justify-center gap-3 mb-4">
                    <a href="https://discord.com/invite/eMzE8F6Wqs" target="_blank" className="btn py-3 btn-primary d-block btn-hover-shadow px-7 border border-primary" type="button">Ask on
                      Discord</a>
                    <a href="https://support.wrappixel.com/" target="_blank" className="border border-secondary rounded-full d-block px-7 py-3 text-secondary font-medium hover:bg-secondary hover:text-white" type="button">Submit Ticket</a>
                  </div>
                </CardBox>
            </div>
          </div>
        </div>
      </div>    
    </>
  );
};

export default AllFeatures;


