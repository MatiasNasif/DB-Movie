import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../store/favorites';
import FavoritesDetails from './FavoritesDetails';


export default function Favorites() {


  const userId = JSON.parse(localStorage.getItem("user")).id

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites())
  }, []);

  const movies = useSelector(state => state.favorites).data; 


  return (
    <div>

      {movies?.map(movie => (
      <FavoritesDetails key={movie.id} movie={movie} /> //el movie={movie} pasa por prop a FavoritesDetails
      ))}
    </div>
  )
}

