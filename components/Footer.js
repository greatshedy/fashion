"use client";

import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F6F3F9] text-[#4C2083] pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-6 md:px-20 pb-10">
        {/* Brand */}
        <div className="lg:col-span-2 max-w-sm">
          <Link href="/" className="flex items-center gap-3 h-20 w-50 mb-2">
            <img
              src="/AlphalliLogo.png"
              alt="Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          <p className="text-gray-600 text-sm mb-4">
            Connecting the world with authentic African fashion. Celebrating
            culture, heritage, and the artistry of African designers.
          </p>

          <div className="flex gap-3 flex-wrap">
            <div className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer">
              <FaWhatsapp size={22} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer">
              <FaInstagram size={22} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer">
              <FaTiktok size={22} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer">
              <FaFacebook size={22} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center border rounded-lg hover:bg-gray-100 cursor-pointer">
              <FaTwitter size={22} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col text-sm text-[#4C2083] gap-2">
            <Link className="hover:underline w-fit" href="/collections">
              Browse Collections
            </Link>
            <Link className="hover:underline w-fit" href="/designers">
              Featured Designers
            </Link>
            <Link className="hover:underline w-fit" href="/heritage">
              Cultural Heritage
            </Link>
            <Link className="hover:underline w-fit" href="/size-guide">
              Size Guide
            </Link>
            <Link className="hover:underline w-fit" href="/measurements">
              Custom Measurements
            </Link>
            <Link className="hover:underline w-fit" href="/wholesale">
              Wholesale
            </Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Help Center</li>
            <li>Shipping & Returns</li>
            <li>Size Exchange</li>
            <li>Track Your Order</li>
            <li>Become a Designer</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>

          <div className="text-sm text-gray-600 space-y-4">
            <div>
              <p className="font-semibold">Location:</p>
              <p className="text-[#4C2083] font-bold">
                African Heritage Center
              </p>
              <p>123 Cultural District</p>
              <p>Lagos, Nigeria</p>
            </div>

            <div>
              <p className="font-semibold text-[#4C2083]">US Office:</p>
              <p>456 Fashion Avenue</p>
              <p>New York, NY 10018</p>
            </div>

            <div>
              <p className="font-semibold text-[#4C2083]">Phone:</p>
              <p>+234 (0) 800 ALPHALII</p>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <p className="font-semibold text-[#4C2083]">Business Hours:</p>
              <p>Mon - Fri: 9:00 AM - 6:00 PM (WAT)</p>
              <p>Sat: 10:00 AM - 4:00 PM (WAT)</p>
              <p>Sun: Closed</p>
              <p>24/7 online support available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4C2083] text-white text-sm py-4 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Alphalii. All Rights Reserved.</p>

        <div className="flex gap-4 flex-wrap justify-center">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">
            Terms of Service
          </span>
          <span className="cursor-pointer hover:underline">Refund Policy</span>
        </div>
      </div>
    </footer>
  );
}
