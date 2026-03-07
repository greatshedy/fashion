// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowLeft, Star, MapPin, ShoppingCart, Heart } from "lucide-react";
// import useFavoritesStore, { useProductStore, useCartStore } from "@/store";
// import TrustBadges from "./Trustbadges";
// import Footer from "./Footer";
// import Newsletter from "./Newsletter";
// import ColorSizeSelector from "./Colorsizeselector";

// // ── ProductTabs (fused inline) ────────────────────────────────────────────────
// const TABS = ["Description", "Details", "Care Guide", "Reviews"];

// function ProductTabs({ product }) {
//   const [activeTab, setActiveTab] = useState("Description");

//   const tabContent = {
//     Description: {
//       summary:
//         product.description ??
//         `${product.name} is a ${product.category ?? "fashion"} piece crafted for style and authenticity. Sourced from ${product.location ?? "West Africa"}.`,
//       sections: product.significance
//         ? [{ heading: "Cultural Significance:", body: product.significance }]
//         : [],
//     },
//     Details: {
//       summary: null,
//       sections: [
//         {
//           heading: "Product Details",
//           body:
//             [
//               product.designer && `Designer: ${product.designer}`,
//               product.location && `Origin: ${product.location}`,
//               product.fabric && `Fabric: ${product.fabric}`,
//               product.category && `Category: ${product.category}`,
//               product.sizes?.length &&
//                 `Available Sizes: ${product.sizes.join(", ")}`,
//             ]
//               .filter(Boolean)
//               .join(" · ") || "No details available.",
//         },
//         ...(product.craftsmanship?.length
//           ? [
//               {
//                 heading: "Craftsmanship",
//                 body: product.craftsmanship.join(" · "),
//               },
//             ]
//           : []),
//       ],
//     },
//     "Care Guide": {
//       summary: null,
//       sections: product.careGuide?.length
//         ? [
//             {
//               heading: "Care Instructions",
//               body: product.careGuide.join(" · "),
//             },
//           ]
//         : [{ heading: null, body: "No care instructions available." }],
//     },
//     Reviews: {
//       summary: product.reviewCount
//         ? `${product.rating ?? 0}.0 / 5 — Based on ${product.reviewCount} reviews.`
//         : "No reviews yet.",
//       sections: [],
//     },
//   };

//   const content = tabContent[activeTab];

//   return (
//     <div className="w-full mt-10">
//       {/* Tab bar */}
//       <div className="grid grid-cols-4 bg-gray-100 rounded-xl overflow-hidden mb-4">
//         {TABS.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`py-3 text-sm font-medium transition-colors ${
//               activeTab === tab
//                 ? "bg-[#9B72CF] text-white rounded-xl"
//                 : "text-gray-500 hover:text-gray-700 cursor-pointer"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Content card */}
//       <div className="border border-gray-200 rounded-2xl bg-white px-6 py-5">
//         {content.summary && (
//           <>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               {content.summary}
//             </p>
//             {content.sections.length > 0 && (
//               <hr className="my-4 border-gray-200" />
//             )}
//           </>
//         )}
//         {content.sections.map((section, i) => (
//           <div key={i} className={i > 0 ? "mt-4" : ""}>
//             {section.heading && (
//               <p className="text-sm font-bold text-gray-900 mb-1">
//                 {section.heading}
//               </p>
//             )}
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {section.body}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Main Page ─────────────────────────────────────────────────────────────────
// const ProductDetailsPage = () => {
//   const selectedProduct = useProductStore((s) => s.selectedProduct);
//   const { toggleFavorite, isFavorited } = useFavoritesStore();
//   const { addToCart, isInCart } = useCartStore();

//   const [quantity, setQuantity] = useState(1);

//   if (!selectedProduct) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-500">
//         <p className="text-lg">Product not found.</p>
//         <Link
//           href="/"
//           className="text-sm text-[#4C2083] border border-[#4C2083] px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
//         >
//           ← Back to Home
//         </Link>
//       </div>
//     );
//   }

//   const product = selectedProduct;
//   const inCart = isInCart(product.id);
//   const favorited = isFavorited(product.id);

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       category: product.category,
//       quantity,
//     });
//   };

