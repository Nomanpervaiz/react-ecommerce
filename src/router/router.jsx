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
import UserProfile from "../components/UserProfile";


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

  return loader ? (
    <AppSpinner className="routerLoader" />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={isUser ?
            <AppLayout>
              <UserProfile />
            </AppLayout>
            :
            <Navigate to={"/"} />
          }
        />
        <Route
          path="/signup"
          element={isUser ? <Navigate to={"/"} /> :
            <AppLayout>
              <AppSignUp />
            </AppLayout>
          }
        />
        <Route
          path="/signin"
          element={isUser ? <Navigate to={"/"} /> :
            <AppLayout>
              <AppSignIn />
            </AppLayout>
          }
        />

        <Route
          path="/"
          element={
            <AppLayout>
              <AppHome />
            </AppLayout>
          }
        />
        <Route
          path="/home"
          element={
            <AppLayout>
              <AppHome />
            </AppLayout>
          }
        />

        <Route
          path="/product"
          element={
            <AppLayout>
              <AppProduct />
            </AppLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AppLayout>
              <AppAbout />
            </AppLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <AppLayout>
              <AppContact />
            </AppLayout>
          }
        />
        <Route
          path="/cart"
          element={
            isUser ? (
              <AppLayout>
                <AppCartPage />
              </AppLayout>
            ) : (
              <Navigate to={"/signup"} />

            )
          }
        />
        <Route
          path="/product/:id"
          element={
              <AppLayout>
                <AppEcommerce />
              </AppLayout>
            
          }
        />
        <Route path="*" element={<AppNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
