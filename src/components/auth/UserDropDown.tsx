"use clients";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface UserDropDown {
  user: { name: string; email: string };
  onLogout: () => void;
}

const UserDropDown = ({ user, onLogout }: UserDropDown) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2"
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
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border p-2 z-50 cursor-po">
          <Link
            href="/account"
            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Manage Account
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
            className="w-full text-left block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropDown;
