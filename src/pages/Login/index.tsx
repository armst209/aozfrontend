import {
  Button,
  Box,
  Alert,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Login as LoginButton,
} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Controller, useForm } from "react-hook-form";
import { getSession, loginUser } from "../../common/utils/requestHandlers";
import { useLocalStorage } from "usehooks-ts";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LoginData, User } from "../../common/utils/customTypes";
import { toast } from "react-toastify";
import { loginPageSchema } from "../../common/utils/formValidation/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//add password adornment
//set up theme - with correct colors

const Login = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [sessionData, setSessionData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState({
    email: false,
    password: false,
  });
  //local storage hook
  // const [userToken, setUserToken] = useLocalStorage<string | null>(
  //   "userToken",
  //   null
  // );
  //react-hook-form hook
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginPageSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading, isError, error, data } = useMutation(loginUser, {
    onSuccess: (data) => {
      console.log(data);
      //setting token in local storage
      // navigateTo("/");

      //   const errorMessage = "Token could not be set";
      //   // setUserToken(null);
      //   toast.error(errorMessage, {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      //   throw new Error(errorMessage);
      // }
    },
    onError: (error: any) => {
      toast.error(error.response.data, {
        position: toast.POSITION.TOP_CENTER,
      });
      throw new Error(error);
    },
  });
  const handleGetSession = async () => {
    const session = await getSession();
    console.log(session);
    setSessionData(session);
  };

  //handlers
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //form submit handler
  const onSubmit = async (userData: Partial<User>) => {
    mutate(userData);
  };

  //router navigation hook
  const navigateTo = useNavigate();
  //react query hook

  //useEffect for button disabled state
  useEffect(() => {
    Object.keys(errors).length === 0
      ? setIsButtonDisabled(false)
      : setIsButtonDisabled(true);

    errors.email
      ? setInputError((prevState) => {
          return {
            ...prevState,
            email: true,
          };
        })
      : setInputError((prevState) => prevState);

    errors.password
      ? setInputError((prevState) => {
          return {
            ...prevState,
            password: true,
          };
        })
      : setInputError((prevState) => prevState);
  }, [errors.email, errors.password, errors]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box display="flex" flexDirection="column" padding="1rem">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                name="email"
                type="email"
                label="Email"
                error={inputError.email}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            )}
          />
          {errors.email?.message && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {errors.email?.message}
            </Alert>
          )}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                placeholder="Enter password"
                error={inputError.password}
                margin="normal"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibility}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors.password && (
            <Alert severity="error">{errors.password?.message}</Alert>
          )}
          <LoadingButton
            sx={{ margin: ".5rem" }}
            variant="contained"
            fullWidth
            disabled={isButtonDisabled}
            loading={isLoading}
            endIcon={<LoginButton />}
            type="submit"
          >
            Login
          </LoadingButton>
          {isError && <Alert severity="error">{error.response.data}</Alert>}
        </Box>
      </form>
      <Box sx={{ border: "2px solid black", color: "black", padding: ".5rem" }}>
        {JSON.stringify(data)}
      </Box>

      <button type="submit" onClick={handleGetSession}>
        Get session data
      </button>

      <Box sx={{ border: "2px solid black", color: "black", padding: ".5rem" }}>
        {JSON.stringify(sessionData)}
      </Box>
    </>
  );
};

export default Login;
