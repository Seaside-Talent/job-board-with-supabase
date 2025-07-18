import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "default", ...props }, ref) => {
    let base = "px-4 py-2 rounded font-medium focus:outline-none transition ";
    let variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
      ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
    };
    return (
      <button
        ref={ref}
        className={base + variants[variant] + " " + className}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
