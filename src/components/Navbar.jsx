import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import AppButton from "./Button";
import { auth, onAuthStateChanged, signOut } from "../utils/firebase";
import {
  LogoutOutlined,
  MoonFilled,
  ShoppingFilled,
  SunFilled,
  UserOutlined,

} from "@ant-design/icons";
import {
  HomeFilled,
  MehFilled,
  SettingFilled,
  ContactsFilled,
} from "@ant-design/icons";
import UserProfileCard from "./UserProdile";

import { Badge } from "antd";
import { themeContext } from "../context/ThemeContext";
import { contextCart } from "../context/CartContext";
import { UserDetailContext } from "../context/UserContext";

function AppNavbar() {
  const contextTheme = useContext(themeContext);
  const { appTheme, setAppTheme } = contextTheme;
  const { cartItems } = useContext(contextCart)
  const userData = useContext(UserDetailContext)

  console.log("userdata",userData);
  
  const changeTheme = () => {
    if (appTheme == "light") {
      setAppTheme("dark");
    } else {
      setAppTheme("light");
    }
  };

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        handleClose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  const content = (
    <div className="flex flex-col text-center align-items-center  ">

      <div className="rounded-full  shadow-md w-10 h-10 flex justify-center ">
        <UserOutlined />
      </div>
      <p className="p-3">{userData?.email}</p>

      <div className="flex justify-center">
        <AppButton
          name="Log out"
          onClick={logOut}
          className="logOutbtn"
          icon={<LogoutOutlined />}
        />
      </div>
    </div>
  );



  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          style={{ backgroundColor: appTheme == "light" ? "white" : "black" }}
          expand={expand}
          className="navbarMain px-16"
        >
          <Container>
            <Navbar.Brand href="/">
              <img style={{ width: 120 }} src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Cosmetic store
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvaMain" style={{ backgroundColor: appTheme == "light" ? "white" : "black" }} >
                <Nav className="navMain  flex-grow-1 ">
                  <ul
                    className="menu"
                    style={{ color: appTheme == "light" ? "black" : "white" }}
                  >
                    <li>
                      <NavLink to="/home" className={({isActive})=>  isActive? "text-pink-600":"text-gray-400"} onClick={handleClose}>
                        <span className="NavbarIcons">
                          <HomeFilled />
                        </span>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className={({isActive})=> isActive? "text-pink-600":"text-gray-400"} onClick={handleClose}>
                        <span className="NavbarIcons">
                          <MehFilled />
                        </span>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Product" className={({isActive})=> isActive? "text-pink-600":"text-gray-400"} onClick={handleClose}>
                        <span className="NavbarIcons">
                          <SettingFilled />
                        </span>
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" className={({isActive})=> isActive? "text-pink-600":"text-gray-400"} onClick={handleClose}>
                        <span className="NavbarIcons">
                          <ContactsFilled />
                        </span>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </Nav>

                <div className="flex iconBtn">
                  <Link to={"/cart"}>
                    <Badge style={{ margin: 10 }} count={cartItems?.length} onClick={handleClose}>
                      <ShoppingFilled style={{ fontSize: 20, color: appTheme == "light" ? "black" : "white", }} className="flex justify-center border themeBtn my-2 mr-1 " />
                    </Badge>
                  </Link>


                  <AppButton
                    style={{
                      backgroundColor: appTheme == "light" ? "white" : "black",
                      color: appTheme == "light" ? "white" : "black",
                    }}
                    icon={
                      appTheme == "light" ? (
                        <MoonFilled
                          style={{ color: "black" }}
                          className="iconSize"
                        />
                      ) : (
                        <SunFilled
                          className="iconSize"
                          style={{ color: "white" }}
                        />
                      )
                    }
                    className={"m-2 themeBtn"}
                    onClick={changeTheme}
                  />

                  <UserProfileCard content={content} />

                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default AppNavbar;
