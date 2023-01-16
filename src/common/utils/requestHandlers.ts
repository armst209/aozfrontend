import axios, { AxiosError } from "axios";
import API_ENDPOINTS from "../api-endpoints";
import axiosClient from "../axios-client";
import { User } from "./customTypes";

export const loginUser = async (userData: Partial<User>) => {
  try {
    const { data } = await axiosClient.post(API_ENDPOINTS.PUBLIC.LOGIN, {
      email: userData.email,
      password: userData.password,
    });
    return data;
  } catch (error: any) {
    return error;
  }
};

export const logoutUser = async () => {
  await axiosClient.delete(API_ENDPOINTS.PUBLIC.LOGOUT);
};

export const getSession = async () => {
  const { data } = await axiosClient.get(API_ENDPOINTS.ADMIN.GET_CURRENT_USER, {
    method: "GET",
    withCredentials: true,
  });
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axiosClient.get(API_ENDPOINTS.ADMIN.GET_ALL_USERS, {
    method: "GET",
  });
  return data;
};

export const getAllMobileSuits = async () => {
  const { data } = await axiosClient.get(
    API_ENDPOINTS.PUBLIC.GET_ALL_MOBILE_SUITS,
    { method: "GET" }
  );
  return data;
};
