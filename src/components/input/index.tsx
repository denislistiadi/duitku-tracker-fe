import React from "react";
import { useStyle } from "@/utils/useStyle";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", placeholder, ...props }, ref) => {
    return (
      <input
        className={useStyle(
          `border border-gray-300 p-3 transition ease-in-out focus:ring-1 focus:outline-0 focus:ring-primary duration-500 rounded-lg`,
          className
        )}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
