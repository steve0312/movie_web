import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/moviesApi";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    async function getMovieDetailData() {
      try {
        const data = await movieApi.getMovieDetails(movieId);
        console.log("data : ", data);

        const detailDatas = [
          { label: "포스터", value: data.poster_path },
          { label: "제목", value: data.title },
          {
            label: "등급",
            value: data.adult ? "청소년 관람불가" : "전체관람가",
          },
          { label: "장르", value: data.genres },
          { label: "개요", value: data.overview },
          { label: "개봉일", value: data.release_date },
          { label: "상영시간", value: `${data.runtime}분` },
          { label: "상영여부", value: data.status ? "예매 중" : "상영 종료" },
          { label: "평점", value: `${data.vote_average.toFixed(2)}` },
        ];

        setMovieDetail(detailDatas);
      } catch (error) {
        console.error("MovieDeatil fetching error : ", error);
      }
    }
    getMovieDetailData();
  }, []);

  return (
    <>
      <ul className="dotNone">
        {movieDetail.map((info, index) => (
          <li key={index}>
            <strong>{info.label === "포스터" ? "" : info.label}</strong>{" "}
            {info.label === "포스터" ? (
              <img
                src={`https://image.tmdb.org/t/p/w400${info.value}`}
                alt={info.label}
              />
            ) : info.label === "장르" ? (
              info.value.map((genre) => genre.name).join(" / ")
            ) : (
              info.value
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
