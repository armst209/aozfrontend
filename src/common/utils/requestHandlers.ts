import axios from "axios";
import API_ENDPOINTS from "../api-endpoints";
import axiosClient from "../axios-client";
import { User } from "./customTypes";

const baseUrl = "http://localhost:4000";

export const loginUser = async (userData: Partial<User>) => {
  const { data } = await axios({
    method: "POST",
    withCredentials: true,
    url: `${baseUrl}/api/session`,
    data: userData,
  });

  return data;
};

export const logoutUser = async () => {
  await axios({
    method: "DELETE",
    withCredentials: true,
    url: `${baseUrl}/api/session`,
  });
};

export const getSession = async () => {
  const { data } = await axios({
    method: "GET",
    withCredentials: true,
    url: `${baseUrl}/api/admin/session`,
  });

  return data;
};

export const getAllUsers = async () => {
  try {
    const { data } = await axiosClient.get(API_ENDPOINTS.ADMIN.GET_ALL_USERS);
    return data;
  } catch (error) {
    return error;
  }
};
