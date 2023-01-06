const inititalState = {
    isAuthenticated: false,
    access_token: null,
    user: null,
    has_permission: true,
  };
  
export default function authReducer(
   state=inititalState,action
  ) {
    switch (action.type) {
      case "USER_LOGIN_SUCCESS":
        window.localStorage.setItem("token", action.data);
        return {
          ...state,
          isAuthenticated: true,
          access_token: action.data,
        };
        case "GET_USER":
        return {
          ...state,
          user: action.data,
        };
  
      case "LOGOUT_SUCCESSFULL":
        localStorage.removeItem("token");
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  }
  