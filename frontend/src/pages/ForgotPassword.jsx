import { useState } from "react";
import { useAuthStore } from "../Store/AuthStore";
import { Loader2 } from 'lucide-react';
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { forgotPassword, isSendingPasswordReset } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter your email address.");
    }
    await forgotPassword(email);
    // Optionally clear email field after submission
    // setEmail(""); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black itim-regular px-4">
      <div className="w-full max-w-md bg-[#3f3f3f] rounded-2xl p-6 sm:p-8 text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6">Forgot Password</h1>
        <p className="text-center text-gray-300 mb-8">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            className="bg-white p-3 shadow-lg placeholder:text-base sm:placeholder:text-lg placeholder-black rounded-2xl w-full"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={isSendingPasswordReset}
            className="p-3 mt-6 w-full text-xl bg-black cursor-pointer text-white rounded-2xl"
          >
            {isSendingPasswordReset ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>
        <p className="text-white mt-6 text-center text-base">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
} 