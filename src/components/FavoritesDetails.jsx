import React, { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import styles from "./FavoritesDetails.module.css"


const FavoritesDetails = ({movie}) => {

  return (
    <>
      {/* {movie.poster_path && (
        <li className={styles.movieCard}> */}


 <h3>
      {movie.original_title}
      </h3>
      <img 
      className={styles.movieImage}
      width={230}
      height={345}
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        alt={movie.title}
      />
      <button>
      <AiFillDelete />
      </button>

        
        
     

 
    
    
    </>
  );
};

export default FavoritesDetails;
