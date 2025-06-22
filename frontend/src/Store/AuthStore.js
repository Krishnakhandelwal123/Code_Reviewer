import { create } from "zustand"; 
import { axiosInstance } from "../lib/Axios.js";
import toast from "react-hot-toast";


export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false, 
  isCheckingAuth: true,
  isSendingPasswordReset: false,
  isResettingPassword: false,


  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try { 
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");


    } catch (error) {
      console.error("Login error:", error);
      const message =
        error?.response?.data?.message || error?.message || "Login failed";
      toast.error(message);
    }
    finally {
      set({ isLoggingIn: false });
    }
  },

  googleLogin: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/google", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully with Google");
    } catch (error) {
      console.error("Google login error:", error);
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Google login failed";
      toast.error(message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  forgotPassword: async (email) => {
    set({ isSendingPasswordReset: true });
    try {
      const res = await axiosInstance.post("/auth/forgot-password", { email });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message || "Failed to send reset link.");
    } finally {
      set({ isSendingPasswordReset: false });
    }
  },

  resetPassword: async (token, password) => {
    set({ isResettingPassword: true });
    try {
      const res = await axiosInstance.post(`/auth/reset-password/${token}`, { password });
      set({ authUser: res.data });
      return true; // Indicate success
    } catch (error) {
      toast.error(error.response.data.message || "Failed to reset password.");
      return false; // Indicate failure
    } finally {
      set({ isResettingPassword: false });
    }
  },

}))
