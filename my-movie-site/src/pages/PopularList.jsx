import React, { useEffect, useState } from "react";
import movieApi from "../api/moviesApi";
import { fetchMovieData } from "../utils/movieListService";

export default function PopularList() {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    fetchMovieData(movieApi.getPopularMovies, setPopularData);
  }, []);

  return (
    <>
      <div>
        <h2>인기있는 영화- 전체</h2>
        <ul className="flex dotNone">{popularData}</ul>
      </div>
    </>
  );
}
