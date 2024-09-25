import React, { useContext,  useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo2.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AppButton from "./Button";

import {

  LoginOutlined,
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

import { Badge, Button, message } from "antd";
import { themeContext } from "../context/ThemeContext";
import { contextCart } from "../context/CartContext";
import { UserDetailContext } from "../context/UserContext";
import AppAvatar from "./Avatar";


function AppNavbar() {
  const contextTheme = useContext(themeContext);
  const { appTheme, setAppTheme } = contextTheme;
  const { cartItems } = useContext(contextCart);
  const userData = useContext(UserDetailContext);
  const { userDetail, userDbDetail } = userData;

  let userName = userDbDetail?.username;
  const navigate = useNavigate()
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

  const GotoSignup = () => {
    navigate("/signup")
    handleClose();

  };



  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          style={{ backgroundColor: appTheme == "light" ? "white" : "#111827" }}
          expand={expand}
          className="navbarMain px-14 "
        >
          <Container  >

              <Link to={"/"}>
              <img style={{ width: 70 }} className="logo" src={logo} alt="Logo" />
              </Link>
            <Navbar.Toggle
              className="togler"
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
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
               Cosmetic Store
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body
                className="offcanvaMain "
                style={{
                  backgroundColor: appTheme == "light" ? "white" : "#111827",
                }}
              >
                <Nav className="navMain flex-grow-1">
                  <ul
                    className="menu"
                    style={{ color: appTheme == "light" ? "black" : "white" }}
                  >
                    <li>
                      <NavLink
                        to="/home"
                        className={({ isActive }) =>
                          isActive ? "text-pink-300" : "text-gray-400"
                        }
                        onClick={handleClose}
                      >
                        <span className="NavbarIcons">
                          <HomeFilled />
                        </span>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "text-pink-300" : "text-gray-400"
                        }
                        onClick={handleClose}
                      >
                        <span className="NavbarIcons">
                          <MehFilled />
                        </span>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Product"
                        className={({ isActive }) =>
                          isActive ? "text-pink-300" : "text-gray-400"
                        }
                        onClick={handleClose}
                      >
                        <span className="NavbarIcons">
                          <SettingFilled />
                        </span>
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? "text-pink-300" : "text-gray-400"
                        }
                        onClick={handleClose}
                      >
                        <span className="NavbarIcons">
                          <ContactsFilled />
                        </span>
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </Nav>

                <div className="flex iconBtn ">
                  <Link to={"/cart"}>
                    <Badge
                      style={{ margin: 10 }}
                      count={cartItems?.length}
                      onClick={handleClose}
                    >
                      <ShoppingFilled
                        style={{
                          fontSize: 20,
                          color: appTheme == "light" ? "black" : "white",
                        }}
                        className="flex justify-center border themeBtn my-2 mr-1 "
                      />
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

                  {userDetail ? (

                    <Button className="profile" onClick={()=>{
                      navigate("/profile")
                       handleClose()
                      }}>
                      {userDetail?.photoUrl ? (
                        userDetail?.photoUrl
                      ) : (
                        <AppAvatar userName={userName} />
                      )}
                    </Button>


                  ) : (
                    <AppButton icon={<LoginOutlined />} name="Sign-up" onClick={GotoSignup} />

                  )}
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
