import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import PaginationButtons from "../../../components/PaginationButtons";
import SearchResults from "../../../components/SearchResults";
import Response from "../../../Response";

export const generateMetadata = ({ searchParams }) => {
  return {
    title: `${searchParams?.term || "Search"} - Google Search`,
    description: "Search page",
  };
};

export default async function Search({ searchParams }) {
  const term = searchParams?.term || "";
  const dummyData = false;
  const startIndex = searchParams?.start || "0";

  const results = dummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_GOOGLE_API_KEY}&cx=${process.env.NEXT_CSE_ID}&q=${term}&start=${startIndex}`,
        { cache: "no-store" } // No caching
      ).then((res) => res.json());

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="px-10 sm:px-[5%] md:pl-[10%] lg:pl-44 ">
        <SearchResults results={results} />
        <PaginationButtons />
      </div>
      <Footer />
    </>
  );
}
