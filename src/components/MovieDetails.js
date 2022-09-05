import "../styles/MovieDetails.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addFavorite, getFavorites } from "../store/favorites";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3";
  const apiKey = "api_key=39d4d98fa1a50dcbd14000f9040d92a5";
  let imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

  const [movieDetails, setMovieDetails] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  //trae los datos de un pelicula en particular y los setea en setMovieDetails
  useEffect(() => {
    axios
      .get(`${url}/movie/${id}?${apiKey}&language=en-US`)
      .then((res) => setMovieDetails(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // la linea 23 evita el warning de url, id, apikey por que no estan declarados dentro de useEffect

  //agrefa una pelicula a favoritos
  const handleFavorites = (movieDetails) => {
    dispatch(addFavorite(movieDetails)).then(() => dispatch(getFavorites()));
  };

  return (
    <div className="movie-details-container">
      <img
        className="img-path"
        src={`${imgUrl}${movieDetails.poster_path}`}
        alt={movieDetails.title}
      ></img>
      <div>
        { (user.admin === true) ? null : (
          <button
            onClick={() => {
              handleFavorites(movieDetails);
            }}
          >
            Add Favorites
          </button>
        )}
      </div>
      <h4 className="title-details">{movieDetails.title}</h4>
      <p>{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetails;
