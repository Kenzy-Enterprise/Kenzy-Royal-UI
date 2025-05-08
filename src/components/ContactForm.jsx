import React from "react";
import contactImage from "../assets/images/contact-girl.jpg";

const ContactForm = () => {
  return (
    <section className="bg-gray-200 py-12 px-6 md:px-20 mt-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={contactImage}
            alt="Contact Kenzy Royal"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-[#964B00]/20">
          <h2 className="text-3xl font-bold text-[#964B00] mb-6 text-center font-serif">
            Get in Touch
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#964B00] mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-[#964B00]/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#964B00] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-[#964B00]/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#964B00] mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-[#964B00]/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#964B00] text-white px-5 py-2 rounded-md hover:bg-[#7a3d00] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
