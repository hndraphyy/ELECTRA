"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { menuItems } from "@/components/layouts/navbar/navLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ambil path saat ini

  return (
    <header className="w-full bg-white border-b-[.3px] border-gray-300 fixed top-0 left-0 z-50">
      <div className="mx-auto w-full max-w-screen-xl flex justify-between items-center py-3 px-7">
        <div className="text-2xl font-bold">
          <Image
            src="/assets/svg/brand.svg"
            alt="Logo Brand"
            width={100}
            height={80}
            className="w-[110px]"
          />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href; // check active
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-primary transition ${
                  isActive ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-primary transition ${
                      isActive ? "text-primary font-semibold" : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
