"use client";

import React from "react";
import { Heart, MapPin, Star } from "lucide-react";
import useFavoritesStore from "@/store";

export default function DesignerCard({ designer }) {
  // const [favorited, setFavorited] = useState(false);
  const { toggleFavorite, isFavorited } = useFavoritesStore();
  // const toggleFavorite = () => setFavorited(!favorited);
  // prevent crash if designer is undefined
  if (!designer) return null;

  return (
    <div className="lg:w-100 w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-md">
      {/* IMAGE SECTION */}
      <div className="relative">
        <img
          src={designer?.image}
          alt={designer?.name}
          className="w-full h-64 object-cover"
        />

        {designer?.featured && (
          <span className="absolute top-3 left-3 bg-[#4C2083] text-white px-3 py-1.5 rounded-md text-xs font-medium">
            Featured
          </span>
        )}

        <div
          onClick={() =>
            toggleFavorite({
              id: designer.id,
              name: designer.name,
              price: designer.price,
              image: designer.image,
            })
          }
          className="absolute top-3 right-3 bg-white p-2 rounded-md shadow cursor-pointer hover:bg-gray-100"
        >
          <Heart
            size={16}
            fill={isFavorited(designer.id) ? "#4C2083" : "none"}
          />
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 space-y-3">
        {/* Designer Info */}
        <div className="flex items-center gap-2">
          <img
            src={designer?.profileImage}
            alt={designer?.name}
            className="w-10 h-10 rounded-md object-cover"
          />

          <div>
            <h3 className="text-[#4C2083] font-semibold text-sm">
              {designer?.name}
            </h3>

            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin size={12} />
              {designer?.location}
            </div>
          </div>
        </div>

        {/* Brand */}
        <h4 className="text-[#4C2083] font-semibold text-base">
          {designer?.brand}
        </h4>

        {/* Description */}
        <p className="text-xs text-gray-600 line-clamp-2 h-10">
          {designer?.description}
        </p>

        {/* Stats */}
        <div className="flex justify-between text-xs text-gray-600">
          <div className="flex items-center gap-1 text-yellow-500 font-medium">
            <Star size={14} fill="currentColor" />
            {designer?.rating}
            <span className="text-gray-500">({designer?.reviews})</span>
          </div>

          <div>{designer?.collections} Collections</div>
          <div>Since {designer?.since}</div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {designer?.tags?.map((tag, index) => (
            <span
              key={index}
              className="border border-[#4C2083] text-[#4C2083] px-3 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="w-full bg-[#4C2083] text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition cursor-pointer">
          View Designer Profile
        </button>
      </div>
    </div>
  );
}
