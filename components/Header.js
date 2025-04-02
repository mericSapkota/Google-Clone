"use client";
import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const InputText = useRef(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = InputText.current.value;
    if (inputValue.trim()) {
      router.push(`/search?term=${inputValue}`); // Redirect to the search page with the input value
    }
  };

  const onkeydown = (e) => {
    if (e.key == "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200">
      <div className="flex items-center px-4">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png"
          width={120}
          height={1}
          alt="Google Logo"
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
        />
        <form className="flex flex-grow items-center m-5  mt-5 max-w-3xl shadow-lg border border-gray-200 rounded-full py-2 px-5">
          <input
            type="text"
            onKeyDown={onkeydown}
            ref={InputText}
            className="flex-grow outline-none "
            placeholder="Search"
          />
          <XMarkIcon
            className="h-6 text-gray-500  transition duration-150 hover:scale-125"
            onClick={() => {
              InputText.current.value = "";
            }}
          />
          <MicrophoneIcon className="h-5 hidden sm:block text-blue-500 border-l-1 border-gray-300 ps-4 transition duration-150 hover:scale-125" />
          <MagnifyingGlassIcon className="h-5 hidden sm:block ps-1 text-blue-500" />
        </form>
        <Avatar className="ml-auto" url="/8.jpg" />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
