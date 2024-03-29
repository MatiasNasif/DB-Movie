import "../styles/FavoritesCard.css"
import { useDispatch } from "react-redux";
import { getFavorites, removeFavorite} from "../store/favorites";

const FavoritesCard = ({ movieFavorite }) => {

  let imgUrl = "https://image.tmdb.org/t/p/w300"; // path para buscar imagenes de la api

  const dispatch = useDispatch();

  //remueve una pelicula de favoritos
  const handleRemove = (movieFavorite) => {
    dispatch(removeFavorite(movieFavorite))
    .then(() =>  dispatch(getFavorites()));
  }


  return (
    <div className="favorite-card-container"> 
      <img src={`${imgUrl}${movieFavorite.poster_path}`} alt={movieFavorite.original_title}></img>
      <h4>{movieFavorite.original_title}</h4>
      <div>
      <button onClick={()=>{handleRemove(movieFavorite)}}>
        Remove
        </button>
        </div>
    </div>
  );
};

export default FavoritesCard;
