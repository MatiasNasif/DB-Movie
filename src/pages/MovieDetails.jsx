import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import styles from "./MovieDetails.module.css";
import { GrFavorite } from "react-icons/gr"
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, getFavorites, removeFavorite } from "../store/favorites";


const MovieDetails = (
  // { movies }
  ) => {
  // console.log(movies);
  const { movie_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();


  const favorites = useSelector((state => state.favorites))
  const user = useSelector((state => state.user))



  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=859094381e307b3a810be68bf946419d&language=en-US`
      )
      .then((data) => {
        setIsLoading(false);
        setMovie(data.data);
      })
      .catch((err) => console.log(err));
  }, [movie_id]);


  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) return null;

  const handleAddFavorite = () =>{
  //   axios
  //     .post(`http://localhost:5000/api/add/${userId}/${favoriteId}`, {
  //       userId: movie.params.userId,
  //           favoriteId: movie.params.movieId,
  //           favoriteTitle: movie.body.original_title,
  //           poster_path: movie.body.poster_path
  //     })
  //     .then(()=> console.log())
  };



  // const handleRemoveFavorite = (id) =>{
  //   dispatch(removeFavorite(id))
  //   .then(()=> dispatch(getFavorites()))
  // };


  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.MovieDetails}`}>
        <h2 className={styles.firstItem}>
          <strong>Title: </strong>
          {movie.title}
        </h2>
        {
          <p>
            <strong>Genres: </strong>
            {movie.genres
              .map((genre) => genre)
              .map((gen) => gen.name)
              .join(", ") + "."}
          </p>
        }
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
        <p>
          <strong>Rating: </strong>
          {movie.vote_average.toFixed(1)}
        </p>
        <div className="controls">
          <button type="button" className="btn btn-danger btn-sm">
            <GrFavorite onClick={() => handleAddFavorite(movie.id)}/>
          </button>
        </div>
      </div>  
    </div>
  );
};

export default MovieDetails;
