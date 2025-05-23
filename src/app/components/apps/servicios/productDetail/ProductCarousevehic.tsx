"use client";
import React, { useState, useEffect, useRef } from "react";
// Carousel slider for product
import Slider from "react-slick";

// Carousel slider data
import sliders from "./SliderData";
const {  SliderData4 } = sliders;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const ProductCarousel = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 6,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: false,
    className: "centerThumb",
    speed: 500,
  };

  return (
    <>
      <div className="product">
        <Slider
          asNavFor={nav2 || undefined}
          ref={sliderRef1}
          arrows={false}
        >
          {SliderData4.map((items, index) => (
            <div key={index}>
              <Image
                src={items.imgPath}
                width={500}
                height={500}
                alt="carousel"
                className="rounded-md"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={nav1 || undefined}
          ref={sliderRef2}
          {...settings}
          className="mt-2 product-thumb"
        >
          {SliderData4.map((items, index) => (
            <div key={index} className="cursor-pointer p-2">
              <Image
                src={items.imgPath}
                width={72}
                height={72}
                alt="thumbnail"
                className="rounded-md"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductCarousel;
