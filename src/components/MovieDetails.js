import "../styles/MovieDetails.css"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import iconFavorites from "../assets/iconFavorites.svg"
import { useDispatch } from "react-redux";
import { addFavorite, getFavorites } from "../store/favorites";

const MovieDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3";
  const apiKey = "api_key=39d4d98fa1a50dcbd14000f9040d92a5";
  let imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
  
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(()=> {
    axios
     .get(`${url}/movie/${id}?${apiKey}&language=en-US`)
     .then((res) => setMovieDetails(res.data))
  },[])
  const handleFavorites = (movieDetails) => {
    dispatch(addFavorite(movieDetails))
    .then(()=> dispatch(getFavorites()))
  }

  return (<div className="movie-details-container">
      <img className="img-path" src={`${imgUrl}${movieDetails.poster_path}`} alt={movieDetails.title}></img>
      <div>
      <button onClick={()=>{handleFavorites(movieDetails)}}>
        Add Favorites
        <img className="icon-favorites" src={iconFavorites} alt="icon-favorites"></img>
        </button>
        </div>
    <h4>{movieDetails.title}</h4>
    <p>{movieDetails.overview}</p>
</div>)
};

export default MovieDetails;
