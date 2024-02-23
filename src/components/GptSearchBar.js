import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make an api call to GPT API and get movie result

    const gptQuery =
      "Act as aMovie Recommendation System and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies,comma seperated lile the example result given ahead. Example Result : Gadar ,Sholay ,Don ,Golmal , Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content:gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0].message?.content);
  };

  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form
          className=" w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 "
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
