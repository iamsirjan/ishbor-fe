import React from "react";
import { Label } from "../ui/label";
import { FormWrapperProps } from "./input.types";
import { cn } from "ishbor/lib/utils";

export const FormWrapper = ({
  label,
  error,
  isDisabled,
  isRequired,
  children,
}: FormWrapperProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <Label
          className={cn(
            "text-[15px] text-[#B7BFCA]  font-[400]",
            isDisabled && "opacity-50"
          )}
        >
          {label}
          {isRequired && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      {children}
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
};
