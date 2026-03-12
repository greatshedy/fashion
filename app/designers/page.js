import Footer from "@/components/Footer";
import DesignerCard from "@/components/DesignerCard";
import designers from "@/data/designers";
import React from "react";
import DesignerSlide from "@/components/DesignerSlide";
import DesignerSlidemobile from "@/components/DesignerSlidemobile";
import SearchFilterBar from "@/components/SearchFilterBar";
import { Inknut_Antiqua, Inria_Sans } from "next/font/google";
import Newsletter from "@/components/Newsletter";

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
      <section className="px-6 md:px-20 pb-16">
        <div className="p-10 text-center">
          <h2
            className={`text-2xl md:text-6xl font-semibold mb-6 text-[#4C2083] ${inknut.className}`}
          >
            Meet Our African Designers
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-2xl">
            Discover the talented artisans and designers who bring African
            culture to life through fashion. Each creator carries forward
            generations of tradition while innovating for the modern world.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="text-5xl font-bold text-[#4C2083] mb-2">50+</h3>
              <p className="text-gray-600 text-2xl">Active Designers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#4C2083] mb-2">25+</h3>
              <p className="text-gray-600 text-2xl">African Designers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#4C2083] mb-2">1000+</h3>
              <p className="text-gray-600 text-2xl">Unique Designs</p>
            </div>
          </div>
        </div>
      </section>
      <SearchFilterBar />
      <div className="flex w-full items-center justify-center">
        <img
          src="/FeaturedDesigners.png"
          alt="Featured Designers"
          className="w-70 h-30 object-contain"
        />
      </div>
      <div className="h-fit lg:block hidden">
        <DesignerSlide />
      </div>
      <div className="h-fit lg:hidden mx-auto">
        <DesignerSlidemobile />
      </div>
      <div className="flex items-center lg:items-start justify-center lg:justify-start gap-2 lg:gap-4 mx-auto lg:ml-40 text-left mt-12">
        <h1 className="text-2xl md:text-3xl text-[#4C2083]">All Products</h1>
        <h1 className="text-xl md:text-3xl text-gray-600">(7 Items)</h1>
      </div>
      <div className="flex lg:flex-row flex-col overflow-visible">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4 lg:px-12 h-fit pb-2">
          {designers.map((designer) => (
            <div key={designer.id} className="mx-auto pt-5">
              <DesignerCard designer={designer} />
            </div>
          ))}
        </div>
      </div>
      <section className="px-6 md:px-20 pb-16">
        <div className="bg-[#EDE6F5] rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#4C2083]">
            Are You an African Designer?
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-2xl">
            Join our community of talented African designers and share your
            creations with the world. We provide a platform to showcase your
            heritage and connect with global customers
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <button className="bg-[#4C2083] text-white px-6 py-2 rounded-md cursor-pointer hover:bg-purple-600 transition border border-[#4C2083]">
              Apply to Join
            </button>
            <button className="text-[#4C2083] px-6 py-2 rounded-md cursor-pointer hover:bg-purple-600 transition border border-[#4C2083]">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default page;
