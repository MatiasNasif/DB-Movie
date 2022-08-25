import React, { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai';


const FavoritesDetails = ({movie}) => {

  return (
    <>
  
      <h3>
      {movie.original_title}
      </h3>
      <img
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
