"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { SiAdobeacrobatreader } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai"; // Import X icon


const FixedButtons = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    email: "",
    bedrooms: "",
    buySoon: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Create a ref for the form element
  const formRef = useRef(null);

  // Prepare data for emailjs.send()
  const prepareEmailData = () => ({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    country: formData.country,
    email: formData.email,
    bedrooms: formData.bedrooms,
    buySoon: formData.buySoon,
    purpose: formData.purpose,
  });

  // Handle form submission and send email via EmailJS
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    try {
      await emailjs.send(
        "service_tgdvry2",
        "template_n4traqr",
        prepareEmailData(),
        "bz-racFIdw40qpvrn"
      );

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        country: "",
        email: "",
        bedrooms: "",
        buySoon: "",
        purpose: "",
      });
      setAlertMessage(
        "Thanks for your interest! Our team will contact you soon."
      );
      setShowAlert(true);
    } catch (error) {
      setAlertMessage("FAILED! Something went wrong, please try again.");
      setShowAlert(true);
      console.error("FAILED...", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value || "" });
  };

  return (
    <>
      {/* Desktop Version - Fixed on the Ri ght */}
      <div className="hidden xl:flex flex-col fixed right-4 bottom-10 gap-2 z-50">
        <button
          onClick={() => setShowContactForm(true)}
          className="bg-black hover:bg-white hover:text-black transition ease-in-out duration-200 text-white px-4 py-2 rounded-md shadow-lg"
        >
          Contact Us
        </button>
        <a
          href="/TheWilds.pdf"
          download
          className="bg-yellow-700 flex justify-center items-center gap-2 hover:bg-white hover:text-yellow-700 transition ease-in-out duration-200 text-white px-4 py-2 rounded-md shadow-lg text-center"
        >
          <SiAdobeacrobatreader className="w-5 h-6" /> Download Brochure
        </a>
      </div>

      {/* Mobile Version - Full Width at Bottom */}
      <div className="xl:hidden fixed bottom-0 left-0 w-full bg-black/80 text-white flex justify-around py-3 z-50">
        <button
          onClick={() => setShowContactForm(true)}
          className="bg-transparent hover:text-white transition ease-in-out duration-200 text-yellow-700 px-4 py-2 rounded-md"
        >
          Contact Us
        </button>
        <a
          href="/brochure.pdf"
          download
          className="bg-transparen flex justify-center items-center gap-2  hover:text-yellow-700 transition ease-in-out duration-200 text-white px-4 py-2 rounded-md shadow-lg text-center"
        >
          <SiAdobeacrobatreader className="w-5 h-6" />
          Download Brochure
        </a>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed  inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center text-center">

            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        {/* Close Button */}
                        <button
              onClick={() => setShowContactForm(false)}
              className="text-black  hover:scale-110  transition ease-out duration-200 mb-4"
            >
              <AiOutlineClose size={20} />
            </button>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="max-w-4xl mx-auto pb-20 font-mono"
            >
              <div className="grid sm:grid-cols-2 gap-6 py-10">
                {/* First Name */}
                <input
                  required
                  type="text"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Last Name */}
                <input
                  required
                  type="text"
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Phone Number */}
                <PhoneInput
                  required
                  international
                  defaultCountry="AE"
                  value={formData.phone || undefined}
                  onChange={handlePhoneChange}
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Country */}
                <input
                  required
                  type="text"
                  placeholder="COUNTRY OF RESIDENCE"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Email */}
                <input
                  required
                  type="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Bedrooms */}
                <input
                  required
                  type="text"
                  placeholder="NUMBER OF BEDROOMS"
                  value={formData.bedrooms}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrooms: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Buy Soon */}
                <input
                  required
                  type="text"
                  placeholder="HOW SOON ARE YOU LOOKING TO BUY"
                  value={formData.buySoon}
                  onChange={(e) =>
                    setFormData({ ...formData, buySoon: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />

                {/* Purpose */}
                <input
                  required
                  type="text"
                  placeholder="PURPOSE OF BUYING"
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                  className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading} // Disable the button while loading
                className="mt-10 px-6 py-2.5 w-full text-lg bg-customBg text-white transition 300 ease-in-out border hover:bg-white hover:border hover:border-customBg hover:text-black rounded-sm"
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner"></div> {/* Spinner when loading */}
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
            {/* Custom Alert */}
            {showAlert && (
              <div className="alert-container">
                <div className="alert-box bg-customBg text-customText2">
                  <p>{alertMessage}</p>
                  <button
                    onClick={() => setShowAlert(false)}
                    className="alert-close"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .alert-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e5e0da;
          z-index: 1000;
        }

        .alert-box {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          max-width: 400px;
          width: 90%;
          color: #453c35;
        }

        .alert-text {
          color: #453c35; /* Same color as the close button */
        }

        .alert-close {
          background-color: #453c35;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        .alert-close:hover {
          background-color: #e5e0da;
          color: black;
        }
      `}</style>
    </>
  );
};

export default FixedButtons;
