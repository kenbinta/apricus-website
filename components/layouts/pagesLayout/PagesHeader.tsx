import { url } from "inspector";
import Link from "next/link";
import React from "react";

const PagesHeader = ({ title, breadCrumb }: any) => {
  return (
    <div
      className="bg-apricusblue-700 text-white md:bg-cover md:bg-top bg-center py-12"
      style={{ backgroundImage: `url("https://assets.website-files.com/5fff8f29b47fb233fb3cd16c/6005efc38b30be2d56812d1a_bg-practice-areas-lawyer-template.svg")` }}
    >
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <div className=" apricus-heading-light"> {title}</div>

          <nav aria-label="Breadcrumb">
            <ol role="list" className=" my-2 md:my-4 max-w-2xl mx-auto  flex items-center space-x-2  lg:max-w-7xl ">
              <li>
                <div className="flex items-center">
                  <Link href="/">
                    <a className="mr-2 text-sm font-medium hover:text-amber-500">Home</a>
                  </Link>

                  <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              {breadCrumb.map((item: any, index: number) => {
                return (
                  <li key={index}>
                    <div className="flex items-center">
                      {item.active ? (
                        <p className="mr-2 text-sm font-medium  text-gray-500">{item.title}</p>
                      ) : (
                        <>
                          <a href={item.path} className="mr-2 text-sm font-medium hover:text-amber-500">
                            {item.title}
                          </a>
                          <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                          </svg>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PagesHeader;
