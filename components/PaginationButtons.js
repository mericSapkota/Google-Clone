"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const PaginationButtons = () => {
  const searchParams = useSearchParams();
  const startIndex = Number(searchParams.get("start")) || "0";
  const term = searchParams.get("term") || "nothjing";
  console.log(startIndex, term); // Check if startIndex and term are passed correctly

  return (
    <div className="flex gap-48 max-w-xl  text-blue-700 mb-8 px-8">
      <Link className="flex items-center " href={`/search?term=${term}&start=${startIndex - 10}`}>
        <ChevronLeftIcon className="h-5" />
        Previous
      </Link>
      <Link className="flex items-center" href={`/search?term=${term}&start=${startIndex + 10}`}>
        <ChevronRightIcon className="h-5" />
        Forward
      </Link>
    </div>
  );
};

export default PaginationButtons;
