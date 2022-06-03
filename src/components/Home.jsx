import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
// import Search from "./Search";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=859094381e307b3a810be68bf946419d&language=en-US&page=1"
      )
      .then((res) => res.data.results)
      .then((movies) => setMovies(movies))
      // .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        {
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                TMDB
              </a>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Films
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/search">
                      Search
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/register">
                      Register
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " href="/login">
                      Login
                    </a>
                  </li>
                  
                </ul>
                <ul className="nav navbar-nav navbar right">
                  <li><a href="/login"><span className="glyphicon glyphicon-log-in"/> Login </a></li>
                  
                  <li><a href="/logout"><span className="glyphicon glyphicon-user"/> Logout </a></li>


                </ul>
                {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form> */}
              </div>
            </div>
          </nav>
        }
      </div>
      <h3 className="pt-4">Películas populares</h3>
      {movies.map((movie, i) => (
        <Card key={i} movies={movie} />
      ))}
    </>
  );
};

export default Home;
