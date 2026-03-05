import FeaturedItem from "@/components/FeaturedItem";
import Filters from "@/components/Filters";
import { Palette, Ruler, Truck } from "lucide-react";
import featuredItems from "@/data/featured";
import Navbar from "@/components/Navbar";
import allProducts from "@/data/allproducts";
import AllProducts from "@/components/AllProducts";
import { Search, ListFilter } from "lucide-react";
import React from "react";
import Footer from "@/components/Footer";
import Featuredslide from "@/components/Featuredslide";
import Featuredslidemobile from "@/components/Featuredslidemobile";
import { Inknut_Antiqua, Inria_Sans } from "next/font/google";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const page = () => {
  return (
    <div className={`${inriaSans.className}`}>
      <div className="lg:h-screen flex flex-col lg:flex-row overflow-visible">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 relative text-center lg:text-left px-4 lg:px-0">
          <h1
            className={`text-5xl md:text-5xl lg:text-7xl font-semibold text-[#4C2083] mt-12 lg:mt-20 lg:ml-5 font-inknut lg:translate-x-12 lg:w-250 ${inknut.className}`}
          >
            Discover Authentic
          </h1>

          <h1
            className={`text-5xl md:text-5xl lg:text-7xl font-semibold text-[#7851A9] lg:ml-5 mt-5 font-inknut lg:translate-x-12 ${inknut.className}`}
          >
            African Fashion
          </h1>

          <p
            className={`text-lg md:text-2xl lg:text-4xl text-gray-700 mt-6 lg:ml-5 md:text-center lg:text-left lg:w-[85%] ${inriaSans.className} lg:translate-x-12`}
          >
            Connect with talented African designers and celebrate rich cultural
            heritage through fashion.
          </p>

          <button className="bg-[#4C2083] text-white px-10 md:px-16 lg:px-20 py-3 rounded-xl mt-8 lg:mt-10 lg:ml-5 font-medium text-lg hover:bg-purple-600 transition lg:translate-x-12 cursor-pointer">
            Explore Collection
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 h-full flex justify-center items-center px-4 lg:px-0 mt-10 lg:mt-0">
          <img
            src="/PolygonImage.png"
            alt="African Fashion"
            className="w-full max-w-md md:max-w-lg lg:max-w-none h-auto lg:h-full object-contain"
          />
        </div>
      </div>
      <div className="h-fit">
        <div className="flex flex-col lg:flex-row gap-3 pt-3 items-center w-full mx-auto px-4 lg:px-12">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4C2083]"
            />
            <input
              type="text"
              placeholder="Search African fashion..."
              className="w-full pl-10 pr-4 py-2 bg-gray-200 rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button className="flex items-center gap-2 border border-black text-[#4C2083] px-5 w-full lg:w-1/11 py-2 rounded-lg hover:bg-purple-600 transition">
            <ListFilter size={18} />
            Search
          </button>
        </div>
        <Filters />
        <div className="flex w-full items-center justify-center">
          <img
            src="/FeaturedCollections.png"
            alt="Featured"
            className="w-50 h-24 object-contain"
          />
        </div>
      </div>
      <div className="h-85 lg:block hidden">
        <Featuredslide />
      </div>
      <div className="h-85 lg:hidden mx-auto">
        <Featuredslidemobile />
      </div>
      {/* <DesignerCard /> */}
      <div className="flex items-center lg:items-start justify-center lg:justify-start gap-2 lg:gap-4 mx-auto lg:ml-40 text-left mt-10">
        <h1 className="text-2xl md:text-3xl text-[#4C2083]">All Products</h1>
        <h1 className="text-xl md:text-3xl text-gray-600">(6 Items)</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-3/4 mx-auto pt-12 pb-4">
        {allProducts.slice(0, 6).map((item) => (
          <div key={item.id} className="flex justify-center">
            <AllProducts item={item} />
          </div>
        ))}
      </div>
      <section className="py-4 text-center">
        <h2 className="text-3xl font-semibold border-t-2 inline-block border-[#4C2083] pb-2 text-[#4C2083]">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 px-6 md:px-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-6 rounded-full mb-4">
              <img
                src="/game-icons_clothes.png"
                alt="Palette Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-semibold text-2xl text-[#4C2083]">
              Select Design
            </h3>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              Choose from our curated collection of unique styles and textiles.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-6 rounded-full mb-4">
              <img
                src="/hugeicons_tape-measure.png"
                alt="Palette Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-semibold text-2xl text-[#4C2083]">
              Take Measurement
            </h3>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              Use our easy-to-follow guide to submit your accurate body
              measurements.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-6 rounded-full mb-4">
              <img
                src="/iconamoon_delivery-light.png"
                alt="Palette Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-semibold text-2xl text-[#4C2083]">
              We Design and Deliver
            </h3>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              Our designers get to work, and your outfit is delivered to your
              doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HERITAGE SECTION ================= */}
      <section className="px-6 md:px-20 pb-16">
        <div className="bg-[#EDE6F5] rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4C2083]">
            Celebrating African Heritage
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-2xl">
            Each piece in our collection tells a story of rich cultural
            traditions, master craftsmanship, and the vibrant spirit of Africa.
            Support authentic designers while embracing timeless beauty.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="text-5xl font-bold text-[#4C2083]">500+</h3>
              <p className="text-gray-600 text-sm">Authentic Designs</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#4C2083]">50+</h3>
              <p className="text-gray-600 text-sm">African Designers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#4C2083]">25+</h3>
              <p className="text-gray-600 text-sm">Countries Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#EDE6F5] py-12 text-center px-4 md:px-6">
        <h3 className="font-semibold text-lg md:text-xl text-[#4C2083]">
          Stay Connected with African Fashion
        </h3>

        <p className="text-gray-600 text-sm md:text-md mt-2 max-w-xl mx-auto">
          Get updates on new designers, cultural collections, and exclusive
          offers
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full sm:w-2/4 border outline-none bg-white"
          />

          <button className="bg-[#4C2083] text-white px-6 py-2 rounded-md cursor-pointer hover:bg-purple-600 transition w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
