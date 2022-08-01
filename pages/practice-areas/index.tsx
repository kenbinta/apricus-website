import React from "react";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import { apricusServices } from "../../lib/Services";

import { ArrowRightIcon, CashIcon, HomeIcon, OfficeBuildingIcon, ScaleIcon, ShieldCheckIcon } from "@heroicons/react/outline";

import Services from "../../components/Services";
import ApricusFancyIcon from "../../components/layouts/ApricusFancyIcon";
const PracticeAreas = () => {
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

  const breadCrumb = [
    {
      title: "Practice Areas",
      path: "/practice-areas",
      active: true,
    },
  ];
  return (
    <div>
      <PagesHeader title={"Practice Areas"} breadCrumb={breadCrumb} />
      <section className="bg-blue-50 dark:bg-gray-900  ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <ApricusFancyIcon />
            <h2 className="apricus-heading-black ">Practice Areas</h2>
            <p className="apricus-subheading-black">
              We offer a diversity of expertise in all areas of major practice. We are a full service law firm with leading expertise in various areas of Law in Uganda.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            {apricusServices.slice(0, 6).map((service, index) => {
              return (
                <div key={index}>
                  <div className="flex  items-center mb-8   ">
                    <div className=" w-16 h-16 text-gray-800 lg:w-16 lg:h-16 dark:text-primary-300">{Icons[index]?.icon} </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-800 dark:text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
