"use client";

import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import AuthInput from "./AuthInput";

interface ModalRegisterProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const INITIAL_FORM = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const ModalRegister = ({ open, onClose, onSwitchToLogin }: ModalRegisterProps) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(INITIAL_FORM);
      setErrors({});
      setShowPassword(false);
      setShowConfirmPassword(false);
      setIsLoading(false);
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.username) newErrors.username = "Username wajib diisi";
    if (!form.email) newErrors.email = "Email wajib diisi";
    if (!form.password) newErrors.password = "Password wajib diisi";
    if (form.password.length < 6) newErrors.password = "Password minimal 6 karakter";
    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Password tidak cocok";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // ✅ Dummy success (tidak benar-benar simpan user)
    console.log("Register success (dummy):", form);

    alert("Register berhasil (dummy), silakan login!");
    onSwitchToLogin();
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
            className="absolute right-1 p-[7px] bottom-0 text-gray-400 hover:text-gray-700"
            onClick={toggleShow}
            aria-label={show ? `Hide ${label}` : `Show ${label}`}
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
      <div className="w-77 md:w-96 rounded-lg bg-white p-6 shadow-lg relative text-black">
        <Button
          variant="link"
          onClick={onClose}
          className="absolute right-0 top-3 text-gray-500 hover:text-gray-800"
        >
          <FiX size={20} />
        </Button>

        <h2 className="mb-6 text-lg font-semibold text-center">Create account</h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {renderInput("register-username", "Username", "username", "text", "Enter your username")}
          {renderInput("register-email", "Email", "email", "email", "Enter your email")}
          {renderInput(
            "register-password",
            "Password",
            "password",
            "password",
            "Enter your password",
            showPassword,
            () => setShowPassword((s) => !s)
          )}
          {renderInput(
            "register-confirmPassword",
            "Confirm Password",
            "confirmPassword",
            "password",
            "Re-enter your password",
            showConfirmPassword,
            () => setShowConfirmPassword((s) => !s)
          )}

          <p className="text-sm text-center font-light pt-4">
            Already have an account?
            <Button type="button" variant="link" className="pl-1 underline" onClick={onSwitchToLogin}>
              Log In
            </Button>
          </p>

          <Button type="submit" variant="auth" className="w-full rounded-md" disabled={isLoading}>
            {isLoading ? "Registering..." : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalRegister;
