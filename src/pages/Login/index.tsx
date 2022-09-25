import { Button, Input, Box, Alert } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { loginUser } from "../../utils/requestHandlers";
import { useLocalStorage } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import { TokenResponse, User } from "../../utils/customTypes";
import { toast } from "react-toastify";
import { loginPageSchema } from "../../utils/formValidation/formValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //button disabled state
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  //local storage hook
  const [userToken, setUserToken] = useLocalStorage("userToken", "");
  //react-hook-form hook
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
    resolver: yupResolver(loginPageSchema),
  });

  //router navigation hook
  const navigateTo = useNavigate();
  //react query hook
  const { mutate, isLoading, isError, error } = useMutation(loginUser, {
    onSuccess: (data: TokenResponse) => {
      //setting token in local storage
      if (data.hasOwnProperty("accessToken")) {
        setUserToken(data.accessToken.toString());
        navigateTo("/");
      } else {
        const errorMessage = "Token could not be set";
        setUserToken("");
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_CENTER,
        });
        throw new Error(errorMessage);
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
  //form submit handler
  const onSubmit = async (userData: Partial<User>) => {
    mutate(userData);
  };

  //useEffect for button disabled state
  useEffect(() => {
    !errors.email && !errors.password
      ? setIsBtnDisabled(false)
      : setIsBtnDisabled(true);
  }, [errors.email, errors.password]);

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
              error={errors.email ? true : false}
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
        {errors.email && (
          <Alert severity="error">{errors.email?.message}</Alert>
        )}
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              placeholder="Enter password"
              error={errors.password ? true : false}
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

        {errors.password && (
          <Alert severity="error">{errors.password?.message}</Alert>
        )}
        <Button type="submit" variant="contained" disabled={isBtnDisabled}>
          {isLoading ? "Loading" : "Login"}
        </Button>
        {isError && <Alert severity="error">{error.message}</Alert>}
      </Box>
    </form>
  );
};

export default Login;
