import { ArrowRightIcon, CashIcon, HomeIcon, OfficeBuildingIcon, ScaleIcon, ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

import React from "react";
import { apricusServices } from "../lib/Services";
import ApricusFancyIcon from "./layouts/ApricusFancyIcon";

const Services = () => {
  const Icons = [
    {
      icon: <OfficeBuildingIcon strokeWidth={0.5} />,
    },
    {
      icon: <CashIcon strokeWidth={0.5} />,
    },
    {
      icon: <ScaleIcon strokeWidth={0.5} />,
    },
    {
      icon: <HomeIcon strokeWidth={0.5} />,
    },
    {
      icon: <ScaleIcon strokeWidth={0.5} />,
    },
    {
      icon: <ShieldCheckIcon strokeWidth={0.5} />,
    },
    {
      icon: <ScaleIcon strokeWidth={0.5} />,
    },
  ];
  return (
    <section className="bg-apricusblue-700 dark:bg-gray-900  ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <ApricusFancyIcon />
          <h2 className="apricus-heading-light ">Practice Areas</h2>
          <p className="apricus-subheading-light">
            We offer a diversity of expertise in all areas of major practice. We are a full service law firm with leading expertise in various areas of Law in Uganda.
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {apricusServices.slice(0, 6).map((service, index) => {
            return (
              <div key={index}>
                <div className="flex  items-center mb-8   ">
                  <div className=" w-16 h-16 text-gray-300 lg:w-16 lg:h-16 dark:text-primary-300">{Icons[index]?.icon} </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-300 dark:text-white">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{service.shortDescription}</p>
                <Link href="/practice-areas">
                  <a className="text-white hover:text-gray-300  font-medium rounded-lg text-sm  my-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read More
                    <ArrowRightIcon className="ml-2 -mr-1 w-5 h-5" />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
