import { useEffect } from "react";
import { useDispatch} from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS} from "../utils/constant";
//Fetach data from tmdb api and update store


const usePopularMovies =()=>{

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const json =await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results));
          
      };
      
      useEffect (()=>{
        getPopularMovies();
      },[])
      // console.log(object);

}
export default usePopularMovies;


