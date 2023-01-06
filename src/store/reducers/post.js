const inititalState = {
    post: {
      isLoading: false,
      data: null,
    },
    postOnly: {
      isLoading: false,
      data: null,
    },
  };
  
export default function postReducer(
   state=inititalState,action
  ) {
    switch (action.type) {
      case "GET_POST":
        return {
          ...state,
          post:{
            loading:action.loading,
            data:action.data
          }
        };
        case "GET_POST_ONLY":
        return {
          ...state,
          postOnly:{
            loading:action.loading,
            data:action.data
          }
        };
  
      default:
        return state;
    }
  }