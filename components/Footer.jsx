import Link from "next/link";
import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-darkwhite-0 mx-auto container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between border-b">
          <div className="flex justify-center md:order-2">
            <Link href="/">
                <h2 className="font-signature font-semibold tracking-wider text-2xl text-ligthblack-0">UnclutteredDesk </h2>
                {/* <p className='sub font-signature font-medium text-ligthblack-0 text-opacity-50'>Less clutter, more focus</p> */}
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <ul className="flex justify-center md:justify-end">
              <li className="mx-3">
              <Link href="mailto:info.uncluttereddesk@gmail.com" className="text-ligthblack-0 text-opacity-100 hover:text-red-700"> <HiMail size={25} /> </Link>
              </li>
              <li className="mx-3">
              <Link href="https://www.instagram.com/uncluttereddesk" className="instagram"> <FaInstagram size={25} /> </Link>
              </li>
              <li className="mx-3">
              <Link href="https://twitter.com/DeskUncluttered" className="text-ligthblack-0 text-opacity-100 hover:text-cyneblue-0"> <FaTwitter size={25} /> </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-2">
          <p className="text-black text-sm">&copy; 2023 UnclutteredDesk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
