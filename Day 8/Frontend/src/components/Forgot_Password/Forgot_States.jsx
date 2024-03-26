import axios from "axios";

class Forgot_States {
  
  SendForgotPassword(email) {
    const requestData = new FormData();
    requestData.append("email", email);
    return axios.post("http://localhost:8080/forgotpassword/sendotp", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

}

export default new Forgot_States();