import React from "react";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import { apricusServices } from "../../lib/Services";
import { CashIcon } from "@heroicons/react/solid";
const PracticeAreas = () => {
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

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">These are our fields of expertise</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {apricusServices.map((service, index) => {
              return (
                <div key={index}>
                  <div className="flex  items-center mb-8   ">
                    <svg className=" w-16 h-16 text-primary-600 lg:w-16 lg:h-16 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-bold dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                  <a href="">Read More</a>
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
