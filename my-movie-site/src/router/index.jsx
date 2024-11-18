import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Main from "../pages/Main";
import NowPlayingList from "../pages/NowPlayingList";
import PopularList from "../pages/PopularList";
import TopRatedList from "../pages/TopRatedList";

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
    ],
  },
]);

export default router;
