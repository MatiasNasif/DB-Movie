import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { getFavorites } from "../store/favorites"
import "../styles/MoviesGrid.css"
import FavoritesCard from "./FavoritesCard"

const Favorites = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  //trae el estado de redux favorites donde estan las peliculas favoritas
  useEffect(()=>{
    dispatch(getFavorites());
    if (user.plan === "basico") navigate("/"); // ruta protegida para que no puedan acceder plan basico
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // la linea 14 evita el warning de dispatch por que no estan declarados dentro de useEffect

  
  //guarda en moviesFavorites las peliculas favoritas guardadas en el estado de redux
  const moviesFavorites = useSelector((state) => state.favorites).data

  return (
    <ul className="movie-grid-container">
      {
        moviesFavorites?.map((movieFavorite) => (
          <FavoritesCard key={movieFavorite.id} movieFavorite={movieFavorite}/>
        ))
      }
    </ul>
  )
}

export default Favorites