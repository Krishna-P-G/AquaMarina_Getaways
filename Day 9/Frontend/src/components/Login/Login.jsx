import React, { useState } from "react";
import cover from "../../assets/10.png";
import pfp from "../../assets/pfp.png";
import check from "../../assets/eye-check.png";
import uncheck from "../../assets/eye-uncheck.png";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login_States from "./Login_States";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your email.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    if (!password) {
      Swal.fire({
        title: "Error!",
        text: "Please enter your password.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    try {
      const response = await Login_States.VerifyUser(email, password);
      if (response.data === "Successful Login") {
        navigate("/user");
        Swal.fire({
          title: "Welcome!",
          text: `Welcome back, ${email}!`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else if (response.data === "Invalid Email Details" ){
        Swal.fire({
          title: "Error!",
          text: response.data,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
       else {
        Swal.fire({
          title: "Error!",
          text: response.data,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Invalid Login Details",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1540778339538-067eae485e9f?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover_image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col px-10 py-14 justify-between">
        <div className="flex flex-row justify-between items-start">
          <h1 className="text-5xl text-[#FF204E] font-lobster font-bold mb-8">
            SeniorVerve
          </h1>
          <img src={pfp} alt="ship" className="h-14 w-14" />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-merriweather font-bold mb-4">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please Enter your Details
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                className="w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none"
              />
              <div className="w-full flex flex-row">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  className="w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none"
                />
                <img
                  src={showPassword ? check : uncheck}
                  alt="eye"
                  className="absolute h-8 w-8 my-7 ml-10 right-12 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="w-full flex items-end  justify-end">
              <p className="text-sm font-semibold whitespace-nowrap cursor-pointer underline underline-offset-2">
                <Link to="/forgot/email">Forgot Password ?</Link>
              </p>
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full text-white my-4 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black bg-[#f5f5f5] px-1">Or</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Don&apos;t have an account?{" "}
            <Link
              to="/register/email"
              className="font-semibold underline underline-offset-2 cursor-pointer pl-1"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
