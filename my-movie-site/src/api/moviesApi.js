import api from "./axios";

const movieApi = {
  getNowPlayingMovies: async () => {
    // const response = await api.get(
    //   "https://api.themoviedb.org/3/movie/now_playing?api_key=69fbb1ae0de2048ebb2bf5da9eb188a9"
    // );
    const response = await api.get(
      `/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko`
    );
    return response.data;
  },

  getPopularMovies: async () => {
    const response = await api.get(
      `/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko`
    );
    return response.data;
  },

  getTopRatedMovies: async () => {
    const response = await api.get(
      `/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko`
    );
    return response.data;
  },

  getMovieDetails: async (movieId) => {
    const response = await api.get(
      `/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ko`
    );
    return response.data;
  },

  getMovieReview: async (movieId) => {
    const response = await api.get(
      `/${movieId}/reviews?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    );
    return response.data;
  },
};

export default movieApi;
