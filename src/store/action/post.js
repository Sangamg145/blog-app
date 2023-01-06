import axios from "../api/axios";
import { addPostAPI, postAPI } from "../api";
export const getPost = (cat) => async (dispatch) => {
    dispatch({ type: "GET_POST",loading:true });
    try {
      let response = await axios.get(
        postAPI,
        {params:{cat}
    }
      );
      if (response.status === 200) {
        dispatch({ type: "GET_POST", data: response.data,loading:false });
        
      }
    } catch (error) {
    //   throw error.message;
    dispatch({ type: "GET_POST",loading:false });
    }
  };

  export const getPostOnly = (id) => async (dispatch) => {
    dispatch({ type: "GET_POST_ONLY",loading:true });
    try {
      let response = await axios.get(
        `${postAPI}/${id}`
      );
      if (response.status === 200) {
        dispatch({ type: "GET_POST_ONLY", data: response.data,loading:false });
        
      }
    } catch (error) {
    //   throw error.message;
      dispatch({ type: "GET_POST_ONLY",loading:false });
    }
  };

  export const addPost = (data,navigate) => async (dispatch) => {
    try {
      let response = await axios.post(
        addPostAPI,
        data
      );
      if (response.status === 201) {
        navigate("/")
        dispatch(getPost());
        
      }
    } catch (error) {
      throw error.message;
    }
  };

  export default 
  {
    getPost,addPost,getPostOnly
  }