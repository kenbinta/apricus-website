import React from "react";
import { attorneys } from "../lib/Team";
import ApricusFancyIcon from "./layouts/ApricusFancyIcon";

const Attorneys = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <div className="flex justify-center">
          <ApricusFancyIcon />
          </div>
          
          <h2 className="apricus-heading-black ">Meet our Attorneys</h2>
          <p className="apricus-subheading-black">Our team is comited to represent our clients interests</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-16 md:grid-cols-3 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <div key={attorney.name} className="items-center bg-gray-50 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
              <a href={`team/${attorney.slug}`}>
                <img className="w-full rounded-lg sm:rounded-none " src={attorney.image} alt={attorney.alt} />
              </a>
              <div className="p-5 bg-apricusblue-500">
                <h3 className="text-xl font-bold tracking-tight text-gray-300 dark:text-white">
                  <a href="#">{attorney.name}</a>
                </h3>
                <span className="text-gray-300 dark:text-gray-400">{attorney.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
