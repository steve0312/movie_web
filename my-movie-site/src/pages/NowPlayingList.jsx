import React, { useEffect, useState } from "react";
import movieApi from "../api/moviesApi";
import { fetchMovieData } from "../utils/movieService";

export default function NowPlayingList() {
  const [nowPlayingData, setNowPlayingData] = useState([]);

  useEffect(() => {
    fetchMovieData(movieApi.getNowPlayingMovies, setNowPlayingData);
  }, []);

  console.log("nowPlayingData : ", nowPlayingData);

  return (
    <>
      <div>
        <h2>현재 상영 중인 영화</h2>
        <ul className="flex dotNone">{nowPlayingData}</ul>
      </div>
    </>
  );
}
