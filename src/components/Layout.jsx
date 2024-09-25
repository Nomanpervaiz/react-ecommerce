import React, { useContext, useState } from "react";
import { Layout,  theme } from "antd";
import AppNavbar from "./Navbar";
import AppFooter from "../pages/Footer";
import { themeContext } from "../context/ThemeContext";

const { Header, Content } = Layout;


const AppLayout = ({ children }) => {
  
  const contextTheme = useContext(themeContext)
  const { appTheme } = contextTheme

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <AppNavbar />
        <Header
            className="header"
            style={{
              padding: 0,
              background: colorBgContainer,
              height: 0
            }}
            >
        </Header>
        <Content
          style={{
            margin: "0px 0px",
            padding: "0px 50px ",
            minHeight: innerHeight,
            backgroundColor: appTheme == "light" ? "white" : "#111827",
            color: appTheme == "light" ? "black" : "white"
            
          }}
          className="contentDiv"
        >
      
          {children}
        </Content>
      <AppFooter   style={{
            backgroundColor: appTheme == "light" ? "white" : "#111827",
            color: appTheme == "light" ? "black" : "white"
            
          }} />
      </Layout>

  );
};
export default AppLayout;

