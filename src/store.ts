import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as api from "./config";
import { moviesReducer } from "./features/movies/movies-slice";
import { bookmarkedReducer } from "./features/bookmarked/bookmarked-slice";
import { searchReducer } from "./features/search/search-slice";
import { authReducer } from "./features/auth/auth-slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  bookmarked: bookmarkedReducer,
  search: searchReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
