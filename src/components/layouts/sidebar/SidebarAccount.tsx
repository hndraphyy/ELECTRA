"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuSidebarAccount } from "@/lib/navLink";

const SidebarAccount = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-full md:min-w-[300px] bg-gray-50 md:border-r border-gray-300 p-3 rounded-l-[7px]">
      <div className="md:flex flex-col space-x-2 md:space-x-0 gap-2">
        {menuSidebarAccount.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`transition px-3 py-2 rounded-sm text-sm md:text-md ${
                isActive
                  ? "text-white font-semibold bg-primary"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarAccount;
