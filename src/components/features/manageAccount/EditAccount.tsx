"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function EditAccount() {
  const [form, setForm] = useState({
    username: "hendra",
    email: "hendra@example.com",
    avatar: "/assets/images/profileAvatar.webp",
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSave = () => {
    if (form.password && form.password !== form.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    alert("Saved (dummy, frontend only)");
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, avatar: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full p-5 md:p-10 border-t md:border-t-0 border-t-gray-300">
      <div className="space-y-4">
        {/* Avatar */}
        <div>
          <div
            className="relative w-20 h-20 big:w-25 big:h-25 mt-2 group"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image
              src={form.avatar}
              alt="avatar"
              fill
              className="rounded-full border object-cover border-gray-400"
            />
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition">
              Change
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>

        {/* Username */}
        <div>
          <p className="text-gray-500 text-sm big:text-xl">Username</p>
          <input
            type="text"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="mt-1 big:mt-2 w-full border border-gray-400 rounded px-2 big:px-3 py-1 text-sm big:text-xl outline-0"
          />
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-500 text-sm big:text-xl">Email</p>
          <p className="font-light xl:text-xl">{form.email}</p>
        </div>

        {/* Password change */}
        <div>
          <p className="text-gray-500 text-sm big:text-xl">Old Password</p>
          <input
            type="password"
            value={form.oldPassword}
            onChange={(e) => setForm({ ...form, oldPassword: e.target.value })}
            className="mt-1 big:mt-2 w-full border border-gray-400 rounded px-2 big:px-3 py-1 text-sm big:text-xl outline-0"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <p className="text-gray-500 text-sm big:text-xl">New Password</p>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-1 big:mt-2 w-full border border-gray-400 rounded px-2 big:px-3 py-1 text-sm big:text-xl outline-0"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <p className="text-gray-500 text-sm big:text-xl">Confirm Password</p>
          <input
            type="password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            className="mt-1 big:mt-2 w-full border border-gray-400 rounded px-2 big:px-3 py-1 text-sm big:text-xl outline-0"
            placeholder="Confirm new password"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <Button variant="primary" className="w-full" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
