import axios from "axios";
const baseURL = " http://localhost:4000/api";

const axiosClient = axios.create({
  baseURL,
  withCredentials: false, //change to true when httpOnly cookies enabled
  headers: {},
});

export default axiosClient;
