"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Designers", href: "/designers" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="w-full border-b bg-white/20 backdrop-blur-md border-white/30 shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4 lg:px-12">
        <div className="flex items-end justify-between h-40">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 h-25 w-60 mb-4">
            <img
              src="/AlphalliLogo.png"
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 pb-10">
            {/* Links */}
            <div className="flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[28px] font-semibold transition px-10 ${
                    pathname === link.href
                      ? "text-[#4C2083]"
                      : "text-[#7851A9] hover:text-purple-600"
                  }`}
                >
                  {link.name}

                  {pathname === link.href && (
                    <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#4C2083] rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4C2083]"
              />
              <input
                type="text"
                placeholder="Search African fashion..."
                className="pl-10 pr-4 py-2 w-100 bg-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 text-purple-700">
              <Heart
                strokeWidth={1}
                className="cursor-pointer hover:scale-110 transition"
              />

              <div className="relative cursor-pointer">
                <ShoppingCart
                  strokeWidth={1}
                  className="hover:scale-110 transition"
                />
                <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>

              <User
                strokeWidth={1}
                className="cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-purple-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-6 bg-white border-t animate-slideDown">
          <div className="flex flex-col gap-5 mt-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-medium ${
                  pathname === link.href ? "text-purple-700" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search African fashion..."
                className="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Mobile Icons */}
            <div className="flex gap-6 text-purple-700 pt-2">
              <Heart />
              <div className="relative">
                <ShoppingCart />
                <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <User />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
