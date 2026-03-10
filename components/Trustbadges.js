import { Truck, RefreshCw, Shield } from "lucide-react";

const badges = [
  { icon: Truck, label: "Free Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Shield, label: "Authentic Guarantee" },
];

export default function TrustBadges() {
  return (
    <div className="w-full border-y border-black py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-3">
          {badges.map(({ icon: Icon, label }, index) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-3 text-center py-2 ${
                index !== badges.length - 1 ? "border-r border-gray-200" : ""
              }`}
            >
              <div className="w-15 h-15 rounded-full bg-purple-100 border border-purple-100 flex items-center justify-center">
                <Icon size={30} strokeWidth={1.5} className="text-[#4C2083]" />
              </div>
              <span className="text-lg text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
