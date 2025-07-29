import React, { type ChangeEvent } from "react";
import {
  type FieldError,
  useController,
  useFormContext,
} from "react-hook-form";
import { Input } from "ishbor/components/ui/input";
import { Textarea } from "ishbor/components/ui/textarea";
import { FormWrapper } from "./FormWrapper";
import type { TextFieldInputProps } from "./input.types";
import { cn } from "ishbor/lib/utils";

// Icon component (you'll need to implement this based on your icon system)
const Icon = ({ name, className }: { name: string; className?: string }) => {
  // Replace this with your actual icon implementation
  return <span className={cn("w-4 h-4", className)}>{name}</span>;
};

export const TextFieldInput = ({
  variant,
  name,
  handleChange,
  isDisabled,
  isRequired,
  label,
  placeholder,
  triggers,
  leftIcon,
  rightIcon,
  type = "string",
}: TextFieldInputProps) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value },
  } = useController({
    control,
    name,
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;

    if (handleChange) {
      handleChange(value);
      trigger(name);
    } else {
      onChange(event);
    }

    triggers?.forEach((fieldName) => trigger(fieldName));
  };

  const hasError = !!errors?.[name];

  return (
    <FormWrapper
      label={label}
      error={errors?.[name] as FieldError}
      isDisabled={isDisabled}
      isRequired={isRequired}
    >
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {leftIcon}
          </div>
        )}

        {type === "textarea" ? (
          <Textarea
            ref={ref}
            value={value || ""}
            onChange={isDisabled ? undefined : handleInputChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={isDisabled}
            data-invalid={hasError}
            className={cn(leftIcon && "pl-10", rightIcon && "pr-10")}
          />
        ) : (
          <Input
            ref={ref}
            type={type === "string" ? "text" : type}
            value={value || ""}
            onChange={isDisabled ? undefined : handleInputChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={isDisabled}
            variant={variant}
            data-invalid={hasError}
            className={cn(leftIcon && "pl-10", rightIcon && "pr-10")}
          />
        )}

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon name={rightIcon} className="text-muted-foreground" />
          </div>
        )}
      </div>
    </FormWrapper>
  );
};
