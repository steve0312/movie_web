// import React, { useEffect, useState } from "react";
// import movieApi from "../api/moviesApi";
// import { fetchMovieData } from "../utils/movieListService";
// import { useParams } from "react-router-dom";

// export default function MovieCategory(props) {
//   const { category } = useParams();
//   console.log("category : ", category);
//   console.log("props : ", props);

//   const [movieData, setMovieData] = useState([]);

//   useEffect(() => {
//     // 카테고리에 맞는 영화의 API를 호출
//     switch (category) {
//       case "nowPlaying":
//         fetchMovieData(movieApi.getNowPlayingMovies, setMovieData);
//         break;
//       case "popular":
//         fetchMovieData(movieApi.getPopularMovies, setMovieData);
//         break;
//       case "topRated":
//         fetchMovieData(movieApi.getTopRatedMovies, setMovieData);
//     }
//   }, [category]);

//   return (
//     <div>
//       <h2>{category} 영화</h2>
//       <ul className="flex dotNone">{movieData}</ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import movieApi from "../api/moviesApi";
import { fetchMovieData } from "../utils/movieListService";
import { useLocation, useParams } from "react-router-dom";

export default function MovieCategory() {
  const { category } = useParams();

  const location = useLocation();
  const categoryName = location.state.data;

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    // 카테고리에 맞는 영화의 API를 호출
    switch (category) {
      case "nowPlaying":
        fetchMovieData(movieApi.getNowPlayingMovies, setMovieData);
        break;
      case "popular":
        fetchMovieData(movieApi.getPopularMovies, setMovieData);
        break;
      case "topRated":
        fetchMovieData(movieApi.getTopRatedMovies, setMovieData);
    }
  }, [category]);

  return (
    <div>
      <h2>{categoryName}</h2>
      <ul className="flex dotNone">{movieData}</ul>
    </div>
  );
}
