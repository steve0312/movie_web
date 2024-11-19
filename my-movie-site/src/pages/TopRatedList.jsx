import React, { useEffect, useState } from "react";
import movieApi from "../api/moviesApi";
import { fetchMovieData } from "../utils/movieListService";

export default function TopRatedList() {
  const [topRatedData, setTopRatedData] = useState([]);

  useEffect(() => {
    fetchMovieData(movieApi.getTopRatedMovies, setTopRatedData);
  }, []);

  return (
    <>
      <div>
        <h2>최고 평점 영화- 전체</h2>
        <ul className="flex dotNone">{topRatedData}</ul>
      </div>
    </>
  );
}
