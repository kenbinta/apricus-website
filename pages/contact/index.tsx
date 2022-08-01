import { NextPage } from "next";
import React from "react";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import { contactDetails } from "../../lib/ContactDetails";

const Contact: NextPage = () => {
  const breadCrumb = [
    {
      title: "Contact",
      path: "/contact",
      active: true,
    },
  ];

  return (
    <>
      <PagesHeader title={"Contact Us"} breadCrumb={breadCrumb} />
      <section className="bg-white dark:bg-gray-900 ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full " src="/assets/contact-us.jpg" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="apricus-heading-black ">{contactDetails.altTitle}</h2>
            <p className="apricus-subheading-black">{contactDetails.introduction}</p>
            {contactDetails.contactdetails.map((contact, index) => {
              return (
                <div key={index} className="flex mb-8 max-w-[370px] w-full">
                  <div className="w-full">
                    <h4 className="font-bold text-dark text-xl mb-1">{contact.title}</h4>
                    <p className="text-base text-body-color">{contact.data}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
