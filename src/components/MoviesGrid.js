import "../styles/MoviesGrid.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const url = "https://api.themoviedb.org/3";
const apiKey = "api_key=39d4d98fa1a50dcbd14000f9040d92a5";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);


  //trae de la api las peliculas y las setea en setMovies
  useEffect(() => {
    axios
      .get(`${url}/movie/popular?${apiKey}&language=en-US&page=1`)
      .then((res) => setMovies(res.data.results));
  }, []);


  return (
    <ul className="movie-grid-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
