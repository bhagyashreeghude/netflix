import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSearchSuggestions from './GptSearchSuggestions';
import { NETFLIX_BGIMG_URL } from '../utils/constant';
const GptSearch = () => {
  return (
    <>
    
      <div className="absolute -z-10">
        <img  alt="bg-img"  src={NETFLIX_BGIMG_URL}/>
      </div>
      <div >
        <GptSearchBar/>
        <GptSearchSuggestions/>
      </div>
      </>
  )
}

export default GptSearch;