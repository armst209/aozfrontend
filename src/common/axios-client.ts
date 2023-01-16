import axios from "axios";
import API_ENDPOINTS from "./api-endpoints";

/**
 * !change withCredentials to true when httpOnly cookies enabled and cookies need to be set in local storage
 **/

const axiosClient = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  withCredentials: true,
});

export default axiosClient;
