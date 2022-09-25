import { object, string } from "yup";

export const loginPageSchema = object({
  email: string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),
  password: string()
    .required("Password is required")
    .min(6, "Password is too short")
    .max(30, "Password is too long"),
}).required();
