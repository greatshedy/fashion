"use client";

import { useState } from "react";

export default function Filters() {
  const [active, setActive] = useState("All");

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
    <div className="flex flex-wrap gap-4 py-6 w-full mx-auto px-4 lg:px-12 items-center justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${
              active === category
                ? "bg-purple-700 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
