import axios from "axios";

export const REGISA = data => {
  return {
    type: "REGISTER_POST",
    payload: axios({
      method: "POST",
      url: "http://localhost:4300/api/v2/register",
      data
    })
  };
};
