"use client";

import { forwardRef } from "react";
import type { ReactNode, HTMLAttributes } from "react";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`mx-auto w-full max-w-screen-xl py-3 md:py-3 px-3 md:px-7 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
