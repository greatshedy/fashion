"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import FeaturedItem from "@/components/FeaturedItem";
import featuredItems from "@/data/featured";
import { ArrowUp } from "lucide-react";
import AllProducts from "./AllProducts";
import allProducts from "@/data/allproducts";

function Featuredslidemobile() {
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-[#4C2083] text-white h-10 w-10 rounded-full cursor-pointer hover:bg-[#2E1258] shadow-lg flex items-center justify-center"
    >
      <ArrowUp size={18} className="rotate-90" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-[#4C2083] text-white h-10 w-10 rounded-full cursor-pointer hover:bg-[#2E1258] shadow-lg flex items-center justify-center"
    >
      <ArrowUp size={18} className="rotate-270" />
    </div>
  );

  const settings = {
    autoplay: true,
    infinite: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container w-3/4 py-10 mx-auto">
      <Slider {...settings}>
        {allProducts
          .filter((item) => item.featured)
          .map((item) => (
            <div key={item.id} className="px-4 mx-auto">
              <AllProducts item={item} />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Featuredslidemobile;
