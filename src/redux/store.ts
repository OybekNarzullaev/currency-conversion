import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createHistoryReducer from "./reducers/createHistorySlice";
import currencyListReducer from "./reducers/currencyListSlice";
import historyConvertReducer from "./reducers/historyListSlice";

const rootReducer = combineReducers({
  currenciesList: currencyListReducer,
  convertHistory: historyConvertReducer,
  addToHistory: createHistoryReducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
