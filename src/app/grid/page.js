import React from "react";
import Footer from "../../../components/Footer";

function page() {
  return (
    <>
      <footer className="divide-y-1 grid grid-flow-row-dense divide-gray-300 bg-gray-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex justify-center md:col-span-2 lg:col-start-2 lg:col-span-1">TOp text</div>
        <div className=" flex justify-center bg-blue-500   ">div</div>
        <bot className="flex justify-center md:justify-self-end">Bottom text</bot>
      </footer>
      <Footer />
    </>
  );
}

export default page;
