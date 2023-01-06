import axios from "../api/axios";
import { loginAPI, registerAPI, userGetAPI } from "../api";

export const loginUserSuccess = (token) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_SUCCESS", data: token });
  };
  
  export const register = (data,navigate) => async (dispatch) => {
    try {
      let response = await axios.post(
        registerAPI,
        data
      );
      if (response.status === 201) {
        navigate("/login")
        return response;
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", data: "verification failed" });
      throw error.message;
    }
  };
  
  //For forgot password
  
//   export const forgotPasswordOTP = (data) => async (dispatch) => {
//     try {
//       let response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/accounts/api/student-forgot-otp/`,
//         data
//       );
//       if (response.status === 200) {
//         return response;
//       }
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
  //to verify and resend otp
  
//   export const verifyOTPApi = (data) => async (dispatch) => {
//     try {
//       let response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/accounts/api/student-password-changed/`,
//         data
//       );
//       if (response.status === 200) {
//         return response;
//       }
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
  export const login = (data,navigate) => async (dispatch) => {
    try {
      let response = await axios.post(
        loginAPI,
        data
      );
      if (response.status === 200) {
        dispatch(loginUserSuccess(response.data.accessToken));
        navigate("/")
        window.location.reload();

      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", data: "login failed" });
      throw error.message;
    }
  };
  
  export const getUser = (data,navigate) => async (dispatch) => {
    try {
      let response = await axios.get(
        userGetAPI,
        data
      );
      if (response.status === 200) {
        dispatch({ type: "GET_USER", data: response.data });

      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", data: "get user failed" });
      throw error.message;
    }
  };
  export const logout = (navigate) => (dispatch) => {
    dispatch({ type: "LOGOUT_SUCCESSFULL" });
    navigate("/login")
    window.location.reload();
  };
  
  export default {
    login,
    register,
    getUser,
    logout
  }