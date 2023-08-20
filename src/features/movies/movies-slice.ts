import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MoviesType } from "../../type/Movies";
import { StatusType } from "../../type/Status";
import { Extra } from "../../type/Extra";

type AuthInitialState = {
  user: MoviesType | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  user: null,
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
      return res.data;
    } catch (err) {
      return rejectWithValue("У вас случилась ошибка");
    }
  }
);
