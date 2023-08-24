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
    removeBookMark: (state, action) => {
      const removeItem = state.list!.filter(
        (item) => item.id !== action.payload
      );
      state.list = removeItem;
    },
  },
});

export const { addBookMark, removeBookMark } = bookmarkedSlice.actions;
export const bookmarkedReducer = bookmarkedSlice.reducer;
