import React from "react";
import "./MovieModal.css";
// import axios from "../../api/axios";

export default function MovieModal(
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen
) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  console.log("bdp", backdrop_path);
  console.log("tf2", setModalOpen);

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          {/* 창 닫기 */}
          <span className="modal-close" onClick={() => setModalOpen(false)}>
            X
          </span>
          <img
            className="modal__poster-img"
            src={`${BASE_URL}${backdrop_path}`}
            alt="modal__poster-img"
          />
          <div className="modal__content">
            <div className="modal__details">
              <span className="modal__user_perc">100% for you</span>
              {release_date ? release_date : first_air_date}
              <h2 className="modal__title">{title ? title : name}</h2>
              <p className="modal__overview">평점: {vote_average}</p>
              <p className="modal__overview"> {overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
