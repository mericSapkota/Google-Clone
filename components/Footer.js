import { GlobeAltIcon } from "@heroicons/react/24/solid";
import React from "react";

function Footer() {
  return (
    <div className="w-full text-sm  divide-y-1 divide-gray-300 bg-gray-100 text-gray-600">
      <div className="px-8 py-3">Nepal</div>
      <div className="px-8 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense">
        <div className=" flex justify-center items-center text-sm md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeAltIcon className="h-5 mr-1 text-green-700" /> Carbon Neutral since 2007
        </div>
        <div className="flex justify-center items-center  md:justify-self-start space-x-8 ">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center items-center space-x-8  md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
