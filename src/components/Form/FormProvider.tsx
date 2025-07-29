import {
  type FieldValues,
  FormProvider as ReactHookFormProvider,
} from "react-hook-form";
import type { FormProviderProps } from "./input.types";

export const FormProvider = <TFieldValues extends FieldValues>({
  children,
  methods,
}: FormProviderProps<TFieldValues, unknown>) => {
  return <ReactHookFormProvider {...methods}>{children}</ReactHookFormProvider>;
};
