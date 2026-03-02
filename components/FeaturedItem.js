"use client"; // required if using Next 13+ app directory

import React, { useState } from "react";
import { Heart } from "lucide-react";

const FeaturedItem = ({ item }) => {
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => setFavorited(!favorited);

  return (
    <div className="featured-item relative bg-white rounded-xl shadow-lg text-center w-74 pb-2">
      {/* Favorite Button at Top Right */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 px-2 py-2 rounded-lg flex items-center justify-center transition border border-gray-300 ${
          favorited
            ? "bg-white text-white"
            : "bg-white text-white hover:cursor-pointer"
        }`}
      >
        <Heart
          className="w-4 h-4 text-[#4C2083]"
          fill={favorited ? "#4C2083" : "none"}
        />
      </button>
      {/* Featured Tag */}
      <span className="text-xs font-bold text-white bg-[#4C2083] px-2 py-2 rounded-lg absolute top-2 left-2">
        Featured
      </span>

      {/* Image */}
      <div className="mb-2 w-full h-48 rounded-t-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item Details */}
      <h3 className="text-lg font-semibold text-left ml-5">{item.name}</h3>
      <p className="text-sm text-gray-500 text-left ml-5">{item.category}</p>
      <p className="text-sm text-gray-500 text-left ml-5">{item.location}</p>
      <p className="text-md font-bold mt-1 text-left ml-5">${item.price}</p>
    </div>
  );
};

export default FeaturedItem;
