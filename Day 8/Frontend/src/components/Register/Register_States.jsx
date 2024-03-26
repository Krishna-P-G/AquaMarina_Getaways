import axios from "axios";

// export function Register_States(){
//   // define Verify email inside this
//   try {
//     const response = await axios.get(
//       'http://localhost:8080/signup/sendotp/'
//     );
//     if (response.data === "New Email") {
//       return true;
//     } else if (response.data === "Already Registered Email") {
//       return false; // Email is already registered
//     }
//   } catch (error) {
//     console.error("Error checking email registration:", error);
//     return false; // An error occurred
//   }
// };

class Register_States {
  
  VerifyEmail(email, name) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("username", name);
    return axios.post("http://localhost:8080/signup/sendotp", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new Register_States();
