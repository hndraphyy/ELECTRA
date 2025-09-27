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
        className={`pt-22 sm:pt-16 md:pt-5 lg:pt-5 mx-auto w-full max-w-screen-xl big:max-w-screen-2xl px-3 md:px-7 my-4 sm:my-6 lg:my-8 ${className}`}
        {...rest}
      >
        <div className="big:my-6">{children}</div>
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
