import { Button, Input, Box } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "../../utils/requestHandlers";
import { useLocalStorage } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import { TokenResponse, User } from "../../utils/customTypes";
import { toast } from "react-toastify";

const Login = () => {
  const [userToken, setUserToken] = useLocalStorage("userToken", "");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate, isLoading, isError } = useMutation(loginUser, {
    onSuccess: (data: TokenResponse) => {
      if (data.hasOwnProperty("accessToken")) {
        setUserToken(data.accessToken.toString());
      } else {
        const errorMessage = data.toString();
        setUserToken("");
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
        });
        throw new Error(data.toString());
      }
    },
    onError: (error: any) => {
      const errorMessage = error.toString();
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
      throw new Error(errorMessage);
    },
  });
  const onSubmit = async (userData: Partial<User>) => {
    mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" padding="1rem">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              placeholder="Enter email"
              sx={{
                margin: ".5rem 0 .5rem 0",
                color: "white",
                boxShadow: " 7px 9px 5px -6px rgba(0,0,0,0.68)",
                paddingLeft: ".5rem",
                backgroundColor: "#242424",
                borderRadius: ".2rem",
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              placeholder="Enter password"
              sx={{
                margin: ".5rem 0 .5rem 0",
                color: "white",
                boxShadow: " 7px 9px 5px -6px rgba(0,0,0,0.68)",
                paddingLeft: ".5rem",
                backgroundColor: "#242424",
                borderRadius: ".2rem",
              }}
            />
          )}
        />
        <Button type="submit" variant="contained">
          {isLoading ? "Loading" : "Login"}
          {isError && "Error Logging In"}
        </Button>
      </Box>
    </form>
  );
};

export default Login;
