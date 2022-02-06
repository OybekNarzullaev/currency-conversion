import { addToHistory, getCurrencies, getHistory } from "../server/api";
import { onFinishFailed, onFinishSucces } from "../utils/helper";
import {
  CONVERT_HISTORY_FAIL,
  CONVERT_HISTORY_REQUEST,
  CONVERT_HISTORY_SUCCESS,
  CREATE_HISTORY_FAIL,
  CREATE_HISTORY_REQUEST,
  CREATE_HISTORY_SUCCESS,
  CURRENCY_LIST_FAIL,
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
} from "./constants";

export const listCurrencies = () => async (dispatch: any) => {
  dispatch({
    type: CURRENCY_LIST_REQUEST,
  });
  try {
    const { data } = await getCurrencies();

    dispatch({ type: CURRENCY_LIST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: CURRENCY_LIST_FAIL, payload: error.message });
  }
};

export const historyConvert = () => async (dispatch: any) => {
  dispatch({
    type: CONVERT_HISTORY_REQUEST,
  });
  try {
    const { data } = await getHistory();
    console.log(data);

    dispatch({ type: CONVERT_HISTORY_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: CONVERT_HISTORY_FAIL, payload: error.message });
  }
};

export const createHistory = (history: any) => async (dispatch: any) => {
  dispatch({
    type: CREATE_HISTORY_REQUEST,
  });
  try {
    const { data } = await addToHistory(history);
    onFinishSucces("Сохранено в истории");
    dispatch(historyConvert());
    dispatch({ type: CREATE_HISTORY_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: CREATE_HISTORY_FAIL, payload: error.message });
    onFinishFailed(error.message);
  }
};
