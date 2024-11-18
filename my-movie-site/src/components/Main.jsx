import React, { useEffect, useState } from "react";
import axios from "axios";
import movieApi from "../api/moviesApi";

export default function Main() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    async function getMovieData() {
      // 현재 상영 중인 영화의 데이터를 조회
      const data = await movieApi.getNowPlayingMovies();
      const results = data.results;
      // console.log("data : ", data);
      // console.log("results : ", results);

      const nowPlayingMovies = results.map((result) => {
        const { id, title } = result;

        return <li key={id}>{title}</li>;
      });

      setMovieData(nowPlayingMovies);
    }
    getMovieData();
  }, []);

  return (
    <>
      <h2>현재 상영 중인 영화</h2>
      {/* 현재 상영 중인 영화를 5개만 보여줌 */}
      <ul>{movieData.slice(0, 5)}</ul>
    </>
  );
}
