"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Inknut_Antiqua, Inria_Sans } from "next/font/google";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Designers", href: "/designers" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`${inriaSans.className} w-full border-b bg-white/20 backdrop-blur-md border-white/30 shadow-lg sticky top-0 z-50`}
      >
        <div className="mx-auto px-4 lg:px-12">
          <div className="flex items-end justify-between lg:h-30 h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 lg:h-25 h-12 lg:w-60 w-30 mb-3 lg:mb-2 cursor-pointer"
            >
              <img
                src="/AlphalliLogo.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10 pb-6">
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

            {/* Mobile Right Side: Icons + Hamburger */}
            <div className="flex items-center gap-4 pb-5 lg:hidden">
              <div className="flex gap-5 text-purple-700 pt-2">
                <Heart size={22} />
                <div className="relative">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    1
                  </span>
                </div>
                <User size={22} />
              </div>
              <button
                className="text-purple-700"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-100 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          {/* Slide-in panel */}
          <div
            className="absolute top-0 right-0 h-full w-6/7 bg-white flex flex-col shadow-2xl rounded-bl-lg rounded-tl-lg"
            style={{ animation: "slideInRight 0.6s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              {/* Logo thumbnail */}
              <div className="flex items-center gap-3">
                <span className="text-[#4C2083] text-xl font-bold tracking-tight">
                  Navigation Menu
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-purple-700 p-1"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Nav Links as outlined pill buttons */}
            <div className="flex flex-col gap-4 px-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full text-center py-4 rounded-2xl border text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "border-[#4C2083] text-[#4C2083] bg-purple-50"
                      : "border-[#7851A9] text-[#7851A9] hover:bg-purple-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-6 my-6 border-t border-gray-200" />

            {/* Search */}
            <div className="px-6">
              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search African fashion..."
                  className="pl-11 pr-4 py-3 w-full bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-sm placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
