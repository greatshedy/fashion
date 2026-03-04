"use client";

import React, { useState } from "react";
import { Heart, Star } from "lucide-react";

const AllProducts = ({ item }) => {
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => setFavorited(!favorited);

  return (
    <div className="featured-item relative bg-white rounded-xl w-90 pb-6">
      {/* Favorite Button (Top Right) */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 px-2 py-2 rounded-lg flex items-center justify-center transition border border-gray-300 bg-white hover:cursor-pointer"
      >
        <Heart
          className="w-4 h-4 text-[#4C2083]"
          fill={favorited ? "#4C2083" : "none"}
        />
      </button>

      {/* Featured Tag (Top Left) */}
      {/* <span className="text-xs font-bold text-white bg-[#4C2083] px-2 py-2 rounded-lg absolute top-2 left-2">
        Featured
      </span> */}

      {/* Image */}
      <div className="mb-2 w-full h-60 rounded-t-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item Details */}
      <div className="px-5">
        <h3 className="text-lg font-semibold text-[#4C2083]">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-sm text-gray-500 font-bold">{item.location}</p>
        <p className="text-md font-bold mt-1 text-[#4C2083]">${item.price}</p>
      </div>

      {/* Rating (Bottom Right) */}
      <div className="absolute bottom-6 right-2 flex items-center gap-1 bg-white px-2 py-1 rounded-lg shadow-sm border border-gray-200">
        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        <span className="text-sm font-semibold">{item.rating}</span>
      </div>
    </div>
  );
};

export default AllProducts;
