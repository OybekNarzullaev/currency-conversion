import { addToHistory, getCurrencies, getHistory } from "../server/api";
import { onFinishFailed, onFinishSucces } from "../utils/helper";
import { createHistorySlice } from "./reducers/createHistorySlice";
import { listCurrencySlice } from "./reducers/currencyListSlice";
import { historyListSlice } from "./reducers/historyListSlice";
import { AppDispatch } from "./store";

export const listCurrencies = () => async (dispatch: AppDispatch) => {
  dispatch(listCurrencySlice.actions.listCurrencyFetching());
  try {
    const { data } = await getCurrencies();

    dispatch(listCurrencySlice.actions.listCurrencySuccess(data));
  } catch (error: any) {
    dispatch(listCurrencySlice.actions.listCurrencyError(error.message));
  }
};

export const historyConvert = () => async (dispatch: AppDispatch) => {
  dispatch(historyListSlice.actions.historyListFetching());
  try {
    const { data } = await getHistory();

    dispatch(historyListSlice.actions.historyListSuccess(data));
  } catch (error: any) {
    dispatch(historyListSlice.actions.historyListError(error.message));
  }
};

export const createHistory =
  (history: any) => async (dispatch: AppDispatch) => {
    dispatch(createHistorySlice.actions.createHistoryFetching());
    try {
      await addToHistory(history);
      onFinishSucces("Сохранено в истории");
      dispatch(historyConvert());
      dispatch(createHistorySlice.actions.createHistorySuccess);
    } catch (error: any) {
      dispatch(createHistorySlice.actions.createHistoryError(error.message));
      onFinishFailed(error.message);
    }
  };
