import {
  EllipsisVerticalIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  NewspaperIcon,
  PhotoIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  const key = process.env.NEXT_GOOGLE_API_KEY;
  return (
    <div className="flex mt-1 w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-24 lg:pl-44 ">
      {/* left */}

      <div className="flex space-x-6">
        <HeaderOption Icon={MagnifyingGlassCircleIcon} title="All" selected />
        <HeaderOption Icon={PhotoIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Video" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Map" />
        <HeaderOption Icon={EllipsisVerticalIcon} title="More" />
      </div>
      {/* right */}
      <div className="flex space-x-6">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
