import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createHistoryState {
  loadingAdd: boolean;
  success: boolean;
  error: string;
}

const initialState: createHistoryState = {
  loadingAdd: false,
  success: false,
  error: "",
};

export const createHistorySlice = createSlice({
  name: "addHistory",
  initialState,
  reducers: {
    createHistoryFetching(state) {
      state.loadingAdd = true;
    },
    createHistorySuccess(state) {
      state.success = true;
      state.loadingAdd = false;
      state.error = "";
    },
    createHistoryError(state, action: PayloadAction<string>) {
      state.loadingAdd = false;
      state.error = action.payload;
    },
  },
});

export default createHistorySlice.reducer;
