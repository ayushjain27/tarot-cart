import React from "react";
import { CheckCircle, MessageSquare } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto shadow-lg">
        <div className="mb-2">
          <div className="w-10 h-10 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Welcome to the Divine Light Tarot Academy family!
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-4">
          <h3 className="font-semibold text-gray-900 mb-4">Payment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold text-green-600">₹199</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Course:</span>
              <span>2-Day Tarot Workshop</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 mb-4">
          <h3 className="font-semibold text-purple-900 mb-2">What's Next?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
              <p className="text-gray-700">Check your email for course details and joining instructions</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
              <p className="text-gray-700">Join our WhatsApp group for course updates</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
              <p className="text-gray-700">Workshop starts on 25th July at 8:00 PM IST</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://chat.whatsapp.com/Em9G8h5m0By9dl6pZLCKVC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;