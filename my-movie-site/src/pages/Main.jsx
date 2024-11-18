import React, { useEffect, useState } from "react";
import axios from "axios";
import movieApi from "../api/moviesApi";

export default function Main() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);

  useEffect(() => {
    async function getNowPlayingMovieData() {
      // 현재 상영 중인 영화의 데이터를 조회
      const data = await movieApi.getNowPlayingMovies();
      const results = data.results;

      const nowPlayingMovies = results.map((result) => {
        const { id, title, poster_path } = result;

        return (
          <li key={id} className="marginMovie">
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
            <div>{title}</div>
          </li>
        );
      });

      setNowPlayingData(nowPlayingMovies);
    }

    async function getPopularMovieData() {
      // 인기있는 영화의 데이터를 조회
      const data = await movieApi.getPopularMovies();
      const results = data.results;

      const popularMovies = results.map((result) => {
        const { id, title, poster_path } = result;

        return (
          <li key={id} className="marginMovie">
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
            <div>{title}</div>
          </li>
        );
      });

      setPopularData(popularMovies);
    }

    async function getTopRatedMovieData() {
      // 순위별 영화의 데이터를 조회
      const data = await movieApi.getTopRatedMovies();
      const results = data.results;

      const topRatedMovies = results.map((result) => {
        const { id, title, poster_path } = result;

        return (
          <li key={id} className="marginMovie">
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
            <div>{title}</div>
          </li>
        );
      });

      setTopRatedData(topRatedMovies);
    }
    getNowPlayingMovieData();
    getPopularMovieData();
    getTopRatedMovieData();
  }, []);

  return (
    <>
      <div>
        <h2>현재 상영 중인 영화</h2>
        <button>더보기</button>
        {/* 현재 상영 중인 영화를 5개만 보여줌 */}
        <ul className="flex dotNone">{nowPlayingData.slice(0, 7)}</ul>
      </div>
      <div>
        <h2>인기있는 영화</h2>
        <button>더보기</button>
        <ul className="flex dotNone">{popularData.slice(0, 7)}</ul>
      </div>
      <div>
        <h2>순위별 영화</h2>
        <button>더보기</button>
        <ul className="flex dotNone">{topRatedData.slice(0, 7)}</ul>
      </div>
    </>
  );
}
