import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";

export default function Nav() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 상영 중인 영화 정보 취득
    const request = await axios.get(requests.fetchNowPlaying);
    // console.log(request.data);

    // 그 중 id 하나 무작위 고르기: 총 갯수 구한 뒤 랜덤 번호 뽑기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 상세 정보와 비디오 가져오기, 내부의 data 항목만 추출
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    console.log(movieDetail);
    setMovie(movieDetail);
  };

  //   텍스트가 n자 이상이면 생략
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        {/* 타이틀 */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* 버튼 */}
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">
            <div className="space">More Infomation</div>
          </button>
        </div>
        {/* 설명 */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 100)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
