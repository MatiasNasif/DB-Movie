import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";
//import Search from "./Search";

const url = "https://api.themoviedb.org/3";
const apiKey = "api_key=39d4d98fa1a50dcbd14000f9040d92a5";

const SearchGrid = () => {
  const { value } = useParams();
  const [moviesResults, setMoviesResults] = useState([]);

  //trae las peliculas que coincidan con el path traidos del params
  useEffect(() => {
    axios
      .get(`${url}/search/movie?${apiKey}&query=${value}`)
      .then((res) => setMoviesResults(res.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      {/* <Search /> */}
      <ul>
        {moviesResults?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default SearchGrid;
