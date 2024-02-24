import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="mt-0 md:-mt-60 relative z-20 md:pl-4 opacity-50">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
          <MovieList title={"Top-Rated"} movies={movies.topratedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcomming"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
