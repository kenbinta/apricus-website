import React from "react";
import PagesHeader from "../../components/layouts/pagesLayout/PagesHeader";
import { apricusServices } from "../../lib/Services";
import { CashIcon } from "@heroicons/react/solid";
import Services from "../../components/Services";
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
      <Services />
    </div>
  );
};

export default PracticeAreas;
