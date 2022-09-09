import "../styles/MoviesGrid.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const url = "https://api.themoviedb.org/3";
const apiKey = "api_key=39d4d98fa1a50dcbd14000f9040d92a5";

const TvShowsGrid = () => {
    const [tvShows, setTvShows] = useState([]);
    console.log(tvShows)

    //trae de la api las series y las setea en setTvShows
  useEffect(() => {
    axios
      .get(`${url}/tv/popular?${apiKey}&language=en-US&page=1`)
      .then((res) => setTvShows(res.data.results));
  }, []);

  return (
    <ul className="movie-grid-container">
    {tvShows.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </ul>
  )
}

export default TvShowsGrid