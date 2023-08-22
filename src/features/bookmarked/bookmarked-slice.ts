import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MoviesType } from "../../type/Movies";
import { StatusType } from "../../type/Status";

type AuthInitialState = {
  list: MoviesType[] | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  list: [],
  status: "idle",
  error: null,
};

const bookmarkedSlice = createSlice({
  name: "@@bookmarked",
  initialState,
  reducers: {
    addBookMark: (state, action) => {
      let newCart = [...state.list!];
      const found = state.list!.find(({ id }) => id === action.payload.id);

      if (found) {
        return;
      } else newCart.push({ ...action.payload, isBookmarked: true });

      state.list = newCart;
    },
  },
});

export const { addBookMark } = bookmarkedSlice.actions;
export const bookmarkedReducer = bookmarkedSlice.reducer;
