import axios from "axios";

class Login_States {
  VerifyUser(email, password) {
    return axios.get(
      `http://localhost:8080/getLoginDetails/${email}/${password}`
    );
  }
}

export default new Login_States();
