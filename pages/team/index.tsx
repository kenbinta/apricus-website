import { NextPage } from "next";
import React from "react";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import Attorneys from "../../components/Team";
import { attorneys } from "../../lib/Team";

const Team: NextPage = () => {
  const breadCrumb = [
    {
      title: "Team",
      path: "/team",
      active: true,
    },
  ];
  return (
    <div>
      <PagesHeader title={"Team"} breadCrumb={breadCrumb} />
      <Attorneys />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      attorneys.map((attorney) => ({
        params: { slug: attorney.slug },
      })),
    ],
    fallback: false,
  };
}

export default Team;
