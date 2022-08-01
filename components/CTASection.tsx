import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="apricus-heading-black">Happy to Discuss About Your Requirements.</h2>
          <p className="mb-8  text-gray-800 sm:text-xl dark:text-gray-400">Contact us for more inquries and we shall get back to you as soon as possible</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                Contact Us
                <PhoneIcon className="ml-2 -mr-1 w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
