import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyPage() {
  // 저장된 영화 데이터의 포스터와 제목, id 정보를 store에서 받아오기 위해 설정
  const savedMovies = useSelector((state) => state.savedMovie);

  return (
    <>
      <h2>저장한 영화</h2>
      <ul className="dotNone flexEven">
        {/* 마이페이지를 클릭했을 때 저장한 영화가 없으면 저장에 대한 안내를 하고, 저장한 영화가 있으면 포스터와 제목을 표시  */}
        {savedMovies.length === 0 ? (
          <div>
            영화 상세 페이지에서 저장 버튼을 누르면 마이페이지에서 확인하실 수
            있습니다{" :) "}
          </div>
        ) : (
          savedMovies.map((savedMovie) => {
            const { poster, title, movieId } = savedMovie;

            return (
              <li key={movieId}>
                <Link to={`/movieDetail/${movieId}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${poster}`}
                    className="imgHeight"
                  />
                  <div>{title}</div>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
