import React from "react";
import CodeModal from "../../CodeModal";

const IndicatorsCode = () => {
  return (
    <div>
      <CodeModal>
        {`
      import { Carousel } from "flowbite-react";

      <Carousel>
        <img
            src="/images/blog/blog-img1.jpg"
            alt="..."
          />
          <img
            src="/images/blog/blog-img2.jpg"
            alt="..."
          />
          <img
            src="/images/blog/blog-img3.jpg"
            alt="..."
          />
          <img
            src="/images/blog/blog-img4.jpg"
            alt="..."
          />
          <img
            src="/images/blog/blog-img5.jpg"
            alt="..."
          />
        </Carousel>
        <Carousel indicators={false}>
          <img
              src="/images/blog/blog-img1.jpg"
              alt="..."
            />
            <img
              src="/images/blog/blog-img2.jpg"
              alt="..."
            />
            <img
              src="/images/blog/blog-img3.jpg"
              alt="..."
            />
            <img
              src="/images/blog/blog-img4.jpg"
              alt="..."
            />
            <img
              src="/images/blog/blog-img5.jpg"
              alt="..."
            />
      </Carousel>
                `}
      </CodeModal>
    </div>
  );
};

export default IndicatorsCode;