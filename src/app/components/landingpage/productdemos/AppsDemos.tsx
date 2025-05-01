import React from "react";
import AllApps from "./AllApps";


const ProductDemos = () => {

  return (
    <>
      <div className="md:py-20 py-12 relative bg-lightsubtle dark:bg-dark" id="demos">
        <div className="container">
          <div className=" lg:w-6/12 w-full" data-aos="fade-up" data-aos-duration="500">
            <p className="text-body text-sm font-medium dark:text-darkmuted" >What’s included?</p>
            <h2 className=" sm:text-[30px] text-2xl font-bold leading-10 mt-1">
            12 high customizable application designs included in the package
            </h2>
          </div>
          {/* Demos */}
          <AllApps />
        </div>
      </div>
    </>
  );
};

export default ProductDemos;
