import Layout from "antd/es/layout/layout";
import React from "react";
import HomeRouter from "../router/HomeRouter";
import MyHeader from "./home/MyHeader";

const Home = () => {
  return (
    <Layout>
      <MyHeader></MyHeader>
      <div className="main_content">
        <HomeRouter></HomeRouter>
      </div>
    </Layout>
  );
};

export default Home;
