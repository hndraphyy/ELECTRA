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
        className={`py-10 pt-30 md:pt-0 sm:py-16 lg:py-20 ${className}`}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
