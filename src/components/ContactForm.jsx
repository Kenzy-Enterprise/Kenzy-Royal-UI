// src/components/ContactPage.jsx
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import image from "../assets/images/contact-girl.jpg";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 mt-12">
      <div className="text-center mb-8 text-5xl mt-7">
        <span className="text-[#964B00] font-bold font-serif">
          Nourish naturally,
        </span>
        <span className="text-[#F7DC6F] font-bold font-serif">
          Glow confidently.
        </span>
      </div>
      <div className="flex justify-center mb-8">
        <img
          src={image}
          alt="Kenzy Royal Products"
          className="rounded-xl shadow-lg object-cover w-full md:w-[600px] lg:w-[500px] h-auto"
        />
      </div>
      {/* Contact & Comment Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contacts Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#964B00] font-serif">
            Contacts Us
          </h2>
          <p className="text-gray-600 mb-6">
            Need to get in touch with Kenzy Royal? We're here to help!
          </p>

          <ul className="space-y-4">
            <li className="flex items-center bg-white rounded-lg shadow p-4">
              <MapPin className="w-6 h-6 text-[#964B00] mr-3" />
              <div>
                <p className="text-sm text-gray-500">Address:</p>
                <p className="font-medium">Tamale, Northern Region, Ghana</p>
              </div>
            </li>
            <li className="flex items-center bg-white rounded-lg shadow p-4">
              <Phone className="w-6 h-6 text-[#964B00] mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone:</p>
                <p className="font-medium">+233 550 450 264</p>
              </div>
            </li>
            <li className="flex items-center bg-white rounded-lg shadow p-4">
              <Mail className="w-6 h-6 text-[#964B00] mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-medium">kenzyroyal@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Leave A Comment */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#964B00] font-serif">
            Leave A Comment
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out with any questions or comments, and our team will get back
            to you.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your message
              </label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#964B00] text-white px-6 py-2 rounded hover:bg-[#7a3d00] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 rounded overflow-hidden shadow-lg">
        <iframe
          title="Tamale, Ghana Map"
          src="https://maps.google.com/maps?q=Tamale%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ContactPage;
