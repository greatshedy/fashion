import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DesignerCard from "@/components/DesignerCard";
import designers from "@/data/designers";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-70 bg-amber-300"></div>
      <div className="flex lg:flex-row flex-col overflow-visible">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 lg:px-12 py-10">
          {designers.map((designer) => (
            <DesignerCard key={designer.id} designer={designer} />
          ))}
        </div>
      </div>
      {/* ================= NEWSLETTER ================= */}
      <section className="bg-[#EDE6F5] py-12 text-center px-6">
        <h3 className="font-semibold text-xl text-[#4C2083]">
          Stay Connected with African Fashion
        </h3>
        <p className="text-gray-600 text-md mt-2">
          Get updates on new designers, cultural collections, and exclusive
          offers
        </p>

        <div className="flex justify-center mt-6 gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-2/4 border outline-none bg-white"
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
