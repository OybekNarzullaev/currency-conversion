import { host, httpRequest } from "./host";

// types
type configtype = {
  url: string;
  method: string;
  data: object;
};

type currencyConvert = {
  currInputValue: Number;
  currOutputValue: Number;
  currInputCode: Array<string>;
  currOutputCode: Array<string>;
};

// get all current curriences
export let getCurrencies = () => {
  let config: configtype = {
    url: `${host}/api/currencies`,
    method: "get",
    data: {},
  };
  return httpRequest(config);
};

// get all history
export let getHistory = () => {
  let config: configtype = {
    url: `${host}/api/currencies/history`,
    method: "get",
    data: {},
  };
  return httpRequest(config);
};

//add to history
export let addToHistory = (currencyAction: currencyConvert) => {
  let config: configtype = {
    url: `${host}/api/currencies/history`,
    method: "get",
    data: currencyAction,
  };
  return httpRequest(config);
};
