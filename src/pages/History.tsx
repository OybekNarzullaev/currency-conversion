import React from "react";
import { List } from "antd";
import Flag from "react-world-flags";
import { currencies } from "../server/data";

const History: React.FC = () => {
  return (
    <div className="main">
      <div className="history">
        <List
          size="large"
          bordered
          dataSource={currencies}
          className="list-history"
          renderItem={(item) => (
            <List.Item className="list-history-item">
              <Flag code={item.stateCode} height="35" />
              <span>1 doll = $ 2.454</span>
              <Flag code={item.stateCode} height="35" />
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default History;
