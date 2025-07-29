// components/ui/input.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "ishbor/lib/utils";

const inputVariants = cva(
  "focus:outline-none focus:ring-0 focus:border-transparent",
  {
    variants: {
      variant: {
        default: "",
        login:
          "h-[50px] bg-[#F7F9FC] border border-[#E0E5EB] rounded-[12px] text-[18px] text-[#929CAB]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        style={{ fontSize: "17px" }}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export { Input };
