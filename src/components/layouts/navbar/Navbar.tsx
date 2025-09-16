"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/components/layouts/navbar/navLink";
import { Button } from "@/components/ui/Button";
import ModalLogin from "@/components/auth/ModalLogin";
import ModalRegister from "@/components/auth/ModalRegister";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b-[.3px] border-gray-300 fixed top-0 left-0 z-50">
      <div className="mx-auto w-full max-w-screen-xl flex justify-between items-center py-3 px-7">
        <Link href="/" className="text-3xl font-bold text-primary">
          Electra
        </Link>

        {/* Menu Desktop */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
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

          <div className="flex items-center gap-3">
            <Button variant="secondary" onClick={() => setLoginOpen(true)}>
              Log in
            </Button>
            <Button variant="primary" onClick={() => setRegisterOpen(true)}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalLogin
        open={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />
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
