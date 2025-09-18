"use client";

import { FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

interface ModalRegisterProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const ModalRegister = ({
  open,
  onClose,
  onSwitchToLogin,
}: ModalRegisterProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-77 md:w-96 rounded-lg bg-white p-6 shadow-lg relative">
        <Button
          variant="link"
          onClick={onClose}
          className="absolute right-0 md:right-3 top-3 text-gray-500 hover:text-gray-800"
        >
          <FiX size={20} />
        </Button>

        <h2 className="mb-6 text-lg font-semibold text-center">
          Register account
        </h2>

        <form className="space-y-3">
          <div className="group-input">
            <label htmlFor="register-email" className="text-[15px]">
              Email
            </label>
            <input
              id="register-email"
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full rounded-md border text-[14px] border-gray-400 text-gray-600 outline-0 px-2 py-1 mt-1"
            />
          </div>

          <div className="group-input">
            <label htmlFor="register-password" className="text-[15px]">
              Password
            </label>
            <input
              id="register-password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-md border text-[14px] border-gray-400 text-gray-600 outline-0 px-2 py-1 mt-1"
            />
          </div>

          <div className="group-input">
            <label htmlFor="register-password-confirm" className="text-[15px]">
              Confirmation Password
            </label>
            <input
              id="register-password-confirm"
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full rounded-md border text-[14px] border-gray-400 text-gray-600 outline-0 px-2 py-1 mt-1"
            />
          </div>

          <p className="text-sm text-center font-light pt-4">
            Already have an account?
            <Button
              type="button"
              variant="link"
              className="cursor-pointer pl-1 underline font-medium"
              onClick={onSwitchToLogin}
            >
              Sign In
            </Button>
          </p>

          <Button variant="auth" className="w-full rounded-md" type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalRegister;
