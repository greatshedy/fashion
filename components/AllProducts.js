"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Heart, Star } from "lucide-react";
import useFavoritesStore, { useProductStore } from "@/store";

const AllProducts = ({ item }) => {
  const router = useRouter();
  const { toggleFavorite, isFavorited } = useFavoritesStore();
  const setSelectedProduct = useProductStore((s) => s.setSelectedProduct);

  const handleCardClick = () => {
    setSelectedProduct(item); // store the full item object
    router.push(`/productsdetails/${item.id}`); // navigate to detail page
  };

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group cursor-pointer">
      {/* Favorite Button — e.stopPropagation so card click doesn't also fire */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
          });
        }}
        className="absolute top-3 right-3 z-20 bg-white border border-gray-200 p-2 rounded-lg hover:border-[#4C2083] transition-colors"
      >
        <Heart
          className="w-4 h-4"
          fill={isFavorited(item.id) ? "#4C2083" : "none"}
          stroke={isFavorited(item.id) ? "#4C2083" : "currentColor"}
        />
      </button>

      {/* Featured Badge */}
      {item.featured && (
        <span className="absolute top-3 left-3 z-20 bg-[#4C2083] text-white text-xs font-semibold px-2 py-1 rounded-lg">
          Featured
        </span>
      )}

      {/* Clickable card body */}
      <div onClick={handleCardClick}>
        {/* Image */}
        <div className="h-60 w-90 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details */}
        <div className="p-4 pb-10">
          <h3 className="text-lg font-semibold text-[#4C2083]">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.category}</p>
          <p className="text-sm font-semibold text-gray-600">{item.location}</p>
          <p className="text-lg font-bold text-[#4C2083] mt-1">
            ₦{Number(item.price).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-md shadow border">
        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        <span className="text-sm font-semibold">{item.rating}</span>
      </div>
    </div>
  );
};

export default AllProducts;
