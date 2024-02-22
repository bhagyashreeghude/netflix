import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS} from "../utils/constant";
//Fetach data from tmdb api and update store


const useUpComingMovies =()=>{

    const dispatch = useDispatch();

    const getUpComingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json =await data.json();
        console.log(json.results);
        dispatch(addUpComingMovies(json.results));
          
      };
      
      useEffect (()=>{
        getUpComingMovies();
      },[])
      // console.log(object);

}
export default useUpComingMovies;

