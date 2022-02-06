import React, { useEffect } from "react";
import { List } from "antd";
import Flag from "react-world-flags";
import { useDispatch, useSelector } from "react-redux";
import { historyConvert } from "../redux/actions";
import { RootState } from "../redux/store";

type historyItem = {
  currInputCode: Array<string>;
  currInputValue: number;
  currOutputCode: Array<string>;
  currOutputValue: number;
};

const History: React.FC = () => {
  const dispatch = useDispatch();
  const { history, loading } = useSelector<RootState, any>(
    (state) => state.convertHistory
  );
  const { newHistory } = useSelector<RootState, any>(
    (state) => state.addToHistory
  );
  useEffect(() => {
    dispatch(
      history.length !== 0
        ? { type: "CONVERT_HISTORY_SUCCESS", payload: history }
        : historyConvert()
    );
  }, [newHistory]);
  return (
    <div className="main">
      <div className="history">
        <List
          size="large"
          bordered
          loading={loading}
          dataSource={history}
          className="list-history"
          renderItem={(item: historyItem) => (
            <List.Item className="list-history-item">
              <Flag code={item.currInputCode[1]} height="35" />
              <span>
                {item.currInputValue} {item.currInputCode[0].toUpperCase()} ={" "}
                {item.currOutputValue} {item.currOutputCode[0].toUpperCase()}
              </span>
              <Flag code={item.currOutputCode[1]} height="35" />
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default History;
