"use client";

import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F6F3F9] text-[#4C2083] pt-12">
      <div className="grid md:grid-cols-4 gap-10 px-6 md:px-20 pb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Alphalii</h2>
          <p className="text-gray-600 text-sm mb-4">
            Connecting the world with authentic African fashion. Celebrating
            culture, heritage, and the artistry of African designers.
          </p>

          <div className="flex gap-3">
            <Instagram size={18} />
            <Facebook size={18} />
            <Twitter size={18} />
            <Youtube size={18} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4 ">Quick Links</h3>
          <div className="flex flex-col text-sm text-gray-600">
            <Link href="/collections">Browse Collections</Link>
            <Link href="/designers">Featured Designers</Link>
            <Link href="/heritage">Cultural Heritage</Link>
            <Link href="/size-guide">Size Guide</Link>
            <Link href="/measurements">Custom Measurements</Link>
            <Link href="/wholesale">Wholesale</Link>
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
          <p className="text-sm text-gray-600">
            <strong>Location:</strong>
            <br />
            African Heritage Center
            <br />
            Lagos, Nigeria
          </p>

          <p className="text-sm text-gray-600 mt-4">
            <strong>Phone:</strong>
            <br />
            +234 (0) 800 ALPHALII
          </p>

          <p className="text-sm text-gray-600 mt-4">
            <strong>Business Hours:</strong>
            <br />
            Mon - Fri: 9AM - 5PM
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4C2083] text-white text-sm py-4 px-6 md:px-20 flex flex-col md:flex-row justify-between">
        <p>© 2025 Alphalii. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Refund Policy</span>
        </div>
      </div>
    </footer>
  );
}
