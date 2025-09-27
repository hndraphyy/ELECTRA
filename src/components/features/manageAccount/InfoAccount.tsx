"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Account() {
  return (
    <div className="w-full p-5 md:p-10 border-t md:border-t-0 border-t-gray-300">
      <div className="space-y-4">
        <div>
          <div className="relative w-20 h-20 big:w-25 big:h-25 mt-2 group">
            <Image
              src="/assets/images/profileAvatar.webp"
              alt="avatar"
              fill
              className="rounded-full border object-cover border-gray-400"
            />
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm big:text-lg">Username</p>

          <p className="font-light xl:text-xl">hendra</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm big:text-lg">Email</p>
          <p className="font-light xl:text-xl">hendra@example.com</p>
        </div>
        <div className="flex gap-3">
          <Button variant="out" className="text-white">
            Logout
          </Button>
          <Button variant="out" className="text-white">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
