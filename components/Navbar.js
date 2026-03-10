"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";
import { Inknut_Antiqua, Inria_Sans } from "next/font/google";
import useFavoritesStore, { useCartStore } from "@/store";

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inriaSans = Inria_Sans({ subsets: ["latin"], weight: ["400", "700"] });

// --- Slide Panel ---
function SlidePanel({ open, onClose, title, children }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 320);
  };

  if (!open && !closing) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        style={{
          animation: closing
            ? "fadeOutOverlay 0.32s ease-in forwards"
            : "fadeInOverlay 0.4s ease-out forwards",
        }}
        onClick={handleClose}
      />
      <div
        className="fixed top-0 right-0 h-full z-50 bg-white shadow-2xl flex flex-col panel-width"
        style={{
          animation: closing
            ? "slideOutRight 0.32s ease-in forwards"
            : "slideInRight 0.45s cubic-bezier(0.22,1,0.36,1) forwards",
        }}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <h2
            className="text-xl font-bold text-[#4C2083] tracking-tight"
            style={{ fontFamily: "'Inria Sans', sans-serif" }}
          >
            {title}
          </h2>
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors cursor-pointer"
            aria-label="Close panel"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}

// --- Empty State ---
function EmptyState({ icon: Icon, message, subtext, onClose }) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24 px-8 text-center">
      <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-5">
        <Icon size={28} strokeWidth={1} className="text-gray-400" />
      </div>
      <p
        className="text-lg font-bold text-gray-800 mb-1"
        style={{ fontFamily: "'Inria Sans', sans-serif" }}
      >
        {message}
      </p>
      <p className="text-sm text-gray-400 mb-8">{subtext}</p>
      <button
        onClick={onClose}
        className="bg-[#4C2083] text-white text-sm font-medium px-8 py-3 rounded-xl hover:bg-[#3a1866] transition-colors w-full max-w-xs"
      >
        Continue Shopping
      </button>
    </div>
  );
}

