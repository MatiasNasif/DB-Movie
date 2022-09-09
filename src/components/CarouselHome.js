import React, { useEffect, useState } from "react";
import axios from "axios";
//import CarouselCard from "./CarouselCard";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const url = "https://api.themoviedb.org/3";
const apiKey = "api_key=39d4d98fa1a50dcbd14000f9040d92a5";

const CarouselHome = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies.slice(6, 11);

  const imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  const [loading, setLoading] = useState(true);

  //trae de la api las peliculas y las setea en setMovies
  useEffect(() => {
    axios
      .get(`${url}/movie/popular?${apiKey}&language=en-US&page=1`)
      .then((res) => setMovies(res.data.results))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div>
      {
        <Carousel>
          <Carousel.Item>
            <Link to={`movie/${movie[0].id}`}>
              <img
                className="d-block w-100"
                src={imgUrl + movie[0].poster_path}
                alt={movie[0].id}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`movie/${movie[1].id}`}>
              <img
                className="d-block w-100"
                src={imgUrl + movie[1].poster_path}
                alt={movie[1].id}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`movie/${movie[2].id}`}>
              <img
                className="d-block w-100"
                src={imgUrl + movie[2].poster_path}
                alt={movie[2].id}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`movie/${movie[3].id}`}>
              <img
                className="d-block w-100"
                src={imgUrl + movie[3].poster_path}
                alt={movie[3].id}
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`movie/${movie[4].id}`}>
              <img
                className="d-block w-100"
                src={imgUrl + movie[4].poster_path}
                alt={movie[4].id}
              />
            </Link>
          </Carousel.Item>
        </Carousel>
      }
    </div>
  );
};

export default CarouselHome;
