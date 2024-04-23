import React from "react";
import lang from "../utils/languageConstants";
import { useSelector,useDispatch } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS, API_options } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch =useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //  search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    //make an api call to GPT API and get movie result

    const gptQuery =
      "Act as aMovie Recommendation System and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies,comma seperated lile the example result given ahead. Example Result : Gadar ,Sholay ,Don ,Golmal ,Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(addGptMovieResults({movieNames : gptMovies , movieResults : tmdbResults}));
  };

  return (
    <div>
      <div className="pt-[50%] cursor-pointer md:pt-[10%] flex justify-center">
        <form
          className="grid-cols-4 md:justify-center w-1/2 bg-black grid md:grid-cols-12 "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="md:p-4 md:m-2 md:col-span-9 w-auto rounded-lg  md:justify-center  col-span-3"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="py-2 sm:m-2 sm:px-3  px-11 md:px-4 md:m-4 justify-center bg-red-700 text-white rounded-lg md:col-span-3 col-span-1   
            "
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
