"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

interface UserDropDownProps {
  user: { name: string; email: string };
  onLogout: () => void;
}

const UserDropDown = ({ user, onLogout }: UserDropDownProps) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-0 flex items-center gap-2 cursor-pointer"
      >
        <div className="relative w-8 h-8 rounded-full border overflow-hidden">
          <Image
            src="/assets/images/profileAvatar.webp"
            alt="avatar"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 md:w-48 bg-white shadow-lg rounded-md border border-gray-400 p-2 pl-0 flex flex-col gap-1 z-50 cursor-pointer">
          <Link
            href="/account"
            className="md:text-base font-light hover:bg-gray-100 w-full text-start duration-300 rounded-r-sm"
            onClick={() => setOpen(false)}
          >
            <Button variant="link" className="text-[14px]">
              Manage Account
            </Button>
          </Link>
          <Button
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
            variant="link"
            className="text-[14px] font-light hover:bg-gray-100 w-full text-start duration-300 rounded-r-sm text-red-600"
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
