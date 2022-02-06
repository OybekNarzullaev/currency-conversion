import React, { useState } from "react";
import {
  ArrowRightOutlined,
  CloseOutlined,
  SwapOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { Button, Form, InputNumber, Select, Space, Spin, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Flag from "react-world-flags";
import { calculator } from "../utils/calculator";
import { createHistory } from "../redux/actions";

const Conventor: React.FC = () => {
  const dispatch = useDispatch();
  const { currencies } = useSelector<RootState, any>(
    (state) => state.currenciesList
  );
  const [output, setOutput] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [inputCurr, setInputCurr] = useState(false);
  const [outputCurr, setOutputCurr] = useState(false);

  const currStateCode: Array<string> = [
    "so'm-uzb",
    "usd-usa",
    "рублей-rus",
    "тэнге-kz",
    "сом-kg",
    "manat-tm",
    "сомони-tj",
  ];

  const submitHandle = async (values: object) => {
    const data = calculator(currencies, values);
    dispatch(createHistory(data));
    setOutput(data.currOutputValue);
  };

  return (
    <div className="convertor">
      <Form className="form" onFinish={submitHandle}>
        <Spin tip="Loading..." size="large" spinning={false}>
          <h3>
            <TransactionOutlined /> Конвертер
          </h3>
          <Divider />
          <Space className="selects">
            <Form.Item label="От" name="inputCode">
              <Select
                size="large"
                placeholder="Выберите"
                style={{ width: "150px" }}
                onChange={() => setInputCurr(true)}
              >
                {currStateCode.map((item: string, index: number) => (
                  <Select.Option key={index} value={item}>
                    <span>
                      <Flag code={item.split("-")[1]} height="16" />
                      {" " + item.split("-")[0].toUpperCase()}
                    </span>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="До" name="outputCode">
              <Select
                size="large"
                placeholder="Выберите"
                style={{ width: "150px" }}
                onChange={() => setOutputCurr(true)}
              >
                {currStateCode.map((item: string, index: number) => (
                  <Select.Option key={index} value={item}>
                    <span>
                      <Flag code={item.split("-")[1]} height="16" />
                      {" " + item.split("-")[0].toUpperCase()}
                    </span>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Space>
          <Form.Item name="input">
            <InputNumber
              style={{ width: "100%" }}
              size="large"
              placeholder="Вход"
              type="number"
              onChange={(value: number) => setInputValue(value || 0)}
            />
          </Form.Item>
          <Form.Item className="result">
            <span className="disabledColor">
              {output ? (
                <>
                  <span className="output">{output}</span>
                  <CloseOutlined
                    className="clearIcon"
                    onClick={() => setOutput(0)}
                  />
                </>
              ) : (
                "Вывод"
              )}
            </span>
          </Form.Item>
          <Space className="control-buttons">
            <Button
              icon={<ArrowRightOutlined />}
              className="success"
              htmlType="submit"
              disabled={
                inputValue === 0 || !currencies || !outputCurr || !inputCurr
              }
            >
              Конвертировать
            </Button>
            <Button icon={<SwapOutlined />} className="primary">
              Заменять
            </Button>
          </Space>
        </Spin>
      </Form>
    </div>
  );
};

export default Conventor;
