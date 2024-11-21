import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const savedMovieSlice = createSlice({
  name: "savedMovie",
  initialState,
  reducers: {
    addSavedMovie: (state, action) => {
      const { movieDetail, movieId } = action.payload;

      // 배열 데이터를 객체로 변환
      const movieData = movieDetail.reduce((acc, item) => {
        if (item.label === "포스터") acc.poster = item.value;
        else if (item.label === "제목") acc.title = item.value;

        return acc;
      }, {});

      // movieId 상태를 전역에서 관리할 수 있도록 추가
      movieData.movieId = movieId;

      // 이미 저장한 영화인지 확인
      const isExist = state.find((movie) => movie.movieId === movieId);
      if (!isExist) {
        // 기존에 저장한 영화가 아니라면 변환된 데이터를 Redux state에 추가
        state.push(movieData);
      }
    },
  },
});

export const { addSavedMovie } = savedMovieSlice.actions;
export default savedMovieSlice.reducer;
