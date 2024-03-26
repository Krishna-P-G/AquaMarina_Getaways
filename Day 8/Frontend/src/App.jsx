import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LazyLoading from "./common/LazyLoading";
import Login from "./components/Login/Login";
import RegisterEmail from "./components/Register/Register_email";
import RegisterPassword from "./components/Register/Register_password";
import ForgotEmail from "./components/Forgot_Password/Forgot_email";
import ForgotPassword from "./components/Forgot_Password/Forgot_password";


const Admin = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Admin/admin")), 2000)
    )
);
const User = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/User/user")), 2000)
    )
);
const Landing = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./components/Landing/landing")), 2000)
    )
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <LazyLoading onLoadComplete={() => setIsLoaded(true)} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<>{<Landing />}</>} />
            <Route path="/user" element={<>{<User />}</>} />
            <Route path="/login" element={<>{<Login />}</>} />
            <Route
              path="/register/password"
              element={<>{<RegisterPassword />}</>}
            />
            <Route
              path="/register/email"
              element={<>{<RegisterEmail />}</>}
            />
            <Route
              path="/forgot/email"
              element={<>{<ForgotEmail />}</>}
            />
            <Route
              path="/forgot/password"
              element={<>{<ForgotPassword />}</>}
            />
            <Route path="/admin" element={<>{<Admin />}</>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
