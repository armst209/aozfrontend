import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../../common/utils/requestHandlers";

const LogoutButton = () => {
  //router navigation hook
  const navigateTo = useNavigate();
  //react query hook
  // const { mutate, isLoading } = useMutation(logoutUser, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error: any) => {
  //     console.log("hit");
  //     console.log(error);
  //   },
  // });
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <Button onClick={handleLogout} variant="contained">
      Logout
    </Button>
  );
};

export default LogoutButton;
