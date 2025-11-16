"use client";

import type React from "react";

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../App";
import { toast } from "sonner";
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from "lucide-react";
import imgLogo from "../assets/logo.png";
import { authAPI } from "../services/api";

export default function SignInPage() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!email || !password) {
        toast.error("Please enter your credentials");
        setLoading(false);
        return;
      }

      const response = await authAPI.login({ email, password });

      // Store token and user data
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      context?.setUser({
        id: String(response.user.id),
        name: response.user.fullName,
        email: response.user.email,
        isAdmin: response.user.role === "admin",
      });

      if (response.user.role === "admin") {
        toast.success("Welcome back, Admin! You have full access.");
        navigate("/admin");
      } else {
        toast.success("Welcome back! Successfully signed in.");
        navigate("/home");
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGuestAccess = () => {
    context?.setIsGuest(true);
    toast.success("Continuing as guest - Limited features available");
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6412b4] via-[#9333ea] to-[#c084fc] flex items-center justify-center p-6 relative overflow-hidden">
      {/* ... existing background elements ... */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* ... existing left side branding ... */}
        <div className="hidden lg:flex flex-col justify-center items-start text-white p-12">
          <div className="mb-8">
            <img
              src={imgLogo}
              alt="RouteMate Logo"
              className="h-20 w-auto object-contain mr-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
            />

            <h1 className="text-[56px] font-extrabold leading-tight mb-4">
              Welcome Back to RouteMate
            </h1>
            <p className="text-[20px] text-white/90 leading-relaxed mb-8">
              Your intelligent companion for seamless city travel. Track buses
              in real-time and never miss a ride.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-[18px]">Real-time bus tracking & updates</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-[18px]">Personalized route planning</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-[18px]">Save favorite routes & schedules</p>
            </div>
          </div>

          <div className="text-[14px] text-white/70">
            © 2025 RouteMate. Smart Transport Solution.
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10">
            <div className="text-center mb-8">
              <img
                src={imgLogo}
                alt="RouteMate Logo"
                className="h-24 w-auto object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] mx-auto lg:hidden"
              />

              <h2 className="text-[32px] font-extrabold text-[#2c084e] mb-2">
                Sign In
              </h2>
              <p className="text-[15px] text-[#6a7282]">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type="email"
                    placeholder="yourname@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6a7282] hover:text-[#6412b4]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                  />
                  <span className="text-[14px] text-[#2c084e]">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-[14px] text-[#6412b4] hover:text-[#9333ea] font-semibold"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-3.5 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all text-[16px] font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>
                  {loading ? "Signing In..." : "Sign In to Your Account"}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-[14px] text-[#6a7282] font-medium">
                    or
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGuestAccess}
                className="w-full border-2 border-[#6412b4] text-[#6412b4] py-3.5 rounded-xl hover:bg-purple-50 transition-all text-[16px] font-semibold flex items-center justify-center"
              >
                Continue as Guest
              </button>
            </form>

            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-[15px] text-[#6a7282]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#6412b4] font-bold hover:text-[#9333ea]"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
