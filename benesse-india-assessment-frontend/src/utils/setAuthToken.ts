import axios from "axios";

const setAuthToken = (token: string | null) => {
  console.log("setAuthToken :: ", token)
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
