import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ConfigProvider } from "antd";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: "blue",
        borderRadius: 10,
        fontFamily:
          "'Noto Sans TC', Arial, Helvetica, Georgia, 'Times New Roman', Roboto, sans-serif",
        // 派生变量，影响范围小
        // colorBgContainer: '#f6ffed',
      },
    }}
  >
    <AppRouter />
  </ConfigProvider>
);

export default App;
