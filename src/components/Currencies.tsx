import React from "react";
import { Divider, List } from "antd";
import Flag from "react-world-flags";
import { currencies } from "../server/data";

const Currencies: React.FC = () => {
  return (
    <div className="currencies">
      <Divider orientation="center">Курсами валют</Divider>
      <List
        size="large"
        bordered
        dataSource={currencies}
        className="list-currencies"
        renderItem={(item) => (
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
