import React from "react";
import ApricusFancyIcon from "../../components/layouts/ApricusFancyIcon";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import { aboutUsData } from "../../lib/AboutUs";

const About = () => {
  const breadCrumb = [
    {
      title: "About Us",
      path: "/about-us",
      active: true,
    },
  ];
  return (
    <div>
      {" "}
      <PagesHeader title={"About Us"} breadCrumb={breadCrumb} />
      <section className="bg-blue-50 dark:bg-gray-900 ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src={aboutUsData.image} alt="about image" />
          <div className="mt-4 md:mt-0">
          <ApricusFancyIcon />
            <h2 className="apricus-heading-black">{aboutUsData.title}</h2>
            <p className="mb-6  text-gray-800 md:text-lg dark:text-gray-400">{aboutUsData.introduction}</p>
          </div>
        </div>
      </section>
      {/* <div>
        <div className="grid md:grid-cols-3">
          {aboutUsData.statements.map((statement, index) => {
            return (
              <div key={index} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{statement.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{statement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn reinvent the wheel</h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
              Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
            </p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
