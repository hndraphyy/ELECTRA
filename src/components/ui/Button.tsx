import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link" | "auth" | "out";
}
const variants = {
  primary:
    "bg-primary border border-primary text-white hover:bg-hoverPrimary duration-300",
  secondary: "border border-primary text-primary",
  link: "bg-transparent",
  auth: "bg-primary border border-bg-primary text-white py-2 hover:bg-hoverPrimary duration-300 text-[14px]",
  out: "bg-red-500 hover:bg-red-700 duration-300",
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
        "px-4 py-1 text-[13px] md:text-base transition cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
