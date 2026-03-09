"use client";
import {
  Users,
  Globe,
  Heart,
  Target,
  Eye,
  Zap,
  UsersRound,
  Shield,
  Leaf,
} from "lucide-react";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Inknut_Antiqua, Inria_Sans } from "next/font/google";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Designers",
    sub: "Talented African designers worldwide",
  },
  {
    icon: Globe,
    value: "54",
    label: "Countries",
    sub: "All African nations represented",
  },
  {
    icon: Heart,
    value: "100K+",
    label: "Happy Customers",
    sub: "Fashion lovers globally",
  },
];

const pillars = [
  {
    icon: Target,
    label: "Our Mission",
    body: "To create a global platform where African fashion designers can showcase their talent, preserve cultural heritage, and build sustainable businesses while connecting with customers who appreciate authentic African artistry.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    body: "A world where African fashion is celebrated globally, where traditional craftsmanship thrives alongside modern innovation, and where every purchase supports the preservation of rich cultural heritage.",
  },
  {
    icon: Zap,
    label: "Our Impact",
    body: "Creating economic opportunities for African designers, preserving traditional craftsmanship techniques, and fostering cultural appreciation through fashion while building bridges between Africa and the world.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "The Vision Begins",
    description:
      "Founded with a mission to connect global customers with authentic African fashion designers and preserve cultural heritage.",
  },
  {
    year: "2021",
    title: "First 50 Designers",
    description:
      "Onboarded our first group of talented designers from Nigeria, Ghana, Kenya, and South Africa.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description:
      "Expanded to serve customers worldwide, featuring designers from all 54 African countries.",
  },
  {
    year: "2023",
    title: "Cultural Impact Awards",
    description:
      "Recognized for promoting African culture and supporting designer communities across the continent.",
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description:
      "Launched our sustainability initiative, promoting eco-friendly practices and ethical fashion production.",
  },
  {
    year: "2025",
    title: "Customers Relationship",
    description:
      "We give our best services round the clock to satisfy our clients.",
  },
];

