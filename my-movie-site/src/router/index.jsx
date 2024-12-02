import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Main from "../pages/Main";
import MovieCategory from "../pages/MovieCategory";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";

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
        path: "/movie/detail/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "/movie/search/:searchId",
        element: <Search />,
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
