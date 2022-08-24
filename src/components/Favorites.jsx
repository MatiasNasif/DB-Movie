import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../store/favorites';



export default function Favorites() {

    const user = useSelector(state => state.user)
    console.log(user)
    

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    console.log(favorites, "FAVORITES");



  return (
    <div>
    </div>
  )
}

