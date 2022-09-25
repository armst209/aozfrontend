import axios from "axios";
import { User } from "../utils/customTypes";

export const loginUser = async (userData: Partial<User>) => {
  const { data } = await axios({
    method: "POST",
    url: "http://localhost:1337/api/session",
    data: userData,
  });

  return data;
};
