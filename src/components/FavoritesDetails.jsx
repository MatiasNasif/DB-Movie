import React, { useState, useEffect } from "react";
import styles from "./FavoritesDetails.module.css";
import { AiFillDelete } from "react-icons/ai";

const FavoritesDetails = ({ movie, handleRemoveFavorites }) => {
  return (
    <>
      <h3 className={styles.movieTitle}>{movie.original_title}</h3>
      <img
        className={styles.movieImage}
        width={230}
        height={345}
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
      <button>
        <AiFillDelete onClick={() => handleRemoveFavorites(movie)} />
      </button>
    </>
  );
};

export default FavoritesDetails;
