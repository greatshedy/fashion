"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import allProducts from "@/data/allproducts";
import AllProducts from "./AllProducts";

export default function ProductsSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container w-3/4 mx-auto h-120 pt-10">
      <Slider {...settings}>
        {allProducts.map((item) => (
          <div key={item.id} className="mx-auto h-120 pt-12">
            <AllProducts item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
