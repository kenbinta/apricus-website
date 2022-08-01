import { ArrowRightIcon, ScaleIcon } from "@heroicons/react/outline";
import React from "react";
import ApricusFancyIcon from "./layouts/ApricusFancyIcon";

const Hero = () => {
  return (
    <section className=" bg-hero-bg2 bg-cover bg-no-repeat bg-center  dark:bg-gray-900 ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <ApricusFancyIcon />
          <p className="text-white mb-4 md:text-2xl dark:text-white font-serif">We fight for Justice</p>
          <h1 className=" text-white max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white font-serif">
            We will take you through each step till the end
          </h1>
          <p className="max-w-2xl mb-6  text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We provide legal services to businesses, institutions and persons. We apply a structured approach to our work to ensure that we are always upholding the highest standards of our clients.
          </p>
          <a href={"/contact"} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-yellow-700 hover:bg-yellow-800 ">
            Contact Us
            <ArrowRightIcon className="w-5 h-5 ml-2 -mr-1" />
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
};

export default Hero;
