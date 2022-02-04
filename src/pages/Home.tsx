import React from "react";
import Conventor from "../components/Conventor";
import Currencies from "../components/Currencies";

const Home: React.FunctionComponent = () => {
  return (
    <div className="main">
      <Conventor />
      <Currencies />
    </div>
  );
};

export default Home;
