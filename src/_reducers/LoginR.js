// import { LOGIN } from "../config/constants";

const initialState = {
  data: [],
  dataErr: [],
  isLogin: false,
  isLoading: false
};

const LOGINR = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_PENDING":
      console.log("cek1");
      return {
        ...state, //titik tiga immutable
        isLoading: true
      };
    case "POST_LOGIN_FULFILLED":
      console.log("cek2");

      window.localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isLogin: true
        // error: false
      };
    case "POST_LOGIN_REJECTED":
      console.log("cek3");
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.data
      };
    default:
      return state;
  }
};

export default LOGINR;
