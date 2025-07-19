import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg"; // I'm adding the 'size' prop here
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "default", size, ...props }, ref) => {
    // I need to destructure 'size' now that it's a prop
    const base = "px-4 py-2 rounded font-medium focus:outline-none transition ";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
      ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
    };

    // I'll define styles for different sizes
    const sizes = {
      sm: "text-sm px-3 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    };

    // I'll apply the size class if 'size' is provided
    const sizeClass = size ? sizes[size] : '';

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizeClass} ${className}`} // I'm combining all the class names
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";