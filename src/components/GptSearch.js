import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { NETFLIX_BGIMG_URL } from "../utils/constant";
const GptSearch = () => {
  return (
    <>
      <div className=" fixed md:absolute -z-10">
        <img className="h-screen object-cover w-screen  " alt="bg-img" src={NETFLIX_BGIMG_URL} />
      </div>
      <div className=" md:pt-0">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
