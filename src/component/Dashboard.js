import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  Star,
  Download,
  Music,
  Image,
  Mail,
  Presentation,
  ArrowRight,
  Instagram,
  Youtube,
  Phone,
} from "lucide-react";
import ImageUrl from "./image.png";

const KavangunAssetsPage = () => {
  const [email, setEmail] = useState("");

  const premiumAssets = [
    {
      id: 1,
      title: "500+ PREMIUM SOUND EFFECTS",
      originalPrice: "₹ 499.00",
      salePrice: "₹ 99.00",
      image: "https://kavangunassets.com/cdn/shop/files/boxes.png",
      badge: "Sale",
    },
    {
      id: 2,
      title: "Premium Meme Pack 1000+",
      originalPrice: "₹ 499.00",
      salePrice: "₹ 99.00",
      image: "https://kavangunassets.com/cdn/shop/files/boxes.png",
      badge: "Sale",
    },
    {
      id: 3,
      title: "Premium Music Pack 2000+",
      originalPrice: "₹ 499.00",
      salePrice: "₹ 99.00",
      image: "https://kavangunassets.com/cdn/shop/files/boxes.png",
      badge: "Sale",
    },
    {
      id: 4,
      title: "Ultimate Assets Pack 7000+",
      originalPrice: "₹ 4,999.00",
      salePrice: "₹ 999.00",
      image: ImageUrl,
      badge: "Sale",
    },
  ];

  const freeAssets = [
    {
      id: 1,
      title: "69 Best Memes Pack - Used by Top Indian Creators!",
      originalPrice: "₹ 199.00",
      salePrice: "₹ 0.00",
      image: "https://kavangunassets.com/cdn/shop/files/6-9-meme-pack-kav.png",
      badge: "Free",
      downloads: "15K+ downloads",
    },
    {
      id: 2,
      title: "Free Music Pack",
      originalPrice: "₹ 199.00",
      salePrice: "₹ 0.00",
      image: "https://kavangunassets.com/cdn/shop/files/2.png",
      badge: "Free",
      downloads: "8.5K+ downloads",
    },
    {
      id: 3,
      title: "Free Slide Presets",
      originalPrice: "₹ 199.00",
      salePrice: "₹ 0.00",
      image: "https://kavangunassets.com/cdn/shop/files/1.png",
      badge: "Free",
      downloads: "12K+ downloads",
    },
    {
      id: 4,
      title: "Free Mail Template",
      originalPrice: "₹ 199.00",
      salePrice: "₹ 0.00",
      image: "https://kavangunassets.com/cdn/shop/files/3.png",
      badge: "Free",
      downloads: "3.2K+ downloads",
    },
  ];

  const ProductCard = ({ product, isFree = false }) => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <div className="w-full h-64 bg-gradient-to-br from-royalblue-400 to-royalblue-600 flex items-center justify-center relative">
          <div className="text-white text-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {/* <h3 className="font-bold text-lg mb-1">
              {product.title.split(" ").slice(0, 2).join(" ")}
            </h3>
            <p className="text-sm opacity-90">
              {product.title.split(" ").slice(2).join(" ")}
            </p> */}
          </div>
        </div>

        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
            product.badge === "Sale"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {product.badge}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-3 h-[3em] overflow-hidden leading-snug">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {product.salePrice}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-royalblue-500 to-royalblue-600 hover:from-royalblue-600 hover:to-royalblue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105">
          {isFree ? (
            <Download className="w-4 h-4" />
          ) : (
            <ShoppingCart className="w-4 h-4" />
          )}
          {isFree ? "Download Free" : "Add to Cart"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-royalblue-500 to-royalblue-600 bg-clip-text text-transparent">
                Kavangun Assets
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royalblue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-royalblue-600 transition-colors">
                <User className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-royalblue-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royalblue-500 to-royalblue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium Digital Assets
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover thousands of high-quality sound effects, music packs,
            memes, and creative assets used by top creators
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span>50K+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5" />
              <span>10K+ Assets</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Premium Assets */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Premium Assets
              </h2>
              <p className="text-gray-600">
                Professional-grade content for serious creators
              </p>
            </div>
            <div className="text-sm text-royalblue-600 font-medium">
              Limited Time Sale 🔥
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumAssets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Free Assets */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Free Assets
              </h2>
              <p className="text-gray-600">
                Get started with our free collection
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeAssets.map((product) => (
              <ProductCard key={product.id} product={product} isFree={true} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified about new assets, exclusive deals, and creative tips
            from top content creators
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-royalblue-500"
              />
              <button className="bg-royalblue-500 hover:bg-royalblue-600 px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Kavangun Singh</h3>
              <div className="text-gray-300 space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  kavangun.help@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Used by top creators</li>
                <li>✓ High-quality assets</li>
                <li>✓ Regular updates</li>
                <li>✓ 24/7 support</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kavangun Assets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KavangunAssetsPage;
