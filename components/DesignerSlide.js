"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { ArrowUp } from "lucide-react";
import DesignerCard from "@/components/DesignerCard"; // adjust path if needed
import designers from "@/data/designers";

function DesignerSlide() {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#4C2083] text-white h-10 w-10 rounded-full cursor-pointer hover:bg-[#2E1258] shadow-lg flex items-center justify-center"
      >
        <ArrowUp size={18} className="rotate-90" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#4C2083] text-white h-10 w-10 rounded-full cursor-pointer hover:bg-[#2E1258] shadow-lg flex items-center justify-center"
      >
        <ArrowUp size={18} className="rotate-270" />
      </div>
    );
  };
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <div className="slider-container w-5/6 mx-auto h-fit">
      <Slider {...settings}>
        {designers
          .filter((designer) => designer.featured)
          .map((designer) => (
            <div key={designer.id} className="mx-auto h-fit">
              <DesignerCard designer={designer} />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default DesignerSlide;
