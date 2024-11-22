import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import savedMovieReducer from "./slices/savedMovieSlice";

// persist 설정
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "savedMovie"],
};

// 리듀서를 병합
const rootReducer = combineReducers({
  auth: authReducer,
  savedMovie: savedMovieReducer,
});

// 영속화 처리된 리듀서 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 스토어 생성
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
