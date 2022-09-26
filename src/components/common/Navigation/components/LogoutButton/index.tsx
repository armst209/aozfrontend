import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../../../../../utils/requestHandlers";

const LogoutButton = () => {
  //router navigation hook
  const navigateTo = useNavigate();
  //react query hook
  const { mutate, isLoading } = useMutation(logoutUser, {
    onSuccess: (data) => {
      localStorage.removeItem("userToken");
      console.log(data);
      navigateTo("/");
    },
    onError: (error: any) => {
      console.log("hit");
      console.log(error);
    },
  });
  const handleLogout = () => {
    const userToken: string | null = localStorage.getItem("userToken");
    const parsedToken = JSON.parse(userToken as string);

    mutate(parsedToken.toString());
  };
  return (
    <Button onClick={handleLogout} variant="contained">
      {isLoading ? "Logging Out" : "Logout"}
    </Button>
  );
};

export default LogoutButton;
