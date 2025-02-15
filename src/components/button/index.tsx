import { useStyle } from "@/utils/useStyle";
import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "solid" | "outline";
  type?: "button" | "submit" | "reset";
  buttonClass?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "solid", type = "button", buttonClass, children, ...props },
    ref
  ) => {
    return (
      <button
        className={useStyle(
          `flex p-3 mt-4 font-bold rounded-lg justify-center items-center cursor-pointer hover:opacity-85 ${
            variant === "solid"
              ? "bg-primary text-white"
              : "bg-transparent border border-primary text-primary"
          }`,
          buttonClass
        )}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
