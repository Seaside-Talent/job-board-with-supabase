import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export const Badge = ({ children, className = "", variant = "default", ...props }: BadgeProps) => {
  let base = "inline-block px-2 py-1 text-xs font-semibold rounded ";
  let variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-blue-400 text-blue-700 bg-white",
  };
  return (
    <span className={base + variants[variant] + " " + className} {...props}>
      {children}
    </span>
  );
};
