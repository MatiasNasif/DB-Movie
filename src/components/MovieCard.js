import "../styles/MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  let imgUrl = "https://image.tmdb.org/t/p/w300"; // path para buscar imagenes de la api

  return (
    <div className="movie-card-container">
      <Link to={`/movie/${movie.id}`}>
        <img src={`${imgUrl}${movie.poster_path}`} alt={movie.original_title}></img>
      </Link>
      <h4>{movie.original_title}</h4>
    </div>
  );
};

export default MovieCard;
