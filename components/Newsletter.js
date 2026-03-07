import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#EDE6F5] py-12 text-center px-4 md:px-6 mt-12">
      <h3 className="font-semibold text-lg md:text-xl text-[#4C2083]">
        Stay Connected with African Fashion
      </h3>
      <p className="text-gray-600 text-sm md:text-md mt-2 max-w-xl mx-auto">
        Get updates on new designers, cultural collections, and exclusive offers
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
  );
};

export default Newsletter;
