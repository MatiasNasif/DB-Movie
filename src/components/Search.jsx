import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const Search = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchMovies(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=859094381e307b3a810be68bf946419d&query=${searchMovies}`
      )
      .then((res) => res.data.results)
      .then((movies) => setSearchResults(movies))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="d-flex pt-5" role="search" onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          value={searchMovies}
          className="form-control me-4"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div>
        {searchResults.map((movies, i) => (
          <Card key={i} movies={movies} />
        ))}
      </div>
    </div>
  );
};

export default Search;
