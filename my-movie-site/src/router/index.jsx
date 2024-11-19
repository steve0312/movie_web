import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Main from "../pages/Main";
import NowPlayingList from "../pages/NowPlayingList";
import PopularList from "../pages/PopularList";
import TopRatedList from "../pages/TopRatedList";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/nowPlayingMovies",
        element: <NowPlayingList />,
      },
      {
        path: "/popularMovies",
        element: <PopularList />,
      },
      {
        path: "/topRatedMovies",
        element: <TopRatedList />,
      },
      {
        path: "/movieDetail/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
