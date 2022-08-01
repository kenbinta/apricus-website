import Link from "next/link";
import React from "react";
import { APRICUS_LOGO_URL } from "../lib/data";
import { NavItems } from "../lib/Navigation";

const Navbar = () => {
  return (
    <nav className="bg-apricusblue-700  border-gray-200 px-4 lg:px-6 py-6 md:py-8  dark:bg-apricusblue-700 sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href="/">
          <a className="flex items-center">
            <img src={APRICUS_LOGO_URL} className="mr-3 h-6 sm:h-9" alt="Apricus Advocates Logo" />
            <span className=" text-gray-300 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Apricus Advocates</span>
          </a>
        </Link>

        <div className="flex items-center "></div>
        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {NavItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
