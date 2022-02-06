import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  createHistoryReducer,
  currencyListReducer,
  historyConvertReducer,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState: object = {
  currenciesList: [],
};

const rootReducer = combineReducers({
  currenciesList: currencyListReducer,
  convertHistory: historyConvertReducer,
  addToHistory: createHistoryReducer,
});
//const composeEnhacer =  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export default store;
