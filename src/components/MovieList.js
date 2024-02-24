import React from "react";
import MovieCard from "./MovieCard";
// import { nowPlayingMovies} from "../utils/movieSlice";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  
  return (
    
    <div className="p-2  text-white ">
      <h1 className="text-lg md:text-3xl p-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar text-white">
        <div className="flex">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