//   const thumbnails = product.thumbnails?.length
//     ? product.thumbnails
//     : [product.image, product.image, product.image, product.image];

//   return (
//     <div className="min-h-screen bg-gray-50 pt-5">
//       <div className="max-w-7xl mx-auto">
//         {/* Back */}
//         <Link
//           href="/"
//           className="inline-flex items-center gap-2 text-gray-600 mb-8 text-sm border border-gray-300 px-4 py-2 rounded-lg hover:border-[#4C2083] hover:text-[#4C2083] transition-colors"
//         >
//           <ArrowLeft size={16} />
//           Back to Home
//         </Link>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left — Image + thumbnails */}
//           <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-125 object-cover rounded-2xl"
//               onError={(e) => {
//                 e.target.style.display = "none";
//                 e.target.parentNode.style.background =
//                   "linear-gradient(135deg, #e8dff5, #d4c4ed)";
//               }}
//             />
//             <div className="flex pt-4 pb-8 gap-3">
//               {thumbnails.slice(0, 4).map((thumb, i) => (
//                 <div
//                   key={i}
//                   className="h-25 w-25 rounded-xl overflow-hidden bg-gray-200 shrink-0"
//                 >
//                   <img
//                     src={thumb}
//                     alt={`${product.name} view ${i + 1}`}
//                     className="w-full h-full object-cover rounded-xl"
//                     onError={(e) => {
//                       e.target.style.display = "none";
//                       e.target.parentNode.style.background =
//                         "linear-gradient(135deg, #e8dff5, #d4c4ed)";
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right — Product Info */}
//           <div className="flex flex-col gap-6">
//             {/* Title + Favorite */}
//             <div className="flex justify-between items-start gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">
//                   {product.name}
//                 </h1>
//                 {product.category && (
//                   <p className="text-gray-500 mt-1 text-sm">
//                     {product.category}
//                   </p>
//                 )}
//               </div>
//               <button
//                 onClick={() =>
//                   toggleFavorite({
//                     id: product.id,
//                     name: product.name,
//                     price: product.price,
//                     image: product.image,
//                   })
//                 }
//                 className="shrink-0 border border-gray-200 p-2.5 rounded-full hover:border-[#4C2083] transition-colors"
//               >
//                 <Heart
//                   size={18}
//                   fill={favorited ? "#4C2083" : "none"}
//                   stroke={favorited ? "#4C2083" : "currentColor"}
//                 />
//               </button>
//             </div>

//             {/* Rating */}
//             {product.rating && (
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-0.5">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={16}
//                       className={
//                         i < Math.round(product.rating)
//                           ? "text-yellow-400 fill-yellow-400"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   ({product.rating})
//                 </span>
//               </div>
//             )}

//             {/* Price */}
//             <p className="text-3xl font-bold text-[#4C2083]">
//               ₦{Number(product.price).toLocaleString()}
//             </p>
//             {product.location && (
//               <div className="flex items-center gap-1.5 text-sm text-gray-500">
//                 <MapPin size={14} className="text-[#4C2083]" />
//                 {product.location}
//               </div>
//             )}
//             <ColorSizeSelector
//               colors={
//                 product.colors ?? [
//                   "Blue & Gold",
//                   "Red & Black",
//                   "Green & Yellow",
//                 ]
//               }
//               sizes={product.sizes ?? ["S", "M", "L", "XL", "XXL"]}
//               onColorChange={(color) => setSelectedColor(color)}
//               onSizeChange={(size) => setSelectedSize(size)}
//             />
//             {/* Quantity */}
//             <div>
//               <p className="text-sm font-semibold text-gray-700 mb-2">
//                 Quantity
//               </p>
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                   className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors text-lg font-medium cursor-pointer"
//                 >
//                   −
//                 </button>
//                 <span className="text-base font-semibold w-6 text-center">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors text-lg font-medium cursor-pointer"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col gap-3">
//               <button className="bg-[#4C2083] text-white py-4 rounded-xl font-semibold hover:bg-[#3a1866] transition-colors">
//                 Buy Now
//               </button>
//               <button
//                 onClick={handleAddToCart}
//                 className={`border py-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-colors ${
//                   inCart
//                     ? "border-[#4C2083] text-white bg-[#4C2083]"
//                     : "border-gray-300 text-gray-700 hover:border-[#4C2083] hover:text-[#4C2083] cursor-pointer"
//                 }`}
//               >
//                 <ShoppingCart size={18} />
//                 {inCart ? "Added to Cart" : "Add to Cart"}
//               </button>
//               <button className="bg-white border border-[#4C2083] text-[#4C2083] py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors cursor-pointer">
//                 Take Custom Measurement
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Trust Badges */}
//         <TrustBadges />

