import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export const Badge = ({ children, className = "", variant = "default", ...props }: BadgeProps) => {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ";
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-blue-400 text-blue-700 bg-white",
  };
  return (
    <span className={base + variants[variant] + " " + className} {...props}>
      {children}
    </span>
  );
};
