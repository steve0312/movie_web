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
        path: "/movies/nowPlaying",
        element: <NowPlayingList />,
      },
      {
        path: "/movies/popular",
        element: <PopularList />,
      },
      {
        path: "/movies/topRated",
        element: <TopRatedList />,
      },
    ],
  },
]);

export default router;
