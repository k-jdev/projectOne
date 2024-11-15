import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../http";

// Асинхронный action для авторизации
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await $api.post("/login", { email, password });
      return response.data; // Возвращаем данные пользователя
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Асинхронный action для регистрации
export const register = createAsyncThunk(
  "auth/registration",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await $api.post("/registration", { email, password });
      return response.data; // Возвращаем данные нового пользователя
    } catch (error) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

// Создаем срез (slice) для управления состоянием авторизации
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Логика для login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Логика для register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
