import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import savedMovieRedeucer from "./slices/savedMovieSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    savedMovie: savedMovieRedeucer,
  },
});

export default store;
