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

// Icon component placeholder
const Icon = ({ name, className }: { name: string; className?: string }) => {
  return <span className={cn("w-4 h-4", className)}>{name}</span>;
};

export const PhoneNumberField = ({
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
    const val = event.target.value;

    if (handleChange) {
      handleChange(val);
      trigger(name);
    } else {
      onChange(val);
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
      <div className="relative flex flex-col align-center">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {leftIcon}
          </div>
        )}

        {/* Non-editable prefix */}
        <span className="absolute left-12 top-1/2 -translate-y-1/2  select-none pointer-events-none text-[18px] text-[#929CAB]">
          +998
        </span>

        {type === "textarea" ? (
          <Textarea
            ref={ref}
            value={value || ""}
            onChange={isDisabled ? undefined : handleInputChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={isDisabled}
            data-invalid={hasError}
            className={cn(
              leftIcon && "pl-[4.8rem]", // accommodate icon + prefix
              rightIcon && "pr-10"
            )}
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
            className={cn(
              leftIcon ? "pl-[5.9rem]" : "pl-[3.5rem]",
              rightIcon && "pr-10"
            )}
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
