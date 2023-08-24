import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../type/User";
import { Extra } from "../../type/Extra";
import { StatusType } from "../../type/Status";

type AuthInitialState = {
  user: User | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  user: null,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk<
  { token: string },
  User,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/register",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.post(api.REGISTER, data);
      return res.data;
    } catch (error) {
      return rejectWithValue("User with this email already exists");
    }
  }
);

export const loginUser = createAsyncThunk<
  User,
  User,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/login",
  async (dataUser, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.post(api.LOGIN, dataUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = data;
      localStorage.setItem("jwt", token);
      return data;
    } catch (error) {
      rejectWithValue("err");
    }
  }
);

export const checkAuth = createAsyncThunk<
  User,
  string,
  { extra: Extra; rejectWithValue: string }
>("@@user-isAuth", async (jwt, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.get(api.CHECK_TOKEN, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (err) {
    return rejectWithValue("Ошибка");
  }
});

const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("jwt");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "received";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      })
  },
});

export const { logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;