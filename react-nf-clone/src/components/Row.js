import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // 모달 오픈 확인
  const [movieSelected, setMovieSelected] = useState({}); // 선택한 영화 호출

  const handleClick = (movie) => {
    console.log("tf0", modalOpen);
    setModalOpen(true);
    setMovieSelected(movie);
    console.log("movie", movie);
    console.log("tf1", modalOpen);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    // console.log("request", request);
    setMovies(request.data.results);
  };

  return (
    <section className="row">
      {/* 타이틀 */}
      <h2>{title}</h2>
      <div className="slider">
        {/* 화살표로 이동 */}
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
              // console.log(document.getElementById(id));
            }}
          >
            {"<"}
          </span>
        </div>
        {/* 포스터 나열 */}
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
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
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {/* 모달 */}
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
