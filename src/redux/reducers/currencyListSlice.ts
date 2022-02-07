import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listCurrencyItem } from "../model";

interface listCurrencyState {
  loading: boolean;
  currencies: listCurrencyItem[];
  error: string;
}

const initialState: listCurrencyState = {
  loading: false,
  currencies: [],
  error: "",
};

export const listCurrencySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    listCurrencyFetching(state) {
      state.loading = true;
    },
    listCurrencySuccess(state, action: PayloadAction<listCurrencyItem[]>) {
      state.loading = false;
      state.currencies = action.payload;
      state.error = "";
    },
    listCurrencyError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default listCurrencySlice.reducer;