// --- Wishlist Item ---
function WishlistItem({ item }) {
  const removeFromFavorites = useFavoritesStore((s) => s.removeFromFavorites);

  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100 last:border-0 group">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Heart size={24} strokeWidth={1} className="text-gray-300" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold text-gray-800 text-sm truncate"
          style={{ fontFamily: "'Inria Sans', sans-serif" }}
        >
          {item.name}
        </p>
        {item.designer && (
          <p className="text-xs text-gray-400 mt-0.5">{item.designer}</p>
        )}
        {item.price && (
          <p className="text-sm font-bold text-[#4C2083] mt-1">
            ₦{Number(item.price).toLocaleString()}
          </p>
        )}
      </div>
      <button
        onClick={() => removeFromFavorites(item.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1 shrink-0 cursor-pointer"
        aria-label="Remove from wishlist"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}

// --- Wishlist Content ---
function WishlistContent({ onClose }) {
  const { favorites, clearFavorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return (
      <EmptyState
        icon={Heart}
        message="Your wishlist is empty"
        subtext="Save your favorite pieces to buy later"
        onClose={onClose}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {favorites.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
      <div className="px-6 py-5 border-t border-gray-100">
        <button
          onClick={clearFavorites}
          className="w-full border border-gray-200 text-gray-500 text-sm py-3 rounded-xl hover:border-red-300 hover:text-red-500 transition-colors cursor-pointer"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}

// --- Cart Item ---
function CartItem({ item }) {
  const { removeFromCart, incrementQuantity, decrementQuantity } =
    useCartStore();

  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100 last:border-0 group">
      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingCart size={24} strokeWidth={1} className="text-gray-300" />
          </div>
        )}
      </div>

      {/* Info + quantity controls */}
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold text-gray-800 text-sm truncate"
          style={{ fontFamily: "'Inria Sans', sans-serif" }}
        >
          {item.name}
        </p>
        {item.designer && (
          <p className="text-xs text-gray-400 mt-0.5">{item.designer}</p>
        )}
        {(item.size || item.color) && (
          <p className="text-xs text-gray-400 mt-0.5">
            {[item.size, item.color].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-sm font-bold text-[#4C2083] mt-1">
          ₦{Number(item.price).toLocaleString()}
        </p>

        {/* Qty stepper */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => decrementQuantity(item.id)}
            className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors"
          >
            <Minus size={11} />
          </button>
          <span className="text-sm font-semibold w-5 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => incrementQuantity(item.id)}
            className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors"
          >
            <Plus size={11} />
          </button>
        </div>
      </div>

      {/* Line total + remove */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <p className="text-sm font-bold text-gray-800">
          ₦{(Number(item.price) * item.quantity).toLocaleString()}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1 cursor-pointer"
          aria-label="Remove from cart"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
}

// --- Cart Content ---
function CartContent({ onClose }) {
  const { items, clearCart, subtotal } = useCartStore();
  const total = subtotal();

  if (items.length === 0) {
    return (
      <EmptyState
        icon={ShoppingCart}
        message="Your cart is empty"
        subtext="Add items to your cart to checkout"
        onClose={onClose}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-gray-100 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Subtotal</span>
          <span className="font-bold text-gray-900 text-base">
            ₦{total.toLocaleString()}
          </span>
        </div>
        <button className="w-full bg-[#4C2083] text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-[#3a1866] transition-colors cursor-pointer">
          Checkout
        </button>
        <button
          onClick={clearCart}
          className="w-full border border-gray-200 text-gray-500 text-sm py-3 rounded-xl hover:border-red-300 hover:text-red-500 transition-colors cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

// --- Navbar ---
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const favCount = useFavoritesStore((s) => s.favorites.length);
  // Sum all quantities for the badge count
  const cartCount = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0),
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Designers", href: "/designers" },
    { name: "About", href: "/about" },
  ];

  const handleMobileClose = () => {
    setMobileClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
    }, 320);
  };

  return (
    <>
      <nav
        className="w-full border-b bg-white/20 backdrop-blur-md border-white/30 shadow-lg sticky top-0 z-50"
        style={{ fontFamily: "'Inria Sans', sans-serif" }}
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
                      <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#4C2083] rounded-full" />
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
                {/* Wishlist */}
                <button
                  onClick={() => setWishlistOpen(true)}
                  aria-label="Wishlist"
                  className="relative hover:scale-110 transition cursor-pointer"
                >
                  <Heart
                    strokeWidth={1}
                    fill={favCount > 0 ? "#7851A9" : "none"}
                  />
                  {favCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {favCount}
                    </span>
                  )}
                </button>

                {/* Cart — live count badge */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative hover:scale-110 transition cursor-pointer"
                  aria-label="Cart"
                >
                  <ShoppingCart strokeWidth={1} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>

                <User
                  strokeWidth={1}
                  className="cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>

            {/* Mobile Right Side */}
            <div className="flex items-center gap-4 pb-5 lg:hidden">
              <div className="flex gap-5 text-purple-700 pt-2">
                <button
                  onClick={() => setWishlistOpen(true)}
                  aria-label="Wishlist"
                  className="relative"
                >
                  <Heart size={22} fill={favCount > 0 ? "#7851A9" : "none"} />
                  {favCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {favCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative"
                  aria-label="Cart"
                >
                  <ShoppingCart size={22} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
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

      {/* Mobile Nav Overlay */}
      {(mobileOpen || mobileClosing) && (
        <div
          className="fixed inset-0 z-100 bg-black/40 lg:hidden"
          style={{
            animation: mobileClosing
              ? "fadeOutOverlay 0.32s ease-in forwards"
              : "fadeInOverlay 0.5s ease-out forwards",
          }}
          onClick={handleMobileClose}
        >
          <div
            className="absolute top-0 right-0 h-full bg-white flex flex-col shadow-2xl rounded-bl-lg rounded-tl-lg"
            style={{
              width: "85%",
              animation: mobileClosing
                ? "slideOutRight 0.32s ease-in forwards"
                : "slideInRight 0.55s cubic-bezier(0.22,1,0.36,1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-[#4C2083] text-xl font-bold tracking-tight">
                Navigation Menu
              </span>
              <button
                onClick={handleMobileClose}
                className="text-purple-700 p-1"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            <div className="flex flex-col gap-4 px-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileClose}
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

            <div className="mx-6 my-6 border-t border-gray-200" />

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

      {/* Wishlist Panel */}
      <SlidePanel
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        title={`Wishlist (${favCount})`}
      >
        <WishlistContent onClose={() => setWishlistOpen(false)} />
      </SlidePanel>

      {/* Cart Panel */}
      <SlidePanel
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        title={`Your Cart (${cartCount})`}
      >
        <CartContent onClose={() => setCartOpen(false)} />
      </SlidePanel>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(100%); }
        }
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeOutOverlay {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        .panel-width { width: 55%; }
        @media (max-width: 1023px) {
          .panel-width { width: 85%; }
        }
      `}</style>
    </>
  );
}
