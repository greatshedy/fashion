import FeaturedItem from "@/components/FeaturedItem";
import Filters from "@/components/Filters";
import featuredItems from "@/data/featured";
import Navbar from "@/components/Navbar";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  ListFilter,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="lg:h-screen flex lg:flex-row flex-col overflow-visible">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 relative">
          <h1 className="text-8xl font-semibold text-[#4C2083] mt-20 ml-5 font-inknut lg:translate-x-12 lg:w-250">
            Discover Authentic
          </h1>
          <h1 className="text-8xl font-semibold text-[#7851A9] ml-5 font-inknut lg:translate-x-12">
            African Fashion
          </h1>
          <p className="text-4xl text-gray-700 mt-6 ml-5 w-[85%] font-inknut lg:translate-x-12">
            Connect with talented African designers and celebrate rich cultural
            heritage through fashion.
          </p>
          <button className="bg-[#4C2083] text-white px-20 py-3 rounded-xl mt-10 ml-5 font-medium text-lg hover:bg-purple-600 transition lg:translate-x-12 cursor-pointer">
            Explore Collection
          </button>
        </div>
        <div className="lg:w-1/2 h-full">
          <img
            src="/PolygonImage.png"
            alt="African Fashion"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="h-screen">
        <div className="flex gap-3 pt-3 items-center w-full mx-auto px-4 lg:px-12">
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

          <button className="flex items-center gap-2 border border-black text-[#4C2083] px-5 py-2 rounded-lg hover:bg-purple-600 transition">
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
        {/* <FeaturedCarousel /> */}
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {featuredItems.map((item) => (
            <FeaturedItem key={item.id} item={item} />
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default page;
