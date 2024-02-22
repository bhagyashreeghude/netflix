import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addTopratedMovies } from "../utils/movieSlice";
import { API_OPTIONS} from "../utils/constant";
//Fetach data from tmdb api and update store


const useTopratedMovies =()=>{

    const dispatch = useDispatch();

    const getTopratedMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
          API_OPTIONS
        );
        const json =await data.json();
        // console.log(json.results);
        dispatch(addTopratedMovies(json.results));
          
      };
      
      useEffect (()=>{
        getTopratedMovies();
      },[])
      // console.log(object);

}
export default useTopratedMovies;


