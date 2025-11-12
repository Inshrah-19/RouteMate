import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { toast } from 'sonner';
import { X, Mail, Lock, User, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import imgLogo from "../assets/logo.png";

export default function AuthModal() {
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  if (!context?.showAuthModal) return null;

  const isSignIn = context.authMode === 'signin';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignIn) {
      if (email && password) {
        const isAdmin = email.includes('admin');
        context.setUser({
          id: '1',
          name: email.split('@')[0],
          email: email,
          isAdmin: isAdmin
        });
        context.setShowAuthModal(false);
        toast.success('Welcome back! Successfully signed in.');
        navigate('/home');
      } else {
        toast.error('Please enter your credentials');
      }
    } else {
      if (!agreeTerms) {
        toast.error('Please accept the terms and conditions');
        return;
      }
      if (fullName && email && password) {
        context.setUser({
          id: '1',
          name: fullName,
          email: email,
          isAdmin: false
        });
        context.setShowAuthModal(false);
        toast.success('🎉 Account created successfully! Welcome aboard!');
        navigate('/home');
      } else {
        toast.error('Please fill in all fields');
      }
    }
  };

  const handleGuestAccess = () => {
    context.setIsGuest(true);
    context.setShowAuthModal(false);
    toast.success('Continuing as guest - Limited features available');
    navigate('/home');
  };

  const switchMode = () => {
    context.setAuthMode(isSignIn ? 'signup' : 'signin');
    setEmail('');
    setPassword('');
    setFullName('');
    setShowPassword(false);
    setAgreeTerms(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      style={{ 
        backgroundColor: 'rgba(44, 8, 78, 0.75)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-lg animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-60" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6412b4]/20 to-[#9333ea]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#c084fc]/20 to-[#9333ea]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative p-10">
          {/* Close Button */}
          <button
            onClick={() => context.setShowAuthModal(false)}
            className="absolute right-8 top-8 text-[#6a7282] hover:bg-purple-100 rounded-full p-2 transition-all hover:rotate-90 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 mb-5 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#6412b4] to-[#9333ea] ring-4 ring-purple-100 flex items-center justify-center p-3">
              <img src={imgLogo} alt="RouteMate Logo" className="w-full h-full object-contain" />
            </div>
            
            <h1 className="text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6412b4] to-[#9333ea] mb-2 leading-none">
              RouteMate
            </h1>
            
            <h2 className="text-[24px] font-bold text-[#2c084e] mb-2">
              {isSignIn ? 'Welcome Back!' : 'Join RouteMate'}
            </h2>
            
            <p className="text-[15px] text-[#6a7282] text-center max-w-sm">
              {isSignIn 
                ? 'Sign in to access your personalized dashboard and track your routes' 
                : 'Create your free account to start tracking buses and planning journeys'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isSignIn && (
              <div className="relative">
                <label className="block text-[14px] font-semibold text-[#2c084e] mb-2 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6a7282]" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>
            )}

            <div className="relative">
              <label className="block text-[14px] font-semibold text-[#2c084e] mb-2 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6a7282]" />
                <input
                  type="email"
                  placeholder="yourname@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:ring-4 focus:ring-purple-100 transition-all"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-[14px] font-semibold text-[#2c084e] mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6a7282]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-2xl text-[#2c084e] placeholder-[#9ca3af] focus:outline-none focus:border-[#6412b4] focus:ring-4 focus:ring-purple-100 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6a7282] hover:text-[#6412b4] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isSignIn ? (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 rounded-lg border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200 cursor-pointer" 
                    />
                  </div>
                  <span className="text-[14px] text-[#2c084e] group-hover:text-[#6412b4] transition-colors">Remember me</span>
                </label>
                <button 
                  type="button" 
                  className="text-[14px] text-[#6412b4] hover:text-[#9333ea] font-semibold transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            ) : (
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input 
                    type="checkbox" 
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-5 h-5 rounded-lg border-2 border-gray-300 text-[#6412b4] focus:ring-2 focus:ring-purple-200 cursor-pointer" 
                  />
                </div>
                <span className="text-[14px] text-[#2c084e] leading-snug">
                  I agree to the{' '}
                  <button type="button" className="text-[#6412b4] font-semibold hover:underline">
                    Terms and Conditions
                  </button>
                  {' '}and{' '}
                  <button type="button" className="text-[#6412b4] font-semibold hover:underline">
                    Privacy Policy
                  </button>
                </span>
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6412b4] to-[#9333ea] text-white py-4 rounded-2xl hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] transition-all text-[16px] font-semibold mt-8"
            >
              {isSignIn ? 'Sign In to Your Account' : 'Create Your Account'}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#6a7282] font-medium">or</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGuestAccess}
              className="w-full border-2 border-[#6412b4] text-[#6412b4] py-4 rounded-2xl hover:bg-purple-50 transition-all text-[16px] font-semibold"
            >
              Continue as Guest
            </button>

            <div className="text-center pt-6 border-t border-gray-100">
              <p className="text-[15px] text-[#6a7282]">
                {isSignIn ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={switchMode}
                  className="text-[#6412b4] font-bold hover:text-[#9333ea] transition-colors"
                >
                  {isSignIn ? 'Sign up free' : 'Sign in'}
                </button>
              </p>
            </div>
          </form>

          {/* Features List (only on signup) */}
          {!isSignIn && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-[13px] font-semibold text-[#2c084e] mb-3">What you'll get:</p>
              <div className="space-y-2">
                {['Real-time bus tracking', 'Personalized route planning', 'Favorite routes & schedules', 'Push notifications'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-[13px] text-[#6a7282]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
