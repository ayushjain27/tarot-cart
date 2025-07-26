import {
  AlertCircle,
  CreditCard,
  Loader,
  Mail,
  Phone,
  User,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const PaymentForm = ({ onClose, onSuccess }) => {
  const [visible, setVisible] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]\d{9}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  console.log(formData, "dmwelkflke");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone number field
    if (name === "phone") {
      // Allow only numbers and limit to 10 characters
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      // Normal handling for other fields
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle payment
  const handlePayment = () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const options = {
      key: "rzp_live_1AbWUT8mx9YG16", // Your Razorpay key
      amount: 19900, // Amount in paise (₹1)
      currency: "INR",
      name: "Divine Light Tarot Academy",
      description: "2-Day Tarot Workshop",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      prefill: {
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        course: "2-Day Tarot Workshop",
        student_number: formData.phone,
      },
      theme: {
        color: "#7C3AED",
      },
      // Add these for automatic capture
      handler: function (response) {
        setLoading(false);
        setPaymentStatus({
          success: true,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
        });
        onClose();
        onSuccess();
        setFormData({
          email: "",
          phone: "",
        });
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
          setPaymentStatus({
            success: false,
            error: "Payment was cancelled by user",
          });
        },
      },
      // Enable automatic capture
      capture: true, // This ensures automatic capture
      readOnly: {
        contact: true, // Makes phone number read-only after prefilling
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      setLoading(false);
      setPaymentStatus({
        success: false,
        error: response.error.description,
        code: response.error.code,
        reason: response.error.reason,
      });
    });

    rzp.open();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto relative">
        <button
          onClick={() => onClose()}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Complete Your Enrollment
          </h2>
          <p className="text-gray-600">
            Enter your details to proceed with payment
          </p>
        </div>

        <form className="space-y-4">
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
            </div>
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formErrors.name}
              </p>
            )}
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email address"
              />
            </div>
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formErrors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  formErrors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
                maxLength="10"
              />
            </div>
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formErrors.phone}
              </p>
            )}
          </div>

          {paymentStatus && !paymentStatus.success && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700 text-sm">{paymentStatus.error}</p>
              </div>
            </div>
          )}

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Course Fee:</span>
              <span className="text-2xl font-bold text-purple-600">₹199</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
