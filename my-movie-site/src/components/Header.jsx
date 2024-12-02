import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/authSlice";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 폼 제출 시 입력 값을 URL로 전달
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.search.value; // 입력값 가져오기

    navigate("/movie/search", { state: { search: `${query}` } }); // URL로 값 전달
    // 입력한 필드 값을 초기화
    e.target.reset();
  }

  return (
    <>
      <nav className="header">
        <h1>
          <Link to="/" className="textRed underLineNone logoFont">
            내플릭스
          </Link>
        </h1>
        {/* 상영 중인 영화- 전체 nav */}
        <Link
          to="/movie/nowPlaying"
          state={{ data: "현재 상영 중인 영화- 전체" }}
          className="contentCenter underLineNone textWhite nowPlayingBetween"
        >
          상영 중
        </Link>
        {/* 인기있는 영화- 전체 nav */}
        <Link
          to="/movie/popular"
          state={{ data: "인기있는 영화- 전체" }}
          className="contentCenter underLineNone textWhite popularBetween"
        >
          인기
        </Link>
        {/* 최고 평점 영화- 전체 nav */}
        <Link
          to="/movie/topRated"
          state={{ data: "최고 평점 영화- 전체" }}
          className="contentCenter underLineNone textWhite topRatedBetween"
        >
          최고 평점
        </Link>
        {/* 영화 검색창 */}
        <form onSubmit={handleSubmit} className="searchBetween">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="검색할 영화를 입력"
          />
        </form>
        {isLoggedIn ? (
          <div className="logoutBetween">
            <Link
              to="/myPage"
              className="contentCenter underLineNone textWhite"
            >
              마이페이지
            </Link>
            <Link
              to="/"
              onClick={() => {
                dispatch(logout());
              }}
              className="contentCenter underLineNone textWhite marginLeft"
            >
              로그아웃
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="contentCenter underLineNone textWhite loginBetween"
          >
            로그인
          </Link>
        )}
      </nav>
    </>
  );
}
