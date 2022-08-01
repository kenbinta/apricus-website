import { useRouter } from "next/router";
import React from "react";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import { attorneys } from "../../lib/Team";

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  // get data for slug from data.json
  const data = attorneys.find((item) => item.slug === slug);
  const breadCrumb = [
    {
      title: "Team",
      path: "/team",
    },
    {
      title: data?.name,
      path: `/team/${data?.slug}`,
      active: true,
    },
  ];

  if (!data) {
    return <div>404</div>;
  }
  return (
    <div>
      <PagesHeader title={data.name} breadCrumb={breadCrumb} />

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className=" gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="apricus-heading-black">{data.name}.</h2>

            {/* A list mapping through data.practiceAreas */}

            <p className="mb-4 text-xl text-gray-900 dark:text-white italic"> {data.email}</p>
            <p className="mb-4 text-xl text-gray-900 dark:text-white"> {data.position}</p>
            <div className="mb-4 text-xl text-gray-900 dark:text-white italic">Practice Areas</div>
            <ul className="list-disc ml-4">
              {data.practiceAreas?.map((practiceArea) => (
                <li className="text-gray-900 dark:text-white list-none" key={practiceArea}>
                  - {practiceArea}
                </li>
              ))}
            </ul>
            <div className="mb-4 text-xl text-gray-900 dark:text-white">Biograhaphy</div>
            <p className="mb-6  text-gray-700 md:text-lg dark:text-gray-400">{data.bio}</p>
          </div>
          <div className=" lg:-mt-96">
            <img src={data.image} alt={data.alt} />
          </div>
        </div>
      </section>

      {/* image */}
    </div>
  );
};

export default Index;
