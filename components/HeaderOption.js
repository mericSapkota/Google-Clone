import React from "react";

function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 hover:text-blue-500 cursor-pointer
      border-b-4 
  ${selected ? "border-blue-500 text-blue-500" : "border-transparent"}`}
    >
      <Icon className="h-6" />
      <p className="hidden sm:block">{title}</p>
    </div>
  );
}

export default HeaderOption;
