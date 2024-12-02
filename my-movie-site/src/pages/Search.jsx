import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieApi from "../api/moviesApi";

export default function Search() {
  // 검색한 영화를 화면에 렌더링 시켜주기 위해 state 사용
  const [searchData, setSearchData] = useState([]);

  // 검색창에 입력한 데이터를 받아옴
  const { searchId } = useParams();

  // 공백이 있으면 query parameter에서 '+'로 표현되므로 동일한 형태로 format
  const formatInputData = searchId.replaceAll("%20", " ");

  useEffect(() => {
    async function getSearchMovieData() {
      try {
        // 검색한 영화에 대한 데이터를 가져옴
        const data = await movieApi.getSearchMovie(formatInputData);

        if (data.results.length === 0) {
          setSearchData(<div>검색한 영화가 존재하지 않습니다.</div>);

          return;
        }

        const movies = data.results.map(({ id, title, poster_path }) => (
          <li key={id} className="marginAuto">
            <Link
              to={`/movie/detail/${id}`}
              className="textWhite underLineNone textCenter"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                className="imgHeight"
              />

              <div>{title}</div>
            </Link>
          </li>
        ));

        // 검색된 영화의 데이터를 화면에 렌더링
        setSearchData(movies);
      } catch (error) {
        console.error("getSearchMovieData fetching error : ", error);
      }
    }
    getSearchMovieData();
  }, [formatInputData]);

  return (
    <div className="mainHeight">
      <h2 className="marginBottom">검색한 영화- {searchId}</h2>
      <ul className="flex flexEven dotNone">{searchData}</ul>
    </div>
  );
}
