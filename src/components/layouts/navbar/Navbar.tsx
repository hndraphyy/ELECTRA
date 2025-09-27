"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/navLink";
import { Button } from "@/components/ui/Button";
import ModalLogin from "@/components/auth/ModalLogin";
import ModalRegister from "@/components/auth/ModalRegister";
import SearchBar from "@/components/ui/SearchBar";
import UserDropDown from "@/components/auth/UserDropDown";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [user, setUser] = useState<{ username: string; email: string } | null>(
    null
  );

  return (
    <header className="w-full bg-white border-b-[.3px] border-gray-400 md:border-gray-300 fixed top-0 left-0 z-50 text-black">
      <div className="mx-auto w-full max-w-screen-xl big:max-w-screen-2xl py-3 big:py-5 px-3 md:px-7">
        {/* desktop */}
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/"
            className="text-3xl big:text-4xl font-bold text-primary"
          >
            Electra
          </Link>
          <div className="flex items-end md:items-center flex-col md:flex-row gap-4 lg:gap-8">
            <nav className="hidden md:flex items-center gap-4 lg:gap-8 mr-3 md:mr-0">
              <SearchBar
                onSearch={(query) => {
                  alert(query);
                }}
              />
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-primary transition big:text-[20px] ${
                      isActive ? "text-primary font-semibold" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              {user ? (
                <UserDropDown
                  onLogout={() => {
                    setUser(null);
                  }}
                />
              ) : (
                <>
                  <Button
                    variant="secondary"
                    className="text-[13px]"
                    onClick={() => setLoginOpen(true)}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="primary"
                    className="text-[13px]"
                    onClick={() => setRegisterOpen(true)}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* mobile */}
        <nav className="flex md:hidden items-center gap-5 md:gap-8 mt-3">
          <SearchBar
            onSearch={(query) => {
              alert(query);
            }}
          />
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`hover:text-primary transition ${
                  isActive ? "text-primary font-semibold" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* modal login */}
      <ModalLogin
        open={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
        onLoginSuccess={(loggedInUser) => {
          setUser(loggedInUser); // loggedInUser { username, email }
          setRegisterOpen(false);
        }}
      />

      {/* modal register */}
      <ModalRegister
        open={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
        onSwitchToLogin={() => {
          setLoginOpen(true);
          setRegisterOpen(false);
        }}
      />
    </header>
  );
};

export default Navbar;
