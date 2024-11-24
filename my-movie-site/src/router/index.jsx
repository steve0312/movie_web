// 기존에 잘 동작하던 코드

// import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "../layouts/RootLayout";
// import Main from "../pages/Main";
// import NowPlayingList from "../pages/NowPlayingList";
// import PopularList from "../pages/PopularList";
// import TopRatedList from "../pages/TopRatedList";
// import MovieDetail from "../pages/MovieDetail";
// import Login from "../pages/Login";
// import MyPage from "../pages/MyPage";
// import NotFound from "../pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <Main />,
//       },
//       {
//         path: "/nowPlayingMovies",
//         element: <NowPlayingList />,
//       },
//       {
//         path: "/popularMovies",
//         element: <PopularList />,
//       },
//       {
//         path: "/topRatedMovies",
//         element: <TopRatedList />,
//       },
//       {
//         path: "/movieDetail/:movieId",
//         element: <MovieDetail />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/myPage",
//         element: <MyPage />,
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Main from "../pages/Main";
import MovieCategory from "../pages/MovieCategory";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/movie/:category",
        element: <MovieCategory />,
      },
      {
        path: "/movieDetail/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/myPage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
