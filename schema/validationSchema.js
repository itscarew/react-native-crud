import * as yup from "yup";

export const signInSchema = yup.object().shape({
  identifier: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum."),
});

export const signUpSchema = yup.object().shape({
  fullName: yup.string().required("full name is required"),
  userName: yup.string().required("username is required"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  password: yup
    .string()
    .required("no password provided.")
    .min(6, "password is too short - should be 6 chars minimum."),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
});

export const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum."),
  confirmPassword: yup
    .string()
    .required("No password provided.")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
