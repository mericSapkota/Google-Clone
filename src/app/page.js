"use client";
import Avatar from "../../components/Avatar";
import { Squares2X2Icon, MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useRef } from "react";

import { useRouter } from "next/navigation";

export default function Home() {
  const inputText = useRef(null);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputText.current.value;
    if (inputValue.trim()) {
      router.push(`/search?term=${inputValue}&start=0`); // Redirect to the search page with the input value
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between  h-screen">
      {/* Header */}
      <header className="flex w-full justify-between p-4">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <Squares2X2Icon className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
          <Avatar url="/8.jpg" />
        </div>
      </header>

      {/* Body */}
      <form className="flex  w-4/5  items-center flex-col mt ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png"
          height={100}
          width={300}
          alt="Google Logo"
        />
        <div className="flex items-center w-full mt-5 max-w-md  sm:max-w-lg lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg border border-gray-200 py-2 px-5 rounded-full">
          <MagnifyingGlassIcon className="h-6 mr-5 text-gray-500" />
          <input
            ref={inputText}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Type anything"
            className="flex-1 focus:outline-none"
          />

          <MicrophoneIcon className="h-6  text-gray-500" />
        </div>

        <div className="space-y-2 mt-4 flex flex-col items-center justify-center w-full sm:flex-row sm:space-x-4 sm:space-y-0 ">
          <button onClick={handleSubmit} className="btn">
            Google Search
          </button>
          <button className="btn ">I am Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
