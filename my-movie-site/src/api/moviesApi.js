import api from "./axios";

const movieApi = {
  getNowPlayingMovies: async () => {
    // const response = await api.get(
    //   "https://api.themoviedb.org/3/movie/now_playing?api_key=69fbb1ae0de2048ebb2bf5da9eb188a9"
    // );
    const response = await api.get(
      `/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    );
    return response.data;
  },
};

export default movieApi;
