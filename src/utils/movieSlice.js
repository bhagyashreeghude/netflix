import {createSlice} from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        trailerVideo :null
    },
    reducers:{
        addNowPlayingMovie :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo =action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.PopularMovies = action.payload;
        },
        addTopratedMovies :(state,action)=>{
            state.TopratedMovies = action.payload;
        },
        addUpComingMovies :(state,action)=>{
            state.UpComingMovies = action.payload;
        },

    }
});
export const {addNowPlayingMovie, addTrailerVideo,addPopularMovies,addTopratedMovies,addUpComingMovies}= movieSlice.actions;
export default movieSlice.reducer;

