import React, { useEffect } from "react";
import { Divider, List } from "antd";
import Flag from "react-world-flags";
//import { currencies } from "../server/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { listCurrencies } from "../redux/actions";

type CurrencyItemType = {
  title: string;
  stateCode: string;
  oneSUM: Number;
};

const Currencies: React.FC = () => {
  const { currencies, loading } = useSelector<RootState, any>(
    (state) => state.currenciesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      currencies
        ? { type: "CURRENCY_LIST_SUCCESS", payload: currencies }
        : listCurrencies()
    );
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
