import { createSlice } from "@reduxjs/toolkit";

// 저장된 영화 목록을 빈 배열로 초기화
const initialState = [];

const savedMovieSlice = createSlice({
  // 변수명
  name: "savedMovie",
  // 초기 값
  initialState,
  // setter
  reducers: {
    // 저장한 영화 추가
    addSavedMovie: (state, action) => {
      // dispatch로 넘겼던 데이터 추출
      const { movieDetail, movieId } = action.payload;

      // 배열 데이터를 객체로 변환
      const movieData = movieDetail.reduce((acc, item) => {
        if (item.label === "포스터") acc.poster = item.value;
        else if (item.label === "제목") acc.title = item.value;

        return acc;
      }, {});

      // movieId 추가
      movieData.movieId = movieId;

      // 이미 저장한 영화인지 확인해서 중복되지 않은 경우 상태에 추가
      const ExistedMovie = state.find((movie) => movie.movieId === movieId);
      if (!ExistedMovie) {
        state.push(movieData);
      }
    },

    // 저장한 영화 삭제
    removeSavedMovie: (state, action) => {
      const { movieId } = action.payload;

      // movieId가 일치하지 않는 영화들만 필터링하여 새로운 상태 반환(배열)
      return state.filter((movie) => movie.movieId !== movieId);
    },

    // 해당 영화를 저장된 상태로 전환
    saveMovie: (state, action) => {
      const { movieId } = action.payload;

      // 저장된 영화 중 movieId가 일치하는 영화 찾기
      const savedMovie = state.find((movie) => movie.movieId === movieId);
      // 일치하는 영화가 있으면 저장 상태를 true로 설정
      if (savedMovie) {
        savedMovie.isSaved = true;
      }
    },

    // 해당 영화를 저장되지 않은 상태로 전환
    unsaveMovie: (state, action) => {
      const { movieId } = action.payload;

      // 저장된 영화 중 movieId가 일치하는 영화찾기
      const savedMovie = state.find((movie) => movie.movieId === movieId);
      // 일치하는 영화가 없으면 저장 상태를 false로 설정
      if (savedMovie) {
        savedMovie.isSaved = false;
      }
    },
  },
});

export const { addSavedMovie, removeSavedMovie, saveMovie, unsaveMovie } =
  savedMovieSlice.actions;
export default savedMovieSlice.reducer;
