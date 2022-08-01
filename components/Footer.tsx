import React from "react";
import { APRICUS_LOGO_URL, FooterContent } from "../lib/data";

const Footer = () => {
  return (
    <footer className="  py-12 sm:py-24 lg:py-28  p-4 bg-apricusblue-700  dark:bg-apricusblue-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="lg:flex lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <a href="#" className="flex items-center">
              <img src={APRICUS_LOGO_URL} className="mr-3 h-8" alt="Apricus Advocates Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-300 dark:text-white"> Apricus Advocates</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 ">
            <div className="hidden sm:block">

            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100  dark:text-white">{FooterContent.quickLinks.title}</h2>
              <ul className="text-gray-100 dark:text-gray-400">
                {FooterContent.quickLinks.links.map((link, index) => {
                  return (
                    <li key={index} className="mb-4">
                      <a href={link.link} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">{FooterContent.apricusServices.title}</h2>
              <ul className="text-gray-100 dark:text-gray-400">
                {FooterContent.apricusServices.links.map((link, index) => {
                  return (
                    <li key={index} className="mb-4">
                      <a href={link.link} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">{FooterContent.contactInfo.title}</h2>
              <ul className="text-gray-100 dark:text-gray-400">
                {FooterContent.contactInfo.contact.map((link, index) => {
                  return (
                    <li key={index} className="mb-4">
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  );
                })}

                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com" className="hover:underline">
              Apricus Advocates
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
