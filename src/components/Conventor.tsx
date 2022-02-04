import {
  ArrowRightOutlined,
  SwapOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { Button, Form, InputNumber, Select, Space, Spin, Divider } from "antd";
import Flag from "react-world-flags";

const Conventor = () => {
  return (
    <div className="convertor">
      <Form className="form">
        <Spin tip="Loading..." size="large" spinning={false}>
          <h3>
            <TransactionOutlined /> Конвертер
          </h3>
          <Divider />
          <Space className="selects">
            <Form.Item label="От">
              <Select
                size="large"
                placeholder="Выберите валюту"
                style={{ width: "150px" }}
              >
                <Select.Option value="usd">
                  <span>
                    <Flag code="usa" height="16" /> USD
                  </span>
                </Select.Option>
                <Select.Option value="rub">
                  <span>
                    <Flag code="rus" height="16" /> Руб
                  </span>
                </Select.Option>
                <Select.Option value="uzb">
                  <span>
                    <Flag code="uzb" height="16" /> so'm
                  </span>
                </Select.Option>
                <Select.Option value="tenge">
                  <span>
                    <Flag code="kz" height="16" /> Тенгэ
                  </span>
                </Select.Option>
                <Select.Option value="som">
                  <span>
                    <Flag code="kg" height="16" /> Сом
                  </span>
                </Select.Option>
                <Select.Option value="manat">
                  <span>
                    <Flag code="tm" height="16" /> Манат
                  </span>
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="До">
              <Select
                size="large"
                placeholder="Выберите валюту"
                style={{ width: "150px" }}
              >
                <Select.Option value="usd">
                  <span>
                    <Flag code="usa" height="16" /> USD
                  </span>
                </Select.Option>
                <Select.Option value="rub">
                  <span>
                    <Flag code="rus" height="16" /> Руб
                  </span>
                </Select.Option>
                <Select.Option value="uzb">
                  <span>
                    <Flag code="uzb" height="16" /> so'm
                  </span>
                </Select.Option>
                <Select.Option value="tenge">
                  <span>
                    <Flag code="kz" height="16" /> Тенгэ
                  </span>
                </Select.Option>
                <Select.Option value="som">
                  <span>
                    <Flag code="kg" height="16" /> Сом
                  </span>
                </Select.Option>
                <Select.Option value="manat">
                  <span>
                    <Flag code="tm" height="16" /> Манат
                  </span>
                </Select.Option>
              </Select>
            </Form.Item>
          </Space>
          <Form.Item>
            <InputNumber
              style={{ width: "100%" }}
              size="large"
              placeholder="input"
              type="number"
            />
          </Form.Item>
          <Form.Item className="result">
            <span className="disabledColor">Output</span>
          </Form.Item>
          <Space className="control-buttons">
            <Button icon={<ArrowRightOutlined />} className="success">
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
