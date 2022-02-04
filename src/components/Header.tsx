import React from "react";
import { Layout } from "antd";
import { HistoryOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <Link to="/" className="logo">
        <HomeOutlined className="mr-10" />
        Home
      </Link>
      <Link to="/history" className="currency">
        <HistoryOutlined className="mr-10" />
        История
      </Link>
    </Header>
  );
};
//https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY%27
export default Header;
