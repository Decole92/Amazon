import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatue={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            width="1530"
            height="600"
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="lazy"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81YSWfTFDbL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <Image
            width="1530"
            height="600"
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="lazy"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <Image
            width="1530"
            height="600"
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="lazy"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <Image
            width="1530"
            height="600"
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="lazy"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61BvxKSpy3L._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <Image
            width="1530"
            height="600"
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="lazy"
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
