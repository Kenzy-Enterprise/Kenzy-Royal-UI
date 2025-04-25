import React from "react";
import { InstagramIcon, MailIcon, PhoneCallIcon } from "lucide-react";

const footer = () => {
  return (
    <footer className="bg-[#964B00] text-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Brand Info */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold font-serif mb-4">
            Kenzy Royal Enterprise
          </h3>
          <p className="text-sm leading-relaxed">
            Bringing together beauty and creativity through luxurious shea
            butter-infused cosmetics and innovative crafting supplies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold font-serif mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog & DIY Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold font-serif mb-3">Connect With Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <InstagramIcon size={18} />
              <a href="#" className="hover:underline">
                kenzy_royal_enterprise
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={18} />
              <a
                href="mailto:contact@kenzyroyal.com"
                className="hover:underline"
              >
                kenzyroyal@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCallIcon size={18} />
              <span>+233 550 450 264</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/30 pt-4 text-sm text-center">
        © 2025 Kenzy Royal Enterprise. All rights reserved.
      </div>
    </footer>
  );
};

export default footer;
