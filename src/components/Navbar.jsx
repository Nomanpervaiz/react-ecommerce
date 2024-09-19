import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AppButton from "./Button";
import { auth, onAuthStateChanged, signOut } from "../utils/firebase";
import {
  LogoutOutlined,
  MoonFilled,
  ShoppingFilled,
  SunFilled,

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

function AppNavbar() {
  const contextTheme = useContext(themeContext);
  const { appTheme, setAppTheme } = contextTheme;
  const { cartItems } = useContext(contextCart)

  const changeTheme = () => {
    if (appTheme == "light") {
      setAppTheme("dark");
    } else {
      setAppTheme("light");
    }
  };

  const [userData, setUserData] = useState("");
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        console.log("user found", user);
      } else {
        console.log("User not found");
      }
    });
  }, []);

  // Content for UserProfileCard
  const content = (
    <div className="text-center">
      <p>{userData.email}</p>

      {/* <img src={userData.providerData.photoURL} alt="" /> */}
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
                      <Link to="/home" onClick={handleClose}>
                        <span className="NavbarIcons">
                          <HomeFilled />
                        </span>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={handleClose}>
                        <span className="NavbarIcons">
                          <MehFilled />
                        </span>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/Product" onClick={handleClose}>
                        <span className="NavbarIcons">
                          <SettingFilled />
                        </span>
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={handleClose}>
                        <span className="NavbarIcons">
                          <ContactsFilled />
                        </span>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </Nav>

                <div className="flex iconBtn">
                  <Link to={"/cart"}>
                    <Badge style={{ margin: 10 }} count={cartItems.length} onClick={handleClose}>

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
