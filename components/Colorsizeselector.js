"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const COLORS = ["Blue & Gold", "Red & Black", "Green & Yellow"];
const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function ColorSizeSelector({
  colors = COLORS,
  sizes = SIZES,
  onColorChange,
  onSizeChange,
}) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeOpen, setSizeOpen] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSizeOpen(false);
    onSizeChange?.(size);
  };

  return (
    <div className="w-full border border-blue-200 rounded-xl overflow-visible bg-gray-50 divide-y divide-dashed divide-blue-200">
      {/* Color Section */}
      <div className="px-4">
        <p className="text-lg font-semibold mb-3">
          <span className="text-[#4C2083]">Color:</span>{" "}
          <span className="text-gray-800 font-normal">{selectedColor}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                selectedColor === color
                  ? "bg-[#4C2083] text-white border-[#4C2083]"
                  : "bg-white text-[#4C2083] border-[#4C2083]/40 hover:border-[#4C2083]"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Size Section */}
      <div className="px-4 py-4 relative">
        <p className="text-lg font-semibold text-[#4C2083] mb-3">Size</p>
        <button
          onClick={() => setSizeOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-[#4C2083] transition-colors"
        >
          <span className={selectedSize ? "text-gray-800 font-medium" : ""}>
            {selectedSize || "Select your size"}
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-500 transition-transform duration-200 ${sizeOpen ? "rotate-180" : ""}`}
          />
        </button>

        {sizeOpen && (
          <div className="absolute left-4 right-4 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-purple-50 ${
                  selectedSize === size
                    ? "text-[#4C2083] font-semibold bg-purple-50"
                    : "text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
