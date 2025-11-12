"use client"

import type React from "react"

import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AppContext } from "../App"
import { toast } from "sonner"
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2, Shield } from "lucide-react"
import imgLogo from "../assets/logo.png"
import { authAPI } from "../services/api"

export default function SignUpPage() {
  const context = useContext(AppContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!agreeTerms) {
        toast.error("Please accept the terms and conditions")
        setLoading(false)
        return
      }

      if (!fullName || !email || !password) {
        toast.error("Please fill in all fields")
        setLoading(false)
        return
      }

      const response = await authAPI.signup({ email, password, fullName, phone: "" })

      // Store token and user data
      localStorage.setItem("token", response.token)
      localStorage.setItem("user", JSON.stringify(response.user))

      context?.setUser({
        id: String(response.user.id),
        name: response.user.fullName,
        email: response.user.email,
        isAdmin: false,
      })

      toast.success("Account created successfully! Welcome aboard!")
      navigate("/home")
    } catch (error: any) {
      toast.error(error.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  const handleGuestAccess = () => {
    context?.setIsGuest(true)
    toast.success("Continuing as guest - Limited features available")
    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6412b4] via-[#9333ea] to-[#c084fc] flex items-center justify-center p-6 relative overflow-hidden">
      {/* ... existing background elements ... */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left Side - Sign Up Form */}
        <div className="flex items-center justify-center order-2 lg:order-1">
          <div className="w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#6412b4] to-[#9333ea] shadow-lg flex items-center justify-center mb-4 p-2.5 lg:hidden">
                <img src={imgLogo || "/placeholder.svg"} alt="RouteMate" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-[32px] font-extrabold text-[#2c084e] mb-2">Create Account</h2>
              <p className="text-[15px] text-[#6a7282]">Join RouteMate and start your smart journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Email Address</label>
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
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-[15px] text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6a7282] hover:text-[#6412b4]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-[12px] text-[#6a7282] mt-1.5">Must be at least 8 characters</p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200"
                />
                <span className="text-[14px] text-[#2c084e] leading-snug">
                  I agree to the{" "}
                  <button type="button" className="text-[#6412b4] font-semibold hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-[#6412b4] font-semibold hover:underline">
                    Privacy Policy
                  </button>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-3.5 rounded-xl hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all text-[16px] font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{loading ? "Creating Account..." : "Create Your Account"}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-[14px] text-[#6a7282] font-medium">or</span>
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
                Already have an account?{" "}
                <Link to="/signin" className="text-[#6412b4] font-bold hover:text-[#9333ea]">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Security Note */}
            <div className="mt-6 flex items-start gap-3 bg-purple-50 rounded-xl p-4">
              <Shield className="w-5 h-5 text-[#6412b4] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#2c084e] mb-1">Your data is secure</p>
                <p className="text-[12px] text-[#6a7282] leading-relaxed">
                  We use industry-standard encryption to protect your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ... existing right side branding ... */}
        <div className="hidden lg:flex flex-col justify-center items-start text-white p-12 order-1 lg:order-2">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6412b4] to-[#9333ea] shadow-2xl flex items-center justify-center mb-6 p-3">
              <img src={imgLogo || "/placeholder.svg"} alt="RouteMate" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-[56px] font-extrabold leading-tight mb-4">Start Your Smart Journey</h1>
            <p className="text-[20px] text-white/90 leading-relaxed mb-8">
              Join thousands of commuters who trust RouteMate for their daily travel needs.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[18px] font-semibold">Real-time Tracking</p>
                <p className="text-[14px] text-white/70">Live bus locations and accurate ETAs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[18px] font-semibold">Smart Planning</p>
                <p className="text-[14px] text-white/70">AI-powered route suggestions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[18px] font-semibold">Push Notifications</p>
                <p className="text-[14px] text-white/70">Never miss your bus again</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[18px] font-semibold">Personalized Experience</p>
                <p className="text-[14px] text-white/70">Save favorites and preferences</p>
              </div>
            </div>
          </div>

          <div className="text-[14px] text-white/70">© 2025 RouteMate. Smart Transport Solution.</div>
        </div>
      </div>
    </div>
  )
}
