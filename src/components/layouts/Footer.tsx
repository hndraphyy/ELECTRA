"use client";

import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <SectionWrapper>
        <div className=" mx-auto w-full max-w-screen-xl big:max-w-screen-2xl px-3 md:px-7">
          <Link
            href="/"
            className="text-3xl big:text-4xl font-bold text-white"
          >
            Electra
          </Link>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
