import { FieldValues, UseFormReturn, type FieldError } from "react-hook-form";

export interface TextFieldInputProps {
  name: string;
  handleChange?: (value: string) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: string;
  placeholder?: string;
  triggers?: string[];
  leftIcon?: React.ReactElement;
  rightIcon?: string;
  type?: "string" | "email" | "password" | "number" | "textarea" | "tel";
  variant?: "default" | "login";
}

export interface FormWrapperProps {
  label?: string;
  error?: FieldError;
  isDisabled?: boolean;
  isRequired?: boolean;
  children: React.ReactNode;
}

export type FormProviderProps<TFieldValues extends FieldValues, TContext> = {
  methods: UseFormReturn<TFieldValues, TContext>;
  children: React.ReactNode;
};
