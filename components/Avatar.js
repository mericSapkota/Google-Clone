import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-image"
      className={` rounded-full h-10 transform transition duration-250 hover:scale-110 ${className} `}
    />
  );
}

export default Avatar;
