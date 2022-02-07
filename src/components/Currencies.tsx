import React, { useEffect } from "react";
import { Divider, List } from "antd";
import Flag from "react-world-flags";
import { RootState } from "../redux/store";
import { listCurrencies } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/reducers/hooks";
import { listCurrencySlice } from "../redux/reducers/currencyListSlice";

type CurrencyItemType = {
  title: string;
  stateCode: string;
  oneSUM: Number;
};

const Currencies: React.FC = () => {
  const { currencies, loading } = useAppSelector(
    (state: RootState) => state.currenciesList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    currencies.length !== 0
      ? dispatch(listCurrencySlice.actions.listCurrencySuccess(currencies))
      : dispatch(listCurrencies());
  }, []);
  return (
    <div className="currencies">
      <Divider orientation="center">Курсами валют</Divider>
      <List
        size="large"
        bordered
        loading={loading}
        dataSource={currencies}
        className="list-currencies"
        renderItem={(item: CurrencyItemType) => (
          <List.Item className="list-currencies-item">
            <Flag code={item.stateCode} height="35" />{" "}
            <span>
              1 {item.title} = {item.oneSUM} so'm
            </span>
            <Flag code="uzb" height="35" />
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default Currencies;
