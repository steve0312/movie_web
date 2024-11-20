import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import movieApi from "../api/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import { addSavedMovie } from "../store/slices/savedMovieSlice";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieReview, setMovieReview] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          { label: "상영여부", value: data.status ? "상영 중" : "상영 종료" },
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

        const reviews = results.map((review) => {
          const { id, author, content } = review;

          return (
            <li key={id} className="dotNone marginReview">
              <div>{`유저 : ${author}`}</div>
              <p>{`후기 : ${content}`}</p>
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
      <div className="movieDetailContainer">
        <div className="moviePoster">
          {movieDetail
            .filter((info) => info.label === "포스터")
            .map((info, index) => (
              <img
                key={index}
                src={`https://image.tmdb.org/t/p/w200${info.value}`}
                className="imgHeight"
                alt={info.label}
              />
            ))}
        </div>
        <ul className="movieInfo paddingRight">
          {movieDetail
            .filter((info) => info.label !== "포스터")
            .map((info, index) => (
              <li key={index}>
                <strong>{info.label}</strong>{" "}
                {info.label === "장르"
                  ? info.value.map((genre) => genre.name).join(" / ")
                  : info.value}
              </li>
            ))}
        </ul>
      </div>

      {/* 저장 버튼을 클릭했을 때 로그인 상태이면 마이페이지에 저장하고 로그아웃 상태이면 로그인을 진행하도록 로그인 페이지로 이동 */}
      <button
        onClick={() => {
          isLoggedIn
            ? dispatch(addSavedMovie({ movieDetail, movieId }))
            : navigate("/login");
        }}
      >
        저장
      </button>
      <h2 className="marginReview">후기</h2>
      <ul className="paddingRight">{movieReview}</ul>
    </>
  );
}
