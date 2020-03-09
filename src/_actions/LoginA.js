import axios from "axios";

export const LOGINA = data => {
  return {
    type: "POST_LOGIN",
    payload: axios({
      method: "POST",
      url: "http://localhost:4300/api/v2/login",
      data
    })
  };
};
