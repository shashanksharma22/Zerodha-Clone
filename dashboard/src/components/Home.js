import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import ResponsiveWarning from "./ResponsiveWarning";

const Home = () => {
  return (
    <>
      <ResponsiveWarning />
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
