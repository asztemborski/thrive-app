import { RegisterOptions } from "react-hook-form";

import { MAIL_REGEX } from "@/constants/regex";
import { ERROR_MESSAGES } from "@/containers/ErrorMessagesProvider/ErrorMessagesProvider";

import { SignUpFormValues } from "./SignUpForm";

export type FormRules<T extends { [key: string]: any }> = Record<
  keyof T,
  RegisterOptions<any, string>
>;

export const PASSOWRD_MIN_LENGTH = 6;

const SIGNUP_FORM_RULES: FormRules<SignUpFormValues> = {
  firstName: {
    required: {
      value: true,
      message: ERROR_MESSAGES.required,
    },
  },
  lastName: {
    required: {
      value: true,
      message: ERROR_MESSAGES.required,
    },
  },
  email: {
    required: {
      value: true,
      message: ERROR_MESSAGES.required,
    },
    pattern: {
      value: MAIL_REGEX,
      message: ERROR_MESSAGES.invalidEmail,
    },
  },
  password: {
    required: {
      value: true,
      message: ERROR_MESSAGES.required,
    },
    minLength: {
      value: PASSOWRD_MIN_LENGTH,
      message: ERROR_MESSAGES.minLength,
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: ERROR_MESSAGES.required,
    },
    minLength: {
      value: PASSOWRD_MIN_LENGTH,
      message: ERROR_MESSAGES.minLength,
    },
    validate: {
      value: (value: string, form: SignUpFormValues) =>
        value === form.password || ERROR_MESSAGES.passwordMatch,
    },
  },
};

export default SIGNUP_FORM_RULES;
