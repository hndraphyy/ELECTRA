"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface DummyUser {
  username: string;
  email: string;
  avatar?: string;
}

const UserDropdown = ({ onLogout }: { onLogout: () => void }) => {
  const [user, setUser] = useState<DummyUser | null>({
    username: "GuestUser",
    email: "guest@example.com",
    avatar: "/assets/images/profileAvatar.webp",
  });

  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-0 flex items-center gap-2 cursor-pointer"
      >
        <div className="relative w-8 h-8 rounded-full border overflow-hidden">
          <Image
            src={user.avatar || "/assets/images/profileAvatar.webp"}
            alt="avatar"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium">{user.username}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 p-2 w-40 md:w-48 bg-white shadow-lg rounded-md border border-gray-400 flex flex-col gap-1 z-50">
          <Link
            href="/account/info"
            onClick={() => setOpen(false)}
            className="hover:bg-gray-100 rounded-sm"
          >
            <Button variant="link" className="text-[14px] w-full text-left">
              Manage Account
            </Button>
          </Link>
          <Button
            onClick={() => {
              setOpen(false);
              setUser(null);
              onLogout();
            }}
            variant="link"
            className="text-[14px] w-full text-left text-red-600 hover:bg-gray-100 rounded-sm"
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