//         {/* Product Tabs — spans full width below the two-column grid */}
//         <ProductTabs product={product} />
//       </div>
//       <Newsletter />

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetailsPage;

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  MapPin,
  ShoppingCart,
  Heart,
  ChevronDown,
} from "lucide-react";
import useFavoritesStore, { useProductStore, useCartStore } from "@/store";
import TrustBadges from "./Trustbadges";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

// ── ColorSizeSelector (fused inline) ─────────────────────────────────────────
function ColorSizeSelector({
  colors = [],
  sizes = [],
  onColorChange,
  onSizeChange,
}) {
  const [selectedColor, setSelectedColor] = useState(colors[0] ?? "");
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
      {/* Color */}
      <div className="px-4 py-4">
        <p className="text-lg font-semibold mb-3">
          <span className="text-[#4C2083]">Color:</span>{" "}
          <span className="text-gray-800 font-normal">{selectedColor}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium border-2 transition-all cursor-pointer ${
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

      {/* Size */}
      <div className="px-4 py-4 relative">
        <p className="text-lg font-semibold text-[#4C2083] mb-3">Size</p>
        <button
          onClick={() => setSizeOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-[#4C2083] transition-colors cursor-pointer"
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
                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-purple-50 cursor-pointer ${
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

// ── ProductTabs (fused inline) ────────────────────────────────────────────────
const TABS = ["Description", "Details", "Care Guide", "Reviews"];

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("Description");

  const tabContent = {
    Description: {
      summary:
        product.description ??
        `${product.name} is a ${product.category ?? "fashion"} piece crafted for style and authenticity. Sourced from ${product.location ?? "West Africa"}.`,
      sections: product.significance
        ? [{ heading: "Cultural Significance:", body: product.significance }]
        : [],
    },
    Details: {
      summary: null,
      sections: [
        {
          heading: "Product Details",
          body:
            [
              product.designer && `Designer: ${product.designer}`,
              product.location && `Origin: ${product.location}`,
              product.fabric && `Fabric: ${product.fabric}`,
              product.category && `Category: ${product.category}`,
              product.sizes?.length &&
                `Available Sizes: ${product.sizes.join(", ")}`,
            ]
              .filter(Boolean)
              .join(" · ") || "No details available.",
        },
        ...(product.craftsmanship?.length
          ? [
              {
                heading: "Craftsmanship",
                body: product.craftsmanship.join(" · "),
              },
            ]
          : []),
      ],
    },
    "Care Guide": {
      summary: null,
      sections: product.careGuide?.length
        ? [
            {
              heading: "Care Instructions",
              body: product.careGuide.join(" · "),
            },
          ]
        : [{ heading: null, body: "No care instructions available." }],
    },
    Reviews: {
      summary: product.reviewCount
        ? `${product.rating ?? 0}.0 / 5 — Based on ${product.reviewCount} reviews.`
        : "No reviews yet.",
      sections: [],
    },
  };

  const content = tabContent[activeTab];

  return (
    <div className="w-full mt-10">
      <div className="grid grid-cols-4 bg-gray-100 rounded-xl overflow-hidden mb-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-[#9B72CF] text-white rounded-xl"
                : "text-gray-500 hover:text-gray-700 cursor-pointer"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border border-gray-200 rounded-2xl bg-white px-6 py-5">
        {content.summary && (
          <>
            <p className="text-gray-700 text-sm leading-relaxed">
              {content.summary}
            </p>
            {content.sections.length > 0 && (
              <hr className="my-4 border-gray-200" />
            )}
          </>
        )}
        {content.sections.map((section, i) => (
          <div key={i} className={i > 0 ? "mt-4" : ""}>
            {section.heading && (
              <p className="text-sm font-bold text-gray-900 mb-1">
                {section.heading}
              </p>
            )}
            <p className="text-sm text-gray-600 leading-relaxed">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
const ProductDetailsPage = () => {
  const selectedProduct = useProductStore((s) => s.selectedProduct);
  const { toggleFavorite, isFavorited } = useFavoritesStore();
  const { addToCart, isInCart } = useCartStore();

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-500">
        <p className="text-lg">Product not found.</p>
        <Link
          href="/"
          className="text-sm text-[#4C2083] border border-[#4C2083] px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const product = selectedProduct;
  const inCart = isInCart(product.id);
  const favorited = isFavorited(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  const thumbnails = product.thumbnails?.length
    ? product.thumbnails
    : [product.image, product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gray-50 pt-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 mb-8 text-sm border border-gray-300 px-4 py-2 rounded-lg hover:border-[#4C2083] hover:text-[#4C2083] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Image + thumbnails */}
          <div className="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-150 object-cover rounded-2xl"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.style.background =
                  "linear-gradient(135deg, #e8dff5, #d4c4ed)";
              }}
            />
            <div className="flex pt-4 pb-8 gap-3">
              {thumbnails.slice(0, 4).map((thumb, i) => (
                <div
                  key={i}
                  className="h-25 w-25 rounded-xl overflow-hidden bg-gray-200 shrink-0"
                >
                  <img
                    src={thumb}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.style.background =
                        "linear-gradient(135deg, #e8dff5, #d4c4ed)";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — Product Info */}
          <div className="flex flex-col gap-6">
            {/* Title + Favorite */}
            <div className="flex justify-between items-start gap-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                {product.category && (
                  <p className="text-gray-500 mt-1 text-sm">
                    {product.category}
                  </p>
                )}
              </div>
              <button
                onClick={() =>
                  toggleFavorite({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })
                }
                className="shrink-0 border border-gray-200 p-2.5 rounded-full hover:border-[#4C2083] transition-colors"
              >
                <Heart
                  size={18}
                  fill={favorited ? "#4C2083" : "none"}
                  stroke={favorited ? "#4C2083" : "currentColor"}
                />
              </button>
            </div>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.round(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>
            )}

            {/* Price */}
            <p className="text-3xl font-bold text-[#4C2083]">
              ₦{Number(product.price).toLocaleString()}
            </p>

            {/* Location */}
            {product.location && (
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin size={14} className="text-[#4C2083]" />
                {product.location}
              </div>
            )}

            {/* Color + Size */}
            <ColorSizeSelector
              colors={
                product.colors ?? [
                  "Blue & Gold",
                  "Red & Black",
                  "Green & Yellow",
                ]
              }
              sizes={product.sizes ?? ["S", "M", "L", "XL", "XXL"]}
              onColorChange={(color) => setSelectedColor(color)}
              onSizeChange={(size) => setSelectedSize(size)}
            />

            {/* Quantity */}
            <div>
              <p className="text-sm font-semibold text-gray-700">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors text-lg font-medium cursor-pointer"
                >
                  −
                </button>
                <span className="text-base font-semibold w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#4C2083] hover:text-[#4C2083] transition-colors text-lg font-medium cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-1">
              <button className="bg-[#4C2083] text-white py-3 rounded-xl font-semibold hover:bg-[#3a1866] transition-colors cursor-pointer">
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className={`border py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-colors ${
                  inCart
                    ? "border-[#4C2083] text-white bg-[#4C2083]"
                    : "border-gray-300 text-gray-700 hover:border-[#4C2083] hover:text-[#4C2083] cursor-pointer"
                }`}
              >
                <ShoppingCart size={18} />
                {inCart ? "Added to Cart" : "Add to Cart"}
              </button>
              <button className="bg-white border border-[#4C2083] text-[#4C2083] py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors cursor-pointer">
                Take Custom Measurement
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Product Tabs */}
        <ProductTabs product={product} />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
