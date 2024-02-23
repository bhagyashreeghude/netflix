import {createSlice} from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        popularMovies:null,
        topratedMovies:null,
        upComingMovies:null,
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
            state.popularMovies = action.payload;
        },
        addTopratedMovies :(state,action)=>{
            state.topratedMovies = action.payload;
        },
        addUpComingMovies :(state,action)=>{
            state.upComingMovies = action.payload;
        },

    }
});
export const {addNowPlayingMovie, addTrailerVideo,addPopularMovies,addTopratedMovies,addUpComingMovies}= movieSlice.actions;
export default movieSlice.reducer;

