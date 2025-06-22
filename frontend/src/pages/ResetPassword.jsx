import { useState } from "react";
import { useAuthStore } from "../store/AuthStore";
import { Loader2 } from 'lucide-react';
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();
  const { resetPassword, isResettingPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }
    const success = await resetPassword(token, password);
    if (success) {
      toast.success("Password reset successfully! You are now logged in.");
      navigate("/");
    }
  };
  
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black itim-regular px-4">
      <div className="w-full max-w-md bg-[#3f3f3f] rounded-2xl p-6 sm:p-8 text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6">Reset Your Password</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white mt-4 p-3 shadow-lg placeholder:text-base sm:placeholder:text-lg placeholder-black rounded-2xl w-full"
            />
            <div
              className="absolute right-4 top-1/2 mt-2 -translate-y-1/2 cursor-pointer text-xl text-gray-700"
              onClick={togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white mt-4 p-3 shadow-lg placeholder:text-base sm:placeholder:text-lg placeholder-black rounded-2xl w-full"
          />

          <button
            type="submit"
            disabled={isResettingPassword}
            className="p-3 mt-6 w-full text-xl bg-black cursor-pointer text-white rounded-2xl"
          >
            {isResettingPassword ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Resetting...
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 