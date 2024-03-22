import React, { useState } from "react";
import cover from "../../assets/10.png";
import pfp from "../../assets/pfp.png";
import correct from "../../assets/correct.png";
import incorrect from "../../assets/incorrect.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import Send_Mail from '../Send_Mail/Send_Mail';
import VerifyButton from "../../common/Verify_button";
//import send_Email from "../../common/Send_Email";

function Register_email() {
  // states for the fields
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // states for the errors
  const [inputErrors, setInputErrors] = useState({
    email: "",
    code: "",
    name: "",
  });

  // states for the toggles
  const [toggle, setToggle] = useState([
    {
      id: 1,
      url: incorrect,
      name: "Email is Verified",
      error: "Please enter code sent to your email.",
    },
    {
      id: 2,
      url: incorrect,
      name: "Name doesn't contain numbers or symbols and length doesn't exceed 20",
      error: "Please enter a valid name.",
    },
  ]);

  const generateCode = () => {
    const characters = "0123456789";
    const length = 6;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerifyEmail = () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Swal.fire({
        title: "Error!",
        text: "Please Enter a valid email",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    const generatedCode = generateCode();
    setGeneratedCode(generatedCode);
    console.log(generatedCode);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    validateCode(e.target.value);
  };

  // here we will update the toggles based on the code
  const validateCode = (code) => {
    let updatedToggle = [...toggle];
    updatedToggle[0].url = code === generatedCode ? correct : incorrect;
    setToggle(updatedToggle);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateName(e.target.value);
  };

  // here we will update the toggles based on the name
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    let updatedToggle = [...toggle];
    updatedToggle[1].url =
      nameRegex.test(name) && name.length <= 20 ? correct : incorrect;
    setToggle(updatedToggle);
  };

  // here we map each toggle item to a div
  const renderToggleItems = () => {
    return toggle.map((item) => (
      <div className="w-full flex items-center" key={item.id}>
        <img src={item.url} alt="check" className="w-6 h-6 mr-2" />
        <p className="text-sm py-2">{item.name}</p>
      </div>
    ));
  };

  // here we handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // making sure that all previous errors are gone.
    errors.email = "";
    errors.code = "";
    errors.name = "";

    // Check for empty fields
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!code.trim()) {
      errors.code = "Please enter the verification code.";
    }
    if (!name.trim()) {
      errors.name = "Please enter your name.";
    }
    // Check if all validation icons are correct
    const allIconsCorrect = toggle.every((item) => item.url === correct);
    const incorrectErrors = toggle
      .filter((item) => item.url === incorrect)
      .map((item) => item.error);
    if (!allIconsCorrect && incorrectErrors.length > 0) {
      errors.code = incorrectErrors[0]; 
    }

    setInputErrors(errors);

    // If any required field is empty, stop form submission
    if (Object.values(errors).some((error) => error)) {
      const firstError = Object.values(errors).find((error) => error);
      Swal.fire({
        title: "Error!",
        text: firstError,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Navigate to the landing page
    navigate("/register/password");

    console.log("Email:", email);
    console.log("Code:", code);
    console.log("Name:", name);
  };

  return (
    <div className="w-full h-screen flex items-start">
      {/* Left side cover Image */}
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover_image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actual Form */}
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col px-10 py-14 justify-between">
        <div className="flex flex-row justify-between items-start">
          <h1 className="text-5xl text-[#FF204E] font-lobster font-bold mb-8">
            SeniorVerve
          </h1>
          <img src={pfp} alt="ship" className="h-14 w-14" />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-merriweather font-bold mb-4">
              Register
            </h3>
            <p className="text-base mb-2">
              Welcome! Please fill in the required details to create your
              account.
            </p>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                className={`w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none ${
                  inputErrors.email ? "border-red-500" : ""
                }`}
              />
  
              <VerifyButton
                buttonText="Send Code"
                buttonStyle="absolute top-6 right-5 text-md"
                onClick={handleVerifyEmail}
              />

              {/* {code && <Send_Mail email={email} code={code} />} */}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Code"
                onChange={handleCodeChange}
                className={`w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none ${
                  inputErrors.code ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
                className={`w-full text-black px-4 py-4 my-2 bg-none border-b border-black outline-none focus:outline-none ${
                  inputErrors.name ? "border-red-500" : ""
                }`}
              />
            </div>
          </div>

          {/* Password Validation Icons */}
          <div className="w-full flex flex-col p-4 items-center justify-between">
            {renderToggleItems()}
          </div>

          <div className="w-full flex flex-col">
            <button
              onClick={handleSubmit}
              className="w-full text-2xl font-poppins text-white my-4 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold underline underline-offset-2 cursor-pointer pl-1"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register_email;
