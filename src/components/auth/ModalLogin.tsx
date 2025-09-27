"use client";

import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import AuthInput from "./AuthInput";

interface ModalLoginProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  onLoginSuccess: (user: { username: string; email: string }) => void;
}

const INITIAL_FORM = { identifier: "", password: "" };

const ModalLogin = ({
  open,
  onClose,
  onSwitchToRegister,
  onLoginSuccess,
}: ModalLoginProps) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(INITIAL_FORM);
      setErrors({});
      setShowPassword(false);
      setIsLoading(false);
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors: Record<string, string> = {};
    if (!form.identifier)
      newErrors.identifier = "Email atau Username wajib diisi";
    if (!form.password) newErrors.password = "Password wajib diisi";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    console.log("User login with:", form);
    onLoginSuccess({
      username: form.identifier,
      email: form.identifier + "@mail.com",
    });

    onClose();
    setIsLoading(false);
  };

  const renderInput = (
    id: string,
    label: string,
    name: keyof typeof form,
    type: string,
    placeholder: string,
    show?: boolean,
    toggleShow?: () => void
  ) => (
    <div>
      <div className="relative">
        <AuthInput
          id={id}
          label={label}
          name={name}
          type={show ? "text" : type}
          placeholder={placeholder}
          value={form[name]}
          onChange={handleChange}
          required
        />
        {toggleShow && (
          <button
            type="button"
            className="absolute right-1 p-[7px] bottom-0 big:bottom-1 text-gray-400 hover:text-gray-700"
            onClick={toggleShow}
          >
            {show ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-77 md:w-96 xl:w-100 rounded-lg bg-white p-6 big:p-8 shadow-lg relative text-black">
        <Button
          variant="link"
          onClick={onClose}
          className="absolute right-0 top-3 text-gray-500 hover:text-gray-800"
        >
          <FiX size={20} />
        </Button>

        <h2 className="mb-6 text-lg big:text-2xl font-semibold text-center">
          Log in
        </h2>

        <form className="space-y-3 big:space-y-4" onSubmit={handleSubmit}>
          {renderInput(
            "login-identifier",
            "Email or Username",
            "identifier",
            "text",
            "Enter your email or username"
          )}
          {renderInput(
            "login-password",
            "Password",
            "password",
            "password",
            "Enter your password",
            showPassword,
            () => setShowPassword((s) => !s)
          )}

          <p className="text-sm big:text-[19px] text-center font-light pt-4">
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

          <Button
            type="submit"
            variant="auth"
            className="w-full rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
