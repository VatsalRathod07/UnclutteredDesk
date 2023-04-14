import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-darkwhite-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between border-b">
          <div className="flex justify-center md:order-2">
            <a href="#">
                <h2 className="font-signature font-semibold tracking-wider text-2xl text-ligthblack-0 text-opacity-40">ZenFrost</h2>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <ul className="flex justify-center md:justify-end">
              <li className="mx-3">
                <a href="#">
                  <FaFacebook className="text-ligthblack-0 text-opacity-40 hover:text-ligthblack-0 h-6 w-6" />
                </a>
              </li>
              <li className="mx-3">
                <a href="#">
                  <FaTwitter className="text-ligthblack-0 text-opacity-40 hover:text-ligthblack-0 h-6 w-6" />
                </a>
              </li>
              <li className="mx-3">
                <a href="#">
                  <FaInstagram className="text-ligthblack-0 text-opacity-40 hover:text-ligthblack-0 h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-2">
          <p className="text-ligthblack-0 text-sm">&copy; 2023 ZenFrost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
