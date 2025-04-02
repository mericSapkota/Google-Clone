import React from "react";

const SearchResults = ({ results }) => {
  console.log("Search Results:", results); // Check if results are passed correctly

  return (
    <>
      <div className="">
        <div className="text-gray-500 my-3 inline-flex">
          Number of results: {results.searchInformation.formattedTotalResults} (About
          {results.searchInformation.formattedSearchTime} seconds)
        </div>
        {results.items.map((item) => (
          <div key={item.link} className="max-w-xl mb-8">
            <div className="group">
              <a href={item.link} className=" text-blue-800 line-clamp-1">
                {item.link}
              </a>
              <a href={item.link} className=" line-clamp-1 text-lg font-semibold group-hover:underline">
                <h2>{item.title}</h2>
              </a>
            </div>
            <p className="text-sm line-clamp-2">{item.snippet}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
