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
        className={`mx-auto w-full max-w-screen-xl py-7 px-7 sm:px-16 md:px-20 lg:px-28 xl:px-20 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
