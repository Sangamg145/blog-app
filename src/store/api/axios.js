import axios from "axios";

const AXIOS_HEADERS = {
  // "Content-Type": "application/json",
  'content-type': 'multipart/form-data',
  "x-fos-version": "web.1.0.0",
  token: localStorage.getItem("token")
    ? `Bearer ${localStorage.getItem("token")}`
    : "",
};

export default axios.create({
  baseURL: "http://localhost:5000/app/api",
  headers: localStorage.getItem("token")
    ? AXIOS_HEADERS:''
});