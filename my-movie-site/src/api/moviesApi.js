import api from "./axios";

const movieApi = {
  getNowPlayingMovies: async () => {
    const response = await api.get(`/now_playing`);
  },
};
