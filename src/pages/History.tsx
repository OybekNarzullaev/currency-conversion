import React, { useEffect } from "react";
import { List } from "antd";
import Flag from "react-world-flags";
import { historyConvert } from "../redux/actions";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/reducers/hooks";
import { historyListSlice } from "../redux/reducers/historyListSlice";

type historyItem = {
  currInputCode: Array<string>;
  currInputValue: number;
  currOutputCode: Array<string>;
  currOutputValue: number;
};

const History: React.FC = () => {
  const dispatch = useAppDispatch();
  const { history, loading } = useAppSelector(
    (state: RootState) => state.convertHistory
  );

  useEffect(() => {
    history.length !== 0
      ? dispatch(historyListSlice.actions.historyListSuccess(history))
      : dispatch(historyConvert());
  }, []);
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
