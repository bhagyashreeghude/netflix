import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from './GptSearchSuggestions';
import { NETFLIX_BGIMG_URL } from '../utils/constant';
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className=""
          src={NETFLIX_BGIMG_URL}
          alt="bg-img"
        />
      </div>
    <GptSearchBar/>
    <GptSearchSuggestions/>
    </div>
  )
}

export default GptSearch;