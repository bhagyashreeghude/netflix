import React from "react";
import { IMG_CDN_URL } from "../utils/constant";


const MovieCard = ({ posterPath }) => {



  return (
    <div className="rounded-2xl flex pr-4 hover:scale-x-150 transition-duration-500 cursor-pointer object-cover h-44 w-36" >
      <img className="rounded-xl"
      alt="Movie_card" src={IMG_CDN_URL + posterPath} />

    
    </div>
  );
};

export default MovieCard;
