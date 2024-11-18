import React, { useEffect, useState } from "react";
import axios from "axios";
import movieApi from "../api/moviesApi";
import { useNavigate } from "react-router-dom";
import { fetchMovieData } from "../utils/movieService";

export default function Main() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);

  const navigate = useNavigate();

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
        <button
          onClick={() => {
            navigate("/nowPlayingMovies");
          }}
        >
          더보기
        </button>
        {/* 현재 상영 중인 영화를 5개만 보여줌 */}
        <ul className="flex dotNone">{nowPlayingData.slice(0, 7)}</ul>
      </div>
      <div>
        <h2>인기있는 영화</h2>
        <button
          onClick={() => {
            navigate("/popularMovies");
          }}
        >
          더보기
        </button>
        <ul className="flex dotNone">{popularData.slice(0, 7)}</ul>
      </div>
      <div>
        <h2>순위별 영화</h2>
        <button
          onClick={() => {
            navigate("/topRatedMovies");
          }}
        >
          더보기
        </button>
        <ul className="flex dotNone">{topRatedData.slice(0, 7)}</ul>
      </div>
    </>
  );
}
