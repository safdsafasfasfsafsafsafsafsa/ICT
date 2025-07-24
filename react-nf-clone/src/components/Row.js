import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./Row.css";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log("request", request);
    setMovies(request.data.results);
  };

  return (
    <section className="row">
      {/* 타이틀 */}
      <h2>{title}</h2>
      <div className="slider">
        {/* 화살표로 이동 */}
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
        {/* 포스터 나열 */}
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              loading="lazy"
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  );
}
