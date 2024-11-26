import api from "./axios";

const movieApi = {
  // 상영 중인 영화의 데이터 조회
  getNowPlayingMovies: async () => {
    const response = await api.get(
      `/movie/now_playing?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ko`
    );
    return response.data;
  },

  // 인기있는 영화의 데이터 조회
  getPopularMovies: async () => {
    const response = await api.get(
      `/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko`
    );
    return response.data;
  },

  // 최고 평점 영화의 데이터 조회
  getTopRatedMovies: async () => {
    const response = await api.get(
      `/movie/top_rated?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ko`
    );
    return response.data;
  },

  // 영화의 상세 정보 데이터 조회
  getMovieDetails: async (movieId) => {
    const response = await api.get(
      `/movie/${movieId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ko`
    );
    return response.data;
  },

  // 영화의 리뷰 데이터 조회
  getMovieReview: async (movieId) => {
    const response = await api.get(
      `/movie/${movieId}/reviews?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    );
    return response.data;
  },

  // 검색할 영화 데이터 조회
  getSearchMovie: async (queryPath) => {
    const response = await api.get(
      `/search/movie?query=${queryPath}&api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&language=ko`
    );
    return response.data;
  },
};

export default movieApi;
