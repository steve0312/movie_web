import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
});

export default instance;
