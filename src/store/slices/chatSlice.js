import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [], // Список сообщений
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload); // Добавление нового сообщения
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
