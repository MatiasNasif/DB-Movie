import { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/Search.css";

const Search = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const navigate = useNavigate();

  //toma los datos del input y los setea en setSearchMovies
  const handleSearch = (e) => {
    setSearchMovies(e.target.value);
  };

  //envia los datos y completa el path para buscar peliculas con nombre similar
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchMovies}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="search"
          onChange={handleSearch}
          value={searchMovies}
        />
      </form>
    </div>
  );
};

export default Search;
