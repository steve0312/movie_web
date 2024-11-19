import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/moviesApi";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    async function getMovieDetailData() {
      try {
        const data = await movieApi.getMovieDetails(movieId);

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
        console.error("getMovieDetailData fetching error : ", error);
      }
    }
    async function getMovieReviewData() {
      try {
        const data = await movieApi.getMovieReview(movieId);
        const results = data.results;
        console.log("data : ", data);
        console.log("results : ", results);

        const reviews = results.map((review) => {
          const { id, author, content } = review;

          return (
            <li key={id} className="dotNone marginReview">
              <div>{`유저 : ${author}`}</div>
              <div>{`후기 : ${content}`}</div>
            </li>
          );
        });

        setMovieReview(reviews);
      } catch (error) {
        console.error("getMovieReviewData fetching error : ", error);
      }
    }

    getMovieDetailData();
    getMovieReviewData();
  }, [movieId]);

  return (
    <>
      <h2>상세 정보</h2>
      <ul className="dotNone">
        {movieDetail.map((info, index) => (
          <li key={index} className="marginBottom">
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
      <h2 className="marginTop">후기</h2>
      <ul>{movieReview}</ul>
    </>
  );
}
