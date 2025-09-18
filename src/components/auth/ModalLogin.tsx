"use client";

import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import AuthInput from "./AuthInput";
import { findUser } from "@/lib/localStorageUser";

interface ModalLoginProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  onLoginSuccess: (user: { name: string; email: string }) => void;
}

const ModalLogin = ({
  open,
  onClose,
  onSwitchToRegister,
  onLoginSuccess,
}: ModalLoginProps) => {
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.identifier) {
      setErrors({ identifier: "Username atau Email wajib diisi" });
      return;
    }
    if (!form.password) {
      setErrors({ password: "Password wajib diisi" });
      return;
    }

    const user = findUser(form.identifier, form.password);
    if (!user) {
      setErrors({ password: "Username/Email atau Password salah" });
      return;
    }

    onLoginSuccess({ name: user.username, email: user.email });
    setForm({ identifier: "", password: "" });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-77 md:w-96 rounded-lg bg-white p-6 shadow-lg relative">
        <Button
          variant="link"
          onClick={onClose}
          className="absolute right-0 top-3 text-gray-500 hover:text-gray-800"
        >
          <FiX size={20} />
        </Button>

        <h2 className="mb-6 text-lg font-semibold text-center">
          Log in account
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <AuthInput
              id="login-identifier"
              label="Email or Username"
              name="identifier"
              type="text"
              placeholder="Enter your email or username"
              value={form.identifier}
              onChange={handleChange}
              required
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm">{errors.identifier}</p>
            )}
          </div>

          <div className="relative">
            <AuthInput
              id="login-password"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-3 bottom-[7px] text-gray-400 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <p className="text-sm text-center font-light pt-4">
            Don&apos;t have an account?
            <Button
              type="button"
              variant="link"
              className="pl-1 underline"
              onClick={onSwitchToRegister}
            >
              Sign Up
            </Button>
          </p>

          <Button type="submit" variant="auth" className="w-full rounded-md">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
