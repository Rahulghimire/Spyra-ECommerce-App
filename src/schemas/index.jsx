import * as Yup from "yup";

export const signInSchema = Yup.object({
  country_code: Yup.number().required("Please enter the country code"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(5, "Password too short!")
    .max(20, "Password too long!")
    .required("Please enter your password"),
});
