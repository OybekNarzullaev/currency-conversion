import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listHistoryItem } from "../model";

// interface for type state
interface historyListState {
  loading: boolean;
  history: listHistoryItem[];
  error: string;
}

// initial state
const initialState: historyListState = {
  loading: false,
  history: [],
  error: "",
};

export const historyListSlice = createSlice({
  name: "historyList",
  initialState,
  reducers: {
    historyListFetching(state) {
      state.loading = true;
    },
    historyListSuccess(state, action: PayloadAction<listHistoryItem[]>) {
      state.loading = false;
      state.history = action.payload;
      state.error = "";
    },
    historyListError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default historyListSlice.reducer;
