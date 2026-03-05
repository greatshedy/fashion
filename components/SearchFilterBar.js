"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function SearchFilterBar({
  onSearch,
  onFilterChange,
  categoryOptions = ["All", "Dresses", "Tops", "Bottoms", "Accessories"],
  sortOptions = ["All", "Price: Low to High", "Price: High to Low", "Newest"],
}) {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("All");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    onFilterChange?.({ category: e.target.value, sort });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    onFilterChange?.({ category, sort: e.target.value });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4 px-4 lg:px-4">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7851A9]"
        />
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search by name or designer..."
          className="w-full pl-11 pr-4 py-3.5 bg-[#EEEDF2] rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <select
          value={category}
          onChange={handleCategory}
          className="appearance-none w-full lg:w-44 pl-4 pr-10 py-3.5 bg-[#EEEDF2] rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-300 cursor-pointer"
        >
          {categoryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={17}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7851A9] pointer-events-none"
        />
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <select
          value={sort}
          onChange={handleSort}
          className="appearance-none w-full lg:w-44 pl-4 pr-10 py-3.5 bg-[#EEEDF2] rounded-xl text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-300 cursor-pointer"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={17}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7851A9] pointer-events-none"
        />
      </div>
    </div>
  );
}
