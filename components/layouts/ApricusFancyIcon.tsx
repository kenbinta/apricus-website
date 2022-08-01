import { ScaleIcon } from "@heroicons/react/outline";
import React from "react";

const ApricusFancyIcon = () => {
  return (
    <div className="flex items-center">
      <div style={{ height: .5 }} className="w-16  bg-amber-500  ml-1 mr-1 "></div>
      <ScaleIcon strokeWidth={1} className="w-6 h-6 text-amber-500" />
      <div style={{ height: .5 }} className="w-16  bg-amber-500  ml-1 mr-1 "></div>
    </div>
  );
};

export default ApricusFancyIcon;
