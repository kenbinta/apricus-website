import React from "react";
import { clienteleLogos } from "../lib/data";
import ApricusFancyIcon from "./layouts/ApricusFancyIcon";

const Clientelle = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="flex justify-center">
          <ApricusFancyIcon />
        </div>
        <h2 className="apricus-heading-black text-center">Our Clientelle</h2>
        <p className="apricus-subheading-black text-center">We are trusted by our work partners</p>
        <div className="grid grid-cols-2 gap-2 text-gray-500 sm:gap-2 md:grid-cols-3 lg:grid-cols-7 dark:text-gray-400">
          {clienteleLogos.map((logo, index) => (
            <div key={index} className="items-center  flex justify-center">
              <img className="w-32" src={logo.companyLogo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientelle;
