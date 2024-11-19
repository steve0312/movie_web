import React, { useEffect, useState } from "react";
import axios from "axios";
import movieApi from "../api/moviesApi";
import { Link } from "react-router-dom";
import { fetchMovieData } from "../utils/movieListService";

export default function Main() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);

  useEffect(() => {
    // 현재 상영 중인 영화의 데이터를 조회
    fetchMovieData(movieApi.getNowPlayingMovies, setNowPlayingData);
    // 인기있는 영화의 데이터를 조회
    fetchMovieData(movieApi.getPopularMovies, setPopularData);
    // 순위별 영화의 데이터를 조회
    fetchMovieData(movieApi.getTopRatedMovies, setTopRatedData);
  }, []);

  return (
    <>
      <div>
        <h2>현재 상영 중인 영화</h2>
        <Link to="/nowPlayingMovies" className="underLineNone textBlack">
          더보기
        </Link>
        {/* 현재 상영 중인 영화를 일부만 보여줌 */}
        <ul className="flex dotNone paddingRight">
          {nowPlayingData.slice(0, 8)}
        </ul>
      </div>
      <div>
        {/* 인기있는 영화를 일부만 보여줌 */}
        <h2>인기있는 영화</h2>
        <Link to="/popularMovies" className="underLineNone textBlack">
          더보기
        </Link>
        <ul className="flex dotNone paddingRight">{popularData.slice(0, 8)}</ul>
      </div>
      <div>
        {/* 최고 평점 영화를 일부만 보여줌 */}
        <h2>최고 평점 영화</h2>
        <Link to="/topRatedMovies" className="underLineNone textBlack">
          더보기
        </Link>
        <ul className="flex dotNone paddingRight">
          {topRatedData.slice(0, 8)}
        </ul>
      </div>
    </>
  );
}
