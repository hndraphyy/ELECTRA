import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link" | "auth";
}
const variants = {
  primary:
    "bg-primary border border-primary text-white hover:bg-hoverPrimary duration-300",
  secondary: "border border-primary text-primary",
  link: "bg-transparent",
  auth: "bg-gray-900 border border-bg-gray-900 text-white py-2 hover:bg-gray-950 duration-300 text-[14px]",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-1 font-medium text-[13px] md:text-base transition cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
