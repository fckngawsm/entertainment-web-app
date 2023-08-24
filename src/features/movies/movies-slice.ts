import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MoviesType } from "../../type/Movies";
import { StatusType } from "../../type/Status";
import { Extra } from "../../type/Extra";

type AuthInitialState = {
  list: MoviesType[] | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  list: null,
  status: "idle",
  error: null,
};

export const loadMovies = createAsyncThunk<
  { data: MoviesType[] },
  undefined,
  { extra: Extra; rejectWithValue: string }
>(
  "@@movies-loading",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.get(api.ALL_MOVIES);
      return res;
    } catch (err) {
      return rejectWithValue("У вас случилась ошибка");
    }
  }
);

const moviesSlice = createSlice({
  name: "@@movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadMovies.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
        console.log(action.payload);
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
