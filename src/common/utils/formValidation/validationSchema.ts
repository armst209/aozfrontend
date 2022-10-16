import * as z from "zod";
import language from "./language";

export const loginPageSchema = z.object({
  email: z
    .string({ required_error: language.email.required })
    .email()
    .min(5, { message: language.email.min })
    .max(50, { message: language.email.max }),
  password: z
    .string({ required_error: language.password.required })
    .min(8, { message: language.password.min })
    .max(30, { message: language.password.max }),
});
