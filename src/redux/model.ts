export interface listCurrencyItem {
  _id: string;
  title: string;
  stateCode: string;
  oneSUM: number;
}

export interface listHistoryItem {
  _id: string;
  currInputValue: number;
  currOutputValue: number;
  currInputCode: Array<string>;
  currOutputCode: Array<string>;
}
