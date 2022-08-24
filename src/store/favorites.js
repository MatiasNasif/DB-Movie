import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const getFavorites = createAsyncThunk("GET_FAVORITES", () => {
    
    const userId = JSON.parse(localStorage.getItem("user")).id
    console.log(userId, "SOY USER ID DEL GET")
    return axios.get(`/api/favorites/${userId}`)
    
    .then(res => console.log(res.data))

});

export const addFavorite = createAsyncThunk("ADD_FAVORITE", (movieId) => {
    // console.log(movieId, "SOY MOVIE ID") //DATA ES EL ID DE LA PELI
    const userId= JSON.parse(localStorage.getItem("user")).id
    // console.log(userId, "SOY USER")
    return axios.post(`/api/favorites/add/${userId}/${movieId}`)
});


// export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (movie,user) => {
//     const addFav = await axios.post("http://localhost:5000/api/favoritos/add", {
//       original_title: movie.original_title,
//       code: movie.id,
//       poster_path: movie.poster_path,
//       overview: movie.overview,
//       userId: user.id,
//       vote_average: movie.vote_average,
    
//     });
//     return addFav.data;
//   });


export const removeFavorite = createAsyncThunk("REMOVE_FAVORITE", (data) => {
    const userId = JSON.parse(localStorage.getItem("user")).id
    return axios.delete(`api/favorites/${userId}/remove/${data}`)
})



const favoritesReducer = createReducer([], {
    [getFavorites.fulfilled]: (state, action) => action.payload
});


export default favoritesReducer;


