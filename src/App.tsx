import React from "react";
import "antd/dist/antd.css";
import "./app.css";
import { Button, Layout, Result } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Layout>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<History />} path="/history" />
          <Route
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                  <Link to="/">
                    <Button type="primary">Back Home</Button>
                  </Link>
                }
              />
            }
            path="*"
          />
        </Routes>
      </Router>
      <Footer />
    </Layout>
  );
};

export default App;
