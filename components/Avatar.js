import Image from "next/image";
import React from "react";

function Avatar({ url, className }) {
  return (
    <Image
      width={40}
      height={10}
      loading="lazy"
      src={url}
      alt="profile-image"
      className={` rounded-full  transform transition duration-250 hover:scale-110 ${className} `}
    />
  );
}

export default Avatar;
