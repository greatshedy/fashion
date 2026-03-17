"use client";

import { useState, useRef } from "react";

export default function Filters() {
  const [active, setActive] = useState("All");
  const scrollRef = useRef(null);

  const categories = [
    "All",
    "Traditional",
    "Senator Wear",
    "Formal Wear",
    "Men Suit",
    "Casual",
    "Agbada",
  ];

  return (
    <div className="w-full py-6 px-4 lg:px-12">
      {/* Mobile: single scrollable row | Desktop: wrapping flex */}
      <div
        ref={scrollRef}
        className="
          flex gap-3
          overflow-x-auto lg:overflow-x-visible
          flex-nowrap lg:flex-wrap
          lg:justify-center
          scrollbar-none
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          snap-x snap-mandatory
        "
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`
              px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
              whitespace-nowrap shrink-0 snap-start
              ${
                active === category
                  ? "bg-purple-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
