import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppHome from "../pages/Home";
import AppProduct from "../pages/Product";
import AppAbout from "../pages/About";
import AppLayout from "../components/Layout";
import AppNotFound from "../pages/NotFound";
import AppContact from "../pages/Contact";
import AppEcommerce from "../components/Ecommerce";
import AppSignUp from "../pages/SignUpPage";
import AppSignIn from "../pages/SignInPage";
import { auth, onAuthStateChanged } from "../utils/firebase";
import { useEffect, useState } from "react";
import AppSpinner from "../components/Spinner";
import AppCartPage from "../pages/Cartitempage";

function AppRouter() {
  const [isUser, setIsUser] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
        console.log("User not found");
        setIsUser(false);
      }
      setLoader(false);
    });
  }, []);

  return (

    loader ?
      <AppSpinner className="routerLoader" />
      :

      <BrowserRouter >
        <Routes >
          <Route
            path="/"
            element={isUser ? <Navigate to={"/home"} /> : <AppSignUp />}
          />
          <Route
            path="/Signin"
            element={isUser ? <Navigate to={"/home"} /> : <AppSignIn />}
          />
          <Route
            path="/home"
            element={
              isUser ? (
                <AppLayout  >
                  <AppHome />
                </AppLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/product"
            element={
              isUser ? (
                <AppLayout>
                  <AppProduct />
                </AppLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/about"
            element={
              isUser ? (
                <AppLayout>
                  <AppAbout />
                </AppLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/contact"
            element={
              isUser ? (
                <AppLayout>
                  <AppContact />
                </AppLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/cart"
            element={
              isUser ? (
                <AppLayout>
                  <AppCartPage  />
                </AppLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/product/:id"
            element={
              isUser ? (
                <AppLayout>
                  <AppEcommerce />
                </AppLayout>
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route path="*" element={<AppNotFound />} />
        </Routes>
      </BrowserRouter>

  )
}

export default AppRouter;
