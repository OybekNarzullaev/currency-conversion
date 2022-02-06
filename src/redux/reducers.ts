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

export const currencyListReducer = (
  state = { loading: true, currencies: [], error: "" },
  action: any
) => {
  switch (action.type) {
    case CURRENCY_LIST_REQUEST:
      return { loading: true };
    case CURRENCY_LIST_SUCCESS:
      return { loading: false, currencies: action.payload };
    case CURRENCY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const historyConvertReducer = (
  state = { loading: true, history: [], error: "" },
  action: any
) => {
  switch (action.type) {
    case CONVERT_HISTORY_REQUEST:
      return { loading: true };
    case CONVERT_HISTORY_SUCCESS:
      return { loading: false, history: action.payload };
    case CONVERT_HISTORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createHistoryReducer = (
  state = { loadingAdd: true, error: "", newHistory: {} },
  action: any
) => {
  switch (action.type) {
    case CREATE_HISTORY_REQUEST:
      return { loadingAdd: true };
    case CREATE_HISTORY_SUCCESS:
      return { loadingAdd: false, newHistory: action.payload };
    case CREATE_HISTORY_FAIL:
      return { loadingAdd: false, error: action.payload };
    default:
      return state;
  }
};
