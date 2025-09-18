import { FiX, FiEye, FiEyeOff } from "react-icons/fi";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import AuthInput from "./AuthInput";
import { addUser } from "@/lib/localStorageUser";

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
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!form.username) newErrors.username = "Username wajib diisi";
    if (!form.email) newErrors.email = "Email wajib diisi";
    if (!form.password) newErrors.password = "Password wajib diisi";
    if (form.password.length < 6)
      newErrors.password = "Password minimal 6 karakter";
    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Password tidak cocok";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const success = addUser({
      username: form.username,
      email: form.email,
      password: form.password,
    });
    if (!success) {
      setErrors({ email: "Username atau Email sudah terdaftar!" });
      return;
    }

    setForm({ username: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
    alert("Register berhasil, silakan login!");
    onSwitchToLogin();
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
          Create account
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <AuthInput
            id="register-username"
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
            required
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}

          <AuthInput
            id="register-email"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <div className="relative">
            <AuthInput
              id="register-password"
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

          <div className="relative">
            <AuthInput
              id="register-confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-3 bottom-[7px] text-gray-400 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}

          <p className="text-sm text-center font-light pt-4">
            Already have an account?
            <Button
              type="button"
              variant="link"
              className="pl-1 underline"
              onClick={onSwitchToLogin}
            >
              Log In
            </Button>
          </p>

          <Button type="submit" variant="auth" className="w-full rounded-md">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalRegister;
