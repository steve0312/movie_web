import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieApi from "../api/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedMovie,
  removeSavedMovie,
  saveMovie,
  unsaveMovie,
} from "../store/slices/savedMovieSlice";

export default function MovieDetail() {
  // 영화 ID를 URL 파라미터에서 추출
  const { movieId } = useParams();

  // 영화 상세 정보와 리뷰 데이터를 관리하는 state
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieReview, setMovieReview] = useState([]);

  // 로그인 여부를 Redux 상태에서 가져옴
  const { isLoggedIn } = useSelector((state) => state.auth);

  // 저장된 영화 목록을 Redux 상태에서 가져옴
  const savedMovies = useSelector((state) => state.savedMovie);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 현재 영화가 저장된 상태인지 확인
  const isSaved = savedMovies.some(
    (movie) => movie.movieId === movieId && movie.isSaved
  );

  // 영화 상세 정보를 가져오는 함수
  useEffect(() => {
    async function getMovieDetailData() {
      try {
        // API 호출을 통해 영화 상세 데이터를 가져옴
        const data = await movieApi.getMovieDetails(movieId);

        // 가져온 데이터를 상세 정보 형식으로 가공
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
    // 영화 리뷰를 가져오는 함수
    async function getMovieReviewData() {
      try {
        // API 호출을 통해 리뷰 데이터를 가져옴
        const data = await movieApi.getMovieReview(movieId);

        // 리뷰 데이터를 리스트 형식으로 가공
        const reviews = data.results.map(({ id, author, content }) => (
          <li key={id} className="dotNone marginReview">
            <div>{`유저 : ${author}`}</div>
            <p>{`후기 : ${content}`}</p>
          </li>
        ));

        setMovieReview(reviews);
      } catch (error) {
        console.error("getMovieReviewData fetching error : ", error);
      }
    }

    getMovieDetailData();
    getMovieReviewData();
  }, [movieId]); // movieId가 변경될 때마다 실행

  // 영화 저장/삭제 버튼 클릭 시 호출되는 핸들러
  function handleSaveClick() {
    // 로그인 상태가 아닌 경우 로그인 페이지로 이동
    if (!isLoggedIn) {
      // 로그인 후 영화 상세 페이지로 돌아올 수 있도록 경로 전달
      navigate("/login", { state: { from: window.location.pathname } });
      return;
    }

    // 저장된 상태라면 삭제, 저장되지 않은 상태라면 저장
    if (isSaved) {
      dispatch(removeSavedMovie({ movieId }));
      dispatch(unsaveMovie({ movieId }));
    } else {
      dispatch(addSavedMovie({ movieDetail, movieId }));
      dispatch(saveMovie({ movieId }));
    }
  }

  return (
    <>
      {/* 영화 상세 정보 파트 */}
      <h2>상세 정보</h2>
      <div className="movieDetailContainer">
        <div className="moviePoster">
          {/* 영화 포스터 파트 */}
          {/* 포스터 정보만 필터링 */}
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

        {/* 영화 상세 정보 목록 */}
        <ul className="movieInfo paddingRight">
          {/* 포스터를 제외한 정보만 필터링 */}
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

      {/* 영화 저장/삭제 토글 버튼 */}
      <button onClick={handleSaveClick}>
        {isLoggedIn ? (isSaved ? "저장 ❤️" : "저장 🤍") : "저장 🤍"}
      </button>

      {/* 영화 리뷰 파트 */}
      <h2 className="marginReview">후기</h2>
      <ul className="paddingRight">{movieReview}</ul>
    </>
  );
}