const features = [
  {
    icon: <Shield size={40} className="text-white" />,
    title: "Authenticity Verified",
    description:
      "Every designer is verified for cultural authenticity and traditional knowledge",
  },
  {
    icon: <Users size={40} className="text-white" />,
    title: "Community Support",
    description: "Direct partnerships with artisan communities across Africa",
  },
  {
    icon: <Heart size={40} className="text-white" />,
    title: "Heritage Preservation",
    description:
      "Actively preserving traditional techniques for future generations",
  },
];

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {
  return (
    <div className={`${inriaSans.className}`}>
      {/* ── Celebrating African Fashion Heritage ──────────────────────────── */}
      <section className="py-10 px-4">
        {/* Heading + intro */}
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2
            className={`lg:text-6xl text-5xl font-bold text-[#4C2083] leading-tight mb-2 ${inknut.className}`}
          >
            Celebrating African{" "}
            <span className="text-[#7851A9] font-light">Fashion Heritage</span>
          </h2>
          <p className="text-gray-700 lg:text-4xl text-2xl leading-relaxed">
            <span className="font-bold text-gray-900">Alphalli</span> is more
            than a marketplace, we're a bridge between Africa's rich cultural
            heritage and the global fashion world. We empower authentic African
            designers while celebrating the stories, traditions, and artistry
            woven into every piece.
          </p>
        </div>

        {/* Hero image */}
        <div className="max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden">
          <img
            src="/culture(alphalli)1.png"
            alt="African fashion celebration"
            className="w-full h-120 object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.style.background =
                "linear-gradient(135deg, #c4b0e8, #9b72cf)";
              e.target.parentNode.style.height = "256px";
            }}
          />
        </div>

        {/* Stats — 500+, 54, 100K+ */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-10 flex flex-col items-center text-center border border-[#4C2083]"
            >
              <div className="w-25 h-25 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <Icon size={50} strokeWidth={1.5} className="text-[#7851A9]" />
              </div>
              <p className="text-5xl font-bold text-[#4C2083]">{value}</p>
              <p className="text-4xl font-semibold text-[#4C2083] mt-0.5">
                {label}
              </p>
              <p className="text-xl text-gray-400 mt-1 leading-snug">{sub}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision / Impact */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4">
          {pillars.map(({ icon: Icon, label, body }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-10 flex flex-col items-center text-center shadow-sm border border-[#4C2083]"
            >
              <div className="w-25 h-25 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <Icon size={50} strokeWidth={1.5} className="text-[#7851A9]" />
              </div>
              <p className="text-4xl font-semibold text-[#4C2083] mb-2">
                {label}
              </p>
              <p className="text-xl text-black leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold text-[#4C2083]">Our Story</h2>

            <p className="text-gray-700 text-xl leading-8">
              Alphalli was born from a simple yet powerful belief: African
              fashion deserves a global stage. Founded by a team passionate
              about cultural preservation and authentic artistry, we recognized
              that incredible African designers needed a platform to reach
              customers who truly appreciate their craft.
            </p>

            <p className="text-gray-700 text-xl leading-8">
              What started as a small initiative to support a handful of
              Nigerian designers has grown into a thriving community
              representing every African nation. We've witnessed the
              transformation of individual artisans into internationally
              recognized fashion houses, all while preserving the cultural
              integrity that makes African fashion so distinctive.
            </p>

            <p className="text-gray-700 text-xl leading-8">
              Today, Alphalli stands as a testament to the power of authentic
              storytelling, cultural pride, and the universal language of
              fashion that connects hearts across continents.
            </p>

            <button className="bg-[#4C2083] text-white text-sm font-medium py-4 rounded-xl hover:bg-[#3a1866] transition-colors cursor-pointer">
              Join Our Community
            </button>
          </div>

          {/* Right — Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/Kaftanwear1.png"
              alt="African fashion designer"
              className="w-full h-150 object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.style.background =
                  "linear-gradient(135deg, #e8dff5, #d4c4ed)";
                e.target.parentNode.style.height = "500px";
              }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col w-full">
          <h1 className="text-[#4C2083] text-4xl text-center w-full mb-5">
            Our Core Values
          </h1>
          <div className="lg:px-20 px-2 lg:h-120 h-fit grid lg:grid-cols-2 gap-8 items-center justify-center">
            <div className="bg-white lg:h-50 rounded-2xl flex lg:flex-row flex-col lg:pl-4 pl-2 pt-2 pb-2 gap-2 border border-[#4C2083]">
              <div className="flex items-center justify-center h-fit w-fit mt-5 p-4 rounded-full bg-purple-100">
                <Heart
                  className="h-10 w-10 rounded-full bg-purple-100 text-[#4C2083]"
                  size={20}
                  strokeWidth={0.8}
                />
              </div>
              <div className="w-full mt-5">
                <h1 className="text-[#4C2083] lg:text-4xl text-3xl mb-2">
                  Cultural Authenticity
                </h1>
                <p className="lg:text-2xl text-xl font-thin w-full">
                  Every piece tells a genuine story of African heritage, crafted
                  by authentic artisans and designers who understand the
                  cultural significance.
                </p>
              </div>
            </div>
            <div className="bg-white lg:h-50 rounded-2xl flex lg:flex-row flex-col lg:pl-4 pl-2 pt-2 pb-2 gap-2 border border-[#4C2083]">
              <div className="flex items-center justify-center h-fit w-fit mt-5 p-4 rounded-full bg-purple-100">
                <UsersRound
                  className="h-10 w-10 rounded-full bg-purple-100 text-[#4C2083] rotate-y-180"
                  size={20}
                  strokeWidth={0.8}
                />
              </div>
              <div className="w-full mt-5">
                <h1 className="text-[#4C2083] lg:text-4xl text-3xl mb-2">
                  Community Empowerment
                </h1>
                <p className="lg:text-2xl text-xl font-thin w-full">
                  We directly support African designers and artisans, ensuring
                  fair compensation and sustainable livelihoods for local
                  communities.
                </p>
              </div>
            </div>
            <div className="bg-white lg:h-50 rounded-2xl flex lg:flex-row flex-col lg:pl-4 pl-2 pt-2 pb-2 gap-2 border border-[#4C2083]">
              <div className="flex items-center justify-center h-fit w-fit mt-5 p-4 rounded-full bg-purple-100">
                <Shield
                  className="h-10 w-10 rounded-full bg-purple-100 text-[#4C2083]"
                  size={20}
                  strokeWidth={0.8}
                />
              </div>
              <div className="w-full mt-5">
                <h1 className="text-[#4C2083] lg:text-4xl text-3xl mb-2">
                  Quality Assurance
                </h1>
                <p className="lg:text-2xl text-xl font-thin w-full">
                  Our rigorous quality standards ensure that every garment meets
                  international fashion expectations while honoring traditional
                  craftsmanship.
                </p>
              </div>
            </div>
            <div className="bg-white lg:h-50 rounded-2xl flex lg:flex-row flex-col lg:pl-4 pl-2 pt-2 pb-2 gap-2 border border-[#4C2083]">
              <div className="flex items-center justify-center h-fit w-fit mt-5 p-4 rounded-full bg-purple-100">
                <Leaf
                  className="h-10 w-10 rounded-full bg-purple-100 text-[#4C2083]"
                  size={20}
                  strokeWidth={0.8}
                />
              </div>
              <div className="w-full mt-5">
                <h1 className="text-[#4C2083] lg:text-4xl text-3xl mb-2">
                  Sustainable Fashion
                </h1>
                <p className="lg:text-2xl text-xl font-thin w-full">
                  We promote eco-friendly practices, supporting designers who
                  use sustainable materials and traditional, environmentally
                  conscious techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-fit px-6">
        <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;500;600&display=swap');
    .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
    .font-source { font-family: 'Source Sans 3', sans-serif; }
  `}</style>

        <h1 className="font-playfair text-center text-4xl font-bold text-purple-900 mt-12 mb-12 tracking-tight">
          Our Journey
        </h1>

        <div className="max-w-7xl mx-auto flex flex-col">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className="flex lg:flex-row flex-col items-start lg:gap-5"
            >
              {/* Year badge + connector */}
              <div className="flex flex-col items-center">
                <div className="bg-purple-900 text-white font-source font-bold text-sm rounded-lg px-4 py-2.5 min-w-16 text-center shadow-md tracking-wide">
                  {m.year}
                </div>
                {i < milestones.length - 1 && (
                  <div
                    className="w-0.5 bg-purple-200 lg:mt-2"
                    // style={{ minHeight: "25px" }}
                  />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white border border-purple-100 rounded-2xl px-6 py-5 shadow-sm mb-5">
                <h3 className="font-playfair text-[#4C2083] font-bold text-2xl mb-1.5">
                  {m.title}
                </h3>
                <p className="font-source text-gray-500 text-xl leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#e8e6f0] p-6 rounded-xl max-w-7xl mx-auto">
        {/* Title Box */}
        <div className="rounded-lg p-4 mb-2 text-center">
          <h2 className="text-5xl font-bold text-purple-900 font-serif leading-15">
            Cultural Impact and Authenticity
          </h2>
        </div>

        {/* Description Box */}
        <div className="rounded-lg p-5 mb-2 text-center">
          <p className="text-gray-700 text-xl leading-relaxed">
            Every design on <strong>Alphalli</strong> carries deep cultural
            significance. We work exclusively with designers who understand and
            respect the traditions they represent, ensuring that cultural
            patterns, symbols, and techniques are used appropriately and
            meaningfully.
          </p>
        </div>

        {/* Features Box */}
        <div className="rounded-lg p-2 mb-6">
          <div className="grid lg:grid-cols-3 gap-6 text-center">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="bg-purple-800 rounded-full w-30 h-30 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-purple-800 text-4xl font-bold">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-xl leading-snug">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-purple-900 text-white py-3 rounded-lg text-sm tracking-wide hover:bg-purple-800 transition-colors duration-200 cursor-pointer">
          Learn About Our Designers
        </button>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default page;
