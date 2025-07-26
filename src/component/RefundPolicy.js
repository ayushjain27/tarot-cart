import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  AlertCircle,
  Mail,
  ChevronRight,
  Copyright,
} from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800 bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="flex justify-center mb-6">
          <Shield className="w-14 h-14 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
          Refund Policy
        </h1>
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
      </header>

      {/* Main Content */}
      <section className="mb-12 bg-white rounded-xl shadow-md p-8 border border-purple-100">
        <div className="flex items-start mb-8">
          <AlertCircle className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              DIVINELIIGHTT IS COMMITTED TO PROVIDING EXCEPTIONAL SERVICE
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We want you to feel comfortable about transacting business with
              us. Due to the nature of our business and the accessibility of our
              products/services/courses immediately upon purchase, we maintain a
              <span className="font-bold text-purple-600">
                {" "}
                NO REFUND POLICY
              </span>
              .
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">
              YOU CAN ALWAYS CHECK THE QUALITY OF THE WORK WITH OUR SAMPLES AND
              DECIDE TO PURCHASE OUR PRODUCT/SERVICE.
            </p>
          </div>

          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
            <p className="text-gray-700">
              IF YOU ARE NOT COMPLETELY SATISFIED WITH THE PRODUCT YOU HAVE PAID
              FOR, YOU MAY CONTACT{" "}
              <a
                href="tel:+919910386064"
                className="text-purple-600 hover:underline font-medium transition-colors duration-200"
              >
                +91 99103 86064
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 pt-6 border-t border-purple-100 text-sm text-gray-600">
        <div className="flex items-center mb-4">
          <Copyright className="w-4 h-4 mr-2" />
          <span>
            Copyright 2023 - The DivineLiightt & Divine Crystals. All rights
            reserved.
          </span>
        </div>

        <p className="mb-6">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
