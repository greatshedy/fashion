import FeaturedItem from "@/components/FeaturedItem";
import Filters from "@/components/Filters";
import { Palette, Ruler, Truck } from "lucide-react";
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
import Footer from "@/components/Footer";
import Featuredslide from "@/components/Featuredslide";

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
      <div className="h-fit">
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
        {/* <div className="flex flex-wrap justify-center gap-4 p-4">
          {featuredItems.map((item) => (
            <FeaturedItem key={item.id} item={item} />
          ))}
        </div> */}
      </div>
      <div className="h-120">
        <Featuredslide />
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Celebrating African Heritage
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
      <section className="bg-[#EDE6F5] py-12 text-center px-6">
        <h3 className="font-semibold text-lg">
          Stay Connected with African Fashion
        </h3>
        <p className="text-gray-600 text-sm mt-2">
          Get updates on new designers, cultural collections, and exclusive
          offers
        </p>

        <div className="flex justify-center mt-6 gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-64 border outline-none"
          />
          <button className="bg-[#4C2083] text-white px-6 py-2 rounded-md cursor-pointer hover:bg-purple-600 transition">
            Subscribe
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
