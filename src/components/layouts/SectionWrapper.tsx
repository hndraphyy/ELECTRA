"use client";

import { ReactNode, forwardRef } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className = "", id }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`py-10 sm:py-20 lg:py-24 ${className}`}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
